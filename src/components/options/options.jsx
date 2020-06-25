import React from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";

const getOption = (options) => options.map((it) => {
  return <li key={nanoid()} className="property__inside-item">
    {it}
  </li>;
});

const Options = ({options}) => {

  return <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {getOption(options)}
    </ul>
  </div>;
};

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

export default Options;
