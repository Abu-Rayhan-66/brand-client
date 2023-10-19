

const TopCategory = () => {
    return (
        <div>
        <div >
        <h2 className="text-5xl font-extrabold text-center mt-10 mb-10">Popular Category</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-20 gap-6">
        
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/DWmY1F7/catagore1.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Laptop</h2>
            
        </div>
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/YBZRBqn/category2.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Phone</h2>
            
        </div>
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/n3F8DL6/category3.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Power Bank</h2>
            
        </div>
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/4pmHFb7/category4.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Charger</h2>
            
        </div>
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/W6KxjpD/category5.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Monitor</h2>
            
        </div>
        <div >
            <img className="rounded-md h-[40vh] w-full p-4 shadow-xl" src="https://i.ibb.co/L5Gff1X/category6.png" alt="" />
            <h2 className="text-center text-lg font-semibold">Mouse</h2>
            
        </div>
        
    </div>
    </div>
    </div>
    );
};

export default TopCategory;