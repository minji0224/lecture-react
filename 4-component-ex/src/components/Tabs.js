import React from "react";

export const TapType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TapType.KEYWORD]: "추천검색어",
  [TapType.HISTORY]: "최근검색어",
};

const Tabs = ({ selectedTab, onChange }) => {
  return (
    <ul className="tabs">
      {Object.values(TapType).map((tabs) => {
        return (
          <li
            key={tabs}
            className={selectedTab === tabs ? "active" : ""}
            onClick={() => onChange(tabs)}
          >
            {TabLabel[tabs]}
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
