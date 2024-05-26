import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import Tabs, { TapType } from "./components/Tabs.js";
import SearchResult from "./components/SearchResult.js";
import store from "./Store.js";
import KeywordList from "./components/KeywordList.js";
import HistoryList from "./components/HistoryList.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      selectedTab: TapType.KEYWORD,
      searchResult: [],
      submited: false,
    };
  }

  // 자식컴포에서 이벤트가 발생했을 때 호출될 콜백함수
  handleChangeInput(searchKeyword) {
    if (searchKeyword <= 0) {
      this.handleReset();
    }
    this.setState({ searchKeyword });
  }

  handleReset() {
    this.setState({ searchKeyword: "", searchResult: [], submited: false });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchResult,
      submited: true,
      searchKeyword,
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <SearchForm
            keyword={this.state.searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onReset={() => this.handleReset()}
            onSubmit={() => this.search(this.state.searchKeyword)}
          />
          <div className="content">
            {this.state.submited ? (
              <SearchResult data={this.state.searchResult} />
            ) : (
              <>
                <Tabs
                  selectedTab={this.state.selectedTab}
                  onChange={(selectedTab) => this.setState({ selectedTab })}
                />
                {this.state.selectedTab === TapType.KEYWORD && (
                  <KeywordList onClick={(keyword) => this.search(keyword)} />
                )}
                {this.state.selectedTab === TapType.HISTORY && (
                  <HistoryList onClick={(keyword) => this.search(keyword)} />
                )}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
