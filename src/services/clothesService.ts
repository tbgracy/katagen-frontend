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
            const result = responseJson.clothes as Array<Clothing>;
            for (let i in result) {
                result[i].image = `${baseUrl.replace('api/v1', '')}${result[i].image}`;
            }
            return result;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async save(clothingForm: HTMLFormElement) {
        const token = localStorage.token;

        const body = new FormData(clothingForm);

        try {
            const response = await fetch(`${baseUrl}/clothes`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                },
                body: body,
            })

            const responseJson = await response.json();
            return responseJson;
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    static async delete(clothing: Clothing) {
        const token = localStorage.token;

        try {
            const response = await fetch(`${baseUrl}/clothes/${clothing.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Token ${token}`,
                }
            })
            return response.ok;
            
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}