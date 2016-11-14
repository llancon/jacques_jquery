$('#submitButton').on('click', function(ev){
  console.log($('#formie').serialize())
  $.post(
    'https://whispering-shore-82906.herokuapp.com/api/notes',
    $('#formie').serializeArray()
  )
    location.reload();
})

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

// function load_notes(){
  $.getJSON('https://whispering-shore-82906.herokuapp.com/api/notes')
  .then(function(response){
    return response.notes.forEach(function(whatever){
      var display_notes = template(whatever)
      $('#notes').prepend(display_notes)

    })
  })
// Here this is one method I'm using to load tags but so far does not work
$('#getTags').on('click', function(ev){
// var input = $( ":button" ).html();
//
// $.getJSON('https://whispering-shore-82906.herokuapp.com/api/tags');
// // Prevent the form from submitting
// $( "form" ).submit(function( event ) {
//   event.preventDefault();
// });
// })
// Here is another method I'm trying but does not load tags.
function load_tags(){
  $.getJSON('https://whispering-shore-82906.herokuapp.com/api/tags')
  .then(function(response){
    response.tags.forEach(function(tag){
      $('#getTags').append('<p>' + tag.name + '</p>')
    })
  })
}})
