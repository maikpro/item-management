import { Item } from "../models/Item";

export class ItemService {
    static async getItems(): Promise<Item[]> {
        const response = await fetch('http://localhost:8787/api/items');
        const items = await response.json();
        return items;
    }
}