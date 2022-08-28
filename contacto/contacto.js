function formContacs(el) {
  var ComponenteEl = document.createElement("div");
  ComponenteEl.innerHTML = `<div class="section-contac">
  <h2 class="section-contac__h3">Contacto</h2>
      <div class="section-contac__form">
      <label class="section-contac__form__label">NOMBRE</label>
 
        <input class="section-contac__form__input" type="text" placeholder="Nombre">
    
        
            <label class="section-contac__form__label">EMAIL</label>
            
            <input class="section-contac__form__input" type="email" placeholder="Email">
               <label class="section-contac__form__label">MENSAJE</label>
              
              <textarea class="section-contac__form__textarea" placeholder="..."></textarea>
              
              <button class="section-contac__button">Enviar</button>
         
      </div>
      
  </div>`;
  el.appendChild(ComponenteEl);
}
