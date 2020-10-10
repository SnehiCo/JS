
function IntReverse(n)
{
 const rev = n.toString().split('').reduce((x,y) => y+x, '');
 return parseInt(rev) * Math.sign(n);

}
