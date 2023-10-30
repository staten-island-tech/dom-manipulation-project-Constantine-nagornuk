
    const DOMselectors = {
      sumbit: document.querySelector("#sumbit1"),
        set: document.querySelector("#Set_Number"),
        image: document.querySelector("#Image"),
        title: document.querySelector('#Title'),
      box: document.getElementById("CTN")
    }

DOMselectors.sumbit.addEventListener("click", function(e){
    e.preventDefault()


    let x = DOMselectors.set.value
    let z = DOMselectors.image.value
    let y = DOMselectors.title.value
    DOMselectors.box.insertAdjacentHTML("beforeend", `<p> ${ x} , ${z} , ${y}</p>` )


}) 
