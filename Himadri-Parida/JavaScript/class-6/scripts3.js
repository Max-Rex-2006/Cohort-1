// // Setting/Adding elements to the DOM
// let div = document.getElementById("div-container")
// const btn = document.createElement("button")
// btn.textContent = "click me"
// div.appendChild(btn)

// // Event Handling
// const btn = document.getElementById("btn")
// btn.onclick = function(){  // works only with button
//     alert("hello world")
// };

// btn.addEventListener("mouseover" , function(){    // event listener works with all elements
//     this.style.borderColor = "green"
// });

//forms Manipulation/validation
const form = document.getElementById("registration form")
// this refers to the current present element might be a div or a input field or any form
form.addEventListener("submit",function(event){  //if we refresh the page the value that we are entering are deleted to avoid that we can add a function that will allow not delete the default values
    event.preventDefault() // prevents the default behaviour of the form  ---> page reload is prevented
    const username  = document.getElementById("username").value //to the value of the elements basically that we are entering 
    const email = document.getElementById("email").value
    console.log("Username",username)
    console.log("Email:",email)

    if(username === "" || email === ""){ //Form Validation-- checking the values of username and email(any other fields) to validate in the form
        alert("Please Fill in All the Fields")
    }
    if(username.length<3){
        alert("Username Must be 3 characters")
        username.style.border ="3px solid red"
    }
})



