export type MenuItem = {
    id: number
    name: string
    price: number
    image: string
    category: string
}

export type OrderItem = MenuItem & {
    quantity: number
}

export type CategoryItem = {
    id: number
    name: string
    background: string
    image: string
}