
var number_of_victims = prompt("How many victims do you wish to enter?");
//arrays
var victname = [];
var victphone = [];
var victaddy= [];


for (var i =0; i < number_of_victims; i++) {
  var name = prompt("Enter the persons name.");
  victname.push(name);
  var phone= prompt("Enter the phone number.");
  victphone.push(phone);
	var address= prompt("Enter the persons address.");
  victaddy.push(address);

}

  var number_of_volunteers= prompt("How many volunteers do you wish to enter?");
  //arrays
  var volname = [];
  var volphone = [];
  var voladdy= [];


  for (var i =0; i < number_of_volunteers; i++) {
    var name = prompt("Enter the persons name.");
    volname.push(name);
    var phone= prompt("Enter the phone number.");
    volphone.push(phone);
  	var address= prompt("Enter the persons address.");
    voladdy.push(address);
}
