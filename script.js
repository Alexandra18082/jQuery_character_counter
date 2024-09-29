$(document).ready(function () {
  $("#text-input").on("input", function () {
    const text = $(this).val();
    const count = text.length;
    $("#count").text(count);
  });
});
