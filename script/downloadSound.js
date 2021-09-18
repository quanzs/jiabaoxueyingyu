const fs = require("fs");
const download = require("download");

const words = [
  {
    word: "crocodile",
    hint: "鳄鱼🐊",
  },
  {
    word: "bat",
    hint: "蝙蝠🦇",
  },
  {
    word: "lion",
    hint: "狮子🦁",
  },
  {
    word: "zebra",
    hint: "斑马🦓",
  },
  {
    word: "elephant",
    hint: "大象🐘",
  },
  {
    word: "monkey",
    hint: "猴子🐒",
  },
  {
    word: "tiger",
    hint: "老虎🐅",
  },
  {
    word: "grass",
    hint: "草地",
  },
  {
    word: "one",
    hint: "1",
  },
  {
    word: "two",
    hint: "2",
  },
  {
    word: "three",
    hint: "3",
  },
  {
    word: "four",
    hint: "4",
  },
  {
    word: "five",
    hint: "5",
  },
  {
    word: "six",
    hint: "6",
  },
  {
    word: "seven",
    hint: "7",
  },
  {
    word: "eight",
    hint: "8",
  },
  {
    word: "nine",
    hint: "9",
  },
  {
    word: "ten",
    hint: "10",
  },
];
async function run() {
  for (const w of words) {
    fs.writeFileSync(
      `s/${w.word}.mp3`,
      await download(
        `https://fanyi.baidu.com/gettts?lan=en&text=${w.word}&spd=3&source=web`
      )
    );
  }
}

run();
