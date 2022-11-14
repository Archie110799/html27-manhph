window.onload = function (e) {
  //ajax
  $.get("./header.html", function (data, status) {
    $("header").html(data);
  });
};

function testJq() {
  console.log("run jq");
  let elm = $("#test");
  elm.html("abc");
}
