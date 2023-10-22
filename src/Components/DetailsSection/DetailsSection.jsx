import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


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
            <h2>product name{name}</h2>
            <button onClick={() =>handleAddCart(_id)} className="btn">Add to Cart</button>
        </div>
    );
};

export default DetailsSection;