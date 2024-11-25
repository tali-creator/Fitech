import { Content } from "./content";
import Loading from "./leading";
import useFetch from "./useFetch";

export default function Testimonies() {
 const {data: user, isPending, error} = useFetch("http://localhost:8000/user")


  return (
    <>
    <div>
      {error && <div className="w-full h-full text-center text-2xl ">error encountered {error}</div>}
      {isPending && <Loading />}
    {user && <Content user={user} />}
    </div>
    </>
  );
}
