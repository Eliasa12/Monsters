// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component
{
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: ''
      
    };
  }
    componentDidMount()
    {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    }
  render(){
    const {monsters , searchField} = this.state;
    const filtredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) )
    return(

      <div className='App'>
      <h1>Monsters </h1>
      <SearchBox placeholder='search Monsster'  handleChange = {e => this.setState({searchField : e.target.value} )} />
      <CardList monsters= {filtredMonsters}/>
       
     </div>
    );
  }
}
export default App;
