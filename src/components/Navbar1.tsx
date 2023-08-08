import logoLine from '../assets/logo-line.svg'
import {useState} from "react";

export function Navbar1() {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            className='text-white flex justify-between items-center py-3 px-0.5 backdrop-blur-sm hover:backdrop-blur-md fixed top-0 inset-x-0 z-10'>
            <div><img src={logoLine} alt='logo-line'/></div>
            <div className='flex items-center gap-3'>
                <div>
                    <a href='#get-in-touch'>
                        <button className='primary-button text-black'>
                            get in touch
                        </button>
                    </a>
                </div>
                <div>
                    icon-SEARCH
                </div>
                <div>
                    <button className='primary-button text-black min-w-[50px]'
                            onClick={() => setExpanded(!expanded)}
                    >
                        {
                            !expanded && "|||"
                        }
                        {
                            expanded && "X"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}