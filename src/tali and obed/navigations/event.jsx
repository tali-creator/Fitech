import { useLoaderData } from "react-router-dom";
import { useState } from "react";
export default function Events() {
  // const {
  //   data,
  //   isPending,
  //   error,
  // } = useFetch("https://fitech-data.vercel.app/data.json");
  // const { viewImg, setViewImg } = useState(true);
  // function toggle() {
  //   if (viewImg) {
  //     setViewImg(false);
  //   } else {
  //     setViewImg(false);
  //   }
  // }
  // console.log(data);
  // if (isPending) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;
  // if (!data || !data.user) return <p>No data found</p>;

  // Find the specific user by ID

  const [viewImage, setviewImage] = useState(null);

  function handleView(im) {
    setviewImage(im);
  }

  function closeImage() {
    setviewImage(null);
  }

  const event = useLoaderData();
  console.log(event);

  const user = event.find((u) => u.id === Number(1)); // Convert id to number if needed

  return (
    <div className="mt-20 border-2 p-5">
      <div>
        <h1 className="text-secondary text-2xl font-black py-5">
          #Web3LagosConference
        </h1>
      </div>
      {viewImage && (
        <div
          onClick={closeImage}
          className="fixed top-10  left-0 w-full h-full bg-black/70 flex justify-center items-center">
          <img
            className="w-[500px] h-[500px] rounded-2xl"
            src={viewImage}
            onClick={(e) => e.stopPropagation()}
            alt=""
          />
        </div>
      )}
      {user && (
        <div className="flex  flex-wrap w-full gap-2">
          {user.image.map((im, i) => (
            <img
              onClick={() => handleView(im)}
              style={{}}
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

export const eventData = async () => {
  const res = await fetch("https://fitech-data.vercel.app/data.json");
  const data = await res.json();

  return data.user;
};
