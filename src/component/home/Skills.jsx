

const Skills = () => {
    return (
        <div className=" mx mt-5 ">
            <h3 className="text-xl md:text-5xl font-bold text-center"><span className="text-emerald-500">C</span>ustomer <span className="text-emerald-500">R</span>eview</h3>

            <div className="flex justify-center" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <div className="flex flex-col md:flex-row card card-side m-5  my-5 bg-base-100 hover:bg-black hover:text-white shadow-xl">

                    <figure><img className="h-full" src="https://i.postimg.cc/1tgzFg4S/how-to-get-customer-reviews.png" alt="Movie" /></figure>

                    <div className="card-body w-1/2">
                        <p className=" font-bold">Apple</p>
                        <progress className="progress progress-success w-full" value="95" max="100"></progress>

                        <p className=" font-bold">Samsung</p>
                        <progress className="progress progress-success w-full" value="90" max="100"></progress>

                        <p className=" font-bold">Sony</p>
                        <progress className="progress progress-success w-full" value="80" max="100"></progress>

                        <p className=" font-bold">Intel</p>
                        <progress className="progress progress-success w-full" value="60" max="100"></progress>

                        <p className=" font-bold">Walton</p>
                        <progress className="progress progress-success w-full" value="75" max="100"></progress>

                        <p className=" font-bold">LG</p>
                        <progress className="progress progress-success w-full" value="69" max="100"></progress>






                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;