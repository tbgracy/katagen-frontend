export type Clothing = {
    id: number,
    image: string,
    type: string,
    category: string,
    hot: boolean,
    colors: Array<string>,
    user_id?: number,
}