document.addEventListener('DOMContentLoaded', function(){
  const list = document.querySelector('.movie-list ul')
  const forms = document.forms

  // delete a Movie
  list.addEventListener('click', function(e){
    e.preventDefault()
    if(e.target.className === 'delete'){
      const li = e.target.parentElement
      li.parentNode.removeChild(li)
    }
  })

  // add Movie
  const addButton = document.querySelector('.add')
  const addForm = forms['add-movie']
  addButton.addEventListener('click', function(e){
    e.preventDefault()
    // create the elements
    const value=addForm.querySelector('input[type="text"]').value
    const li=document.createElement('li')
    const movieName = document.createElement('span')
    const deleteBtn = document.createElement('span')

    // add text content
    movieName.textContent = value
    deleteBtn.textContent = "Delete"

    // add classes
    movieName.classList.add("name")
    deleteBtn.classList.add("delete")

    // attach to DOM
    li.appendChild(movieName)
    li.appendChild(deleteBtn)
    list.appendChild(li)
  })
})
