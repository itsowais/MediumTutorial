  const APP_ID = '6E1C9799-02E9-67E1-FFB2-3F35D785E300';
  const API_KEY = 'AA9F0B46-839A-EB63-FF68-33FF3CCE1E00';

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