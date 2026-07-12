
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import ProductPreviewCard, { ProductCard, ProductPreviewCardStatic } from './ProductPreviewCard';

import './App.css'
import './style.css'
import useFetch from './useFetch';
import NavBar from './NavBar';


function App() {

  const {product, isLoading, error}: {product: ProductCard[], isLoading: boolean, error: null} = useFetch();

  const test = false;

  return (
    <>
      <ProductPreviewCardStatic />
      
      {/* Change 'test' variable to true below to see the ProductPreviewCard Component being populated with data from  /data.data.json */}
      
      {test && <NavBar /> }
      {test &&isLoading && <div>Data is loading...</div>}
      {test &&error && <div>Error: ${error}</div>}

      {test && product.map(element => {
        console.log(element.productID);
        return <ProductPreviewCard key={element.productID} {...element} />
        })} 
    </>
    
  );
}

export default App
