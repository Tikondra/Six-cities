import * as React from "react";

interface Props {
  isBlocked: boolean;
  comment: string;
  onChangeComment: () => void;
}

const FormComment: React.FC<Props> = ({isBlocked, comment, onChangeComment}: Props) => {
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

export default FormComment;
