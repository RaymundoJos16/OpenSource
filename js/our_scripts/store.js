

fetch('http://localhost:8080/personas/listar'/* , { mode: 'no-cors' } */)

  .then(response => response.json())
  .then(productos =>
    productos.forEach(el => {
      if (el === null) {
        el = ""
      } else {
        const productList = document.getElementById('productos');
        const element = document.createElement('div');
        element.innerHTML = `
                <div class="">
                  <div class="product">
                    <div class="flip-container">
                      <div class="flipper">
                        <div class="front">
                          <a href="#">
                            <img
                              src="${el.imagen}"
                              alt=""
                              class="img-fluid"
                          />
                          </a>
                        </div>
                        <div class="back">
                          <a href="#"
                            ><img
                              src="${el.imagen}"
                              alt=""
                              class="img-fluid"
                          /></a>
                        </div>
                      </div>
                    </div>
                    <a href="#" class="invisible"
                      ><img src="${el.imagen}" alt="" class="img-fluid"
                    /></a>
                    <div class="text">
                      <h3>
                        <a href="#"
                          >${el.nombre}</a
                        >
                      </h3>
                      <h3>
                        <a href="#"
                          >Talla: ${el.talla}</a
                        >
                      </h3>

                      <p class="price"><del></del>$${el.precio}</p>
                      <p class="buttons">
                        <a href="#" class="btn btn-primary"
                          ><i class="fa fa-shopping-cart"></i>Agregar a carrito</a
                        >
                      </p>
                    </div>
                   
                  </div>
                 
                </div>`;
        productList.appendChild(element);
      }
    })


  );









