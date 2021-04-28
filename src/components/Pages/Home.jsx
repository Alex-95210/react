import React from 'react'
import Navbar from '../Layouts/Navbar'
import Cars from '../cars/Cars'
const Home = (props) => {
    return (
        <div>
            <Navbar title="Internationnal Trade Auto"/>
            <div className="container">
                <Cars cars={props.cars} loading={props.loading}/>  
            </div>
        </div>
    )
}

export default Home
