import MenuItem from "./components/MenuItem";
import OrderContent from "./components/OrderContent";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import MenuCategories from "./components/MenuCategories";
import { menuItems, categoriesItems } from "./data/db"
import useOrder from "./hooks/useOrder";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { clsx } from 'clsx';
import { AnimatePresence, motion } from "framer-motion";

function App() {

    const { order, addItem, removeItemFromOrder, subtotal, tip, setTip, tipAmount, grandTotal, saveOrder, increaseQuantity, decreaseQuantity, MAX_ITEMS, MIN_ITEMS } = useOrder()
    // TODO: Create useMenu hook and split the logic of menu and order.
    const [selectedCategory, setSelectedCategory] = useState("");
    const [orderOpen, setOrderOpen] = useState(false);

    const categoryItems = selectedCategory
        ? menuItems.filter(item => item.category === selectedCategory)
        : [];
    
    return (
        <>
            <header className="py-6 border-b-4 border-slate-200 flex flex-col items-center">
                <img width={'180px'} src={'/img/restaurant-logo.png'} alt="" />
                {/* <h1 className="text-center font-black text-6xl">Tip Calculator</h1> */}
            </header>

            <main className={clsx("lg:max-w-12/12 mx-auto pt-6 grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1")}>
                <div className="p-5">
                    <h2 className="text-3xl text-center font-extralight create-order-label">Create your order</h2>
                    <div className="mt-8 grid grid-cols-1 gap-2 border-t-2 border-slate-200 pt-4 pb-10">
                        <div className={clsx("rounded-lg relative", selectedCategory && "col-span-2 min-h-[300px]")}>
                            <AnimatePresence mode="wait">
                                {!selectedCategory ? (
                                    <motion.div
                                        key="categories"
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 15 }}
                                        transition={{ duration: 0.2 }}
                                        className="grid sm:grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 menu-categories-container"
                                    >
                                        {categoriesItems.map(category => (
                                            <MenuCategories
                                                key={category.id}
                                                category={category}
                                                onClick={() => setSelectedCategory(category.name)}
                                            />
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="items"
                                        initial={{ opacity: 0, x: 15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -15 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <button
                                            className="bg-white rounded-full w-10 h-10 absolute font-bold cursor-pointer"
                                            onClick={() => setSelectedCategory('')}
                                            aria-label="Back"
                                        >
                                            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                                        </button>
                                        <h3 className="text-2xl font-bold mb-4 text-center category-name-label">{selectedCategory}</h3>
                                        <div className="grid gap-2 mt-6 menu-items-container sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                            {categoryItems.length === 0 && <p>No items in this category.</p>}
                                            {categoryItems.map(item => (
                                                <MenuItem key={item.id} item={item} addItem={addItem} />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <AnimatePresence>
                {orderOpen && (
                    <>
                        {/* Blurry overlay when the order is open */}
                        <motion.div
                            key="blur-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-xs"
                            aria-hidden="true"
                        />
                        <motion.div
                            key="order"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed left-0 right-0 bottom-0 z-40 bg-white shadow-2xl border-t border-slate-200 p-5 rounded-t-lg space-y-10 order-container max-w-2xl mx-auto"
                            style={{ maxHeight: "80vh", overflowY: "auto" }}
                        >
                            <button
                                className="cursor-pointer absolute left-1/2 -translate-x-1/2 bg-slate-800 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-slate-300"
                                onClick={() => setOrderOpen(false)}
                                aria-label="Close Order"
                            >
                                <FontAwesomeIcon icon={faChevronDown} size="lg" />
                            </button>
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Pestaña fija para abrir la orden */}
            {!orderOpen && (
                <button
                    className="cursor-pointer fixed left-1/2 bottom-0 z-50 -translate-x-1/2 bg-slate-800 text-white px-8 py-3 rounded-t-lg shadow-lg flex justify-center items-center gap-2 font-bold text-lg"
                    onClick={() => setOrderOpen(true)}
                    aria-label="Open Order"
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                    <p>
                        Open Order
                    </p>
                </button>
            )}
            </main>
        </>
    )
}

export default App