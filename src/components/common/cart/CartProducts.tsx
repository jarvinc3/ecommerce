import { cartData } from "../../../data/data"
import { Add } from "../../utils/icons/Add"
import { Delete } from "../../utils/icons/Delete"
import { Less } from "../../utils/icons/Less"

interface Props {
   checked: boolean
   setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartProducts = ({ checked, setChecked }: Props) => {

   return (
      <section className="flex flex-col items-center justify-center w-full gap-5 mt-6 mb-48 md:mb-[10rem] xl:mb-0 ">
         {cartData.map((product) => (
            <div className="relative flex items-center justify-between w-full gap-5 pb-3 border-b h-36 md:h-44 xl:h-72">
               <div className="flex items-center justify-start h-32 gap-5">
                  <div className="absolute z-10 top-5 left-3">
                     <label htmlFor="checkbox" className={`relative px-[9px] transition-all duration-300 cursor-pointer rounded-full text-transparent border-2 border-[#313131] ${checked ? ' bg-[#313131]' : 'bg-white'}`}> .
                        <input
                           onChange={() => setChecked(!checked)}
                           type="checkbox"
                           name="checkbox"
                           id="checkbox"
                           checked={undefined}
                           className="appearance-none peer"
                        />
                        <svg
                           viewBox="-3.2 -3.2 38.40 38.40"
                           xmlns="http://www.w3.org/2000/svg"
                           className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 fill-white left-1/2 top-1/2 peer-checked:opacity-0"
                        >
                           <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                           <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <g id="SVGRepo_iconCarrier">
                              <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
                           </g>
                        </svg>
                     </label>
                  </div>
                  <div className="relative flex items-center h-full">
                     <img className="w-24 md:w-32 xl:w-52 rounded-2xl" src={product.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between h-32 md:h-40 xl:h-64">
                     <h2 className="text-xl font-semibold text-black md:text-3xl dark:text-white">{product.name}</h2>
                     <div className="flex items-center w-full gap-3 text-black dark:text-white">
                        <span className="w-9 h-9 rounded-full dark:bg-slate-200 bg-[#313131] border border-black flex items-center justify-center dark:text-black text-white">M</span>
                        <span className="w-9 h-9 rounded-full bg-[#f3f7b3] border border-black"></span>
                     </div>
                     <ul className="flex items-center gap-3 text-black dark:text-white">
                        <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131] text-lg"><Less /></li>
                        <li className="p-1 text-lg">01</li>
                        <li className="p-1 rounded-xl bg-slate-200 dark:bg-[#313131]" ><Add /></li>
                     </ul>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-between h-32 gap-3 xl:py-2 md:h-full">
                  <h2 className="text-lg font-semibold text-black md:text-2xl dark:text-white">RD${product.price}</h2>
                  <Delete />
               </div>
            </div>
         ))}

      </section>
   )
}
