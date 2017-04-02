var pxa = 640;
var pxb = 960;
var pxc = Math.sqrt((pxa * pxa) + (pxb * pxb)).toFixed(0);
var ic = 3.5;
var ppi = (pxc / ic).toFixed(0);
var ia = (pxa / ppi).toFixed(2);
var ib = (pxb / ppi).toFixed(2);
console.log("Pixels Height = " + pxa + "px");
console.log("Pixels Width = " + pxb + "px");
console.log("Pixels Diagnol = " + pxc + "px");
console.log("Pixels Per Inch " + ppi + "ppi");
console.log("Inches Height = " + ia + "in");
console.log("Inches Width = " + ib + "in");
console.log("Inches Diagnol = " + ic + "in");



console.log("<td>" + pxa + "px </td>");
console.log("<td>" + pxb + "px </td>");
console.log("<td>" + pxc + "px </td>");
console.log("<td>" + ppi + "ppi </td>");
console.log("<td>" + ia + "in </td>");
console.log("<td>" + ib + "in </td>");
console.log("<td>" + ic + "in </td>");