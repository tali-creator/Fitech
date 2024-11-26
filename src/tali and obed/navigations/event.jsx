import useFetch from "../../tali/useFetch";
import Loading from "../../tali/leading";
import { useState } from "react";
export default function Events() {
  const {
    data: user,
    isPending,
    error,
  } = useFetch("http://localhost:8080/user/1");
  console.log(user);

  const { viewImg, setViewImg } = useState(true);
  function toggle() {
    if (viewImg) {
      setViewImg(false);
    } else {
      setViewImg(false);
    }
  }
  return (
    <div className="mt-20 border-2 p-5">
      <div>
        <h1 className="text-secondary text-2xl font-black py-5">
          #Web3LagosConference
        </h1>
      </div>
      {isPending && <Loading />}
      {error && <div> Error Load Page, data cannot be fetched</div>}
      {user && (
        <div className="flex  flex-wrap w-full gap-2">
          {isPending && <Loading />}
          {user.image.map((im, i) => (
            <img
              onClick={toggle}
              style={{ 
               }}
              className=" w-[150px] h-[150px] mx-auto rounded shadow-md hover:transition hover:ease-in-out hover:duration-200"
              key={i}
              src={im}
            />

          ))}
        </div>
      )}
    </div>
  );
}
