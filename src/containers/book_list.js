import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      console.log(this.props);
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Will show up as props insde of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    selectBook: selectBook
  },
  dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
