import { useMemo, useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if(itemExists) {
            const updatedOrder = order.map(orderItem => 
                orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            );

            setOrder(updatedOrder);
        } else {
            const newItem : OrderItem = {...item, quantity: 1};
            setOrder([...order, newItem])
        }
    }

    const removeItemFromOrder = (orderItemId : OrderItem['id']) => {
        const updatedOrder = order.filter((item) => {
            return item.id !== orderItemId;
        });

        setOrder(updatedOrder);
    }

    const calculateSubtotal = useMemo(() => 
        order.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [order])

    return {
        order,
        addItem,
        removeItemFromOrder,
        calculateSubtotal
    }
}
