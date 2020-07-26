import React from "react";
import './styles/global.scss';
import BreachPage from './pages/BreachPage'
import BreachDetails from './pages/BreachDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import BreachContextProvider from "./context/BreachContext";
import NavBar from "./cmps/NavBar";
import Footer from "./cmps/Footer";



const history = createBrowserHistory();
function App() {

  return (
    <BrowserRouter history={history}>
    <NavBar></NavBar>
      <BreachContextProvider>
        <Switch>
          <Route path="/" component={BreachPage} exact></Route>
          <Route path="/breach/:id" component={BreachDetails} exact></Route>
        </Switch>
      </BreachContextProvider>
      <Footer></Footer>
    </BrowserRouter>

  );
}
export default App;

