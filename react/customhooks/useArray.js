import { useState } from "react";

export default function useArray(arr) {
  const [array, setArray] = useState(arr);

  const push = (val) => {
    setArray((prevArr) => {
      return [...prevArr, val];
    });
  };

  const update = (target, val) => {
    setArray((prevArr) => {
      let targetAr = [...prevArr];
      targetAr[target] = val;
      return targetAr;
    });
  };

  const filter = (filterFn) => {
    setArray((prevArr) => prevArr.filter(filterFn));
  };

  const remove = (target) => {
    setArray((prevArr) => {
      let targetAr = [...prevArr];
      targetAr.splice(target, 1);
      return targetAr;
    });
  };

  const clear = () => {
    setArray([]);
  };

  return {
    array,
    push,
    update,
    filter,
    remove,
    clear,
  };
}
