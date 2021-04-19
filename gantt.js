//create new array 
var newTask = [];
var x = 0;
//Trying to make a HTML list from my an Array(newTask) 
function makeUL(array){ 
var createList = document.getElementById(taskList);
var list = document.createElement('ul');

for (var i = 0; i < array.length; i++) { 
  var item = document.createElement('li'); 
  item.appendChild(document.createTextNode(array[i]));
  list.appendChild(item);
  createList.appendChild(list); 
  document.getElementById("taskList").innerHTML = list;
}
}

function createChart(e) { 


  }

 /* code that does not work 
 alert(newTask.join("\n"));
   for (var i = 0; i < newTask.length; i++){ 
var createList = document.getElementById(taskList);

newList.appendChild(document.createTextNode("task"));
newList.setAttribute("data-duration", newTask[i]);
createList.appendChild(newList);
*/

//grab items of two lists 
const days = document.querySelectorAll(".chart-values li");
const tasks = document.querySelectorAll(".chart-bars li");
//convert days nodelist into a real array with spread operator
const daysArray = [...days];
//loop through tasks 
tasks.forEach(el => { 
	//split data duration attribute using the "-"
	const duration = el.dataset.duration.split("-");
	//inside ^^duration array^^ the first string is start day the last string is end day
	const startDay = duration[0];
	const endDay = duration[1];
	//declare two variables
	let left = 0, width = 0;
	//for the start day 
	//filter daysArray to retrieve the list item day that matches the date specified & calc left property 
 if (startDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == startDay.slice(0, -1));
      left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == startDay);
      left = filteredArray[0].offsetLeft;
    }
    //for the end day
    //filter daysArray to retrieve list item day that matches date specified & calc width property
     if (endDay.endsWith("½")) {
      const filteredArray = daysArray.filter(day => day.textContent == endDay.slice(0, -1));
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth / 2 - left;
    } else {
      const filteredArray = daysArray.filter(day => day.textContent == endDay);
      width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
    }

    //apply css
    el.style.left = `${left}px`;
    el.style.width = `${width}px`;
    if (e.type == "load") {
      el.style.backgroundColor = el.dataset.color;
      el.style.opacity = 1;
    }
});
}
*/

window.addEventListener("load", createChart);
window.addEventListener("resize", createChart);



//----------------------------------------------------Add a Task Popup----------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addTask");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//-----------------------------------------------Form Control -------------------------------------------------


document.getElementById("startTask").addEventListener('click',() => {    
     saveTask();
    makeUL(newTask[0]); 
     createChart();  
 
});


function saveTask(e) { 
  //Get data from form and assign to variables
  var taskName = document.getElementById("TaskNameInput").value;
  var assignedTo = document.getElementById("AssignedToInput").value;
  var taskDescription = document.getElementById("TaskDescriptionInput").value;
  var startDate = new Date(document.getElementById("DateInput").value);
  var endDate = new Date(document.getElementById("EndDateInput").value);

  //Take the date inputs and change it into Month½-Month½ format
  switch (startDate = startDate.getMonth()) { 
    case 0:
      startDate = "Jan";
      break;
    case 1:
      startDate = "Feb";
      break;
    case 2:
       startDate = "Mar";
      break;
    case 3:
      startDate = "Apr";
      break;
    case 4:
      startDate = "May";
      break;
    case 5:
      startDate = "Jun";
      break;
    case 6:
      startDate = "Jul";
    case 7:
      startDate = "Aug";
      break;
    case 8:
      startDate = "Sep";
      break;
    case 9:
      startDate = "Oct";
      break;
    case 10:
      startDate = "Nov";
      break;
    case 11:
      startDate = "Dec";
      break;
  }
    switch (endDate = endDate.getMonth()) { 
    case 0:
      endDate = "Jan";
      break;
    case 1:
      endDate = "Feb";
      break;
    case 2:
       endDate = "Mar";
      break;
    case 3:
      endDate = "Apr";
      break;
    case 4:
      endDate = "May";
      break;
    case 5:
      endDate = "Jun";
      break;
    case 6:
      endDate = "Jul";
    case 7:
      endDate = "Aug";
      break;
    case 8:
      endDate = "Sep";
      break;
    case 9:
      endDate = "Oct";
      break;
    case 10:
      endDate = "Nov";
      break;
    case 11:
      endDate = "Dec";
      break;
  }
  /* also code does not work 
var ul = document.getElementById("taskList");
var li = document.createElement("li");
li.appendChild(document.createTextNode(taskName));
li.setAttribute("data-duration", '"' + startDate + '-' + endDate + '"');
ul.appendChild(li);
alert('"' + startDate + '-' + endDate + '"');

*/ 
	
//add startdate and endate variables to array 
newTask.push('"' + startDate + '-' + endDate + '"');



}

