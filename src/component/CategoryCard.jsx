import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";



const CategoryCard = () => {
    const product = useLoaderData();
    console.log(product);
    const [categoryCard, setProducts] = useState(product)
    const brand = "Walton"

    const [cards, setCards] = useState(null);

    // const { brand } = useParams();



    useEffect(() => {
        const findCard = categoryCard?.filter(item => item.brand == brand)
        setCards(findCard);

    }, [brand, categoryCard])



    return (
        <div className="my-5 flex justify-center flex-grow">

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5 mx-5">
                {
                    cards?.map(item => <BrandCard key={item.i} item={item}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCard;