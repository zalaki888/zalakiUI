const glob=require('glob');
const list={};
async function makeList(dirPath,list){
  const files=glob.sync(`${dirPath}/**/index.js`);
  console.log(files);
}


// {
//   card:'./components/lib/card/index.js',
//   demo:'./components/lib/card/index.js'
// }

module.exports={
  entry:
}