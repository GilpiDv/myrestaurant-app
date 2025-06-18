import { formatCurrency } from "../helpers"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faTrash, faBellConcierge, faCaretRight  } from '@fortawesome/free-solid-svg-icons'
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
    console.log(order);
    return (
    <div>
        <h2 className='font-black text-4xl'>Order</h2>

        <div className="space-y-3 mt-8 h-[35vh] overflow-y-auto p-3 border border-white shadow-md/20 shadow-gray-400 rounded-lg">
            {order.length === 0 ? 
                <div className="h-full flex items-center justify-center">
                    <h2 className="font-bold text-2xl text-center">We are ready to receive your order! <FontAwesomeIcon icon={faBellConcierge} /></h2>  
                </div> :
                (
                    order.map( item => (
                        <div key={item.id} className="flex justify-between items-center py-5 border-b border-b-white last-of-type:border-b-0 ">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <p className="text-lg">
                                        <span className="font-medium">{item.name}</span>
                                    </p>
                                    <p className="space-x-2">
                                        <button className="btn-change-quantity" onClick={() => decreaseQuantity(item.id)} disabled={item.quantity === minItems}>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </button>
                                        <button className="btn-change-quantity mr-3" onClick={() => increaseQuantity(item.id)} disabled={item.quantity === maxItems}>
                                           <FontAwesomeIcon icon={faChevronUp} />
                                        </button>
                                        Qty: {''} 
                                        <span className="font-semibold">{item.quantity}</span>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <span className="font-semibold">{formatCurrency(item.price * item.quantity)}</span>
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => removeItemFromOrder(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black cursor-pointer">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
