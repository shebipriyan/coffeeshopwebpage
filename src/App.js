import image from './Amercano.jpeg';
import image1 from './photos/Espresso.jpeg';
import image2 from './photos/latte.jpeg'
import image3 from'./photos/Cappusino.jpeg';
import image4 from'./photos/A.jpeg';
import image5 from './photos/iced coffe.jpeg';
import image6 from './photos/cold coffe.jpeg';
import image7 from './photos/brew coffe.jpeg';
import './App.css';
import Menubar from'./Menubar.js';


function App() {
  return (
    <div className="App">
       <Menubar />
      <header>
        <h1>Coffee House</h1>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to our Coffee House</h2>
            <p>Enjoy the best coffee in town!</p>
           
          </div>
          <section className="menu">
            <div>

           <h3>Americano</h3>
        <img src={image} alt="Coffee " />
        <p>An americano is just water and espresso</p>
        
      </div>
      <div className="coffeeimage">
      <h3>Espresso</h3>
        <img src={image1} alt="Coffee 1" />
        <p>Espresso is a concentrated form of coffe</p>
      </div>
      <div className="coffeeimage">
      <h3>Latte</h3>
        <img src={image2} alt="Coffee 2" />
        <p>A Latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink</p>
      </div>
      <div className="coffeeimage">
      <h3>Cappuccino</h3>
        <img src={image3} alt="Coffee 3" />
        <p>a coffee made with heated milk with a thick mass of bubble</p>
      </div>
      <div className="coffeeimage">
      <h3>Take away</h3>
        <img src={image4} alt="Coffee 4" />
            </div>
      <div className="coffeeimage">
      <h3>Ice Coffee</h3>
        <img src={image5} alt="Coffee 5" />
       </div>
      <div className="coffeeimage">
      <h3>cold coffe</h3>
        <img src={image6} alt="Coffee 6" />
        
      </div>
      <div className="coffeeimage">
      <h3>Brew Coffee</h3>
        <img src={image7} alt="Coffee 7" />
        
      </div>
      </section>
     
    </section>
    <section className="about">
      <h2>Contact Us</h2>
        <p>Email: info@coffeeshop.com</p>
        <p>Phone: 945821674</p>
      </section>
      </main>
    </div>
  );
}
     
   

export default App;
