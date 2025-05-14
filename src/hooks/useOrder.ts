import { useMemo, useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [tip, setTip] = useState(0);

    const MAX_ITEMS = 10;
    const MIN_ITEMS = 1;

    const addItem = (item: MenuItem) => {
        const itemExists = order.findIndex((orderItem) => {
            return orderItem.id === item.id;
        });
        if(itemExists >= 0) {
            if(order[itemExists].quantity >= MAX_ITEMS) return;
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

    const subtotal = useMemo(() => 
        order.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [order])

    const tipAmount = useMemo(() => {
        return (tip / 100) * subtotal;
    }, [tip, order])

    const grandTotal = useMemo(() => {
        return tipAmount + subtotal;
    }, [tip, order])

    const saveOrder = () => {
        setOrder([]);
        setTip(0);
    }

    const increaseQuantity = (id: OrderItem['id']) => {
        const updatedOrder = order.map(item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }

            return item;
        });

        setOrder(updatedOrder);
    }

    const decreaseQuantity = (id : OrderItem['id']) => {
        const updatedOrder = order.map(item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }

            return item;
        });

        setOrder(updatedOrder);
    }

    return {
        order,
        addItem,
        removeItemFromOrder,
        subtotal,
        tip,
        setTip,
        tipAmount,
        grandTotal,
        saveOrder,
        increaseQuantity,
        decreaseQuantity,
        MAX_ITEMS,
        MIN_ITEMS
    }
}
