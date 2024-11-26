import { readdir, rename } from "node:fs/promises";

for (let i = 1; i < 21; i++) {
  
  let data = await readdir("./work");
  let name = data[i];
  console.log(name);
  
  try{
    if (i < 10) {
    await rename(`./work/work${i}.html`,`./work/work0${i}.html`);
    console.log("已更改");
    }else{
      console.log("無需更改");
    }
  }catch(error){
    console.log("操作失敗");
  }
  
  
}
