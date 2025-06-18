import type { MenuItem } from "../types"

type MenuItemProps = {
	item: MenuItem
	addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
	return (
		<div 
            className="p-3 flex justify-between items-center text-lg rounded-lg cursor-pointer"
            onClick={() => addItem(item)}
            title={item.name}
        >
            <div>
                <p className="truncate font-semibold text-xl">
                    {item.name}
                </p>
                <p className="text-slate-400">
                    {/* {item.description}	 */}
                    Short description of the item here.
                </p>
            </div>
            <p className="font-black">
                ${item.price}
            </p>
        </div>	
	)
}
