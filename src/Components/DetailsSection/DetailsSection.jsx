import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@mui/material";


const DetailsSection = () => {
    

    const detailsData = useLoaderData()
    const {_id, brand, photo, name, type, price,rating } =detailsData || {}
    const {user} = useContext(AuthContext)
    const userEmail = user.email
    const addProduct = {brand, name, photo, price, type, rating, userEmail }
    console.log(userEmail)
    
   


    const handleAddCart = (id) =>{
        console.log(id)
        fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success !',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });
  
    }

    return (
        <div>
            
           <div className="mx-8 md:mx-40 h-[600px]  flex flex-col justify-center items-center text-xl mt-6 mb-6 rounded-md border-2 p-4">
            <img className="h-[300px] w-[350px] rounded-md border-2 p-4" src={photo} alt="" />
            <p className="mt-2 ">Product Name: {name}</p>
            <p>Brand Name: {brand}</p>
            <p>Category: {type}</p>
            <p><Rating name="size-medium" defaultValue={rating} readOnly/></p>
            <p className="mb-4">Price ${price}</p>
           <button onClick={() =>handleAddCart(_id)} className="btn">Add to Cart</button>
           </div>
        </div>
    );
};

export default DetailsSection;