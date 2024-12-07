
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Details from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Layout from "./Components/layout/Layout";
import { useDentistaStates } from "./Components/utils/global.context";

function App() {
  const {state} = useDentistaStates();
  return (
      <div  className={state.theme}>
          
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/favs" element={<Favs/>}/>
                <Route path="/dentist/:id" element={<Details/>}/>
              </Route>
            </Routes>

      </div>
  );
}

export default App;
