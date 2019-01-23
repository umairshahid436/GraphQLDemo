import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import BookList from "./components/bookList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div id="main">
            <h2>Books</h2>
            <BookList />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
