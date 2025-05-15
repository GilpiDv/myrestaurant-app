import type { CategoryItem } from "../types"

type MenuCategoriesProps = {
    category: CategoryItem;
    onClick?: () => void;
}

export default function MenuCategories({category, onClick} : MenuCategoriesProps) {
    return (
        <button 
            type="button" 
            className="flex items-end justify-end cursor-pointer pt-18 pe-3 pb-1 w-full text-lg rounded-lg border-b-4 border-r-4"
            onClick={onClick}
            title={category.name}
            style={{ 
                backgroundImage: `url(img/${category.image})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
            }}
        >
            <p className="backdrop-brightness-20 pl-4 pr-4 pb-1 pt-1 rounded-tr-xl rounded-es-xl truncate font-medium text-xl text-right text-white">
                {category.name}
            </p>
        </button>
    )
}