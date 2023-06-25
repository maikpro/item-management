import { useEffect, useState } from "react";
import { Item } from "../models/Item";
import { ItemService } from "../services/ItemService";

function ItemsList() {
    const [items, setItems] = useState<Item[]>([]);
    
    useEffect(() => {
        const fetchItems = async () => setItems(await ItemService.getItems());
        fetchItems();
    }, [])

    return(
        <div className="items">
            <ul>
                {
                    items.map(item => 
                        <li className="item" key={item.id}>
                            <p>id: {item.id}</p>
                            <p>name: {item.name}</p>
                            <p>price: {item.price}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default ItemsList;