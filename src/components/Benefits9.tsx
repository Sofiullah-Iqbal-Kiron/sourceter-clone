export function Benefits9() {
    return (
        <div className='flex flex-col items-center text-center py-10 relative'>
            <h1 className='text-4xl px-20 pb-10 sm:text-5xl'>Benefits to work with us</h1>

            <div className='benefit-top flex flex-col items-center gap-5 w-full sm:flex sm:flex-row sm:justify-around'>
                <div className='px-24 sm:px-0 sm:scale-110'>
                    <p className='bg-gray-50 rounded px-3 py-2 font-thin tracking-wide'>
                        Accelerated time to market thanks to agile practices
                    </p>
                </div>
                <div className='relative min-h-[10rem] flex items-center sm:pr-3'>
                    <p className='text-2xl font-bold sm:text-right'>
                        Optimized costs<br/>thanks to cloud<br/>services adoption
                    </p>
                    <div
                        className='max-w-[5rem] min-w-[5rem] min-h-[10rem] border border-green-500 rounded absolute inset-y-0 -right-8 left-auto -z-10'/>
                </div>
            </div>

            <div className='benefit-middle mt-8 w-full sm:flex sm:flex-row sm:justify-around'>
                <div className='text-2xl font-thin py-10 sm:pt-0 sm:text-3xl sm:relative sm:left-10 sm:bottom-5'>
                    Accelerated time to market<br/>thanks to agile practices
                </div>
                <div className='text-xl font-light pb-10 sm:pt-20 sm:pr-5'>
                    Close engagement with your team<br/>during the development
                </div>
                <div className='flex flex-row justify-center mb-12 max-h-[7rem] sm:order-first'>
                    <div className='font-bold text-left leading-snug sm:text-xl'>
                        Aglobal network<br/>of developers in<br/>a convenient<br/>time zone
                    </div>
                    <div
                        className='max-w-[7rem] min-w-[7rem] min-h-[7rem] bg-blue-200 -z-10 opacity-60 relative top-9 right-16'/>
                </div>
            </div>

            <div className='benefit-bottom w-full text-right font-semibold tracking-wide flex justify-center'>
                Organized and continuous delivery<br/>of remote services
            </div>

            <div className='-z-20 min-w-[20rem] min-h-[20rem] rounded-10 bg-sky-300 opacity-20 rotate-12 absolute top-40 left-10 blur-3xl sm:left-80'/>
        </div>
    )
}