

const Faq = () => {
    return (
        <div className="mt-5 mx-2  border ">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center"><span className="text-blue-500">F</span>requently <span className="text-blue-500">A</span>sked <span className="text-blue-500">Q</span>uestions </p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                {/* about the social event  */}

                <img src="https://i.ibb.co/zbdVhDj/FAQ.png" alt="faq image" />



                <div className=" my-5">

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            How can I contact your support team?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">Include information about your customer support channels, such as email or a contact form.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What products does Apple offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">Apple offers a wide range of products, including the iPhone, iPad, Mac computers, Apple Watch, Apple TV, and various software and services.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What products does Samsung offer?
                        </div>
                        <div className="collapse-content">
                            <p className="text-blue-700">Samsung produces a wide variety of products, including smartphones, televisions, home appliances, tablets, laptops, and more.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Faq;