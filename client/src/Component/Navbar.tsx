import { useState } from 'react'
import { TbRewindBackward15 } from "react-icons/tb";

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='fixed w-full flex flex-row justify-between items-center pl-6 pr-6 md:pl-12 md:pr-12 bg-[#5C8374] text-[#FFF5E4]'>
                <div className='flex flex-row items-center'>
                    <span className="font-mono text-4xl font-extrabold">DIRECTION</span>
                    <TbRewindBackward15 size={40} />
                </div>
                <div className='flex flex-row gap-6 align-center'>
                    <div className='flex flex-row gap-12 text-xl items-center hidden md:flex'>
                        <span>Goal</span>
                        <span>Expense</span>
                        <span>Note</span>
                    </div>
                    <div className='p-3 flex justify-center items-center flex-col text-xl text-sky-400'>
                        Sign IN
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
