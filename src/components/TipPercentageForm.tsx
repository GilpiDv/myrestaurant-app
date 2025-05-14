import { tipOptions } from "../data/db"

type TipPercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({setTip}: TipPercentageFormProps) {
    return (
        <div className="space-y-2">
            <h2 className='font-black text-2xl'>Tip:</h2>
            <form action="">
                {tipOptions.map((tip) => {
                    return (
                        <div key={tip.id} className="flex gap-2">
                            <input 
                                id={'tip_' + tip.id} 
                                type="radio" 
                                name={'tip'} 
                                value={tip.value} 
                                onChange={e => setTip(Number(e.target.value))}
                                // onChange={e => setTip(+e.target.value)} - The + also converts the value from string to number.
                            />
                            <label htmlFor={'tip_' + tip.id}>{tip.label}</label>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}
