import { facturas } from './utilities.js';
import { todos, pendientes, pagadas, fila, eliminarFactura } from './functions.js';
import { toggleModal, agregarFactura } from './modal.js';

// Seleccionar elementos del DOM
const tbody = document.querySelector('#tablaFacturas tbody');
const addContactBtn = document.querySelector('#addContactBtn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('.close');
const form = document.querySelector('#contactForm');

// Event listeners para los filtros
document.querySelector('#todos').addEventListener('click', () => todos(tbody));
document.querySelector('#pendientes').addEventListener('click', () => pendientes(tbody));
document.querySelector('#pagada').addEventListener('click', () => pagadas(tbody));

// Event listeners para el modal
addContactBtn.addEventListener('click', () => toggleModal(modal));
closeBtn.addEventListener('click', () => toggleModal(modal));

// Event listener para el formulario
form.addEventListener('submit', (e) => agregarFactura(e, form, modal, tbody, todos));

// Event listener para los botones de eliminar
tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('action')) {
        const fila = e.target.closest('tr');
        const id = parseInt(fila.querySelector('td').textContent);
        eliminarFactura(id, tbody);
    }
});

// Mostrar todas las facturas al cargar la página
todos(tbody);