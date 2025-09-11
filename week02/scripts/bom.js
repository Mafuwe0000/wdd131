const input= document.querySelector('#favchap'); //This gets the input value
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function(){
    if (input.value.trim() ==='') {
        input.focus();//return focus to the input field //this tells the browser to put the cursor inside the input field and make it active.       
        return;//stop here if the input is empty
    
    }

    const li = document.createElement('li'); //This creates an list element


    //const inputValue = input.value ; //whatever the user have typed
    //li.textContent = inputValue; //puts the text given by the user inside the <li>
    //li.innerHTML = inputValue; //This line does the same thing but allows html

    li.textContent = input.value; //reason why the value property is use is because the input variable references an html input text field
    //and that is what is wanted, i.e. the user's entry


    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.append(deleteButton);

    list.appendChild(li);

    input.value=''; //this clears the box
    input.focus(); //this tells the browser to put the cursor inside the input field and make it active.

    deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    input.focus(); //this tells the browser to put the cursor inside the input field and make it active.
    
    });
});




