import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaPlane, FaHotel, FaShip, FaGlobe } from "react-icons/fa";

function Home() {
  const [destination, setDestination] = useState("");

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Your Gateway to Unforgettable Travel Experiences</h1>
        <p className="text-lg">Book flights, hotels, cruises, and tours seamlessly with top travel platforms.</p>
        <div className="flex justify-center gap-4">
          <button className="border p-2 rounded"><FaPlane /> Flights</button>
          <button className="border p-2 rounded"><FaHotel /> Hotels</button>
          <button className="border p-2 rounded"><FaShip /> Cruises</button>
          <button className="border p-2 rounded"><FaGlobe /> Tours</button>
        </div>
      </section>

      {/* Search & Booking Section */}
      <section className="flex flex-col items-center space-y-4">
        <input 
          placeholder="Enter Destination (e.g., Paris, Bahamas)" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
          className="w-full md:w-1/2 border p-2"
        />
        <button className="w-full md:w-1/4 bg-blue-500 text-white p-2 rounded">Search & Book</button>
      </section>

      {/* Featured Destinations */}
      <section>
        <h2 className="text-2xl font-semibold">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {["Bali", "Santorini", "Dubai"].map((place) => (
            <div key={place} className="border p-4 rounded">
              <h3 className="text-xl font-bold">{place}</h3>
              <p>Explore {place} with exclusive travel deals.</p>
              <button className="mt-2 w-full bg-green-500 text-white p-2 rounded">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-2xl font-semibold">What Our Customers Say</h2>
        <div className="border p-4 mt-4 rounded">
          <p>"Best travel booking experience! Seamless and easy." - John D.</p>
        </div>
      </section>

      {/* Contact & Support */}
      <section>
        <h2 className="text-2xl font-semibold">Need Assistance?</h2>
        <textarea placeholder="Ask us anything..." className="mt-2 border p-2 w-full" />
        <button className="mt-2 bg-red-500 text-white p-2 rounded">Submit</button>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
