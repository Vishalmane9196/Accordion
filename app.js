const accordionItemsEl = document.getElementsByClassName("accordion__item")

function accordion(){

  for( let item of accordionItemsEl) {

    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click",function() {
      let accdetails = this.nextElementSibling;

      if(accdetails.style.maxHeight) {
        accdetails.style.maxHeight = null;
        this.lastElementChild.innerHTML = "+";
      }else{
        accdetails.style.maxHeight =accdetails.scrollHeight + "px";
        this.lastElementChild.innerHTML = "-"
      }
    })
  }

}

accordion();