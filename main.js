console.log("Hello World");

var three_things, make_today_better;

$("#done-button").click(function(){
  three_things = $(".input-area")[0].value;
  make_today_better = $(".input-area")[1].value;

  localStorage.setItem('first_input', three_things);
  localStorage.setItem('second_input', make_today_better);

  console.log(three_things);
  console.log("");
  console.log(make_today_better);
  var table_row = "<tr><td> January 13th, 2019 </td><td>" + localStorage.getItem('first_input') + "</td><td>" + localStorage.getItem('second_input') + "</td></tr>";
  $("table tbody").append(table_row);

});
texxt.text(localStorage.getItem('first_input'));

console.log(localStorage.getItem('first_input'));
console.log(localStorage.getItem('second_input'));
