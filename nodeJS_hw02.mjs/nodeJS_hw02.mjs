import { rename } from "node:fs";

for (let i = 1; i < 21; i++) {
  
    rename(`./work${i}.html`, `./work/work${i}.html`, (error) => {
      if (error) {
        console.log(error);
        console.log("操作失敗");
        return;
      }
      console.log("操作成功");
    });
  
}

