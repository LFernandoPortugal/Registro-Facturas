import { facturas } from './utilities.js';

let filtroActual = 'todos'; // para mantener cambios en el array

export function todos(tbody) {
    filtroActual = 'todos';
    tbody.innerHTML = '';
    facturas.forEach(factura => fila(factura, tbody));
}

export function pendientes(tbody) {
    filtroActual = 'pendiente';
    tbody.innerHTML = '';
    facturas.forEach(factura => {
        if (factura.estado === 'pendiente') fila(factura, tbody);
    });
}

export function pagadas(tbody) {
    filtroActual = 'pagada';
    tbody.innerHTML = '';
    facturas.forEach(factura => {
        if (factura.estado === 'pagada') fila(factura, tbody);
    });
}

export function fila(factura, tbody) {
    const template_fila = `
        <tr>
            <td>${factura.id}</td>
            <td>${factura.numeroFactura}</td>
            <td>${factura.descripcion}</td>
            <td style="color: ${factura.estado === 'pagada' ? '#00ce00' : '#ff0000'};">${factura.estado}</td>
            <td>${factura.fecha}</td>
            <td>${factura.estado === 'pagada' ? '<button class="action">Del</button>' : ''}</td>
        </tr>
    `;
    tbody.innerHTML += template_fila;
}

export function eliminarFactura(id, tbody) {
    const index = facturas.findIndex(factura => factura.id === id);
    if (index !== -1) {
        facturas.splice(index, 1);
    }

    if (filtroActual === 'todos') todos(tbody);
    else if (filtroActual === 'pendiente') pendientes(tbody);
    else if (filtroActual === 'pagada') pagadas(tbody);
}