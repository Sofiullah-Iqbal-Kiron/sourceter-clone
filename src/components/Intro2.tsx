import {motion} from 'framer-motion'

export function Intro2() {
    return (
        <div className='flex flex-col justify-center items-center gap-10 text-center bg-gray-900 text-white pt-20'
             style={{minHeight: "100vh"}}>
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0, duration: 0.8}}
                className='text-4xl font-thin sm:text-6xl md:text-7xl'
            >
                From concept to <span className='font-semibold'>reality</span>
                <br/>
                we make <span className='font-semibold uppercase'>IT</span> happen
            </motion.div>
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.6, duration: 0.8}}
                className='text-focus font-bold font-serif text-xl sm:text-2xl w-[90%]'
            >
                experienced, corporate-quality IT services
                <br/>
                with a boutique touch
            </motion.div>
            <motion.div
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 1, duration: 0.8}}
                className='mt-7'
            >
                <a>
                    <button className='primary-button text-black sm:px-5 sm:py-4 sm:text-2xl'>
                        start it journey
                    </button>
                </a>
            </motion.div>
        </div>
    )
}