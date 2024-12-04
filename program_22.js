// reverse a number without any method
function reverseNum(num) {
  let ans=0;
  while(num!==0){
   let r=num%10;
   c=Math.floor(num/10);
   num=c;
   ans=ans*10+r;
  }
  return ans;
}
const num = 1345;
const output = reverseNum(num);
console.log(output);
