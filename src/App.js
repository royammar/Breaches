import React from "react";
import './styles/global.scss';
import BreachPage from './pages/BreachPage'
import BreachDetails from './pages/BreachDetails'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { createHashHistory } from 'history';
import BreachContextProvider from "./context/BreachContext";
import NavBar from "./cmps/NavBar";
import Footer from "./cmps/Footer";



const history = createHashHistory();
function App() {

  return (
    <BrowserRouter history={history}>
    <NavBar></NavBar>
      <BreachContextProvider>
        <Switch>
          <Route path="/breach/" component={BreachPage} exact></Route>
          <Route path="/breach/:id" component={BreachDetails} exact></Route>
        </Switch>
      </BreachContextProvider>
      <Footer></Footer>
    </BrowserRouter>

  );
}
export default App;

