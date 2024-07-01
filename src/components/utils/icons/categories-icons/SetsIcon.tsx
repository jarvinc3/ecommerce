import { Shorts } from "./Shorts"
import { Tshirt } from "./Tshirt"

export const SetsIcon = () => {
    return (
        <div className="flex items-center gap-2">
            <Shorts width={"w-8 h-8 md:w-16 md:h-16"} />
            <Tshirt width={"w-8 h-8 md:w-16 md:h-16"} />
        </div>
    )
}
