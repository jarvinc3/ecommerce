import { useNavigate } from "react-router-dom";
import { Back } from "../../../utils/icons/Back";
import { Hearts } from "../../../utils/icons/Hearts";

interface Props {
    image: string;
}

export const ImageComponent = ({ image }: Props) => {
    const navigate = useNavigate();
    return (
        <section className="relative flex w-full h-auto pl-12 md:w-1/2">
            <section className="absolute z-50 flex items-center justify-between w-[90%] top-5 left-4">
                <div onClick={() => navigate("/")} className="p-3 bg-white dark:bg-[#242424] shadow-2xl rounded-2xl shadow-gray-400 dark:shadow-gray-600 cursor-pointer">
                    <Back />
                </div>
                <div className="p-3 bg-white dark:bg-[#242424] shadow-2xl rounded-2xl shadow-gray-400 dark:shadow-gray-600 cursor-pointer">
                    <Hearts />
                </div>
            </section>
            <ul className="absolute top-1/2 -translate-y-1/2 left-4 z-50 flex flex-col items-center justify-center gap-3 p-3 py-4 bg-white dark:bg-[#242424] shadow-2xl rounded-2xl shadow-gray-400 dark:shadow-gray-700">
                <li className="flex items-center w-10 cursor-pointer justify-cente">
                    <img className="rounded-lg " src={image} alt="" />
                </li>
                <li className="flex items-center w-10 cursor-pointer justify-cente">
                    <img className="rounded-lg " src={image} alt="" />
                </li>
                <li className="flex items-center w-10 cursor-pointer justify-cente">
                    <img className="rounded-lg " src={image} alt="" />
                </li>
            </ul>
            <div className="w-full xl:w-1/2">
                <img className="w-full rounded-bl-[50px] shadow-2xl shadow-gray-400 dark:shadow-gray-700" src={image} alt="" />
            </div>
        </section>
    )
}
