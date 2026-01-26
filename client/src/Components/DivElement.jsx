const DivElement = ({data, heading}) => {
    return (
        <h1 className="
            lg:text-md
            text-sm
            font-semibold
            p-4
            text-white
            shadow-2xl
            rounded-full
            border
            border-b-white
            border-t-0
            border-r-0
            border-l-0
            
        ">{heading}{data}</h1>
    )
}

export default DivElement;