import React from "react";

const SearchForm = ({ keyword, onChange, onReset, onSubmit }) => {
  const handleChangeInput = (event) => {
    // 자식컴에서 이벤트가 발생됐을 때 부모로부터 받은 콜백함수를 호출한다.
    onChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //엔터를 누르지 않아도 이미 키워드값은 저장되어있기때문에 따로 인풋의 벨류값을 주지 않아도 된다
    //부모콜백함수호출하기
    onSubmit();
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <form onReset={handleReset} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        autoFocus
        value={keyword}
        onChange={handleChangeInput}
      />
      {keyword.length > 0 && (
        <button type="reset" className="btn-reset"></button>
      )}
    </form>
  );
};

export default SearchForm;
