import type { MenuItem } from "../types"

type MenuItemProps = {
	item: MenuItem
	addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
	return (
		<button 
            type="button" 
            className="cursor-pointer p-3 flex justify-between items-center text-lg rounded-lg"
            onClick={() => addItem(item)}
            title={item.name}
        >
            <img width={'40vh'} src={`/img/${item.image}`} alt="" />
            <p className="truncate font-medium">
                {item.name}
            </p>
            <p className="font-black">
                ${item.price}
            </p>
        </button>	
	)
}
