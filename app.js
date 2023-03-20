var form = document.getElementById("addForm");

var itemList = document.getElementById("items");

var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);

//delete event
itemList.addEventListener("click", removeItem);

//filter event
filter.addEventListener("keyup", filterItems);

//add item function

function addItem(e){
    e.preventDefault();
    //getinput value
    var newItem = document.getElementById("item").value;
    var discription = document.getElementById("discription").value;

    // create new li element

    var li = document.createElement("li");

    //add class
    li.className = "list-group-item";
    //add text node with input node
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(discription));

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
//delete items
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure?")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//filter items
function filterItems(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName("li");
    

    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var discription = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || discription.toLowerCase().indexOf(text)!= -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none"; 
        }
    });
}