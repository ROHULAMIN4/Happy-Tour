import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Login from "./Component/Firebase/Login";
import Authprovider from "./Component/Firebase/Conetext";
import PrivateRoute from "./Component/Firebase/PrivateRouthe";
import ManageOrder from "./Component/ManageOrder/ManageOrder";
import AddService from "./Component/Service/Addservice";
import Book from "./Component/Book/Book";
import Notfound from "./Component/Notfound/Notfound";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service">
              <Book></Book>
            </PrivateRoute>
            <Route path="/manageorder">
              <ManageOrder></ManageOrder>
            </Route>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>
            <Route path="/service/:id">
              <Book></Book>
            </Route>
            <Route path="/*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
