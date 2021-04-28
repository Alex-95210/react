import "./App.css";
import Home from "./components/Pages/Home";
import Car from './components/Pages/Car'
import Manufacturer from './components/Pages/Manufacturer'
import Manufacturers from './components/manufacturer/Manufacturers'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import About from './components/Pages/About'
import React, { Component } from "react";

class App extends Component {
  state = {
    cars: [],
    car: {},
    manufacturers:[],
    manufacturer:{},
    manufacturerCars:[],
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

  getAllManufacturers = async () => {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://private-anon-3bf7efa92c-carsapi1.apiary-mock.com/manufacturers"
    );
    this.setState({ manufacturers: res.data, loading: false });
  }

  getCarsByBrandName = async (brandName) =>{
    let res = [];
    this.setState({ loading: true})
    for(let auto of this.state.cars){
      if(auto.make == brandName){
        res.push(auto);
      }
    }
    this.setState({ manufacturerCars: res , loading: false });
  }

  async componentDidMount() {
    this.getAllCars();
    this.getAllManufacturers();
  }
  render() {
const {cars, loading, car, manufacturers, manufacturer } = this.state;

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
            <Route
              exact
              path="/manufacturers"
              render={(props) => (
                <Manufacturers loading={loading} manufacturers={manufacturers} loading={loading} />
              )}
            />
            <Route exact path='/manufacturer/:name' render={props => ( 
            <Manufacturer { ...props } getCarsByBrandName={this.getCarsByBrandName} manufacturer={manufacturer}/>
            )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
