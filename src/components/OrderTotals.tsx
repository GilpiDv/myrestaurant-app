import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    subtotal: number
    tipAmount: number
    grandTotal: number
    saveOrder: () => void
}

export default function OrderTotals({subtotal, tipAmount, grandTotal, saveOrder}: OrderTotalProps) {

    return (
        <>
            <div className='space-y-2 text-right'>
                <h2 className='font-black text-2xl'>Totals:</h2>

                <p> Subtotal: {''}
                    <span className='font-bold'>{formatCurrency(subtotal)}</span>
                </p>
                <p> Tip: {''}
                    <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                </p>
                <p> Grand Total: {''}
                    <span className='font-bold'>{formatCurrency(grandTotal)}</span>
                </p>
            </div>

            <button
                className={`w-full bg-black p-3 uppercase text-white font-bold cursor-pointer col-span-2 my-10 
                    ${
                        grandTotal === 0 ? 'opacity-10 cursor-not-allowed' : 'hover:scale-102 '
                    }`}                
                disabled={grandTotal === 0}
                onClick={saveOrder}
            >
                Save Order
            </button>
        </>
    )
}
