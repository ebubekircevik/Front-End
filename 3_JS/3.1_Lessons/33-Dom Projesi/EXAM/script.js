//UI Variables

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector("#task-list");

 
//Call EventListeners
EventListeners();

function EventListeners(){
    // submit event
    console.log(form)
    form.addEventListener('submit',AddNewItem);
}

function AddNewItem(e){

    if(input.value == ''){
        alert("Add new fu*k item !")
    }
 
    //create li
    const li = document.createElement('li');
    console.log(li)
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML ='<i class="fas fa-times"></i>';
    

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //clear input
    input.value = ''


    e.preventDefault();
}