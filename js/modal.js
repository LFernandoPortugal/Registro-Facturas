import { facturas } from './utilities.js';

export function toggleModal(modal) {
    modal.classList.toggle('hidden');
}

export function agregarFactura(e, form, modal, tbody, todos) {
    e.preventDefault();

    const formData = new FormData(form);
    const nuevaFactura = {
        id: facturas.length + 1,
        numeroFactura: formData.get('factura'),
        descripcion: formData.get('descripcion'),
        estado: formData.get('estado'),
        fecha: formData.get('fecha'),
    };

    facturas.push(nuevaFactura);
    todos(tbody);
    toggleModal(modal);
    form.reset();
}