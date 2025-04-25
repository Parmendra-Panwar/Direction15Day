interface MyButtonProps {
    colorTofill?: string;
    textInside?: string;
}

function MyButton({ colorTofill, textInside }: MyButtonProps) {
    return (
        <div
            className={
                `${colorTofill ? `bg-[${colorTofill}]` : 'bg-sky-400'}
                 px-4 py-2 text-white m-3 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 
                 ease-in-out cursor-pointer`
            }
        >
            {textInside ? textInside : "Click Me"}
        </div>

    );
}

export default MyButton;
