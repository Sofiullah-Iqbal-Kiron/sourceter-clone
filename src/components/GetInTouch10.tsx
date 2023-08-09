export function GetInTouch10() {
    return (
        <div id='get-in-touch'
             className='flex flex-col gap-10 px-10 py-20 bg-black text-center text-white'>
            <div className='text-[2.5rem] sm:text-[3.2rem] md:text-[3.5rem]'>Have a project in your mind?</div>
            <div className='text-2xl sm:text-3xl md:text:4xl font-thin tracking-wider'>Let's discuss your needs.</div>
            <div>
                <button className='primary-button text-black hover:bg-green-400 transition-colors duration-200'>
                    <a className='font-semibold'>get in touch</a>
                </button>
            </div>
        </div>
    )
}