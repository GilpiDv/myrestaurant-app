import { tipOptions } from "../data/db"

type TipPercentageFormProps = {
    tip: number
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({tip, setTip}: TipPercentageFormProps) {
    return (
        <div className="space-y-2">
            <h2 className='font-black text-2xl'>Tip:</h2>
            <form action="">
                {tipOptions.map((tipOption) => {
                    return (
                        <div key={tipOption.id} className="flex gap-2">
                            <input 
                                id={'tip_' + tipOption.id} 
                                type="radio" 
                                name={'tip'} 
                                value={tipOption.value} 
                                checked={tipOption.value === tip}
                                onChange={e => setTip(Number(e.target.value))}
                                // onChange={e => setTip(+e.target.value)} - The + also converts the value from string to number.
                            />
                            <label htmlFor={'tip_' + tipOption.id}>{tipOption.label}</label>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}
