import * as React from "react";

interface Props {
  city: {
    title: string;
    isActive: boolean;
  };
  index: number;
  onChangeCity: (index: number) => void;
}

const CityItem: React.FC<Props> = ({city: {title, isActive}, index, onChangeCity}) => {
  const activeClass = isActive ? `tabs__item--active` : ``;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${activeClass}`}
        href="#"
        onClick={() => onChangeCity(index)}
      >
        <span>{title}</span>
      </a>
    </li>
  );
};

export default CityItem;
