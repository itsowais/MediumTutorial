  const APP_ID = '6E1C9799-02E9-67E1-FFB2-3F35D785E300';
  const API_KEY = 'AA9F0B46-839A-EB63-FF68-33FF3CCE1E00';

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