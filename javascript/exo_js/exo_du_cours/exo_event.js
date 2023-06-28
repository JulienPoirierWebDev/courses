function handleColorChange(event) {  
    let color = event.target.value;
  
    let box = document.querySelector(".box");
    box.style.backgroundColor = color;
  }
  
  let box2 = document.querySelector(".box2");
  let arrColor = ['color1','color2', 'color3'];
  let count = 0;
  
  let color = arrColor[count]
  box2.addEventListener("click", function(event) {
  
      let oldCount = count;
      if(count+1 > arrColor.length-1) {
        count = 0
      } else {
        count++
      }
      //box2.classList.toggle("custom-box")
  
        box2.classList.remove(arrColor[oldCount])
  
        box2.classList.add(arrColor[count])
      
  })
  
  let form = document.querySelector('form');
  
  console.log(form)
  
  form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      let formData = new FormData(form);
      let text = formData.get('newParaph')
      let container = document.querySelector('.container-paragraphs');
  
      let date = Date.now();
      let p = document.createElement('p')
      p.innerHTML = `${text} <span onclick='deleteElement(${date})'>X</span>` ;
  
      p.setAttribute('data-element', date)
      container.appendChild(p);
      form.reset();
  })
  
  function deleteElement(id) {
    let element = document.querySelector(`[data-element="${id}"]`);
    element.remove()
    alert("L'élement a été supprimé !")
    
  }
  