import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './loadingStyle.css'

const Loading = ({route = '/'}) => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate(route)
        }, 2000)
    }, [route])

    return (
        <div className="min-h-screen inset-0 backdrop-blur-md" style={{}}>
            <div className="text-white max-w-lg mx-auto pt-60 text-center inset-0 backdrop-blur-md" >
                <h1 className="text-6xl font-black" id="container">Loading....</h1>
            </div>
        </div>
    )
}

export default Loading;