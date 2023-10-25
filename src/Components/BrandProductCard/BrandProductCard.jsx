/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import Slider from "../Slider/Slider";


const BrandProductCard = ({card}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, name} = card ||{}

    
    const [data,setData] = useState([])
    const [filterData,setFilterData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetch('https://brand-server-lf8rrhpi0-abu-rayhan-s-projects.vercel.app/brands')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)

        })
        // const filterData = data.filter(brand => brand.brand == brand_name)
        // setFilter(filterData)
    },[])
    useEffect(()=>{
        const filterData = data.filter(brand => brand.brand == name)
        setFilterData(filterData)
    },[data, name])
   console.log(filterData)
    console.log(data)

    return (
        
       <div>
        <Slider></Slider>

        {
            loading ?<div className="h-[50vh] flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>:

            (filterData.length ==0) ? <img className="mt-10 mb-10 w-full h-[40vh] md:h-[80vh]" src="https://i.ibb.co/mD3V2Rm/error2.png" alt="" /> :  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mx-10 mb-20 mt-10 md:mx-20 gap-12">
            
            {
                filterData.map(product => <Brand key={product._id} product={product}></Brand>)
                
            }
            
        </div>
        }
        
       </div>
    );
};

export default BrandProductCard;