import { Clothing } from "../types/clothing";
import { baseUrl } from "./constants";

export default class ClotheServices {
    static async getAllClothes(): Promise<Array<Clothing>> {
        const token = localStorage.token;
        
        try {
            const response = await fetch(`${baseUrl}/clothes`, {
                method: 'GET',
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            const responseJson = await response.json();
            return responseJson;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async save(clothing: Clothing) {
        const token = localStorage.token;
        try {
            const response = await fetch(`${baseUrl}/clothes`, {
                method: 'POST',
                body: JSON.stringify(clothing),
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            const responseJson = await response.json();
            return responseJson;
        } catch (e) {
            console.log(e);
            return [];
        }
    }
}