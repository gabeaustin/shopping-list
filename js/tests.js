// QUnit.test( "hello test", function( assert ) {
//   assert.ok( 1 == "1", "Test Passed!" );
// });

QUnit.test( "input equal test", function( assert ) {
  assert.equal( $('.item'), $('.listOfItemsCheckbox'), "Sting input and input item have the same value" );
});
