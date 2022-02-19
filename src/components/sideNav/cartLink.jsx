export const Cart = () => {

    return (
        <div className="md:hidden flex primary-bg text-white">
            <li className="font-semibold w-full py-4 text-center">
                <div className="pl-10 pr-5 flex justify-between items-center w-full">
                    <div className="left font-semibold text-sm w-full flex items-center gap-y-5 gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>Orders</span>
                    </div>
                </div>
            </li>
        </div>
    )

}