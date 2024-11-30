export default function Map(){
    return(
        <div className="my-10">
            <div className="text-center space-y-3 my-10">
                <h1 className="text-tertiary">About us</h1>

        <p className="text-5xl text-white">We’re a distributed team</p>
        <p className="text-secondary">We have offices and teams all around the world.</p>
            </div>
        <div className="w-full h-auto relative">
            <img src="/map.png" alt="" />
            <img className="absolute bottom-10 right-0" src="/content.png" alt="" />

        </div>
        </div>
    )


}