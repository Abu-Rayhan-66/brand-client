import { Rating } from "@mui/material";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Brand = ({product}) => {
    const {_id, brand, photo, name, type, price,rating } = product ||{}
    return (
        <div>
    <div >
        
        <div className="shadow-md rounded-3xl bg-slate-300" >
            <img className="text-white rounded-md h-[50vh] w-full p-4 shadow-xl mb-6" src={photo} alt="" />
            <h2 className="text-white text-center text-lg font-semibold">Product Name: {name}</h2>
            <h2 className="text-white text-center text-lg font-semibold">Brand Name: {brand}</h2>
            <h2 className="text-white text-center text-lg font-semibold">Category: {type}</h2>
            <h2 className="text-white text-center text-lg font-semibold">Price: ${price}</h2>
            <p className="text-center text-lg font-semibold"><Rating name="size-medium" defaultValue={rating} readOnly/></p>
            <div  className="flex justify-between mx-10 md:mx-24 lg:mx-20 pb-10">
            <Link to={`/details/${_id}`}>
            <button className="btn bg-red-500 text-white rounded-3xl hover:text-black  text-lg font-semibold">Details</button>
            </Link>
            <button className="btn bg-red-500 text-white rounded-3xl hover:text-black  text-lg font-semibold">Update</button>
            </div>
        </div>
    </div>
    
        </div>
    );
};

export default Brand;