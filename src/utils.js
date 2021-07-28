// 1. Words Counter

export const countWords = (word) => {
  if (word) {
    let str = word;
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
  } else {
    return 0;
  }
};
