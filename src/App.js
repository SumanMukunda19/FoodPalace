import Navbar from './components/navbar'
import Centbody from './components/Centbody'
import Aboutus from './components/aboutus'
import Features from './components/features'
import Recipes from './components/recipes'
import Takeaway from './components/Takeaway'
import Testimonial from './components/Testimonial'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Centbody/>
  <Aboutus/>
  <Features/>
  <Recipes/>
  <Takeaway/>
  <Testimonial/>
  <Footer/>
    </div>
  );
}

export default App;
