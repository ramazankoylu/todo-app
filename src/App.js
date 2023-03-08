import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React, { useState } from "react";



function App() {
  return ( <>
  <section className="todoapp">
    <Header />
    <Content />
    <Footer />
  </section>
  <Footer />
  </>
  );
}

export default App;
