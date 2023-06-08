import React, { Component} from 'react';
import Cardlist from "./cardlist";
import SearchBox from './searchbox';
import './app.css'

class App extends Component {
    constructor(){
        super(); 
        this.state = {
            robot: [], 
            searchfield: ''
        }

    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(value => this.setState({robot:value}));
    }

   
    
    onsearchange=(event)=>{
        this.setState({searchfield: event.target.value})  
    }
   
    render() {
        const {robot, searchfield} = this.state;
       const filterlist = robot.filter(robots=>{return robots.name.toLowerCase().includes(searchfield.toLowerCase())})
       return ((!robot.length) ?  <h1>Loading</h1> :<div className="tc">
       <h1 className="f1 tc ttu tracked">Robotfriends</h1>
       <SearchBox searchange = {this.onsearchange}/>
       <Cardlist robot ={filterlist}/>

   </div>)}}
         
         

export default App;