// export function searchAndHighlight(
//   text: string,
//   filter: string
// ): React.ReactNode {
//   if (!filter || filter.trim() === "") {
//     return text;
//   }

//   const escapedFilter = filter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
//   const regex = new RegExp(`(${escapedFilter})`, "gi");
//   const parts = text.split(regex);

//   return parts.map((part, index) =>
//     regex.test(part) ? <mark key={index}>{part}</mark> : part
//   );
// }

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
