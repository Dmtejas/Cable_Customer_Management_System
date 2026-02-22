const Dashboard = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 text-white w-full mt-2">
            <div className=" p-10 rounded-ee-[200px] flex flex-col gap-y-10">
                <h1 className="text-5xl font-light">Active</h1>
                
                <p className="text-5xl font-thin font-serif">212</p>
            </div>
            <div className=" p-10 rounded-ee-[200px] flex flex-col gap-y-10">
                <h1 className="text-5xl font-light">Suspended</h1>
                <p className="text-5xl font-thin font-serif">20</p>
            </div>
            <div className=" p-10 rounded-ee-[200px] flex flex-col gap-y-10">
                <h1 className="text-5xl font-light">Inactive</h1>
                <p className="text-5xl font-thin font-serif">12</p>
            </div>
        </div>
    )
}

export default Dashboard;