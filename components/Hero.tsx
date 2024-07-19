import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
    return (
        <div className="flex justify-center">
            <div className="relative flex max-h-screen max-w-[1440px] items-center bg-black">
                <Image
                    src="/background-buahsayur.jpg"
                    width={1920}
                    height={1080}
                    alt="Hero Image"
                    className="opacity-50 object-cover object-center"
                />
                <div className="flex flex-col absolute top-[20%] left-[10%] items-start">
                    <h1 className="md:text-6xl sm:text-4xl text-xl font-bold text-white max-w-xs sm:max-w-sm md:max-w-xl">
                        Delicious & Nutritious Catering for a Healthier You!
                    </h1>
                    <p className="md:text-xl text-xs max-w-xs md:max-w-2xl text-white md:pt-3 pt-1">
                        Expertly crafted meals and personalized nutrition
                        consultations.
                    </p>
                    <div className="flex md:pt-9 pt-3 scale-75 -mx-10 md:mx-0 md:scale-100 space-x-6">
                        <Button
                            type="submit"
                            title="Order Now"
                            variant="btn_dark_red"
                        />
                        <Button
                            type="button"
                            title="Learn More"
                            variant="btn_white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
