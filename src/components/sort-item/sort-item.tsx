import * as React from "react";

interface ISortItemProps {
  sortType: string;
  activeType: string;
  onClickBySortType: (sortType: string) => void;
}

const SortItem: React.FC<ISortItemProps> = ({sortType, activeType, onClickBySortType}: ISortItemProps) => {
  const isActive: string = activeType === sortType ? ` places__option--active` : ``;

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
