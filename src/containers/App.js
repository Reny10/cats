import React,  {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from '../actions';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import Header from '../components/Header.js';
import { cats } from '../cats.js';
import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error
    }
    }

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => dispatch(requestCats())
  }
}

class App extends Component {

componentDidMount() {
    this.props.onRequestCats();
  }

   /*constructor(){
    super()
    this.state={
  cats:cats
  //searchfield:''
  }}
   /*componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ cats: users})});
  }*/
    //onSearchChange = (event) => {
    //this.setState({ searchfield: event.target.value })}

  render() {
    const { searchField, onSearchChange, cats, isPending } = this.props;
    const filteredCats = cats.filter(cat =>{
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending?
     <h1>Loading</h1>:
    (
    <div className='tc'>
    <Header/>
    <SearchBox searchChange={onSearchChange}/>
    <Scroll>
    <ErrorBoundry>
    <CardList cats= {filteredCats} />
    </ErrorBoundry>
    </Scroll>
    </div>
     );
}}
export default connect(mapStateToProps, mapDispatchToProps) (App);