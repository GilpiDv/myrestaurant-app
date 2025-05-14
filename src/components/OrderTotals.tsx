import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    subtotal: number
    tipAmount: number
    grandTotal: number
}

export default function OrderTotals({subtotal, tipAmount, grandTotal}: OrderTotalProps) {

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
        </>
    )
}
