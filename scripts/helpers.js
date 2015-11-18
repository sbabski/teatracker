//create star rating
Handlebars.registerHelper('starHelper', function(rate) {
  var out = "";
  for(i=0;i<rate;i++) {
    out = out + "<img class='img-star' src='img/star-f.png'>";
  }
  for(i=0;i<5-rate;i++) {
    out = out + "<img class='img-star' src='img/star.png'>";
  }
  return new Handlebars.SafeString(out);
});

//set up birthday
Handlebars.registerHelper('birthHelper', function(birthday) {
  return birthday[0] + "/" + birthday[1] + "/" + birthday[2];
});

//set up image
Handlebars.registerHelper('imgHelper', function(name) {
  switch(name) {
    case "Bruce": case "Denis": case "Lola": case "Randall": case "Janette":
    case "Tina": case "Joseph": case "Spencer": case "Beth": case "Sebastian":
      return name;
    default:
      return "You";
  }
});

//default review
var copy = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis purus ac nunc egestas dictum. Aliquam mattis lacinia augue ac convallis. Phasellus egestas metus in risus consequat blandit. Maecenas sagittis bibendum sapien sit amet blandit. Donec quis semper nunc. Praesent leo quam, semper non egestas a, faucibus ut lectus. Ut blandit erat nunc, ac faucibus turpis laoreet sit amet.';
Handlebars.registerHelper('revHelper', function(review) {
  if(review === "") {
    return copy;
  } else {
    return review;
  }
});
Handlebars.registerHelper('revTitleHelper', function (entry) {
  var id = entry[0];
  var name = entry[1];
  var rate = entry[2];
  var out = "<div id='" + id + "'><h4> ";
  switch(id) {
    case 101:
      out = out + "Masala Chai";
      rate = 4;
      break;
    case 102:
      //out = out + "Apple & Ginger";
      out = out + "Apple & Ginger";
      rate = 2;
      break;
    case 103:
      //out = out + "Chamomile";
      out = out + "Chamomile";
      rate = 3;
      break;
    case 104:
      out = out + "English Breakfast";
      //out = out + "English Breakfast";
      rate = 3;
      break;
    case 105:
      out = out + "Lemon Verbena";
      //out = out + "Lemon Verbena";
    default:
      out = out + name;
      //out = out + "no";
  }
  out = out + "</h4> <span class='star-span'>" + Handlebars.helpers.starHelper(rate) + "</span></div>";
  return new Handlebars.SafeString(out);
});

//set up timestamp
Handlebars.registerHelper('timeHelper', function(timestamp) {
  var out = "";
  switch(timestamp[0]) {
    case 1:
      out = "January";
      break;
    case 2:
      out = "February";
      break;
    case 3:
      out = "March";
      break;
    case 4:
      out = "April";
      break;
    case 5:
      out = "May";
      break;
    case 6:
      out = "June";
      break;
    case 7:
      out = "July";
      break;
    case 8:
      out = "August";
      break;
    case 9:
      out = "September";
      break;
    case 10:
      out = "October";
      break;
    case 11:
      out = "November";
      break;
    case 12:
      out = "December";
      break;
    default:
      out = "Error";
  }
  out = out + " " + timestamp[1];
  switch(timestamp[1]) {
    case 1: case 21: case 31:
      out = out + "st";
      break;
    case 2: case 22:
      out = out + "nd";
      break;
    case 3: case 33:
      out = out + "rd";
      break;
    default:
      out = out + "th";
  }
  out = out + " at ";
  var min = timestamp[3];
  if(min < 10) {
    min = "0" + min;
  }
  if(timestamp[2] > 12) {
    out = out + (timestamp[2]-12) + ":" + min + " p.m.";
  } else if(timestamp[2] == 12) {
    out = out + timestamp[2] + ":" + min + " p.m.";
  } else {
    out = out + timestamp[2] + ":" + min + " a.m.";
  }
  return out;
});