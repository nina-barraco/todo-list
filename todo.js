//when user submits enter, add text to todos div

function addToDo() {
    var todos = document.querySelector(".todos");
    var newValue = document.getElementById("itemInput").value;
    var newItem = document.createElement("li");
    newItem.innerHTML = newValue;
    todos.appendChild(newItem);
}

var input = document.querySelector("#itemInputSubmit");
input.addEventListener("click", addToDo);




//when you click on an li, you select it. when you click again, you deselect it.


var select = function selectItem(evt) {
    evt.target.classList.toggle("liSelect");
};

[...document.querySelectorAll("li")].forEach(function(item) {
    item.addEventListener('click', select);
});

//when a function associated with an event listener is fired, the browser passes in a bunch of info about the event to the function.
//you can gather the event information by assigning a variable (evt) to the first argument of the event handler (selectItem), and targeting it.
//furthermore, you can add multiple parameters to this type of event/function situation. this code will make each li appear in different colors:
// function selectItem(evt, color) {
//     evt.target.style.color = color;
// };
// var colors = ['red', 'blue', 'green'];

// var listItem = document.querySelectorAll("li");
// [...document.querySelectorAll("li")].forEach(function(item,ndx) {
//     item.addEventListener('click', (evt) => {
//         selectItem(evt, colors[ndx]);
//     });
// });




//if an item is selected and you click delete, delete the item

function deleteItem() {
    var todos = document.querySelector(".todos");
    var selected = document.querySelector(".liSelect")
    todos.removeChild(selected);
};

var del = document.querySelector("#deleteButton");
del.addEventListener("click", deleteItem);




//if the item is selected and you click update, a prompt box will appear

function updateItem() {
    var ask = prompt("Please enter updated text");
    document.querySelector(".liSelect").textContent = ask;
};

var update = document.querySelector("#updateButton");
update.addEventListener("click", updateItem);




//helpful JS properties you used through this project
//createElement()
//innerHTML()
// appendChild()