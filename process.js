var sum = 0;
process.argv.forEach(element => {
  if (isNaN(element)) return;
  sum += Number(element);
  
});

console.log(sum);