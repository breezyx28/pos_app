import React from 'react'

export const ItemCard = (props) => {
    return (
        <div className="h-36 shade rounded bg-white cursor-pointer">
            <div className="w-full h-full flex flex-col">
                <div className="item-img w-full h-4/6">
                    <img src={props.src} alt="" className="w-full h-full rounded-t object-cover"/>
                </div>
                <div className="item-desc w-full h-2/6">
                    <div className="w-full h-full flex justify-start">
                        <small><p className="whitespace-normal pl-3 pt-2 text-xxs font-semibold text-gray-600">{props.name}</p></small>
                    </div>
                </div>
            </div>
        </div>
    )
}
