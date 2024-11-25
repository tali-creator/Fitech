import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./leading";

export default function Details() {
  const { id } = useParams();
  const {
    data: user,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/user/${id}`);
  return (
    <div>
      {isPending && <Loading />}
      {error && { error }}
      {user && (
        <div className="w-full h-auto absolute bg-primary top-0 left-0 p-5">
          <div className="w-full md:max-w-1/2 md:mx-auto">
            <div className="w-fit sm:w-full mx-auto flex flex-col sm:items-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <img
                className="w-[250px] h-[250px] rounded-full"
                src={(user.image[0])}
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
            <div className="w-full flex overflow-x-scroll border-y-2 my-5 px-3 space-x-2 h-[150px]">
               {user.image.map((im, i) => (
                <img className="w-[120px]" key={i} src={im} />
               ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
