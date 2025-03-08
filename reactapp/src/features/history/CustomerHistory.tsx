import useCrud from "../../api/useCrud";
import historyService from "./historyService";
import { CustomerHistory } from "./types";
import styles from "./history.module.css";

function CartCustomerHistory () {
    const { data: history, loading, error } = useCrud<CustomerHistory>(historyService.getCustomerHistory);
    if (loading) return <div>Loading...</div>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Customer History</h2>
            {history.map((order) => (
                <div key={order.id} className={styles.historyItem}>
                    <h3>Order ID: {order.id}</h3>
                    <p>Seller: {order.seller}</p>
                    <p>Status: {order.status}</p>
                    <ul>
                        {order.items.map((item) => (
                            <li key={item.id}>
                                {item.product_name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default CartCustomerHistory;
