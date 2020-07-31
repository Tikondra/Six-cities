import * as React from "react";
import SortItem from "../sort-item/sort-item";

interface ISortingProps {
  sortTypes: [];
  sortType: string;
  isOpen: boolean;
  onClickBySort: () => void;
  onClickBySortType: () => void;
}

const getSortItem = (sortTypes, activeType, onClickBySortType) => sortTypes.map((sortType) => {
  return (
    <SortItem
      key = {sortType}
      sortType={sortType}
      activeType={activeType}
      onClickBySortType = {onClickBySortType}
    />
  );
});

const Sorting: React.FC<ISortingProps> = ({sortTypes, sortType, isOpen, onClickBySort, onClickBySortType}: ISortingProps) => {
  const isOpenClass = isOpen ? ` places__options--opened` : ``;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}
        onClick={() => onClickBySort()}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isOpenClass}`}>
        {getSortItem(sortTypes, sortType, onClickBySortType)}
      </ul>
    </form>
  );
};

export default Sorting;
