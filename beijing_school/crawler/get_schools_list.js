
// http://bj.bendibao.com/edu/20151119/208555.shtm
// run this js script from the web console
var result = [];

$("tr").each(function (i, e) {
  if (i == 0) {
    return;
  }
  var resultItem = {};
  var children = $(this).children();
  children.each(function (index, element) {
    if (index == 0) {
      resultItem.name = element.innerText.trim();
    }


    if (index == 1) {
      var primary_school_names=element.innerText.trim().split("\n\n");
      resultItem.primary_school = primary_school_names.map(function(name, i){
        // console.log(i,name)
        return {name:name}
      });
    }

    if (index == 2) {
      // resultItem.middle_school = element.innerText.trim().split("\n\n");
       var middle_school_names=element.innerText.trim().split("\n\n");
      resultItem.middle_school =middle_school_names.map(function(name,i){
        return {name:name}
      });
    }


  });
  if (resultItem.name == ""||resultItem.primary_school == undefined || resultItem.primary_school.length < 1) {
    return
  }
  result.push(resultItem);
});

console.log(result);
console.log(JSON.stringify(result));