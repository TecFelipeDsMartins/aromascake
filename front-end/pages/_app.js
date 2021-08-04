import '../styles/globals.css'
import { CartProvider } from '../Components/CartContext'


export default function MyApp({ Component, pageProps }) {
  return (
  <CartProvider>  
    <Component {...pageProps} />
  </CartProvider>
  )
}