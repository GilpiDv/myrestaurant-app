type OrderTotalProps = {
    calculateSubtotal: number
}

export default function OrderTotals({calculateSubtotal}: OrderTotalProps) {

    return (
        <>
            <div className='space-y-2'>
                <h2 className='font-black text-2xl'>Total and Tips:</h2>

                <p> Subtotal: {''}
                    <span className='font-bold'>${calculateSubtotal}</span>
                </p>
                <p> Tip: {''}
                    <span className='font-bold'>$0</span>
                </p>
                <p> Grand Total: {''}
                    <span className='font-bold'>$0</span>
                </p>
            </div>
        </>
    )
}
