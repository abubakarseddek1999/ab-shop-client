/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";



const Course = ({ item }) => {
    console.log(item.image)

    const { id, type, description, image, price } = item;
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">

            <Link to='/category'>
                <div className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105  flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-xl" >

                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img className="h-[200px] w-full"
                            src={image}
                            alt="ui/ux review check"
                        />

                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-center my-2 text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {type}
                        </h4>
                        {/* <div>
                        {description.length >60
                        ?description.slice(0,60) + '...' : description}
                        <Link className="btn  btn-link" to={`/cardDetail/${id}`}> Details</Link>
                    </div> */}

                    </div>

                </div>


            </Link>
        </div>
    );
};

export default Course;