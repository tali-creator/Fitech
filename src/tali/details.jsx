import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./leading";


export default function Details() {
  const { id } = useParams(); // Get id from URL
  const url = "https://fitech-data.vercel.app/data.json"; // API URL
  const { data, isPending, error } = useFetch(url);

  console.log(data)

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || !data.user) return <p>No data found</p>;

  // Find the specific user by ID
  const user = data.user.find((u) => u.id === Number(id)); // Convert id to number if needed

  if (!user) return <p>No user found with ID: {id}</p>;
  
 
  return (
    <div className="">
      {isPending && <Loading />}
      {error && { error }}
      {user && 

        <div key={user.id} className="w-full h-auto absolute bg-primary top-12 .z-10 left-0 py-10 px-5">
          <div className="w-full md:max-w-2/3 md:mx-auto">
            <div className="w-fit sm:w-full mx-auto flex flex-col sm:items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <img
                className="w-[250px] h-[250px] rounded-full"
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
            <div className="image-slider-wrapper w-full flex overflow-x-scroll border-y-2  my-5">
              <div className="image-slider ">
                {user.image.map((im, i) => (
                  <img className="image-slide w-[120px]" key={i} src={im} />
                ))}
              </div>
            </div>
          </div>
        </div>
}
    </div>
  );
}
