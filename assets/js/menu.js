(function (){
	var menuLista = document.getElementById('lista-menu');
	var menuItem = document.getElementById('item-menu');

	document.getElementById('menu-img').addEventListener("click", openMenu);
	document.getElementById('item-menu1').addEventListener("click", closeMenu);
	document.getElementById('item-menu2').addEventListener("click", closeMenu);
	document.getElementById('item-menu3').addEventListener("click", closeMenu);
	document.getElementById('item-menu4').addEventListener("click", closeMenu);
	document.getElementById('item-menu5').addEventListener("click", closeMenu);


	function openMenu() {
		menuLista.classList.toggle('_menuOpen');
		menuItem.forEach((element) => {
			element.classList.add('_openItem')
		})
	}
	function closeMenu() {
		menuLista.classList.remove('_menuOpen');
		menuItem.classList.remove('_menuOpen');
	}

})()