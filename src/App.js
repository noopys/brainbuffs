import logo from './logo.svg';
import './App.css';
import NavigationRight from './ui-components/NaviationRight'
import HeroCenter from './ui-components/HeroCenter'

function App() {
  return (
    <div className="App">
      <header style={{
          paddingBottom: "10px",
          height: "100px",
          width: "100%"
        }}>
        <NavigationRight/>
      </header>
      <div style={{
          width: "100%"
        }}>
        <HeroCenter/>
      </div>
    </div>
  );
}


export default App;