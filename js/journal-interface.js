$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var entry = pingPong(goal);
    output.forEach(function(element) {
      $('#entries').append("<li>" + element + "</li>");
    });
  });
});
