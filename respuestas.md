# PARTE A — Pensar antes de escribir código

### Ejercicio A1

1\.Escribe las columnas que tendría la tabla anuncios si cada atributo es una columna. Cuéntalas.

| titulo | descripcion | precio | categoria | estado | ciudad | fechaPublicacion | visitas | marca | modelo | anio | km | combustible | almacenamiento | bateria | talla | genero | material | ancho | fondo | alto |
|---|---|---:|---|---|---|---|---:|---|---|---:|---:|---|---:|---:|---|---|---|---:|---:|---:|
| Seat Ibiza | NULL | 6500 | Coches | NULL | NULL | NULL | NULL | Seat | Ibiza | 2015 | 98000 | gasolina | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL |
| iPhone 13 | NULL | 400 | Móviles | NULL | NULL | NULL | NULL | Apple | iPhone 13 | NULL | NULL | NULL | 128 | 87 | NULL | NULL | NULL | NULL | NULL | NULL |
| Chaqueta vaquera | NULL | 25 | Ropa | NULL | NULL | NULL | NULL | Levi's | NULL | NULL | NULL | NULL | NULL | NULL | M | unisex | NULL | NULL | NULL | NULL |
| Mesa de comedor | NULL | 150 | Muebles | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | NULL | roble | 160 | 90 | 75 |

La tabla anuncios tendría 21 columnas: 8 campos de anuncios comunes y 13 campos especificos de cada categoría.

2\.Rellena la fila de la chaqueta. ¿Cuántas columnas quedan en NULL?

Tendría 11 filas vacías.

3\.Mañana llega la categoría Deporte (talla, tipo de bici, pulgadas de rueda). ¿Qué tendrías que cambiar en la base de datos?

Tendría que añadir una nueva fila (categoría) para Deportes y tres columnas nuevas: talla, tipo de bici y pulgadas de rueda


4\.Otra opción en SQL: una tabla por categoría (coches, moviles…), cada una con anuncio_id. ¿Cuántos JOIN harían falta para listar «todos los anuncios de Valencia con sus datos»?

Cuatro JOIN. Uno para cada categoría.


5\.Escribe el documento del iPhone y el de la mesa.

MÓVIL:

{ titulo: "iPhone 13", categoria: "Móviles", precio: 400,
  atributos: { marca: "Apple", modelo: "iPhone 13", almacenamiento:128 , batería: 87 } }

MESA:

{titulo: "Mesa de comedor", categoria: "Muebles", precio: 150,
  atributos: {material: "roble", ancho: 160, fondo: 90,calto: 75
  }}

### Ejercicio A2

1\.¿Por qué no embebemos el usuario completo dentro del anuncio? Da dos razones.

a. Porque Luis tiene varios anuncios y en cada uno de ellos habría que poner sus datos

b. Porque cada vez que cambiase la infromación de Luis, habría que cambiarla también en cada uno de sus anuncios. Al tener dos documentos (usuario y anuncios) enlazados, sólo hay que cambiar el documento de usuario.

2\.¿Por qué copiamos el nombre del vendedor y no su email ni su ciudad?

Porque lo único que necesita saber el usuario que ve el anuncio (la información realmente útil) es quién es el vendedor.

3\.Si Luis cambia su nombre, ¿qué documentos hay que actualizar?

Los dos documentos. El del anuncio y el del usuario.

4\.En el gimnasio de SQL, ¿cómo se resolvía «mostrar el nombre del monitor de cada clase»? ¿Qué cambia aquí?

En sql usabamos claves ajenas y en MongoDB se usan referencias mediante el id.


### Ejercicio A3

1\.Haz las preguntas del apartado 2. ¿Embebes las ofertas en el anuncio o creas una colección ofertas?

a.¿Cuando leo el anuncio necesito siempre todas sus ofertas?

No.

b.¿Una oferta pertenece exclusivamente a un anuncio?

Sí, pero también está relacionada con el usuario que la realiza.

c.Se comparte entre muchos anuncios?

No.

d.¿Puede crecer sin límite?

Sí. Pueden haber varios usuarios interesados.

No embebemos las ofertas. Creamos una colección aparte llamada ofertas.

2\.Escribe un documento de oferta de ejemplo: Sara (660000000000000000000005) ofrece 340 € por el iPhone.

{
  compradorId: ObjectId("660000000000000000000005"),
  anuncioId: ObjectId("670000000000000000000003"),
  importe: 340,
  estado: "PENDIENTE",
  fecha: new Date()
}

3\.Cuando Sara abre «mis ofertas», quiere ver el título del anuncio y el precio que pedían, sin abrir el anuncio. ¿Qué copiarías dentro de la oferta?

{
  compradorId: ObjectId("660000000000000000000005"),
  anuncioId: ObjectId("670000000000000000000003"),
  titulo: "iPhone 13",
  precioAnuncio: 400,
  importe: 340,
  estado: "PENDIENTE",
  fecha: new Date()
}

4\.Si mañana Ana baja el precio del iPhone a 350 €, ¿debe cambiar el precio guardado en la oferta? ¿Por qué? (Pista: piensa en el precio de una línea de pedido de Furniro.)

No, porque se necesita conservar el precio del anuncio al momento de realizar la oferta

### Ejercicio A4


1\.¿Embebes las valoraciones dentro del usuario valorado, o colección aparte? Justifícalo.

En una colección aparte, Cuando leemos el perfil del vendedor no necesitamos todas sus valoraciones y estas están relaciona con el usuario y el vendedor al mismo tiempo. 

2\.Escribe un documento de valoración: Hugo (660000000000000000000004) valora con 5 estrellas a Marta (660000000000000000000003) por el anuncio 670000000000000000000004, comentario «Todo perfecto».

{
  autorId: ObjectId("660000000000000000000004"),
  usuarioValoradoId: ObjectId("660000000000000000000003"),
  anuncioId: ObjectId("670000000000000000000004"),
  estrellas: 5,
  comentario: "Todo perfecto",
  fecha: new Date()
}

3\.Un usuario solo puede valorar una vez cada compra. En SQL pondrías un UNIQUE (…, …). ¿Sobre qué dos campos crearías un índice único en MongoDB?  

Crearia un índice único con dos campos: autorId, anuncioId. Quedaría así:

db.valoraciones.createIndex(
  { autorId: 1, anuncioId: 1 },
  { unique: true }
)

4\.El perfil muestra la nota media del usuario. Calcularla cada vez recorriendo todas sus valoraciones es lento. ¿Qué dos campos guardarías en el documento del usuario para mostrarla al momento?

Dos campos: sumaEstrellas, numeroValoraciones. Quedaría así:

sumaEstrellas: 23,
numeroValoraciones: 5

### Ejercicio A5

1\.Un usuario normal, ¿cuántos favoritos tendrá? ¿Y cuántos usuarios pueden tener en favoritos un anuncio popular?

Un usuario normal puede tener varios anuncios en favoritos. Y un anuncio popular puede estar en el favoritos de muchos usuarios.

2\.Con eso, descarta una de las tres opciones y explica por qué.

La opción b, porque un anuncio popular podría tener miles de usuarios que lo guardasen en favoritos, haciendo que el array creciera demasiado dentro del documento del anuncio.

3\.La pantalla «Mis favoritos» es de las más usadas. ¿Qué opción la hace más fácil?

La a, porque tenemos guardados los anuncios favoritos directamente en el usuario y es más fácil encontrarlos cuando queremos mostrar su lista de favoritos.

4\.Con la opción a, ¿cómo sabrías cuántos usuarios tienen un anuncio en favoritos? (Pista: un filtro sobre un array encuentra los documentos que contienen ese valor.)

Buscaría el ID del anuncio dentro del array favoritos de todos los usuarios y contaría cuántos usuarios lo tienen guardado y utilizaría countDocuments() con un filtro sobre el array favoritos para contar cuántos usuarios tienen ese anuncio guardado.

5\.¿Qué operador usarías para añadir un favorito sin que se repita si el usuario pulsa dos veces?

Usaría $addToSet.

### Ejercicio A6

1\.Los mensajes de chat entre comprador y vendedor sobre un anuncio.

Referenciar en una colección aparte llamada: mensajes. Porque una conversación puede acumular muchísimos mensajes y crecer sin límite dentro de un documento.

2\.La dirección de envío de una compra.

Embeber dentro del documento de la compra. Porque necesitamos guardar la dirección que tenía el comprador en el momento de realizar la compra, aunque después la cambie.

3\.Las etiquetas de un anuncio (["urgente", "negociable"]).

Embeber dentro del documento del anuncio porque tienen relación directa y pertenecen a ese documento.

4\.Las categorías, si cada una tiene nombre, icono y lista de atributos obligatorios.

Referenciar en una colección nueva: categorías. Porque son datos que pueden compartirse entre muchos anuncios y gestionarse de forma independiente.

5\.El historial de cambios de precio de un anuncio (fecha y precio).

Embeber. Porque el historial pertenece al anuncio y normalmente queremos consultarlo junto a él.

6\.Los anuncios de un usuario, dentro del documento del usuario.

Referenciar mediante el id del usuario. Porque un usuario puede tener muchos anuncios y estos pueden consultarse independientemente de su perfil.

7\.Furniro: las líneas de un pedido.

Embeber dentro del documento del pedido. Porque las líneas pertenecen a ese pedido y normalmente se consultan junto a él.

8\.Furniro: las reseñas de un producto.

Referenciar guardando en una colección: reseñas. Porque un producto puede acumular muchísimas reseñas y estas pueden consultarse por separado.

## Comparación con el modelo completo

-Mi diseño coincide prácticamente con el modelo propuesto.

He elegido:

-Embeber las fotos dentro de los anuncios porque pertenecen a ellos y se consultan juntas.

-Referenciar los anuncios desde los usuarios mediante usuarioId.

-Guardar las ofertas y las valoraciones en colecciones independientes porque pueden crecer y consultarse por separado.

-Guardar los favoritos como un array de IDs dentro del usuario porque facilita consultar sus favoritos.

-Copiar algunos datos, como el nombre del vendedor, para facilitar las consultas sin tener que acceder a otras colecciones.