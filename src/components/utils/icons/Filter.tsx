

export const Filter = () => {
    return (
        <svg
            className="cursor-pointer w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(90)"
        >
            <g stroke="#222" strokeLinecap="round" className="stroke-slate-500 dark:stroke-gray-400">
                <path d="M5 12V4M19 20v-3M5 20v-4M19 13V4M12 7V4M12 20v-9" />
                <circle cx={5} cy={14} r={2} />
                <circle cx={12} cy={9} r={2} />
                <circle cx={19} cy={15} r={2} />
            </g>
        </svg>
    )
}
