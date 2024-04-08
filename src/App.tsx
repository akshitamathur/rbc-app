import MainMessage from "./components/MainMessage";
import BannerMessage from "./components/BannerMessage";
import Profiles from "./components/Profiles";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div>
        {/* Main top message */}
        <MainMessage />

        {/* 3 Profiles Section */}
        <div className="section">
          <div className="row justify-content-center">
            {/* Displaying the Three Profiles */}
            <Profiles personId={0}/>
            <Profiles personId={1}/>
            <Profiles personId={2}/> 
          </div>
        </div> 
         
        {/* Banner at the bottom of the page */}     
        <BannerMessage />
      </div>
    </div>
  );
}

export default App;
