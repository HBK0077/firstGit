var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//add item function

function addItem(e){
    e.preventDefault();
    //getinput value
    var newItem = document.getElementById("item").value;

    // create new li element

    var li = document.createElement("li");
    //add class
    li.className = "list-group-item";
    //add text node with input node
    li.appendChild(document.createTextNode(newItem));

    //create delete button element

    var deleteButton = document.createElement("button");
    //add classes to delete button
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    //append the text node
    deleteButton.appendChild(document.createTextNode("X"));
    
    //append button to li
    li.appendChild(deleteButton);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}