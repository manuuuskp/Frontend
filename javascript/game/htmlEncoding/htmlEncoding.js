function htmlEncoding(str, keywordArr) {
  const keySet = new Set(keywordArr);

  const strArr = str.split(" ");
  const result = strArr.map((word) => {
    let output = "";
    if (keySet.has(word)) {
      output = `<strong>${word}</strong>`;
    } else {
      for (let i = 0; i < word.length; i++) {
        let prefix = word.slice(0, i + 1);
        let suffix = word.slice(i + 1);

        if (keySet.has(prefix) && keySet.has(suffix)) {
          output = `<strong>${word}</strong>`;
          break;
        } else if (keySet.has(prefix) && !keySet.has(suffix)) {
          output = `<strong>${prefix}</strong>`;
        } else if (!keySet.has(prefix) && keySet.has(suffix)) {
          output = `<strong>${suffix}</strong>`;
        }
      }
    }
    return output !== "" ? output : word;
  });

  return result.join(" ");
}
