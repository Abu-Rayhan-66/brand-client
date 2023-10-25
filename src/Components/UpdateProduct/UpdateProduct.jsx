import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const updateData = useLoaderData()
   const {_id, brand, name, photo, price, type, rating,} =  updateData ||{}

   const handleUpdate = e =>{
    e.preventDefault()
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value
    const price = form.price.value;
    const rating = form.rating.value;
    const updateProduct = {photo, name, brand, type, price, rating}

    fetch(`https://brand-server-lf8rrhpi0-abu-rayhan-s-projects.vercel.app/brands/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(updateProduct)
    })

    .then(res => res.json())
    .then(data =>{
        console.log(data)
    
        if(data.modifiedCount >0){
            Swal.fire({
                title: 'Success !',
                text: 'successfully Updated',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })       
}
// https://i.ibb.co/6PfS0Tg/Screenshot-5.png
    return (
        <div className="bg-slate-400 bg-opacity-50 w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
            <form onSubmit={handleUpdate} >
                <p className="text-lg font-semibold text-white">Image</p>
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]  text-lg " type="text" required  defaultValue={photo}  name="photo" placeholder="Image" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Name</p>
                <input  className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]"  type="text" required  defaultValue={name} name="name" placeholder="Name" />
                <br />
                <p className="text-lg font-semibold text-white">Brand Name</p>
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  defaultValue={brand} name="brand" placeholder="Brand Name"/>
                <br />
                <br />
                <label className="text-lg font-semibold text-white"  htmlFor="type" defaultValue={type}>Choose Type: </label>
                <select className="text-lg font-medium rounded-3xl" name="type" id="">

                    <option className="text-lg font-medium " value="phone">Phone</option>
                    <option className="text-lg font-medium" value="laptop">Laptop</option>
                    <option className="text-lg font-medium" value="headphone">Headphone</option>
                    <option className="text-lg font-medium" value="laptop">Tablet</option>
                    <option className="text-lg font-medium" value="laptop">Watch</option>
                </select>
                <br />
                <br />

                <p className="text-lg font-semibold text-white">Price</p>
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  defaultValue={price} name="price" placeholder="Price" id="" />
                <br />
                
                  
                   <p className="text-lg font-semibold text-white">Rating</p>
                   <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required defaultValue={rating} name="rating" placeholder="Rating" id="" />
                   <br />
                   <button    className="btn w-[300px] mt-4 md:w-[400px]
                    bg-red-500 text-white rounded-3xl hover:text-black
                     text-lg font-semibold">Submit</button>

            </form>
        </div>
    );
};

export default UpdateProduct;