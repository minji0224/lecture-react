import store from "../Store";
import List from "./List";
import React from "react";

export default class KeywordList extends React.Component {
  constructor() {
    super();

    this.state = { keywordList: [] };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    return (
      <List
        data={this.state.keywordList}
        hasIndex
        onClick={this.props.onClick}
      />
    );
  }
}
