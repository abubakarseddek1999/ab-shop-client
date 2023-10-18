import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const [card, setCard] = useState(null);

    const { id } = useParams();
   

    const details = useLoaderData();
    console.log(details);
 

    useEffect(() => {
        const findCard = details ?.find(item => item.id == id)
        setCard(findCard);

    }, [id, details])

    

    return (
        <div className="my-5 flex justify-center h-[600px] flex-grow">

            <div className="my-5 flex justify-center h-[550px] flex-grow">
                <div className="relative flex max-w-[32rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl">
                    <div className="relative m-0 overflow-hidden  rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className="h-[200px] w-full"
                            src={card?.image}
                            alt="ui/ux review check"
                        />
                        <div className="absolute bottom-0 w-full bg-gray-800 bg-opacity-70 text-white p-2 text-center">
                            1200
                        </div>

                    </div>
                    <div className="p-6">
                        {/* <h3 className="text-center text-xl font-bold">{card.type}</h3> */}
                        <h4 className="block font-sans text-center my-2 text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {card?.title}
                        </h4>


                    </div>
                    <div className="flex items-center justify-center p-4">

                        <div>
                            {card?.description}
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardDetails;