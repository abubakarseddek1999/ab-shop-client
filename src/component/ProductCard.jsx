/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



const ProductCard = ({product}) => {
    console.log(product);
    const { name,price,rating,type,details,brand,_id, photo}=product;
    return (
        <div className="my-5">
            <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl" >
                
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="h-[200px] w-full object-contain"
                        src={photo}
                        alt="ui/ux review check"
                    />
                   
                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-center my-2 text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                       {type}
                    </h4>
                    <h4 className="block font-sans text-center my-2 text-xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">Brand name:
                       {brand}
                    </h4>


                    <button className="btn  w-full "> Delete</button>
                  
                    
                </div>
               
            </div>

        </div>
    );
};

export default ProductCard;