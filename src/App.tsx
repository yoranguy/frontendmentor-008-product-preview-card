
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import ProductPreviewCard, { ProductCard, ProductPreviewCardStatic } from './ProductPreviewCard';

import './App.css'
import './style.css'
import useFetch from './useFetch';
import NavBar from './NavBar';


function App() {

  // Part 1 - Remove comments below to see the ProductPreviewCard Component being populated with data from  /data.data.json
  
  // const {product, isLoading, error}: {product: ProductCard[], isLoading: boolean, error: null} = useFetch();

  return (
    <>
      <ProductPreviewCardStatic />
  
      
      {/* Part 2 - Remove comments below to see the ProductPreviewCard Component being populated with data from  /data.data.json */}
  
      {/* <NavBar />
      {isLoading && <div>Data is loading...</div>}
      {error && <div>Error: ${error}</div>}
      {product.map(element => {
        console.log(element.productID);
        return <ProductPreviewCard key={element.productID} {...element} />
      })}  */}

    </>


    
  )
}

export default App
