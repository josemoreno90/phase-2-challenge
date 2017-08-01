const clients = require('./clients.json');
  let name = process.argv[2];


    for(var key in clients) {
    var toUp = clients[key].city
    if(toUp.toUpperCase() == name.toUpperCase())
      console.log("ID:" + clients[key].id + ' - REP NAME:' + clients[key].rep_name + '- COMPANY:' + clients[key].company +
      " - CITY:" + clients[key].city + ' - STATE:' + clients[key].state);
    };
