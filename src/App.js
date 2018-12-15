import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import Form from "./Components/Form/Form";
import Map from "./Components/Map/Map";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
        <Map />
      </Provider>
    );
  }
}

export default App;
