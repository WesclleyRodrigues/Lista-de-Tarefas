const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
   const inputIsvalid = validateInput();
   
   console.log(inputIsValid);
   
   if (!inputIsvalid) {
    return inputElement.classList.add("error");   
   }

   const taskItemContainer = document.createElement("div");
   taskItemContainer.classList.add("task-item");

   const taskContent = document.createElement("p");
   taskContent.innerText = inputElement.value;

   const deleteItem = document.createElement("i");
   deleteItem.classList.add("far");
   deleteItem.classList.add("fa-trash-alt");

   taskItemContainer.appendChild(taskContent);
   taskItemContainer.appendChild(deleteItem);
};

const handleInputChange = () => {
   const inputIsValid = validateInput();

   if (inputIsValid) {
      return inputElement.classList.remove("error");
   }
};

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());


