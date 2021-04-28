import "./App.css";
import Home from "./components/Pages/Home";
import Car from './components/Pages/Car'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import About from './components/Pages/About'
import React, { Component } from "react";

class App extends Component {
  state = {
    cars: [],
    car: {},
    loading: false,
  };

  getAllCars = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://private-anon-cfe6e3a589-carsapi1.apiary-mock.com/cars"
    );
    this.setState({ cars: res.data, loading: false });
  }

  getCarById = async (id) => {
    this.setState({ loading: true });
    console.log(id)
    // const res = await axios.get(
    //   'https://private-anon-3bf7efa92c-carsapi1.apiary-mock.com/cars/<car_id>?id='+id
    // );
    let res = null;
    for(let auto of this.state.cars){
      if(auto.id == id){
        res = auto;
      }
    }
    this.setState({ car: res, loading: false });
  }

  async componentDidMount() {
    this.getAllCars();
  }
  render() {
const {cars, loading, car } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home loading={loading} cars={cars} />
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/car/:id' render={props => ( 
            <Car { ...props } getCarById={this.getCarById} car={car}/>
            )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
