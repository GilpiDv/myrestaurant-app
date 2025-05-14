import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";

function App() {

    const { order, addItem, removeItemFromOrder, subtotal, tip, setTip, tipAmount, grandTotal, saveOrder, increaseQuantity, decreaseQuantity, MAX_ITEMS, MIN_ITEMS } = useOrder()

    return (
        <>
            <header className="py-6">
                <h1 className="text-center font-black text-6xl">Tip Calculator</h1>
            </header>

            <main className="lg:max-w-10/12 mx-auto pt-12 grid lg:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menu</h2>
                    <div className="mt-8 grid grid-cols-1 gap-2 menu-items-container lg:grid-cols-2">
                        {menuItems.map(item => (
                            <MenuItem 
                                key={item.id}
                                item={item}
                                addItem={addItem}
                            />
                        ))}
                    </div>
                </div>
                <div className="border border-dashed border-slate-200 p-5 rounded-lg space-y-10 order-container">
                    <OrderContent 
                        order={order}
                        removeItemFromOrder={removeItemFromOrder}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        maxItems={MAX_ITEMS}
                        minItems={MIN_ITEMS}
                    />

                    <div className="grid md:grid-cols-2">
                        <TipPercentageForm 
                            setTip={setTip}
                            tip={tip}
                            order={order}
                        />

                        <OrderTotals
                            subtotal={subtotal}
                            tipAmount={tipAmount}
                            grandTotal={grandTotal}
                            saveOrder={saveOrder}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default App