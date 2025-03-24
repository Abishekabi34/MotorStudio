import { useState,ReactElement } from "react";
import Head from "./components/navbar/Head";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/homepage/Home";
import "./App.css";
import { DeviceProvider } from "./DeviceContext";
function App() {
  const [activeComponent, setActiveComponent] = useState<ReactElement>(<Home />);
  return (
      <DeviceProvider>
        <div className="container">
          <div className="main-content">
            <div className="header-content"><Head/></div>
            <div className="content">
              <div>
                <div className="side-bar">
                  <Sidebar setActiveComponent={setActiveComponent}/>
                </div>
              </div>
              <main className="home-web">
                {activeComponent}
              </main>
            </div>
          </div>
        </div>
      </DeviceProvider>
  );
}

export default App;


