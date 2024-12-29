/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button, Brief } from "./button";
import Loading from "./leading";

export function Content({ user , isPending, error}) {
  if (!user) return <p>No data found</p>;
  return (
    <div
      id="scroll-bar"
      className="flex w-full space-x-4 overflow-x-scroll  scheme-dark">
        {isPending && <Loading />}
        {error && <div className="text-white text-3xl "> Error Fetching Data</div>}
      {user && user.map((u) => (
        <div
          key={u.id}
          className="w-full cursor-pointer min-w-[160px]  sm:min-w-[200px] md:min-w-[320px] lg:min-w-[420px] space-x-3 rounded-3xl relative shadow-md">
          <Link to={`/user/${u.id}`}>
            <img
              className="h-full w-full rounded-3xl"
              src={u.image[0]}
              alt=""
            />
            <button className="flex absolute z-50 cursor-pointer bottom-0 items-center rounded-xl justify-between bg-gradient-to-b from-black/0 to-black/80 rounded-b-3xl w-full px-2">
              <Brief name={u.name} profession={u.profession} />
              <Button image={u.image} />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
