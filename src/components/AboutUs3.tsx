import roundedLogo from "../assets/i-rounded-logo.svg"

export function AboutUs3() {
    return (
        <div
            className='font-thin flex flex-col justify-center items-center gap-8 text-center text-lg sm:text-xl md:text-2xl px-3 sm:px-28 py-12 bg-gray-950 text-white min-h-screen'>
            <p className='relative top-[20px]'>We are a <span className='text-focus'>professional team of engineers</span> and advisors delivering
                software development and consulting
                services.
            </p>
            <p className='relative top-[20px]'>
                Catering to clients across North America, Europe, and the Middle East, we are committed to striking the
                <span className='text-focus'> perfect balance</span> between efficiency and cost for your bespoke
                development needs. Our in-depth
                understanding of diverse markets allows us to tailor solutions that <span className='text-focus'>boost your business performance
                and
                drive growth,</span> all while maintaining competitive pricing.
            </p>
            <p className='relative top-[90px]'>
                <img src={roundedLogo}/>
            </p>
        </div>
    )
}