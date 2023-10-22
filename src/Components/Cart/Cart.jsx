import { Rating } from "@mui/material";

const Cart = ({cart}) => {
    const {brand, name, photo, price, type, rating, userEmail} = cart || {}
    return (
        <div className=" mb-8 mx-4 md:mx-20 mt-10">
            <div className=" card card-side bg-base-100 shadow-xl">
  <figure><img className="h-[150px] w-[200px] md:h-[300px] md:w-[400px]" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Product Name: {name}</h2>
    <p>Brand Name: {brand}</p>
    <p>Category: {type}</p>
    <p>Rating: <Rating name="size-medium" defaultValue={rating} readOnly/></p>
    <p>Price: {price}</p>
    <button className="btn bg-red-500 text-white rounded-3xl hover:text-black w-28 text-lg font-semibold">DELETE</button>
    
  </div>
</div>
        </div>
    );
};

export default Cart;