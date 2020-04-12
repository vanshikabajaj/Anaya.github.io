var prompt = require('prompt');
var fs = require('fs');

prompt.start();

prompt.get(['full_name', 'website_url', 'paypal_me_username', 'bitcoin_address', 'analytics_tracking_id'], function (err, result) {
  fs.readFile( __dirname + '/assets/index.html', function (err, data) {
    if (err) {
      throw err; 
    }
    
    if ((result.website_url.indexOf('http://') !== -1) || (result.website_url.indexOf('https://') !== -1)) {
      website_full_url = result.website_url;
    }
    else {
      website_full_url = 'http://' + result.website_url;
    }

    /* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
    
    var html = data.toString();
    var html = html.replace(/{{FULLNAME}}/g, result.full_name);
    var html = html.replace(/{{WEBSITE}}/g, website_full_url);
    var html = html.replace(/{{PAYPAL}}/g, result.paypal_me_username);
    var html = html.replace(/{{BITCOIN}}/g, result.bitcoin_address);
    var html = html.replace(/{{ANALYTICS}}/g, result.analytics_tracking_id);

    fs.writeFile("index.html", html, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
});
