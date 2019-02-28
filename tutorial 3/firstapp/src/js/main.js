function userRegistered( user )
{
  console.log( user+"user has been registered" );
}

function gotError( err ) // see more on error handling
{
  console.log( "error message - " + err.message );
  console.log( "error code - " + err.statusCode );
}

var user = new Backendless.User();
user.email = "james.bond@mi6.co.uk";
user.password = "iAmWatchingU";

Backendless.UserService.register( user ).then( userRegistered ).catch( gotError );