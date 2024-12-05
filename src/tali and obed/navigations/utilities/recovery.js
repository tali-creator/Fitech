import emailjs from "emailjs-com";
const url = import.meta.env.VITE_USER_API;

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

async function sendEmail(user, email, setUniqueCode) {
  const code = generateCode();
  setUniqueCode(code);

  const emailtemp = {
    to_name: `${user.firstname} ${user.lastname}`,
    to_email: email,
    reset_code: code,
  };
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      emailtemp,
      import.meta.env.VITE_PUBLIC_ID
    );
  } catch (error) {
    console.error("error occurred while sending code", error);
  }
}

export async function VerifyEmail({
  e,
  email,
  setIsLoading,
  setSuccessMessage,
  setErrorMessage,
  setStep,
  setUniqueCode,
}) {
  e.preventDefault();
  setIsLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erorr occurred while Verifying user email");
    }
    const data = await response.json();
    const userEmail = data.find((user) => user.email === email);

    if (!userEmail) {
      setErrorMessage("Account not found");
      return;
    }

    await sendEmail(userEmail, email, setUniqueCode);
    setSuccessMessage("verification code sent successfully");
    setTimeout(() => {
      setSuccessMessage("");
      setStep(2);
    }, 1500);
  } catch (error) {
    console.error(error);
    setErrorMessage("Erorr occurred while Verifying user email");
  } finally {
    setIsLoading(false);
  }
}

export async function changePassword({
  e,
  email,
  uniqueCode,
  confirmcode,
  password,
  setConfirmCode,
  setIsLoading,
  setPassword,
  setSuccessMessage,
  setErrorMessage,
}) {
  e.preventDefault();
  setIsLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const getResponse = await fetch(url);
    if (!getResponse.ok) {
      throw new Error(
        "Erorr occurred while fetching user email",
        getResponse.statusText
      );
    }
    const data = await getResponse.json();
    const user = data.find((user) => user.email === email);
    console.log(user);

    if (uniqueCode !== confirmcode) {
      setErrorMessage("invalid code");
      return;
    }

    const putResponse = await fetch(`${url}/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        password: password,
      }),
    });
    if (!putResponse.ok) {
      throw new Error("an error occurred while changing user password");
    }
    const putData = await putResponse.json();

    setSuccessMessage("successfully change password. please Login");
    // setTimeout(() => {
    //   nanigate("/Login");
    // }, 1000);
    setPassword("");
    setConfirmCode("");
  } catch (error) {
    console.error(error);
    setErrorMessage(error);
  } finally {
    setIsLoading(false);
  }
}
