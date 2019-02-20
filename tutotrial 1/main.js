  const APP_ID = '';
  const API_KEY = '';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);
function addObject(){
  const testTableStore = Backendless.Data.of('TestTable');
  Backendless.Data.of('TestTable').save( { name:"owais", mail:"hethisme@gmail.com"} )
 .then( function( savedObject ) {
 	console.log(savedObject)
  })
 .catch( function( error ) {
 	console.log(error)
  });
}