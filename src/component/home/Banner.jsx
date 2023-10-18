

const Banner = () => {
    return (
        <div className=" bg-slate-500 " >
            <div className="hero h-[500px] banner" style={{ backgroundImage: 'url("https://i.postimg.cc/NFSGfdpw/slider1-volga4-1170x516-1820x785.webp" )' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" >
                            
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Unleash the Power of Electronics at Your Fingertips</h1>
                        <p className="mb-5">Discover a world of innovation at your fingertips. Our technology and electronics hub brings you the latest gadgets, expert insights, and transformative experiences. Stay ahead of the curve with cutting-edge trends, all within easy reach.</p>
                        <button className="btn bg-emerald-950 text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;

