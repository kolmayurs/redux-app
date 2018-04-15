import React from 'react';
import {bindActionCreators} from 'redux';
import {fetchData, increment, decrement} from '../actions/action.js';
import { connect } from 'react-redux';
import '../css/style.css';
import Loader from './loading.js';

function mapStateToProps(state){
  return {
	data: state.fetch.data,
	fetch: state.fetch.fetching,
	value: state.counter
  }
}

/*function mapDispatchToProps(dispatch){
  return {
    fetchDs: () => {
      dispatch(fetchData());
    }
  };
};*/
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ fetchData, increment, decrement}, dispatch)
    }
}

class App extends React.Component {
	constructor(props){
		super(props);
		this.ClickIt = this.ClickIt.bind(this);
		this.Add = this.Add.bind(this);
		this.Sub = this.Sub.bind(this);
	}
	componentDidMount(){
	this.props.fetchData();
}
ClickIt(name, price){
	let resp = window.confirm('You are click on ' +name+ ' worth INR' +price);
	if(resp){
		alert('Thank you');
	}
}
Add(){
	this.props.increment();
}

Sub(){
	this.props.decrement();
}


  render() {
  	if(this.props.fetch){
  		return(
  				  <Loader />
  			)
  	}
  	const product_data = this.props.data;
  	//console.log(product_data);
    return (
      <div className="App">
        <h1>React App</h1>
        <h2>Counter : {this.props.value}</h2>
        <button onClick={this.Add.bind(this)}>+</button><button onClick={this.Sub.bind(this)}>-</button>
        {
        	product_data.map(items=>
        		<h2 onClick={this.ClickIt.bind(this,items.name,items.price)} key={items.product_id}>{items.name} || {items.price} </h2>
        	)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
