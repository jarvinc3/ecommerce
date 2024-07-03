
interface BagProps {
    cart?: number;
    add?: string;
}

export const BagIcon = ({ cart = 0, add }: BagProps) => {
    return (
        <div className="relative w-12 h-12 transition-all duration-300 cursor-pointer ">
            {cart > 1 &&
                <div className="absolute flex items-center justify-center w-5 h-5 text-white transition-all duration-300 bg-black rounded-full md:font-bold dark:bg-slate-50 right-1 top-2 dark:text-gray-900">
                    {cart > 9 ? <h2 className="flex items-start justify-center text-sm">9<span className="md:text-xs font-bold text-[10px]">+</span></h2> : cart}
                </div>
            }
            {add &&
                <div className="absolute flex items-center justify-center w-5 h-5 text-white transition-all duration-300 bg-black rounded-full md:font-bold dark:bg-slate-50 right-1 top-2 dark:text-gray-900">
                    <h2 className="flex items-start justify-center text-sm">{add}</h2>
                </div>
            }
            <svg
                className="w-full h-full"
                width="800px"
                height="800px"
                viewBox="0 -0.5 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.51132 9.177L6.27532 18.177C6.34062 19.1879 7.16948 19.9803 8.18232 20H16.8253C17.8378 19.9798 18.6661 19.1875 18.7313 18.177L19.4953 9.177C19.5542 8.63047 19.3817 8.08424 19.0196 7.67066C18.6575 7.25708 18.1388 7.01389 17.5893 7H7.41732C6.8678 7.01389 6.34917 7.25708 5.98707 7.67066C5.62497 8.08424 5.45246 8.63047 5.51132 9.177Z"
                    className="transition-all duration-300 stroke-black dark:stroke-white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.703 6.66154C16.5161 7.03118 16.6642 7.48236 17.0338 7.66929C17.4035 7.85621 17.8547 7.7081 18.0416 7.33846L16.703 6.66154ZM17.3515 5.71218L18.0095 5.35226V5.35226L17.3515 5.71218ZM16.2783 5L16.3543 4.25386C16.3291 4.25129 16.3037 4.25 16.2783 4.25V5ZM8.72831 5V4.25C8.70292 4.25 8.67755 4.25129 8.6523 4.25386L8.72831 5ZM7.65513 5.71218L6.99714 5.35226L6.99714 5.35226L7.65513 5.71218ZM6.96502 7.33846C7.15195 7.7081 7.60313 7.85621 7.97277 7.66929C8.34241 7.48236 8.49052 7.03118 8.3036 6.66154L6.96502 7.33846ZM10.7533 11C10.7533 10.5858 10.4175 10.25 10.0033 10.25C9.5891 10.25 9.25331 10.5858 9.25331 11H10.7533ZM10.0033 11.5H9.25331H10.0033ZM15.7533 11C15.7533 10.5858 15.4175 10.25 15.0033 10.25C14.5891 10.25 14.2533 10.5858 14.2533 11H15.7533ZM18.0416 7.33846C18.3586 6.71151 18.3466 5.96863 18.0095 5.35226L16.6935 6.0721C16.7935 6.25502 16.7971 6.47548 16.703 6.66154L18.0416 7.33846ZM18.0095 5.35226C17.6723 4.73588 17.0533 4.32507 16.3543 4.25386L16.2023 5.74614C16.4097 5.76727 16.5934 5.88919 16.6935 6.0721L18.0095 5.35226ZM16.2783 4.25H8.72831V5.75H16.2783V4.25ZM8.6523 4.25386C7.95335 4.32507 7.3343 4.73588 6.99714 5.35226L8.31313 6.0721C8.41318 5.88919 8.5969 5.76727 8.80432 5.74614L8.6523 4.25386ZM6.99714 5.35226C6.65998 5.96863 6.64797 6.71151 6.96502 7.33846L8.3036 6.66154C8.20951 6.47548 8.21307 6.25502 8.31313 6.0721L6.99714 5.35226ZM9.25331 11V11.5H10.7533V11H9.25331ZM9.25331 11.5C9.25331 13.2949 10.7084 14.75 12.5033 14.75V13.25C11.5368 13.25 10.7533 12.4665 10.7533 11.5H9.25331ZM12.5033 14.75C14.2982 14.75 15.7533 13.2949 15.7533 11.5H14.2533C14.2533 12.4665 13.4698 13.25 12.5033 13.25V14.75ZM15.7533 11.5V11H14.2533V11.5H15.7533Z"
                    className="transition-all duration-300 fill-black dark:fill-white"
                />
            </svg>
        </div>
    )
}
