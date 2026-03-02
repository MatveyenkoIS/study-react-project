import "./App.css"
import Header from "./components/Header/Header"
import ProductList from "./components/ProductList/ProductList"
import Footer from "./components/Footer/Footer"

function App() {
  const products = [
    { id: 1, title: "Gaming PC", price: 80000, isInStock: true},
    { id: 2, title: "Coffee Machine", price: 10000, isInStock: true},
    { id: 3, title: "Electric Kettle", price: 3000, isInStock: false},
    { id: 4, title: "Smart TV", price: 50000, isInStock: true},
    { id: 5, title: "PlayStation 5", price: 60000, isInStock: false},
    { id: 6, title: "Microwave Oven", price: 6000, isInStock: false},
  ]

  const handleProductSelect = (title) => {
    alert(`${title} has been added to your cart.`)
  }

  return (
    <>
      <Header />
      <main>
        <ProductList products={products} onProductSelect={handleProductSelect} />
      </main>
      <Footer />
    </>
  )
}

export default App;
