// ランダムな文字列を生成するためのファイル、
// nodeで使って

const fs = require("fs");

const targetList = [];

for (let i = 0; i < 200000; i++) {
    targetList.push(`"${Math.random().toString(32).substring(2)}"`);
}

fs.writeFileSync("./randomDatas.js", "");
fs.writeFileSync("./randomDatas.js", `export default [${targetList}]`);
