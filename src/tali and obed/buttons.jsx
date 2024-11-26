export default function Button({button}){
    return(
        <div>
            <button className="p-1 border px-3 hover:border-white hover:text-white transition-all duration-200 rounded">
                {button}
            </button>
        </div>
    )
}
