import { Clothing } from "../types/clothing";
import { Outfit } from "../types/outfit";
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

    static async generate(
        temparture: number,
        type: 'sport' | 'plage' | 'casual' | 'formel',
        useTemp: boolean,
    ): Promise<Outfit | undefined> {

        const token = localStorage.token;
        useTemp;

        const body = {
            temparture: temparture,
            type: type,
        }

        try {
            const response = await fetch(`${baseUrl}/generate`, {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            const jsonResponse = await response.json();
            const result = jsonResponse.outfit as Outfit;
            
            if (result.haut !== "") result.haut.image = `${baseUrl.replace('api/v1', '')}${result.haut.image}`;
            if (result.bas !== "") result.bas.image = `${baseUrl.replace('api/v1', '')}${result.bas.image}`;
            if (result.shoe !== "") result.shoe.image = `${baseUrl.replace('api/v1', '')}${result.shoe.image}`;
            if (result.accessory !== "") result.accessory.image = `${baseUrl.replace('api/v1', '')}${result.accessory.image}`;
            return result;

        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}