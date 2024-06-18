// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    {/* <SpecialMenu /> */}
    <Chef />
    <Gallery />
    {/* <Intro /> */}
    <Laurels />
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default App;
