import React from "react";
import store from "../Store";
import List from "./List";

export default class HistoryList extends React.Component {
  constructor() {
    super();
    this.state = { historyList: [] };
  }

  componentDidMount() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  handleRemove(keyword) {
    console.log(keyword);
    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  render() {
    return (
      <List
        hasDate
        data={this.state.historyList}
        onClick={this.props.onClick}
        onRemove={(keyword) => this.handleRemove(keyword)}
      />
    );
  }
}
