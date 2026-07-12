import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import "./App.css";
import "./style.css";
import Notification from "./Notification";


export interface ProductCard {
    productID: string;
    imageDesktopURL: string;
    imageMobileURL: string;
    productType: string;
    productTitle: string;
    productDescription: string;
    MSRP: number;
    salePrice: number;
}

export class ProductCard {
    productID = "";
    imageURL = "";
    productType = "";
    productTitle = "";
    productDescription = "";
    salePrice = 0;
    MSRP = 0;
    
    constructor(productID: string, imageDesktopURL: string, imageMobileURL:string, productType: string, productTitle: string, productDescription: string, salePrice: number,  MSRP?: number){
        this.productID = productID;
        this.imageDesktopURL = imageDesktopURL;
        this.imageMobileURL = imageMobileURL;
        this.productType = productType;
        this.productTitle = productTitle;
        this.productDescription = productDescription;
        this.salePrice = salePrice;
        this.MSRP = MSRP ?? 0;
    }

    toString():string {
        return `productID: ${this.productID},
        this.imageDesktopURL: ${this.imageURL},
        this.imageMobileURL: ${this.imageURL},
        this.productType: ${this.productType},
        this.productTitle: ${this.productTitle},
        this.productDescription: ${this.productDescription},
        this.salePrice: ${this.salePrice}
        ${ this.MSRP === 0 ? ", this.MSRP: "+this.MSRP : 0}`
    }
}

function ProductPreviewCard(product: ProductCard) {

    const [addToCartNotification, setAddToCartNotification] = useState(false);
    

    const handleClick = () => {
        // alert("This has been added to the cart.");
        setAddToCartNotification(true);
        setTimeout(() => {
            setAddToCartNotification(false)

        }, 2000)

    };

    return (
        <>
            <div className="flex flex-wrap flex-col sm:flex-row w-87.5 sm:w-150 gap-0 pb-8" key={product.productID}>
                <div className="w-87.5 sm:w-75">
                    <img
                        src={product.imageMobileURL}
                        alt={product.productTitle}
                        className="block sm:hidden rounded-tl-md rounded-tr-md"
                    />
                    <img
                        src={product.imageDesktopURL}
                        alt={product.productTitle}
                        className="hidden sm:block rounded-bl-md rounded-tl-md h-full"
                    />
                </div>

                <div className="bg-[hsl(1,0%,100%)] flex flex-col flex-wrap gap-6.5 py-8 px-6 w-87.5 sm:w-75 rounded-bl-md rounded-br-md sm:rounded-br-md sm:rounded-tr-md sm: rounded-bl-none">
                    <div className="font-montserrat uppercase text-[hsl(228,12%,48%)] text-xs tracking-[0.3rem] font-medium">
                        Perfume
                    </div>
                    <div className="font-fraunces text-4xl font-bold text-black leading-8">
                        {product.productTitle}
                    </div>
                    <div className="font-montserrat text-[hsl(228,12%,48%)] text-base leading-6">
                        {product.productDescription}
                    </div>
                    <div className="flex flex-row flex-nowrap gap-x-6">
                        <div className="font-fraunces text-4xl text-[hsl(158,36%,37%)] font-bold">
                            ${product.salePrice}
                        </div>
                        <div className="font-montserrat text-[16px] line-through text-[hsl(228,12%,48%)] flex flex-row flex-nowrap justify-center items-center">
                            ${product.MSRP}
                        </div>
                    </div>
                    <button
                        className="flex flex-row flex-nowrap items-center justify-center gap-2.5 font-montserrat rounded-md w-full bg-[hsl(158,36%,37%)] h-12.5 text-white hover:bg-[hsl(158,42%,18%)] font-bold text-sm"
                        onClick={handleClick}
                    >
                        <img src="/images/icon-cart.svg" alt="Icon of a cart" />
                        Add to Cart
                    </button>
                </div>
            </div>

            { addToCartNotification && <Notification />}
        </>
    );
}

export function ProductPreviewCardStatic() {
    

    const [addToCartNotification, setAddToCartNotification] = useState(false);
    

    const handleClick = () => {
        // alert("This has been added to the cart.");
        setAddToCartNotification(true);
        setTimeout(() => {
            setAddToCartNotification(false)

        }, 2000)

    };

    return (
        <>
            <div className="flex flex-wrap flex-col sm:flex-row w-87.5 sm:w-150 gap-0 pb-8">
                <div className="w-87.5 sm:w-75">
                    <img
                        src="/images/image-product-mobile.jpg"
                        alt="Bottle of Gabrielle Essence Eau De Parfum"
                        className="block sm:hidden rounded-tl-md rounded-tr-md"
                    />
                    <img
                        src="/images/image-product-desktop.jpg"
                        alt="Bottle of Gabrielle Essence Eau De Parfum"
                        className="hidden sm:block rounded-bl-md rounded-tl-md h-full"
                    />
                </div>

                <div className="bg-[hsl(1,0%,100%)] flex flex-col flex-wrap gap-6.5 py-8 px-6 w-87.5 sm:w-75 rounded-bl-md rounded-br-md sm:rounded-br-md sm:rounded-tr-md sm: rounded-bl-none">
                    <div className="font-montserrat uppercase text-[hsl(228,12%,48%)] text-xs tracking-[0.3rem] font-medium">
                        Perfume
                    </div>
                    <div className="font-fraunces text-4xl font-bold text-black leading-8">
                        Gabrielle Essence Eau De Parfum
                    </div>
                    <div className="font-montserrat text-[hsl(228,12%,48%)] text-base leading-6">
                        A floral, solar and voluptuous interpretation composed by Olivier
                        Polge, Perfumer-Creator for the House of CHANEL.
                    </div>
                    <div className="flex flex-row flex-nowrap gap-x-6">
                        <div className="font-fraunces text-4xl text-[hsl(158,36%,37%)] font-bold">
                            $149.99
                        </div>
                        <div className="font-montserrat text-[16px] line-through text-[hsl(228,12%,48%)] flex flex-row flex-nowrap justify-center items-center">
                            $169.99
                        </div>
                    </div>
                    <button
                        className="flex flex-row flex-nowrap items-center justify-center gap-2.5 font-montserrat rounded-md w-full bg-[hsl(158,36%,37%)] h-12.5 text-white hover:bg-[hsl(158,42%,18%)] font-bold text-sm"
                        onClick={handleClick}
                    >
                        <img src="/images/icon-cart.svg" alt="Icon of a cart" />
                        Add to Cart
                    </button>
                </div>
            </div>

            { addToCartNotification && <Notification />}
        </>
    );
}


export default ProductPreviewCard ;

