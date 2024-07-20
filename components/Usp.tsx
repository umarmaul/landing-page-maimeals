import CardUsp from "./CardUsp";

const Usp = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-around my-6 max-w-[1440px] min-h-screen max-h-[1080px]">
                <div className="flex flex-col justify-center text-zinc-800 text-center mt-6 md:space-y-3">
                    <h1 className="text-md font-medium md:text-3xl uppercase">
                        our process
                    </h1>
                    <h2 className="text-2xl font-bold md:text-6xl">
                        Get started as easy as 1, 2, 3
                    </h2>
                    <p className="pt-4 max-w-xs mx-auto md:max-w-2xl md:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error beatae id laudantium quaerat perferendis ipsa.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-6 mt-6 md:flex-row md:space-y-0 md:space-x-12 md:mt-0">
                    <CardUsp
                        imgUrl={"/Image-Placeholder.png"}
                        title={"Pick Your Fruits"}
                        desc={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae id laudantium quaerat perferendis ipsa."
                        }
                    />
                    <CardUsp
                        imgUrl={"/Image-Placeholder.png"}
                        title={"Pick Your Fruits"}
                        desc={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae id laudantium quaerat perferendis ipsa."
                        }
                    />
                    <CardUsp
                        imgUrl={"/Image-Placeholder.png"}
                        title={"Pick Your Fruits"}
                        desc={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae id laudantium quaerat perferendis ipsa."
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Usp;
