import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getData } from "./Firebase";

function List(props) {
  const data = props.data;
  const listItems = data.map((doc) => (
    <li className="List">
      <h1>{doc}</h1>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    };
  }
  render() {
    this.getDataFromFirebase();
    return (
      <div className="App">
        <List data={this.state.docs} />
      </div>
    );
  }

  getDataFromFirebase() {
    getData().then((arr) => {
      console.log(arr);
      this.setState({
        docs: arr,
      });
    });
  }
}

export default App;
