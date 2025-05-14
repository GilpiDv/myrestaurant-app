import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus  } from '@fortawesome/free-solid-svg-icons'
import type { OrderItem } from "../types"

type TipPercentageFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
    order: OrderItem[]
}

export default function TipPercentageForm({tip, setTip, order}: TipPercentageFormProps) {
    return (
        <div className="space-y-2">
            <h2 className='font-black text-2xl'>Tip:</h2>
            <form action="">
                    <div className="flex gap-2">
                        <button
                            type="button"
                            className="btn-change-quantity"
                            onClick={() => setTip(tip - 5)}
                            disabled={order.length === 0 || tip === 0}
                        >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <p className="text-md font-bold min-w-10">
                            {tip} %
                        </p>
                        <button
                            type="button"
                            className="btn-change-quantity"
                            onClick={() => setTip(tip + 5)}
                            disabled={order.length === 0 || tip === 50}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        {/* <label htmlFor={'tip_' + tipOption.id}>{tipOption.label}</label> */}
                    </div>
            </form>
        </div>
    )
}
