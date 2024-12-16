'use client'

import { useEffect, useState } from "react";
import BlueHeader from "./components/blue-header";
import Carausel from "./components/caraousel";
import Editors from "./components/editorspick";
import Footer from "./components/footer";
import GreenDiv from "./components/green-div";
import Lastdiv from "./components/lastdiv";
import Navbar from "./components/navbar";
import ProductCard from "./components/products-card";
import Whitediv from "./components/white-dic";

export default function Home() {
  // State to track if it's mounted on the client
  const [isClient, setIsClient] = useState(false);

  // Ensuring that any browser-dependent code is run only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // We only render the components if it's the client to avoid hydration issues
  if (!isClient) {
    return null; // Or show a loading spinner until mounted
  }

  return (
    <div>
      <BlueHeader />
      <Navbar />
      <Carausel />
      <Editors />
      <ProductCard />
      <GreenDiv />
      <Whitediv />
      <Lastdiv />
      <Footer />
    </div>
  );
}






// import BlueHeader from "./components/blue-header";
// import Carausel from "./components/caraousel";
// import Editors from "./components/editorspick";
// import Footer from "./components/footer";
// import GreenDiv from "./components/green-div";
// import Lastdiv from "./components/lastdiv";
// import Navbar from "./components/navbar";
// import ProductCard from "./components/products-card";
// import Whitediv from "./components/white-dic";

// export default function Home(){
//   return(
//     <div>
//       <BlueHeader/>
//       <Navbar/>
//       <Carausel/>
//       <Editors/>
//       <ProductCard/>
//       <GreenDiv/>
//       <Whitediv/>
//       <Lastdiv/>
//       <Footer/>
           
//     </div>
//   )
// }