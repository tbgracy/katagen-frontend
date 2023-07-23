import { baseUrl } from "./constants";

export default class UserService {
    static async loginOrRegister(username: string, password: string, action: "register" | "login"): Promise<boolean> {
        let url = `${baseUrl}/user`;

        if (action === 'login') {
            url += '/login';
        }

        const body = {
            username: username,
            password: password,
        };
        
        console.log(url);
        console.log(body);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                mode: 'cors',
                body: JSON.stringify(body),
            });

            console.log(`RESPONSE STATUE : ${response.status}`);

            if (response.status === 200 || response.status === 201) {
                const responseBody = await response.json();
                console.log(responseBody);
                // store token to localstorage
                if (action == "login") {
                    localStorage.setItem('token', responseBody.token);
                    console.log(localStorage.token);
                }
                return true;
            }
        } catch (e) {
            console.log(e);
        }
        return false;
    }

    static isLoggedIn(): boolean {
        if (localStorage.token){
            return true;
        } else {
            return false;
        }
    }

    static logout() {
        localStorage.removeItem('token');
    }
}