import React, { Component } from "react";

class ArticleVotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: props.votes
    };
  }
  
  handleClick() {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return (
      <div>
        Votes: {this.state.votes}
        <button 
          id="article-votes-button-plus"
          onClick={() => this.handleClick()}
        >
          +
        </button>
      </div>
    );
  }
}

export default ArticleVotes;
