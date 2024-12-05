import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  // function to view image
  const { selectedImage, setSelectedImage } = useState(null);

  const viewImage = (im) => {
    setSelectedImage(im);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
// function to view image ends

  const details = useLoaderData();
  const user = details.find((u) => u.id === Number(id));

  if (!user) return <p>No user found with ID: {id}</p>;

  return (
    <div className="">
      {user && (
        <div key={user.id} className="w-full h-auto  bg-primary py-15 px-5">
          <div className="w-full md:max-w-2/3 md:mx-auto">
            <div className="w-fit sm:w-full mx-auto flex flex-col sm:items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <img
                className="w-[250px] h-[250px] rounded-full bg-cover"
                src={user.image[0]}
                alt=""
              />
              <div className="text-center font-bold text-secondary">
                <div>{user.name}</div>
                <div className="text-stone-600">{user.profession}</div>
              </div>
            </div>
            <div className=" w-full h-full">
              <div className="text-sm text-secondary font-serif py-4">
                {user.bio}
              </div>
            </div>

            <div className="text-secondary">
              <h1 className=" font-black mb-2">Skills</h1>
              <ul className="text-sm w-full ">
                {user.skill.map((s, index) => (
                  <li key={index}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="  w-full flex overflow-x-scroll border-y-2  my-5">
              <div className="flex ">
                {user.image.map((im, i) => (
                  <img
                    onClick={() => viewImage(im)}
                    className=" w-[200px] h-[250px]"
                    key={i}
                    src={im}
                  />
                ))}
              </div>
            </div>
            {selectedImage && (
              <div  
                className="fixed top-0 left-0 w-[100px] h-[100px] bg-[rbga(0,0,0,0.8) flex justify-center items-center z-90"
                onClick={closeImage}>
                <img
                  src={selectedImage}
                  className="full-image max-w-4/5 max-h-4/5"
                  alt=""
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export const userDetails = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_DATA_API);
    if (!res.ok) {
      throw Error("Failed To Fetch Data");
    }
    const data = await res.json();

    return data.user;
  } catch (error) {
    console.log(error);
  }
};
