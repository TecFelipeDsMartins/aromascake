import { createContext } from "react";
import { useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [ cart, setCart] = useState({})
    const addCart = product => {
        setCart( old =>({
            ...old,
            [product.id]: product
        }))
    }
    return(
        <CartContext.Provider  value={{cart, addCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const cart =  useContext(CartContext)
    return cart
} 