export default function Loading(){
    return(
        <div  className="scroll-bar w-screen h-screen flex flex-col -space-y-10 justify-center items-center overflow-hidden">
            <img className="animate-bounce " src="/fitech-logo.png" alt="fitech logo" />
            <p className="text-2xl font-black text-white">Fitech</p>
        </div>
    )
}