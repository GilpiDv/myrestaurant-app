import type { CategoryItem } from "../types"

type MenuCategoriesProps = {
    category: CategoryItem;
    onClick?: () => void;
}

export default function MenuCategories({category, onClick} : MenuCategoriesProps) {
    return (
        <button 
            type="button" 
            className="bg-white flex items-end justify-end cursor-pointer pt-12 pe-3 pb-1 w-full text-lg rounded-lg border-b-8 border-r-8"
            onClick={onClick}
            title={category.name}
        >
            <p className="truncate font-medium text-2xl text-right">
                {category.name}
            </p>
        </button>
    )
}