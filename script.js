var jobContent = document.getElementById("jobDescription");
var jobButton = document.getElementById("jobButton");

var aboutContent = document.getElementById("aboutMe");
var aboutButton = document.getElementById("aboutButton");

jobButton.onclick = function(){
  aboutContent.className = "hiddenAboutDescription"
  jobContent.className = "showJobDescription"
};

aboutButton.onclick = function(){
  aboutContent.className = "showAboutDescription"
  jobContent.className = "hiddenJobDescription"
};
