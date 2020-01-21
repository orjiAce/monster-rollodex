import React, {Component} from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            monsters: []
        };
    }

    changeText = (e) => {
        this.setState({

            searchValue: e.target.value,
        });
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    }

    render() {

        const {monsters, searchValue} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue));
        return (
            <div className="App">
                <h1>Monster Rollodox</h1>
<SearchBox placeholder="Search monsters"  handleChange={this.changeText} />

                <p>{this.state.searchValue}</p>
                <CardList monsters={filteredMonsters}>

                </CardList>

            </div>
        );
    }
}

export default App;
