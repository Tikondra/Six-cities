import * as React from "react";

interface Props {
  sortType: string;
  activeType: string;
  onClickBySortType: (sortType: string) => void;
}

const SortItem: React.FC<Props> = ({sortType, activeType, onClickBySortType}) => {
  const isActive = activeType === sortType ? ` places__option--active` : ``;

  return (
    <li
      key={sortType}
      className={`places__option${isActive}`}
      tabIndex={0}
      onClick={() => onClickBySortType(sortType)}
    >{sortType}</li>
  );
};

export default SortItem;
