document.addEventListener('deviceready', function() {
  var datagram = cordova.require("in.girish.datagram.datagram");
  var broadcast = datagram.createSocket("multicast-udp4");
  broadcast.bind(3002, function(data) {
    console.log(" data ===> " + data);
  });
  
  broadcast.on("message", function(data, info) {
    alert(data);
    alert(JSON.stringify(info));
    broadcast.send("Hi!", info.address, 3003, function() {
      
    });
  });
});

