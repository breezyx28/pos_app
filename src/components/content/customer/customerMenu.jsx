export const CustomerMenu = (props) => {
    return (
        <div className="h-16 flex justify-center w-full">
            <div className="flex justify-between w-full">
                <div className="flex justify-between items-center gap-x-6">
                    <div className="rounded-full h-8 w-8 primary-bg flex justify-center items-center text-white text-lg font-smibold">
                        {props.qt ?? "3"}
                    </div>
                    <div className="flex flex-col justify-start">
                        <span className="text-sm font-semibold text-gray-600">Cookiedilla</span>
                        <small className="text-xs text-gray-400">Small/Skynny/1</small>
                    </div>
                </div>
                <div className="text-center text-gray-600 font-semibold flex items-center gap-x-2">
                    <span>200</span><small>USD</small>
                </div>
            </div>
        </div>
    )
}
