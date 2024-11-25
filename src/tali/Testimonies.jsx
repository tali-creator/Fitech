import { Content } from "./content";
import Loading from "./leading";
import useFetch from "./useFetch";

export default function Testimonies() {
  const url = "http://localhost:8080/user"; 
  const {data: user, isPending, error} = useFetch(url)
 console.log(user)
 
   return (
     <>
     <div>
       {error && <div className="w-full h-full text-center text-2xl  text-white">error encountered {error}</div>}
       {isPending && <Loading />}
     {user && <Content user={user} />}
     </div>
     </>
   );
 }
