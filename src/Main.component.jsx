import { Box, Grid, TextField, Button, Container } from "@material-ui/core";
import { compose } from "ramda";
import React, { useState } from "react";
import TableComponent from "./Table.component";

const MainComponent = () => {
  const [words, setWords] = useState("");
  const [totalSpace, setTotalSpace] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalChar, setTotalChar] = useState(0);
  const [countPara, setCountPara] = useState(0);
  const [sentenseCounts, setSentenseCounts] = useState(0);

  // 1 Word Counter;

  const countWords = (words) => {
    if (words) {
      let str = words.trim();
      const removeEmptyElements = (arr) => {
        const index = arr.findIndex((el) => el.trim() === "");
        if (index === -1) return arr;
        arr.splice(index, 1);
        return removeEmptyElements(arr);
      };

      const removeBreaks = (arr) => {
        const index = arr.findIndex((el) => el.match(/\r?\n|\r/g));
        if (index === -1) return arr;
        const newArray = [
          ...arr.slice(0, index),
          ...arr[index].split(/\r?\n|\r/),
          ...arr.slice(index + 1, arr.length)
        ];
        return removeBreaks(newArray);
      };

      let x = compose(removeEmptyElements, removeBreaks)(str.split(" "));
      let y = str === "" ? 0 : x.length;
      setTotalWords(y);
    } else {
      setTotalWords(0);
    }
  };
  //  Space Counter

  const spaceCount = (word) => {
    if (word) {
      let str = word;
      let countSpace;
      countSpace = str.split(" ").length - 1;
      setTotalSpace(countSpace);
    } else {
      setTotalSpace(0);
    }
  };

  // Character Count

  const characterCount = (word) => {
    if (word) {
      let str = word;
      let countChar;
      countChar = str.length;
      setTotalChar(countChar);
    } else {
      setTotalChar(0);
    }
  };

  //  Sentense Count

  const sentenseCount = (words) => {
    if (words) {
      let str = words.trim();
      const removeEmptyElements = (arr) => {
        const index = arr.findIndex((el) => el.trim() === "");
        if (index === -1) return arr;
        arr.splice(index, 1);
        return removeEmptyElements(arr);
      };

      const removeBreaks = (arr) => {
        const index = arr.findIndex((el) => el.match(/\r?\n|\r/g));
        if (index === -1) return arr;
        const newArray = [
          ...arr.slice(0, index),
          ...arr[index].split(/\r?\n|\r/),
          ...arr.slice(index + 1, arr.length)
        ];
        return removeBreaks(newArray);
      };

      let sentense = compose(removeEmptyElements, removeBreaks)(str.split("."));
      let sentenseLength = str === "" ? 0 : sentense.length;
      setSentenseCounts(sentenseLength);
    } else {
      setSentenseCounts(0);
    }
  };

  // Count Paragraph

  const countParagraph = (word) => {
    if (word) {
      let str = word.trim();
      let countPara;
      const removeEmptyElements = (arr) => {
        const index = arr.findIndex((el) => el.trim() === "");
        if (index === -1) return arr;
        arr.splice(index, 1);
        return removeEmptyElements(arr);
      };
      let countPara1 = removeEmptyElements(str.split(/\r?\n|\r/));
      countPara = str === "" ? 0 : countPara1.length;
      setCountPara(countPara);
    } else {
      setCountPara(0);
    }
  };

  //  OnClikCount

  const onClickHandler = () => {
    countWords(words);
    spaceCount(words);
    characterCount(words);
    countParagraph(words);
    sentenseCount(words);
  };

  // Const ClearCounts

  const ClearCounts = () => {
    setWords("");
    countWords(0);
    spaceCount(0);
    characterCount(0);
    countParagraph(0);
    sentenseCount(0);
  };

  return (
    <Container component={Box} maxWidth="lg" p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="words"
            value={words}
            variant="outlined"
            onChange={(e) => setWords(e.target.value)}
            placeholder="Enter paragraph..."
            multiline
            rows={10}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            onClick={onClickHandler}
            color="secondary"
            style={{
              color: "white",
              fontWeight: "bold"
            }}
            fullWidth
            variant="contained"
            size="medium"
          >
            Count Word
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button
            onClick={ClearCounts}
            color="secondary"
            style={{
              color: "white",
              fontWeight: "bold"
            }}
            fullWidth
            variant="contained"
            size="medium"
          >
            Clear all
          </Button>
        </Grid>
      </Grid>

      {/* Table Grid */}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableComponent
            counts={{
              wordCounts: totalWords,
              countSpace: totalSpace,
              countChar: totalChar,
              countParagraph: countPara,
              sentenseCount: sentenseCounts
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainComponent;
