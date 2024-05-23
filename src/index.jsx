import React from 'react';
import ReactDOM from 'react-dom/client';
// imprt App from 'App';
import './Index.css';

const nonVegData = [
  {
    name: 'Biryani',
    ingredients: 'Chicken, Biryani masala, Salt, Rice',
    price: 200,
    place: 'Kanminike',
  },
  {
    name: 'Kabbab',
    ingredients: 'Chicken, Kabbab powder,Egg, cornflour',
    price: 120,
    place: 'Kanminike',
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Vijay Biryani Center</h1>
    </header>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Nonveg />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer>
      <address>
        Kaniminike, Kumbalagodu Post, Kengeri Hobli, Bangalore -560074
      </address>
    </footer>
  );
}

function Nonveg() {
  return (
    <div>
      <h2>Biryani</h2>
      <p>Chicken, Biryani masala, Salt, Rice</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
