import Image from "next/image";

type CardUspProps = {
    imgUrl: string;
    title: string;
    desc: string;
};

const CardUsp = ({ imgUrl, title, desc }: CardUspProps) => {
    return (
        <div className="flex flex-col items-center text-center pt-3 mt-3 max-w-xs">
            <Image
                src={imgUrl}
                alt="Usp Image"
                width={100}
                height={100}
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
            />
            <h3 className="text-lg pt-2 font-bold md:pt-12">{title}</h3>
            <p className="font-light">{desc}</p>
        </div>
    );
};

export default CardUsp;
