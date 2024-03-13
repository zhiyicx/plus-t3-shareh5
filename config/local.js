
let Host;
switch(process.env.NODE_ENV){
  case "production":
    Host = "";
    break;
  case "development":
    Host = "";
    break;
  case "local":
    Host = "192.168.2.141";
    break;
}

module.exports = Host;