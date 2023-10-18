/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */



const ProductCard = ({product}) => {
    console.log(product);
    const { name,price,rating,type,details,brand,_id, photo}=product;
    return (
        <div className="my-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" h-72" src={photo}alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;