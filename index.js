const list = document.querySelector('#lines')

const btns = document.querySelectorAll('#lines .btn ');

Array.from(btns).forEach(function(btn){


btn.addEventListener('click' , function(e){

const li = e.target.parentElement;

li.parentNode.removeChild(li)

})
})




//add book

const forms = document.forms;
console.log(forms);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
  console.log(form);
});


const addForm  = document.forms['add-book'];

addForm.addEventListener('submit' ,function(e){

    e.preventDefault();

    const value = addForm.querySelector('input[type="text"]').value;

//create element
    const li = document.createElement('li');
    const deletebtn = document.createElement('button');

    //add content
deletebtn.textContent = 'Remove';
li.textContent = value;

// add classes

li.classList.add('my-2');
deletebtn.classList.add('btn');

deletebtn.addEventListener('click' , function(e){
    deletebtn.style.display = 'none'
    li.style.display = 'none'
})

    //append to dom

    li.appendChild(deletebtn);
    list.appendChild(li)
    
});

//hide book
const hidebox = document.querySelector('#hide');
hidebox.addEventListener('change' , function(e){
if(hidebox.checked){

    list.style.display ='none';
}
else{
    list.style.display ='initial'
}

});



//Search book

const searchBar = forms['search-book'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByClassName('my-2');
  Array.from(books).forEach((book) => {
    const title = book.firstChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});
