import Image from "next/image";
import Button from "./Button";

const Footer = () => {
    return (
        <footer className="flex justify-center py-4">
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:px-12 items-center w-[1440px] mx-auto border-t-2 border-black">
                <div className="flex flex-col items-center justify-center space-y-4 p-2 md:items-start">
                    <div className="flex justify-center items-center space-x-2 p-2 md:p-0">
                        <Image
                            src={"/logo.svg"}
                            width={80}
                            height={80}
                            alt={"Maimeals Logo"}
                        />
                        <p className="font-bold text-left">
                            mAIMeals | Healthy Catering & Diet Consultation
                            Depok
                        </p>
                    </div>
                    <p className="text-center text-sm max-w-xs">
                        Subscribe to our newsletter for exclusive offers and
                        updates from mAIMeals
                    </p>
                    <input
                        type="text"
                        className="w-[300px] p-2 rounded-2xl placeholder:text-sm placeholder:text-center text-center"
                        placeholder="Enter your email"
                    />
                    <Button
                        title="Subscribe"
                        type="submit"
                        variant="btn_white"
                    />
                </div>
                <div>
                    <p className="text-center p-6 md:p-0 mt-3">
                        Follow on Instagram
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <Image
                            src={"/Image-Placeholder.png"}
                            alt={"Footer Image"}
                            width={100}
                            height={100}
                        />
                        <Image
                            src={"/Image-Placeholder.png"}
                            alt={"Footer Image"}
                            width={100}
                            height={100}
                        />
                        <Image
                            src={"/Image-Placeholder.png"}
                            alt={"Footer Image"}
                            width={100}
                            height={100}
                        />
                        <Image
                            src={"/Image-Placeholder.png"}
                            alt={"Footer Image"}
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
