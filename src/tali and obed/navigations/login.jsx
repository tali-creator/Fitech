export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-primary pt-20">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-3/5 sm:w-2/5 md:w-1/2 lg:w-1/3  h-auto">
            <form action="" className="w-full h-full">
                <div className="flex flex-col space-y-2">
                    <label className="text-white " htmlFor="email">Email Address:</label>
                    <input className=" outline-none border bg-white rounded-md " type="email" name="" id="email   required" />
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
