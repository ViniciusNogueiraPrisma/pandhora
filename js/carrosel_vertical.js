// $(document).ready(function () {
//   var x = 0,
//     container = $(".container"),
//     items = container.find("div"),
//     containerHeight = 0,
//     numberVisible = 5,
//     intervalSec = 2000;

//     console.log("a")

//   if (!container.find("li:first").hasClass("first")) {
//     container.find("li:first").addClass("first");
//   }

//   items.each(function () {
//     if (x < numberVisible) {
//       containerHeight = containerHeight + $(this).outerHeight();
//       x++;
//     }
//   });

//   container.css({ height: containerHeight, overflow: "hidden" });

//   function vertCycle() {
//     var firstItem = container.find("li.first").html();

//     container.append("<li>" + firstItem + "</li>");
//     firstItem = "";
//     container
//       .find("li.first")
//       .animate({ marginTop: "-50px" }, 600, function () {
//         $(this).remove();
//         container.find("li:first").addClass("first");
//       });
//   }

//   if (intervalSec < 700) {
//     intervalSec = 700;
//   }

//   function startCycle() {
//     return setInterval(vertCycle, intervalSec);
//   }

//   var init = startCycle();

//   container.hover(
//     function () {
//       clearInterval(init);
//     },
//     function () {
//       init = startCycle();
//     }
//   );
// });
