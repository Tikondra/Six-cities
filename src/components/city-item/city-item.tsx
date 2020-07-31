import * as React from "react";

interface ICityItemProps {
  city: {
    title: string;
    isActive: boolean;
  };
  index: number;
  onChangeCity: (index: number) => void;
}

const CityItem: React.FC<ICityItemProps> = ({city: {title, isActive}, index, onChangeCity}: ICityItemProps) => {
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
