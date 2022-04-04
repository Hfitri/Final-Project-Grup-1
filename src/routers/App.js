import Navbars from '../layouts/Navbars';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import News from '../page/News';

function App() {
  return (
    <div className="App">
      <Navbars></Navbars>
      <News></News>
         </div>
  );
}

export default App;
