/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Course from "./Course";


const Courses = ({ courses }) => {
    console.log(courses)

    return (
        <div>
            <h3 className=" text-2xl md:text-4xl lg:text-5xl font-bold text-center">our service</h3>

            <div className="flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-10 mx-2">
                    {
                        courses?.map(item => <Course key={item.id} item={item}> </Course>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;