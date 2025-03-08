import { useState } from "react";
import SideBar from "../../components/layout/sidebar";
import styles from "./history.module.css";

import CustomerHistory from "./CustomerHistory";
import SellerHistory from "./SellerHistory";


function CartHistory() {
    type HistoryType = "customer" | "seller";
    const [historyType, setHistoryType] = useState<HistoryType>("customer");

    function customerHistory() {
        setHistoryType("customer");
    }

    function sellerHistory() {
        setHistoryType("seller");
    }


    return (
        <div className={styles.Container}>
            <SideBar />
            <div className={styles.cartHistoryContent}>
            <h1>Cart Hystory</h1>
            <button onClick={customerHistory}>Customer</button>
            <button onClick={sellerHistory}>Seller</button>
            <div className={styles.cartHistory}>
                {historyType === "customer" ?(
                   <CustomerHistory />
                ) : (
                    <SellerHistory /> 
                )}
            </div>
            </div>
            
        </div>
    )
}

export default CartHistory;