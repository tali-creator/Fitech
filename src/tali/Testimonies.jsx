import { Content } from "./content";
import Loading from "./leading";
import useFetch from "./useFetch";

export default function Testimonies() {
  const url = "https://fitech-data.vercel.app/data.json";
  
  const { data, isPending, error } = useFetch(url);
 
  if (!data || !data.user) return <p>No data found</p>;
  const user = data.user

  return (
    <>
      <div>
        {user &&  <div className="w-full flex flex-col items-center py-10 space-y-10">
          <div className="flex space-x-6 sm:space-x-8 md:space-x-10 ">
            <img className="w-5 sm:w-7 md:w-10 lg:w-full" src="/qoute2.svg" alt="" />
            <h1 className="text-2xl pt-5 sm:pt-8 md:pt-12 font-bold font-serif sm:text-4xl md:text-6xl lg:text-7xl text-white">
              Testimonials
            </h1>
            <img className="w-5 sm:w-7 md:w-10 lg:w-full" src="/qoute.svg" alt="" />
          </div>
          <div className="text-white text-lg sm:text-lg text-center"> 
          Through dedicated teamwork and collective effort, we have successfully developed and delivered this remarkable project. Each member has contributed their skills and expertise, ensuring the project’s success and excellence.. Below are the faces behind this wonderful project 
          </div>
        </div>
        }
        {error && (
          <div className="w-full h-full text-center text-2xl  text-white">
            error encountered {error}
          </div>
        )}
        {isPending && <Loading />}
        {user && <Content user={user}  isPending={isPending} error={error}/>}
      </div>
    </>
  );
}
