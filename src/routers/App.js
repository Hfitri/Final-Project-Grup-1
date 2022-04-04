import Navbars from '../layouts/Navbars';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import Footers from '../layouts/Footers';
import Homepage from '../page/HomePage';


function App() {

  return (
    <div className="App">
      <Navbars></Navbars>
      <Homepage />
      <Footers />
    </div>
  );
}


export default App;
