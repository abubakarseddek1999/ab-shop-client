import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";



const MyCart = () => {
    const loadedProducts = useLoaderData();

    const [products, setProducts] = useState(loadedProducts)

    return (
        <div>
            <div className="text-5xl flex-grow text-center my-16 font-bold">
                Total Product: {products.length}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard 
                        product={product}
                        products={products}
                        setProducts={setProducts}
                         key={product._id}></ProductCard>)
                }
            </div>

        </div>

    );
};

export default MyCart;