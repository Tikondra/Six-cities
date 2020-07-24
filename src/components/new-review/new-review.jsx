import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FormRating from "../form-rating/form-rating.jsx";
import FormComment from "../form-comment/form-comment.jsx";
import FormSubmit from "../form-submit/form-submit.jsx";
import FormError from "../form-error/form-error.jsx";
import {getBntState, getComment, getError, getFormState, getRating} from "../../reducer/review/selectors";
import {ActionCreator, Operation} from "../../reducer/review/review";

const NewReview = ({btnState, formState, rating, comment, error,
  onChangeRating, onChangeComment, onSubmitReview}) => {
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitReview(comment, rating);
      }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating
        isBlocked={formState}
        rating = {rating}
        onChangeRating={onChangeRating}
      />
      <FormComment
        isBlocked={formState}
        comment = {comment}
        onChangeComment = {onChangeComment}
      />
      <FormSubmit
        isDisabled={btnState}
        isBlocked={formState}
      />
      {error ? <FormError/> : ``}
    </form>
  );
};

NewReview.propTypes = {
  btnState: PropTypes.bool.isRequired,
  formState: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeComment: PropTypes.func.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  btnState: getBntState(state),
  formState: getFormState(state),
  rating: getRating(state),
  comment: getComment(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeRating(rating) {
    dispatch(ActionCreator.changeRating(rating));
  },

  onChangeComment(evt) {
    dispatch(ActionCreator.changeComment(evt.target.value));
  },

  onSubmitReview(comment, rating) {
    dispatch(Operation.postReview(comment, rating));
  }
});

export {NewReview};
export default connect(mapStateToProps, mapDispatchToProps)(NewReview);
