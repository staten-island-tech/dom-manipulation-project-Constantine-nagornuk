
    const DOMselectors = {
      sumbit: document.querySelector("#sumbit1"),
        set: document.querySelector("#Set_Number"),
        image: document.querySelector("#Image"),
        title: document.querySelector('#Title'),
        box: document.getElementById("CTN"),
        delete: document.querySelector("#Delete")
    }



    function clear(){
 DOMselectors.set.value= "";
 DOMselectors.image.value= "";
 DOMselectors.title.value= "";}


function deel(x)
{DOMselectors.box.addEventListener('click', function(event) {
    if (event.target.classList.contains(x)) {
      event.target.parentElement.remove();
    }
  });
}


function inject(x){DOMselectors.box.insertAdjacentHTML('beforeend', x);}


DOMselectors.sumbit.addEventListener("click", function(e){
    e.preventDefault()


    let poop1 = DOMselectors.set.value
    let poop2 = DOMselectors.image.value
    let poop3 = DOMselectors.title.value
    if (poop1 &&  poop2 && poop3) {
      const cardHTML = `
        <div class="card">
          <h2 class="Lego#">${poop3}</h2>
          <img class="Image" src="${poop2}" alt="${poop1}">
          <p id="number_of_set">${poop1}</p>
          <button class="Delete">Delete</button>
        </div>
      `
      
        inject(cardHTML)
        clear()
     
    } else {
      alert('you did not put anything in the boxes poopster!');
    }
  });



deel('Delete')




    




