export const highlightFilter = (str: string, filter: string) => {
  if (!filter) return str;
  const regExp = new RegExp(filter, "ig");
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((el, index, arr) => {
      if (index < arr.length - 1) {
        const firstMatch = matchValue.shift();
        return (
          <>
            {el}
            <span style={{ background: "#80d8ff" }}>{firstMatch}</span>
          </>
        );
      }
      return el;
    });
  }
  return str;
};
