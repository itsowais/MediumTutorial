
  const APP_ID = '';
  const API_KEY = '';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);

function userRegistered( user )
{
  console.log( user+"user has been registered" );
}

function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( "error code - " + err.statusCode );
}


document.getElementById("btn").addEventListener("click", function(event){
  event.preventDefault();
  var user = new Backendless.User();
  user.email = document.getElementById('email').value;
  user.password = document.getElementById('pass').value;

  Backendless.UserService.register( user ).then( userRegistered ).catch( gotError );
});


document.getElementById("login").addEventListener("click", function(event){
  event.preventDefault();
  Backendless.UserService.login( document.getElementById('lemail').value, document.getElementById('lpass').value )
 .then( function( loggedInUser ) {
  console.log(loggedInUser+' is logged in')
   })
 .catch( function( error ) {
   });
});
