/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


const Blog = () => {
    return (
        <div className=" flex my-5 mx-2 flex-col gap-5">

            <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
                <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src="https://i.ibb.co/TgBjSYJ/anniveraery.jpg"
                        alt="image"
                        className="h-full w-full "
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        Birthday
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        A Love Story Continues: Celebrating Milestone Anniversaries
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        <br />

                        Anniversaries are a beautiful reminder of the enduring love and commitment that two people share. Whether you are celebrating one year or fifty years together, each anniversary is an opportunity to reflect on your journey as a couple and to celebrate the bond you have built. In this blog, we'll explore how to make your anniversary truly special and memorable.
                        <br />
                        Every anniversary is a moment to pause and reflect on the time you have spent together. Take some time to reminisce about the special moments, the challenges you have overcome, and the growth you have experienced as a couple. Express your gratitude for your partner and the love you share.

                    </p>
                    
                    <a className="inline-block" href="#">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>




            <div className="relative flex w-full flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
                <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src="https://i.ibb.co/ZL7kbJc/101-Of-Planning-An-Unforgettable-Kids-Birthday-Party.jpg"
                        alt="image"
                        className="h-full w-full "
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        Birthday
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        A Memorable Birthday Bash: Celebrating Life's Special Moments
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        A birthday event is an opportunity to make lasting memories and celebrate life's milestones. By choosing a theme, decorating with flair, planning exciting activities, and showing appreciation to your guests, you can ensure that your birthday celebration is a memorable and joyful occasion for all involved. So go ahead and start planning your next birthday bash—it's time to celebrate life in style! <br />
                        Birthdays are more than just a marker of age; they're a celebration of life itself. By choosing a memorable theme, decorating creatively, planning exciting activities, and showing appreciation to guests, we can make every birthday bash a reflection of the joy and vibrancy that life brings.
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>

        </div>
    );
};

export default Blog;