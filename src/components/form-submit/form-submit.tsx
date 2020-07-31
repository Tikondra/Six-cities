import * as React from "react";

interface Props {
  isDisabled: boolean;
  isBlocked: boolean;
}

const FormSubmit: React.FC<Props> = ({isDisabled, isBlocked}: Props) => (
  <div className="reviews__button-wrapper">
    <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe
      your stay with at least <b className="reviews__text-amount">50 characters</b>.
    </p>
    <button
      className="reviews__submit form__submit button"
      type="submit"
      disabled={isDisabled || isBlocked}
    >Submit</button>
  </div>
);

export default FormSubmit;
