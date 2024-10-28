// Validación de Producto
function validarProducto(producto) {
    let errores = [];

    if (!producto.nombre || producto.nombre.length > 100) {
        errores.push("Nombre del producto obligatorio (máximo 100 caracteres).");
    }

    if (isNaN(producto.precio) || producto.precio <= 0) {
        errores.push("El precio debe ser un número positivo.");
    }

    if (isNaN(producto.stock) || producto.stock < 0) {
        errores.push("El stock debe ser un número no negativo.");
    }

    return errores;
}

// Validación de Cliente
function validarCliente(cliente) {
    let errores = [];

    if (!cliente.nombre || cliente.nombre.length > 100) {
        errores.push("Nombre del cliente obligatorio (máximo 100 caracteres).");
    }

    if (!cliente.apellido || cliente.apellido.length > 100) {
        errores.push("Apellido del cliente obligatorio (máximo 100 caracteres).");
    }

    if (cliente.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cliente.email)) {
        errores.push("Correo electrónico no válido.");
    }

    if (cliente.telefono && !/^\d{7,15}$/.test(cliente.telefono)) {
        errores.push("El teléfono debe tener entre 7 y 15 dígitos.");
    }

    return errores;
}

// Registro de Producto
function registrarProducto() {
    const producto = {
        nombre: document.getElementById("nombreProducto").value,
        precio: parseFloat(document.getElementById("precioProducto").value),
        stock: parseInt(document.getElementById("stockProducto").value)
    };

    const errores = validarProducto(producto);

    if (errores.length > 0) {
        alert("Errores en el producto:\n" + errores.join("\n"));
    } else {
        alert("Producto registrado correctamente.");
        document.getElementById("formProducto").reset();
    }
}

// Registro de Cliente
function registrarCliente() {
    const cliente = {
        nombre: document.getElementById("nombreCliente").value,
        apellido: document.getElementById("apellidoCliente").value,
        email: document.getElementById("emailCliente").value,
        telefono: document.getElementById("telefonoCliente").value
    };

    const errores = validarCliente(cliente);

    if (errores.length > 0) {
        alert("Errores en el cliente:\n" + errores.join("\n"));
    } else {
        alert("Cliente registrado correctamente.");
        document.getElementById("formCliente").reset();
    }
}
