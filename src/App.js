import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header.js"
import Hero from "./components/Hero.js"
import UserCard from "./components/UserCard.js"

export default function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
        <UserCard />
    </div>
  );
}


