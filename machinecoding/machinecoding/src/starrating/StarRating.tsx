import { useState } from "react";
import "./starrating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [selection, setSelection] = useState(0);

  const onSelectRating = (idx:number):void => {
    setRating(idx + 1);
  }

  const onEnter = (idx:number):void => {
    setSelection(idx + 1);
  }

  const onLeave = (idx:number):void => {
    setSelection(0);
  }

  return (
    <div className="star__container">
      {[...Array(5)].map((arr, idx) => (
        <span className={`star__rating ${idx < selection || idx < rating ? 'active' : null}`} key={idx} onClick={() => onSelectRating(idx)} onMouseOver={() => onEnter(idx)} onMouseLeave={() => onLeave(idx)}></span>
      ))}
    </div>
  );
};

export default StarRating;
