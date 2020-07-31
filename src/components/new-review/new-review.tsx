import * as React from "react";
import {connect} from "react-redux";
import FormRating from "../form-rating/form-rating";
import FormComment from "../form-comment/form-comment";
import FormSubmit from "../form-submit/form-submit";
import FormError from "../form-error/form-error";
import {getBntState, getComment, getError, getFormState, getRating} from "../../reducer/review/selectors";
import {ActionCreator, Operation} from "../../reducer/review/review";

interface INewRewievProps {
  btnState: boolean;
  formState: boolean;
  rating: number;
  comment: string;
  error: boolean;
  onChangeRating: () => void;
  onChangeComment: () => void;
  onSubmitReview: (comment: string, rating: number) => void;
}

const NewReview: React.FC<INewRewievProps> = ({btnState, formState, rating, comment, error,
  onChangeRating, onChangeComment, onSubmitReview}: INewRewievProps) => (
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
