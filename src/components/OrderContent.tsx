import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
    removeItemFromOrder: (orderItemId: OrderItem['id']) => void 
}

export default function OrderContent({order, removeItemFromOrder} : OrderContentProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Order</h2>

        <div className="space-y-3 mt-8 h-[35vh] overflow-y-auto p-3">
            {order.length === 0 ? 
                <p className="text-center">Order is empty</p> : 
                (
                    order.map( item => (
                        <div key={item.id} className="flex justify-between items-center border-t border-teal-500 py-5 last-of-type:border-b">
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            <button onClick={() => removeItemFromOrder(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                                X
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
