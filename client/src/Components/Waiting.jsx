import loadingLogo from '../assets/loadingLogo.png'

const Waiting = () => {
    return (
        <div className="text-white min-h-52 flex flex-col justify-center items-center">
            <img className="mt-10 size-1/6 animate-spin" src={loadingLogo} alt="loading" />
            <h1 className="text-3xl mt-8 italic animate-pulse">Loading...</h1>

        </div>
    )
}

export default Waiting;