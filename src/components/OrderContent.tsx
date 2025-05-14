import { formatCurrency } from "../helpers"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
    removeItemFromOrder: (orderItemId: OrderItem['id']) => void 
    increaseQuantity: (id: OrderItem["id"]) => void
    decreaseQuantity: (id: OrderItem["id"]) => void
    maxItems: number
    minItems: number
}

export default function OrderContent({order, removeItemFromOrder, increaseQuantity, decreaseQuantity, maxItems, minItems} : OrderContentProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Order</h2>

        <div className="space-y-3 mt-8 h-[35vh] overflow-y-auto p-3">
            {order.length === 0 ? 
                <p className="text-center">Order is empty</p> : 
                (
                    order.map( item => (
                        <div key={item.id} className="flex justify-between items-center border-t border-teal-500 py-5 last-of-type:border-b">
                            <div className="flex items-center space-x-4">
                                <img className="w-16 h-16 object-cover" src={`/img/${item.image}`} alt="" />
                                <div>
                                    <p className="text-lg">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="space-x-2">
                                        <button className="btn-change-quantity" onClick={() => increaseQuantity(item.id)} disabled={item.quantity === maxItems}>
                                           <FontAwesomeIcon icon={faChevronUp} />
                                        </button>
                                        <button className="btn-change-quantity mr-3" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity === minItems}>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </button>
                                        Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => removeItemFromOrder(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer">
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
