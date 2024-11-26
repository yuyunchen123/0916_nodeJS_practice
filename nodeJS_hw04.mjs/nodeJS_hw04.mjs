import { writeFile, rename, mkdir } from "node:fs/promises";

try {
  await mkdir("./zero");
  console.log("mkdir 操作成功");
} catch (error) {
  console.log("mkdir 操作失敗");
}

for (let i = 1; i < 21; i++) {
  const file = `./zero/work${i}.html`;
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>work${i}</title>
</head>
<body>
<h1>這是第 ${i} 個 HTML 檔</h1>
    
</body>
</html>`;
  try {
    await writeFile(file, content);
  } catch (error) {
    console.log("writeFile 操作失敗");
  }

  try {
    if (i < 10) {
      await rename(`./zero/work${i}.html`, `./zero/work0${i}.html`);
      console.log("已更改");
    } else {
      console.log("無需更改");
    }
  } catch (error) {
    console.log("rename 操作失敗");
  }
}


