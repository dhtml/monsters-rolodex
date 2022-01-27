import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box-component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url, {
            crossDomain: true,
            //headers: {'Content-Type':'application/json'}
        })
            .then(response => response.json())
            .then((users) => {
                this.setState({monsters: users});
                //console.log(users);
            });
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const { monsters,searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}


export default App;
