const glob=require('glob');
const list={};
async function makeList(dirPath,list){
  const files=glob.sync(`${dirPath}/**/index.js`);
  console.log(files);
  for(let file of files){
    const component=file.split('/')[2];
    console.log(component);
  }
}

makeList('components/lib',list);
// {
//   card:'./components/lib/card/index.js',
//   demo:'./components/lib/card/index.js'
// }

module.exports={
  // entry
}