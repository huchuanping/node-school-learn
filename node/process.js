var result=0
for(var i=2;i<process.argv.length;i++){
  result+=Number(process.argv[i])
}
// console.log(result)
  var fs=require('fs')
  // var lines=((fs.readFileSync(process.argv[2])).toString().split('\n')).length-1

// console.log(lines)
fs.readFile(process.argv[2],function(err,data){
  if(err) throw error;
  console.log(data.toString().split('\n').length-1)
})
