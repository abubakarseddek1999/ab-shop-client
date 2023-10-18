import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./faqSection/Faq";
import Courses from "./courses";
import Skills from "./Skills";

const Home = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div className=" bg-slate-200 ">
            <Banner></Banner>
            <Courses courses={courses}></Courses>
            <Faq></Faq>
            <Skills></Skills>
            
        </div>
    );
};

export default Home;