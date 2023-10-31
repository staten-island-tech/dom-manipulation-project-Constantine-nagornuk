
    const DOMselectors = {
      sumbit: document.querySelector("#sumbit1"),
        set: document.querySelector("#Set_Number"),
        image: document.querySelector("#Image"),
        title: document.querySelector('#Title'),
        box: document.getElementById("CTN"),
        delete: document.querySelector("#Delete")
    }

DOMselectors.sumbit.addEventListener("click", function(e){
    e.preventDefault()


    let x = DOMselectors.set.value
    let z = DOMselectors.image.value
    let y = DOMselectors.title.value
    if (y &&  z && x) {
      const cardHTML = `
        <div class="card">
          <h2 class="Lego#">${y}</h2>
          <img class="Image" src="${z}" alt="${y}">
          <p id="number_of_set">${x}</p>
          <button class="Delete">Delete</button>
        </div>
      `
  
      DOMselectors.box.insertAdjacentHTML('beforeend', cardHTML);
  
     
      DOMselectors.title.value = "";
      DOMselectors.image.value = "";
      DOMselectors.set.value = "";
    } else {
      alert('you did not put anything in the boxes poopster!');
    }
  });

  DOMselectors.box.addEventListener('click', function(event) {
    if (event.target.classList.contains('Delete')) {
      event.target.parentElement.remove();
    }
  });






