  const APP_ID = '';
  const API_KEY = '';

  Backendless.serverURL = 'https://api.backendless.com';
  Backendless.initApp(APP_ID, API_KEY);
addObject=function addObject(){
  const testTableStore = Backendless.Data.of('TestTable');
  Backendless.Data.of('TestTable').save( { name:document.getElementById('t1').value})
 .then( function( savedObject ) {
 	console.log(savedObject)
  })
 .catch( function( error ) {
 	console.log(error)
  });
}
updateObject=function updateObject(){
Backendless.Data.of( "TestTable" ).save( {name:document.getElementById('t03').value,objectId:document.getElementById('t3').value})
.then( function( savedObject ) {
      console.log( "Contact instance has been updated" );
    })
  .catch( function( error ) {
      console.log( "an error has occurred " + error.message );
    });
}
deleteObject=function deleteObject(){
	Backendless.Data.of( "TestTable" ).remove( { objectId:document.getElementById('t2').value} )
 .then( function( timestamp ) {
 	console.log('instance deleted')
  })
 .catch( function( error ) {
  });
}
showObject=function showObject(){
	Backendless.Data.of( "TestTable" ).find()
 .then( function( result ) {
 	document.getElementById('container').innerHTML+=JSON.stringify(result)
  })
 .catch( function( error ) {
 	console.log(error);
  });
}

document.getElementById("add").addEventListener("click", addObject);
document.getElementById("update").addEventListener("click", updateObject);
document.getElementById("delete").addEventListener("click", deleteObject);
document.getElementById("show").addEventListener("click", showObject);