import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const AddProduct = () => {

    const params = useParams()
    console.log(params)

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;

        const allData = {photo, name, brand, type, price, description, rating}

        fetch('https://brand-server-lf8rrhpi0-abu-rayhan-s-projects.vercel.app/brands',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(allData)
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data)
        
            if(data.insertedId){
                Swal.fire({
                    title: 'Success !',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })       
    }

    return (
        <div className="bg-slate-400 bg-opacity-50 w-[350px] md:w-[600px] mb-20 p-10 rounded-md flex  mx-auto justify-center mt-10">
            <form onSubmit={handleAddProduct }>
                <p className="text-lg font-semibold text-white">Image</p>
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]  text-lg " type="text" required  name="photo" placeholder="Image" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Name</p>
                <input  className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]"  type="text" required  name="name" placeholder="Name" />
                <br />
                <p className="text-lg font-semibold text-white">Brand Name</p>
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  name="brand" placeholder="Brand Name"/>
                <br />
                <br />
                <label className="text-lg font-semibold text-white"  htmlFor="type">Choose Type: </label>
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
                <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  name="price" placeholder="Price" id="" />
                <br />
                <p className="text-lg font-semibold text-white">Short description</p>
                  <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  name="description" placeholder="Short description" id="" />
                  <br />
                   <p className="text-lg font-semibold text-white">Rating</p>
                   <input className="pl-2 rounded-3xl py-2 w-[300px] md:w-[400px]" type="text" required  name="rating" placeholder="Rating" id="" />
                   <br />
                   <button    className="btn w-[300px] mt-4 md:w-[400px]
                    bg-red-500 text-white rounded-3xl hover:text-black
                     text-lg font-semibold">ADD PRODUCT</button>

            </form>
        </div>
    );
};

export default AddProduct;