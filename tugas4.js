var a=170;
var b=168;
var c=188;

if(a>b && a>c && b>c){
  console.log("a is the tallest");
  console.log("a,b,c");
}else if(a>b && a>c && b<c){
  console.log("a is the tallest");
  console.log("a,c,b");
}else if(b>a && b>c && a>c){
  console.log("b is the tallest");
  console.log("b,a,c");
}else if(b>a && b>c && a<c){
  console.log("b is the tallest");
  console.log("b,c,a");
}else if(c>a && c>b && a>b){
  console.log("c is the tallest");
  console.log("c,a,b");
}else if(c>a && c>b && a<b){
  console.log("c is the tallest");
  console.log("c,b,a");
}



// if(b>c){
//   if(a>b){
//     console.log("a is the tallest")
//     console.log("a,b,c");
//   }else if(c>a){
//     console.log("b is the tallest")
//     console.log("b,c,a")
//   }
// }
// if(){
//   if(a>b){
//     console.log("c is the tallest");
//     console.log("c,a,b")
//   }else{
//     console.log("c is the tallest")
//     console.log("c,b,a");
//   }
// }
