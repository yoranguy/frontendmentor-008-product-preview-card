import { useEffect, useState } from "react";

interface Cart {
    items: Item[];

    }

class Cart {
    
    constructor(){
        this.items = [] as Item[];
    }

    addToCart( item : Item){
        this.items.push(new Item(`${item}`));
    }

    deleteFromCart(item: Item){
        this.items = this.items.filter((cartItem) => {
            cartItem.id != item.id
        });
    }

    toString(){        
        return this.items.forEach((item) => item.toString());
    }

}

interface Item {
    id: number;
    name: string;
}

class Item {
    id = 0;
    name = "";
    
    constructor(name: string){
        this.id = this.generateID();
        this.name = name;
    }

    private generateID(): number{
        this.id += 1;
        return this.id;
    }

    toString(){
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const useCart = () => {

    const [cart, setCart] = useState(new Cart());

    useEffect(() => {
        
    })

    function addItem(item: string){
        cart.addToCart(new Item(`${item}`));
        setCart(cart);
    }

    return {cart};
}

export default useCart;


