/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, image, name } = card
    return (
        <div>

            <div>
               <Link to={`/brandProduct/${id}`}>
               <div className="card card-compact h-[200px] md:h-[270px] lg:h-[270px] xl:h-[400px]  bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-bold">{name}</h2>


                    </div>
                </div>
               </Link>
            </div>
        </div>
    );
};

export default Card;