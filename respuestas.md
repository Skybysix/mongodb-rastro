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



2\.



3\.



4\.



### Ejercicio A4


1\.



2\.



3\.



4\.



### Ejercicio A5

1\.




2\.




3\.




4\.



5\.



### Ejercicio A6

1\.




2\.




3\.




4\.



5\.



6\.



7\.



8\.