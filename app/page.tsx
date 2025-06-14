"use client"

import Footer from "./components/footer";
import Header from "./components/header"
import HomePage from "./home/page"

export default function Home() {
  
  return (
    <main className="Container">
      <Header/>
      <HomePage/>
      <Footer />
    </main>
  );
}
