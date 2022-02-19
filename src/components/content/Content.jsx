import { ItemCard } from "./cards/itemCard"
import { CustomerMenu } from "./customer/customerMenu"

export const Content = (props) => {
    return (
        <div className="content-bg w-full h-full">
            <div className="content-wraper w-full h-full p-6">
                <div className="flex w-full h-full gap-x-6">
                    <div className="left h-full md:w-3/5 w-full">
                        <div className="flex flex-col w-full h-full md:gap-y-14 gap-y-8">

                            <div className="search-bar w-full h-12 bg-white flex px-3 justify-between items-center">
                                <input type="text" name="" id="" className="border-0 h-10 text-gray-400 focus:outline-none text-sm w-full md:w-3/4" placeholder="Find product by name, barcode or sku"/>
                                <div className="h-full md:flex justify-around items-center hidden md:w-1/4 font-semibold gap-x-1 text-xs ">
                                    <small className="text-gray-600 cursor-pointer">GIFTCARD</small>
                                    <small className="text-gray-400 cursor-pointer">CUSTOMCARE</small>
                                </div>
                            </div>
                            <div className="w-full h-full flex flex-col gap-y-6">
                                <div className="w-full border-b border-b-gray-400">
                                    <ul className="flex items-center md:justify-center text-center h-full w-full">
                                        <li className="md:px-10 flex-auto px-4 py-4 tab-link cursor-pointer text-sm font-semibold"><small>DESSERTS</small></li>
                                        <li className="md:px-10 flex-auto px-4 py-4 tab-link cursor-pointer text-sm font-semibold"><small>FOOD</small></li>
                                        <li className="md:px-10 flex-auto px-4 py-4 tab-link cursor-pointer text-sm font-semibold"><small>{'COFFEE&MORE'}</small></li>
                                    </ul>
                                </div>
                                <div className="h-full">
                                    <div className="items-section w-full grid md:grid-cols-4 grid-cols-2 gap-4">
                                        <ItemCard src={"./img/2.jpg"} name={"Skillet Apple Pie"} price={""}/>
                                        <ItemCard src={"./img/1.jpg"} name={"Cherry Dump Cake"} price={""}/>
                                        <ItemCard src={"./img/3.jpg"} name={"Cookiedilla"} price={""}/>
                                        <ItemCard src={"./img/4.jpg"} name={"Cherry Dump Cake"} price={""}/>
                                        <ItemCard src={"./img/5.jpg"} name={"Crepes"} price={""}/>
                                        <ItemCard src={"./img/6.jpg"} name={"Campfire Cobbler"} price={""}/>
                                        <ItemCard src={"./img/7.jpg"} name={"Cheesecakeadilla"} price={""}/>
                                        <ItemCard src={"./img/8.jpg"} name={"Strawberry Cheesecakeadilla"} price={""}/>
                                        <ItemCard src={"./img/9.jpg"} name={"Peach Crisp"} price={""}/>
                                        <ItemCard src={"./img/10.jpg"} name={"Strawberry Icecream"} price={""}/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right h-full bg-white md:w-2/5 hidden md:flex">
                        <div className="p-5 w-full h-full">
                            <div className="flex flex-col justify-between w-full h-full">
                                <div className="flex flex-col justify-start w-full">
                                    <h2 className="text-gray-600 font-semibold border-b pb-4">Add customer</h2>
                                </div>
                                <div className="orders w-full flex flex-col justify-start items-center h-full">
                                    <CustomerMenu />
                                    <CustomerMenu />
                                    <CustomerMenu />
                                </div>
                                <div>
                                    <div className="notes w-full pb-4 border-b">
                                        <div className="text-gray-400 text-xs pb-1 border-b">Notes</div>
                                        <ul className="w-full flex flex-col justify-between gap-y-2 pt-7">
                                            <li className="flex justify-between text-sm text-gray-400">
                                                <span>Discount</span>
                                                <span className="w-14">0%</span>
                                            </li>
                                            <li className="flex justify-between text-sm text-gray-400">
                                                <span>Subtotal</span>
                                                <span className="flex gap-x-5 items-center w-14">
                                                    <span>0</span><span className="text-xs text-gray-500 font-semibold">USD</span>
                                                </span>
                                            </li>
                                            <li className="flex justify-between text-sm text-gray-400">
                                                <span>Tax</span>
                                                <span className="flex gap-x-5 items-center w-14">
                                                    <span>0</span><span className="text-xs text-gray-500 font-semibold">USD</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="total pt-4 w-full">
                                        <div className="flex flex-col items-start gap-y-4 w-full">
                                            <div className="title flex justify-between items-center w-full">
                                                <h3 className="text-gray-600 font-semibold">TOTAL</h3>
                                                <div className="flex gap-x-5 items-center font-semibold w-14">
                                                    <span>0</span><span className="text-xs font-semibold">USD</span>
                                                </div>
                                            </div>
                                            <div className="options flex items-center gap-x-6 text-gray-400 text-xs font-bold w-full">
                                                <small>DISCARD</small><small>PARK</small><small className="text-blue-500">OPEN DRAWER</small>
                                            </div>
                                            <button className="pay-btn primary-bg rounded py-4 font-semibold text-white text-center w-full">PAY $0.00</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

