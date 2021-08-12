$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const sideOne = parseInt($("input#sideOne").val());
    console.log(sideOne);
    const sideTwo = parseInt($("input#sideTwo").val());
    const sideThree = parseInt($("input#sideThree").val());
    
    if (sideOne >= (sideTwo + sideThree) || sideTwo >= (sideOne + sideThree) || sideThree >= (sideOne + sideTwo)) {
      $("span#result").text("not a  Triangle") 
    } else if (sideOne === sideTwo && sideTwo === sideThree) {
      $("span#result").text("Equilateral Triangle")
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne) {
      $("span#result").text("Isosceles Triangle")
    } else if (sideOne !== sideTwo && sideTwo !== sideThree && sideThree !== sideOne){
      $("span#result").text("Scalene Triangle") 
    } else
    $("span#result").text("Where are you??? Re-evaluate your life")
  });
});