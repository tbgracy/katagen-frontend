export type Clothing = {
    id: number,
    image: string,
    type: 'sport' | 'plage' | 'casual' | 'formel',
    category: 'haut' | 'bas' | 'accessory' | 'shoe',
    hot: boolean,
    colors: Array<string>,
    hexcode?: string,
    user_id?: number,
}