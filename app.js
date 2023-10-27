
    const DOMselectors = {
       title: document.getElementById("Title"),
       Image:document.getElementById("Image"),
       Set_Number: document.getElementById("Set_Number"),
       sumbit:document.querySelector("#form"),
       ctn: document.getElementsByClassName("CTN"),
       card: document.getElementsByClassName("card"),
       Card_Image: document.getElementsByClassName("Image"),
       card_set_number: document.getElementById("number_of_set"),
       delete: document.getElementById("Delete")
    }


    DOMselectors.sumbit.addEventListener("submit",function(e){
        e.preventDefault()

    })

