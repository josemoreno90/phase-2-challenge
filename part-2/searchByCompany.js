const clients = require('./clients.json');
  let name = process.argv[2];
  console.log("Finding companies with name " + "\"" + nameUp + "\"" + "...")
  for(var key in clients) {
    var valueUp = clients[key].company
    var nameUp = name.toUpperCase();
    if(valueUp.toUpperCase().startsWith(nameUp)) {
      console.log("ID: " + clients[key].id + ' - ' + "COMPANY: " + clients[key].company + ' - ' + "PHONE: " + clients[key].phone);
    }
  };
