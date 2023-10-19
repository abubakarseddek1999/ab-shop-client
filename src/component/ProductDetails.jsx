/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();
    const { name, price, rating, type, details, _id, brand, photo } = product;
    return (
        <div className="my-5 flex justify-center ">
            <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105  flex max-w-[24rem] h-[600px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 w-96 " >

                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="h-[200px] w-full object-contain"
                        src={photo}
                        alt="ui/ux review check"
                    />
                    <div className="rating flex justify-center mt-10"> 
                        <div >
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>

                </div>
                <div className="p-6 my-5">
                    <h4 className="block font-sans text-center my-2 text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <h4 className="block font-sans text-center my-2 text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">Brand name:
                        {brand}
                    </h4>
                    <p className="text-center">{details}</p>
                    <div className="flex justify-between m-5">
                        <p> Price: {price} BDT</p>
                        <p>Rating: {rating}/5</p>

                    </div>
                    <button className="btn btn-block"> Add To Cart</button>




                </div>

            </div>

        </div>


    );
};

export default ProductDetails;