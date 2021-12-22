export const SideNavList = (props) => {
    return (
        <div>
            <li className="text-gray-600 font-semibold w-full py-4 hover:bg-blue-600 hover:text-white">
                <div className="pl-10 pr-5 flex justify-between items-center w-full">
                    <div className="left font-semibold text-sm w-full flex items-center gap-y-5 gap-x-2">
                        {props.icon}
                        <span>{props.title}</span>
                    </div>
                    <div className="right">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </li>
        </div>
    )
}
