export interface IProducts {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number
}


export interface IProduct extends IProducts {
    quantity?: number;
}
