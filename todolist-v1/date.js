
module.exports = getDate;

function getDate(){

  let today = new Date();

  let options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  }

  let day = today.toLocaleDateString("en-US",options);

  res.render("lists",{listTitle: day,newListItems: items});

  return day;
}

module.exports = getDay;
function getDay(){

  let today = new Date();

  let options = {
    weekday:"long",

  }

  let day = today.toLocaleDateString("en-US",options);

  return day;
}
