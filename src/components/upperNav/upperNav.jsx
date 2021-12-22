export const UpperNav = () => {

    return (
        <div>
            <div className="flex justify-between items-center bg-white pl-10 h-16">
                <div className="left-side flex items-center">
                    <div className="logo flex items-center">
                        <div className="w-8 h-8 primary-bg rounded-full"></div>
                        <span className="ml-2 text-xs font-semibold text-gray-400">POS TECHNOLIGIES</span>
                    </div>
                    <div className="trail ml-32 text-gray-300 text-xs">
                        You have 14 day left in your trail. <span className="primary-color ml-1">Select plan</span>
                    </div>
                </div>
                <div className="right-side h-full">
                    <div className="pl-4 flex items-center justify-between gap-x-12 h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <div className="thumbnail">
                            <div className="flex items-center gap-x-2">
                                <img src="kat.jpg" alt="Kat" width={"32"} height={"32"}/>
                                <div className="info flex flex-col items-start text-sm leading-tight justify-center">
                                    <span className="text-gray-500 mb-0">Kat</span>
                                    <span className="leading-tight text-gray-300 text-sm">Employee</span>
                                </div>
                            </div>
                        </div>
                        <div className="add-btn h-full w-40 primary-bg">
                            <div className="h-full h-full primary-bg">
                                <span className="h-full flex gap-x-2 justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white font-semibold" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                    <div className="text-white text-lg font-semibold">ADD</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}