import React from "react";
import PropTypes from "prop-types";

const SortItem = ({sortType, activeType, onClickBySortType}) => {
  const isActive = activeType === sortType ? ` places__option--active` : ``;

  return (
    <li
      key={sortType}
      className={`places__option${isActive}`}
      tabIndex="0"
      onClick={() => onClickBySortType(sortType)}
    >{sortType}</li>
  );
};

SortItem.propTypes = {
  sortType: PropTypes.string.isRequired,
  activeType: PropTypes.string.isRequired,
  onClickBySortType: PropTypes.func.isRequired,
};

export default SortItem;
