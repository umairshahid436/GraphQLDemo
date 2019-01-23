import React, { Component } from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;
class BookList extends Component {
  getBooks = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading ...</div>;
    } else {
      return data.books.map(e => {
        return <li key={e.id}>{e.name}</li>;
      });
    }
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">{this.getBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
// query resp will be in props
