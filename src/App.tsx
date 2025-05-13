import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";

function App() {

    const { order, addItem, removeItemFromOrder } = useOrder()

    return (
        <>
            <header className="bg-amber-200 py-5">
                <h1 className="text-center font-black text-4xl">Tip Calculator</h1>
            </header>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-4xl font-black">Menu</h2>
                    <div className="space-y-3 mt-8">
                        {menuItems.map(item => (
                            <MenuItem 
                                key={item.id}
                                item={item}
                                addItem={addItem}
                            />
                        ))}
                    </div>
                </div>
                <div className="border border-dashed border-slate-200 p-5 rounded-lg space-y-10">
                    <OrderContent 
                        order={order}
                        removeItemFromOrder={removeItemFromOrder}
                    />
                </div>
            </main>
        </>
    )
}

export default App