const user = JSON.parse(localStorage.getItem('login-success')) || false;
if (user){
  document.querySelector('.dropdown').innerHTML = `
      <a href="./src/pages/formulario-login.html" class=" dropdown-toggle"
								type="button" data-bs-toggle="dropdown" aria-expanded="false"><i
									class="fa-regular fa-user" title="Login / Registro"></i></a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
							</ul>
							<span class="client-name"></span>
							<a href="./src/pages/carrito.html"><i class="fa-solid fa-cart-shopping"
									title="Carrito"></i></a>
      `
  document.querySelector('.client-name').innerHTML = `${user.name} ${user.lastName}`
}

/* localStorage.removeItem('login-success'); */