interface MyButtonProps {
    colorTofill?: string;
    textInside?: string;
    onClick?: () => void; 
    limitwidth?: boolean
}

function MyButton({ colorTofill, textInside, onClick, limitwidth }: MyButtonProps) {
    return (
        <div
        onClick={onClick}
        style={{ backgroundColor: colorTofill || "#38bdf8" }} 
        className={`
          ${limitwidth ? "w-[180px]" : ""}
          px-4 py-2 text-white m-3 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 
          ease-in-out cursor-pointer text-center flex-shrink-0
        `}
      >
        <span className="font-bold">{textInside || "Click Me"}</span>
      </div>
    );
  }
  

export default MyButton;
