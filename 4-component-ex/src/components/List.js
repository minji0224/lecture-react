import { formatRelativeDate } from "../helpers";
import React from "react";

const List = ({
  data = [],
  hasIndex = false,
  hasDate = false,
  onClick,
  onRemove,
}) => {
  const handleRemove = (event, keyword) => {
    event.stopPropagation();
    onRemove(keyword);
  };

  return (
    <ul className="list">
      {data.map((item, index) => {
        return (
          <li key={item.id} onClick={() => onClick(item.keyword)}>
            {hasIndex && <span className="number">{index + 1}</span>}
            <span>{item.keyword}</span>
            {hasDate && (
              <span className="date">{formatRelativeDate(item.date)}</span>
            )}
            {!!onRemove && (
              <button
                className="btn-remove"
                onClick={(event) => handleRemove(event, item.keyword)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
