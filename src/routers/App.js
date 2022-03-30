import Navbars from '../layouts/Navbars';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Footers from '../component/Footers';

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <Footers />
    </div>
  );
}


export default App;
