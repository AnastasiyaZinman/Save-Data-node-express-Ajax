$('button').on('click', function () {
  alert("Hi!");
  $.ajax({
    method: "GET",
    url: 'file',
    dataType: "json",
    success: function (data) {
      console.log(data);
      AppendDataToHTML(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
})

var AppendDataToHTML = function (data) {
  console.log ("data");
$('.data').append("Hi! My name is " + data.name +". I'm a " + data.job + ".");
}