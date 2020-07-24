import React from "react";
import PropTypes from "prop-types";

const FormComment = ({isBlocked, comment, onChangeComment}) => {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      value={comment}
      placeholder="Tell how was your stay, what you like and what can be improved"
      minLength={50}
      maxLength={300}
      disabled={isBlocked}
      onChange={onChangeComment}
    />
  );
};

FormComment.propTypes = {
  isBlocked: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired,
  onChangeComment: PropTypes.func.isRequired,
};

export default FormComment;
