import Header from './components/Header'
import Calculator from './components/Calculator'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="h-screen bg-white p-4 md:p-4">
      <Header />
      <Calculator />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default App
