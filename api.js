// Usuarios------------------------

GET /usuarios
Descripción: Obtener todos los usuarios.
Respuesta: Array de objetos usuario.

GET /usuarios/{id}
Descripción: Obtener un usuario por su ID.
Parámetros:
{id}: ID del usuario.
Respuesta: Objeto usuario con los campos (id, nombre, email, dirección, rol, etc.).

POST /usuarios
Descripción: Crear un nuevo usuario.
Cuerpo de la petición:
{
  "nombre": "string",
  "email": "string",
  "contraseña": "string",
  "direccion": "string",
  "rol": "string"
}
Respuesta: Usuario creado.

PUT /usuarios/{id}
Descripción: Actualizar la información de un usuario por ID.
Parámetros:
{id}: ID del usuario.
Cuerpo de la petición: Campos a actualizar.

DELETE /usuarios/{id}
Descripción: Eliminar un usuario por ID.

// Productos-----------------------
GET /productos
Descripción: Obtener todos los productos.
Respuesta: Array de objetos producto.

GET /productos/{id}
Descripción: Obtener un producto por su ID.
Parámetros:
{id}: ID del producto.
Respuesta: Objeto producto con campos (imagen, nombre, descripción, formato, precio, stock, procedencia, categoría).

POST /productos
Descripción: Crear un nuevo producto.
Cuerpo de la petición:
{
  "imagen": "string",
  "nombre": "string",
  "descripcion": "string",
  "formato": "string",
  "precio": "number",
  "stock": "number",
  "procedencia": "string",
  "categoria": "string"
}
Respuesta: Producto creado.

PUT /productos/{id}
Descripción: Actualizar un producto por ID.
Parámetros:
{id}: ID del producto.
Cuerpo de la petición: Campos a actualizar.

DELETE /productos/{id}
Descripción: Eliminar un producto por ID.

// Carrito-------------------------
GET /carrito/{usuario_id}
Descripción: Obtener el carrito del usuario.
Parámetros:
{usuario_id}: ID del usuario.
Respuesta: Array de productos en el carrito.

POST /carrito
Descripción: Agregar un producto al carrito.
Cuerpo de la petición:
{
  "usuario_id": "number",
  "producto_id": "number",
  "cantidad": "number"
}
Respuesta: Producto agregado al carrito.

PUT /carrito/{carrito_id}/producto/{producto_id}
Descripción: Actualizar la cantidad de un producto en el carrito.
Parámetros:
{carrito_id}: ID del carrito.
{producto_id}: ID del producto.
Cuerpo de la petición:
json
Copiar código
{
  "cantidad": "number"
}

DELETE /carrito/{carrito_id}/producto/{producto_id}
Descripción: Eliminar un producto del carrito.
Parámetros:
{carrito_id}: ID del carrito.
{producto_id}: ID del producto.

// Órdenes-------------------------
GET /ordenes
Descripción: Obtener todas las órdenes.
Respuesta: Array de órdenes.

GET /ordenes/{id}
Descripción: Obtener una orden por su ID.
Parámetros:
{id}: ID de la orden.
Respuesta: Detalles de la orden (fecha, total, estado, usuario, etc.).

POST /ordenes
Descripción: Crear una nueva orden.
Cuerpo de la petición:
{
  "usuario_id": "number",
  "total": "number",
  "estado": "string"
}
Respuesta: Orden creada.

PUT /ordenes/{id}
Descripción: Actualizar el estado de una orden.
Parámetros:
{id}: ID de la orden.
Cuerpo de la petición:
{
  "estado": "string"
}

DELETE /ordenes/{id}
Descripción: Eliminar una orden por ID.

// Orden Productos------------------------
GET /ordenes/{id}/productos
Descripción: Obtener los productos de una orden específica.
Parámetros:
{id}: ID de la orden.
Respuesta: Array de productos relacionados a la orden.

POST /ordenes/{id}/productos
Descripción: Agregar productos a una orden.
Cuerpo de la petición:
{
  "producto_id": "number",
  "cantidad": "number"
}
Respuesta: Producto agregado a la orden.