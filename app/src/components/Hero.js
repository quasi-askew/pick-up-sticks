import StickGif from "../assets/pickupsticks.gif";

const Hero = () => {
    return (
        <>
            <div className="pickupsticks-gif-container">
                <img src={StickGif} alt="Pick up sticks" />
            </div>
            <div className="text-center">
                <h1 className="tracking-tight font-extrabold">
                    <span className="block xl:inline text-6xl">Pick Up Sticks</span>
                    <span className="block mt-2">
                        <a className="underline decoration-sky-500" href="https://p5js.org/">using p5.js</a>
                    </span>
                </h1>
            </div>
        </>
    )
}

export default Hero;