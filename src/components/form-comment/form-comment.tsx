import * as React from "react";

interface IFormCommentProps {
  isBlocked: boolean;
  comment: string;
  onChangeComment: () => void;
}

const FormComment: React.FC<IFormCommentProps> = ({isBlocked, comment, onChangeComment}: IFormCommentProps) => (
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

export default FormComment;
