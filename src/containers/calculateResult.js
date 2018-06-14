const calculateResult = (play, code) => {
  let result = [];

  //copy play and code to new arrays to protect against store contamination
  play = Array.from(play);
  code = Array.from(code);

  //first pass checks shared colors that also share an index
  //then replaces them with empty objects so they are ignored
  play.map((color, i) => {
    if (color == code[i]) {
      result.push("black");
      play.splice(i, 1, {});
      code.splice(i, 1, {});
    }
  });

  //second pass checks for shared colors that differ in index
  //then replaces them with empty objects so they are ignored
  play.map((color, i) => {
    let foundAt = code.indexOf(color);
    if (foundAt >= 0) {
      result.push("white");
      play.splice(i, 1, {});
      code.splice(foundAt, 1, {});
    }
  });

  return result;
};

export default calculateResult;
