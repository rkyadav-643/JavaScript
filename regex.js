document.writeln("Regex Chapter Exapmple..");

var testvalue="This is cook  book is firs cook book";
var substing=/cook\s+Book/ig;
var result=substing.test(testvalue);
//alert(substing.test(testvalue));
//document.writeln("Substing value="+result);

var ssn = document.getElementById("pattern").value;
var pattern = /^\d{3}-\d{2}-\d{4}$/;
if (ssn.match(pattern))
alert("OK");
else
alert("Not OK");
