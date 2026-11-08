// Ejercicio B1. Carga de datos

db.usuarios.insertMany([
  {
    _id: ObjectId("660000000000000000000001"),
    nombre: "Ana García",
    email: "ana@rastro.es",
    ciudad: "Valencia",
    fechaAlta: new Date("2025-03-10"),
    favoritos: [ObjectId("670000000000000000000008")],
    valoracionMedia: 0,
    numValoraciones: 0
  },
  {
    _id: ObjectId("660000000000000000000002"),
    nombre: "Luis Martín",
    email: "luis@rastro.es",
    ciudad: "Valencia",
    fechaAlta: new Date("2024-11-02"),
    favoritos: [],
    valoracionMedia: 0,
    numValoraciones: 0
  },
  {
    _id: ObjectId("660000000000000000000003"),
    nombre: "Marta Ruiz",
    email: "marta@rastro.es",
    ciudad: "Alicante",
    fechaAlta: new Date("2025-06-21"),
    favoritos: [],
    valoracionMedia: 5,
    numValoraciones: 1
  },
  {
    _id: ObjectId("660000000000000000000004"),
    nombre: "Hugo Sanz",
    email: "hugo@rastro.es",
    ciudad: "Castellón",
    fechaAlta: new Date("2026-01-15"),
    favoritos: [],
    valoracionMedia: 0,
    numValoraciones: 0
  },
  {
    _id: ObjectId("660000000000000000000005"),
    nombre: "Sara López",
    email: "sara@rastro.es",
    ciudad: "Valencia",
    fechaAlta: new Date("2026-09-30"),
    favoritos: [
      ObjectId("670000000000000000000001"),
      ObjectId("670000000000000000000003"),
      ObjectId("670000000000000000000008")
    ],
    valoracionMedia: 0,
    numValoraciones: 0
  }
])

/*  acknowledged: true,
  insertedIds: {
    '0': ObjectId('660000000000000000000001'),
    '1': ObjectId('660000000000000000000002'),
    '2': ObjectId('660000000000000000000003'),
    '3': ObjectId('660000000000000000000004'),
    '4': ObjectId('660000000000000000000005')
  }*/

db.anuncios.insertMany([
  {
    _id: ObjectId("670000000000000000000001"),
    titulo: "Seat Ibiza 2015",
    descripcion: "Siempre en garaje, ITV pasada.",
    precio: 6500,
    categoria: "Coches",
    estado: "DISPONIBLE",
    ciudad: "Valencia",
    fechaPublicacion: new Date("2026-10-01"),
    visitas: 340,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [
      { url: "https://img.rastro.es/a1-1.jpg", orden: 1 },
      { url: "https://img.rastro.es/a1-2.jpg", orden: 2 }
    ],
    atributos: { marca: "Seat", modelo: "Ibiza", anio: 2015, km: 98000, combustible: "gasolina" }
  },
  {
    _id: ObjectId("670000000000000000000002"),
    titulo: "Ford Focus 2012",
    descripcion: "Correa cambiada hace un año.",
    precio: 4200,
    categoria: "Coches",
    estado: "DISPONIBLE",
    ciudad: "Castellón",
    fechaPublicacion: new Date("2026-10-12"),
    visitas: 95,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [{ url: "https://img.rastro.es/a2-1.jpg", orden: 1 }],
    atributos: { marca: "Ford", modelo: "Focus", anio: 2012, km: 165000, combustible: "diésel" }
  },
  {
    _id: ObjectId("670000000000000000000003"),
    titulo: "iPhone 13 128 GB",
    descripcion: "Con funda y cargador.",
    precio: 380,
    categoria: "Móviles",
    estado: "DISPONIBLE",
    ciudad: "Valencia",
    fechaPublicacion: new Date("2026-10-20"),
    visitas: 512,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [
      { url: "https://img.rastro.es/a3-1.jpg", orden: 1 },
      { url: "https://img.rastro.es/a3-2.jpg", orden: 2 },
      { url: "https://img.rastro.es/a3-3.jpg", orden: 3 }
    ],
    atributos: { marca: "Apple", modelo: "iPhone 13", almacenamientoGB: 128, bateriaPct: 87 }
  },
  {
    _id: ObjectId("670000000000000000000004"),
    titulo: "Samsung Galaxy A52",
    descripcion: "Pantalla sin rayas.",
    precio: 150,
    categoria: "Móviles",
    estado: "VENDIDO",
    ciudad: "Alicante",
    fechaPublicacion: new Date("2026-09-05"),
    visitas: 210,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [{ url: "https://img.rastro.es/a4-1.jpg", orden: 1 }],
    atributos: { marca: "Samsung", modelo: "Galaxy A52", almacenamientoGB: 128, bateriaPct: 80 }
  },
  {
    _id: ObjectId("670000000000000000000005"),
    titulo: "Xiaomi Redmi Note 10",
    descripcion: "Funciona perfecto.",
    precio: 90,
    categoria: "Móviles",
    estado: "DISPONIBLE",
    ciudad: "Valencia",
    fechaPublicacion: new Date("2026-10-22"),
    visitas: 48,
    vendedor: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" },
    fotos: [{ url: "https://img.rastro.es/a5-1.jpg", orden: 1 }],
    atributos: { marca: "Xiaomi", modelo: "Redmi Note 10", almacenamientoGB: 64, bateriaPct: 91 }
  },
  {
    _id: ObjectId("670000000000000000000006"),
    titulo: "Chaqueta vaquera Levi's",
    descripcion: "Poco uso.",
    precio: 25,
    categoria: "Ropa",
    estado: "DISPONIBLE",
    ciudad: "Alicante",
    fechaPublicacion: new Date("2026-10-25"),
    visitas: 12,
    vendedor: { id: ObjectId("660000000000000000000003"), nombre: "Marta Ruiz" },
    fotos: [],
    atributos: { talla: "M", marca: "Levi's", genero: "unisex" }
  },
  {
    _id: ObjectId("670000000000000000000007"),
    titulo: "Zapatillas Nike Air",
    descripcion: "Talla 42, como nuevas.",
    precio: 40,
    categoria: "Ropa",
    estado: "RESERVADO",
    ciudad: "Valencia",
    fechaPublicacion: new Date("2026-10-18"),
    visitas: 77,
    vendedor: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" },
    fotos: [{ url: "https://img.rastro.es/a7-1.jpg", orden: 1 }],
    atributos: { talla: "42", marca: "Nike", genero: "hombre" }
  },
  {
    _id: ObjectId("670000000000000000000008"),
    titulo: "Mesa de comedor de roble",
    descripcion: "Para 6 personas.",
    precio: 120,
    categoria: "Muebles",
    estado: "DISPONIBLE",
    ciudad: "Castellón",
    fechaPublicacion: new Date("2026-10-26"),
    visitas: 160,
    vendedor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
    fotos: [{ url: "https://img.rastro.es/a8-1.jpg", orden: 1 }],
    atributos: { material: "roble", ancho: 160, fondo: 90, alto: 75 }
  }
])

 /*acknowledged: true,
  insertedIds: {
    '0': ObjectId('670000000000000000000001'),
    '1': ObjectId('670000000000000000000002'),
    '2': ObjectId('670000000000000000000003'),
    '3': ObjectId('670000000000000000000004'),
    '4': ObjectId('670000000000000000000005'),
    '5': ObjectId('670000000000000000000006'),
    '6': ObjectId('670000000000000000000007'),
    '7': ObjectId('670000000000000000000008')
  }*/

db.ofertas.insertMany([
  {
    _id: ObjectId("680000000000000000000001"),
    importe: 340,
    estado: "PENDIENTE",
    fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000003"), titulo: "iPhone 13 128 GB", precio: 380 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" }
  },
  {
    _id: ObjectId("680000000000000000000002"),
    importe: 6000,
    estado: "RECHAZADA",
    fecha: new Date("2026-10-05"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000001"), nombre: "Ana García" }
  },
  {
    _id: ObjectId("680000000000000000000003"),
    importe: 6200,
    estado: "PENDIENTE",
    fecha: new Date("2026-10-26"),
    anuncio: { id: ObjectId("670000000000000000000001"), titulo: "Seat Ibiza 2015", precio: 6500 },
    comprador: { id: ObjectId("660000000000000000000005"), nombre: "Sara López" }
  },
  {
    _id: ObjectId("680000000000000000000004"),
    importe: 150,
    estado: "ACEPTADA",
    fecha: new Date("2026-09-10"),
    anuncio: { id: ObjectId("670000000000000000000004"), titulo: "Samsung Galaxy A52", precio: 150 },
    comprador: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" }
  },
  {
    _id: ObjectId("680000000000000000000005"),
    importe: 35,
    estado: "ACEPTADA",
    fecha: new Date("2026-10-27"),
    anuncio: { id: ObjectId("670000000000000000000007"), titulo: "Zapatillas Nike Air", precio: 40 },
    comprador: { id: ObjectId("660000000000000000000002"), nombre: "Luis Martín" }
  }
])
/*  acknowledged: true,
  insertedIds: {
    '0': ObjectId('680000000000000000000001'),
    '1': ObjectId('680000000000000000000002'),
    '2': ObjectId('680000000000000000000003'),
    '3': ObjectId('680000000000000000000004'),
    '4': ObjectId('680000000000000000000005')
  }*/

db.valoraciones.insertOne({
  anuncioId: ObjectId("670000000000000000000004"),
  autor: { id: ObjectId("660000000000000000000004"), nombre: "Hugo Sanz" },
  valoradoId: ObjectId("660000000000000000000003"),
  estrellas: 5,
  comentario: "Todo perfecto",
  fecha: new Date("2026-09-15")
})
/*acknowledged: true,
  insertedId: ObjectId('6af05b6c0c62ef1977f58d9d')
}*/

db.usuarios.countDocuments()
    5

db.anuncios.countDocuments()
    8

db.ofertas.countDocuments()
    5

db.valoraciones.countDocuments()
    1



// Ejercicio B2. Ahora tú: dos anuncios nuevos

db.anuncios.insertOne({
  titulo: "Bicicleta de montaña Orbea",
  descripcion: "Revisada en taller.",
  precio: 300,
  categoria: "Deporte",
  estado: "DISPONIBLE",
  ciudad: "Castellón",
  fechaPublicacion: new Date("2026-10-27"),
  visitas: 0,
  vendedor: {
    id: ObjectId("660000000000000000000004"),
    nombre: "Hugo Sanz"
  },
  fotos: [
    { url: "https://img.rastro.es/bici-1.jpg", orden: 1 }
  ],
  atributos: {
    talla: "L",
    tipo: "montaña",
    ruedasPulgadas: 29
  }
})

db.anuncios.insertOne({
  titulo: "Google Pixel 7",
  descripcion: "Libre, con caja.",
  precio: 260,
  categoria: "Móviles",
  estado: "DISPONIBLE",
  ciudad: "Valencia",
  fechaPublicacion: new Date("2026-10-28"),
  visitas: 0,
  vendedor: {
    id: ObjectId("660000000000000000000005"),
    nombre: "Sara López"
  },
  fotos: [
    { url: "https://img.rastro.es/pixel-1.jpg", orden: 1 },
    { url: "https://img.rastro.es/pixel-2.jpg", orden: 2 }
  ],
  atributos: {
    marca: "Google",
    modelo: "Pixel 7",
    almacenamientoGB: 128,
    bateriaPct: 92
  }
})

// Ejercicio B3.

//3.1. Crea un índice único sobre el email de usuarios.

db.usuarios.createIndex(
  { email: 1 },
  { unique: true }
)

//3.2. Crea un índice único sobre la pareja autor.id + anuncioId de valoraciones.

db.valoraciones.createIndex(
  { "autor.id": 1, anuncioId: 1 },
  { unique: true }
)

//3.3. La búsqueda más habitual es «anuncios de una categoría ordenados por precio». Crea un índice sobre categoria y precio.

db.anuncios.createIndex(
  { categoria: 1, precio: 1 }
)

//3.4. Muestra los índices de las tres colecciones.

rastro> db.usuarios.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { email: 1 }, name: 'email_1', unique: true }
]

rastro> db.anuncios.getIndexes()

[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { 'autor.id': 1, anuncioId: 1 },
    name: 'autor.id_1_anuncioId_1',
    unique: true
  }
]

rastro> db.valoraciones.getIndexes()

[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  {
    v: 2,
    key: { 'autor.id': 1, anuncioId: 1 },
    name: 'autor.id_1_anuncioId_1',
    unique: true
  }
]

//3.5. Comprueba con explain() que db.anuncios.find({ categoria: "Coches" }).sort({ precio: 1 }) usa el índice.

//En respuestas.md



//Ejercicio B5.

//5.1

db.anuncios.find(
  { estado: "DISPONIBLE", ciudad: "Valencia" },
  { titulo: 1, precio: 1, _id: 0 }
).sort({ precio: 1 })

[
  { titulo: 'Xiaomi Redmi Note 10', precio: 90 },
  { titulo: 'Google Pixel 7', precio: 260 },
  { titulo: 'iPhone 13 128 GB', precio: 380 },
]

//5.2

db.anuncios.find({
  categoria: "Coches",
  "atributos.km": { $lt: 100000 }
})

[
  {
    _id: ObjectId('670000000000000000000001'),
    titulo: 'Seat Ibiza 2015',
    descripcion: 'Siempre en garaje, ITV pasada.',
    precio: 6500,
    categoria: 'Coches',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-01T00:00:00.000Z'),
    visitas: 340,
    vendedor: { id: ObjectId('660000000000000000000002'), nombre: 'Luis Martín' },
    fotos: [
      { url: 'https://img.rastro.es/a1-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/a1-2.jpg', orden: 2 }
    ],
    atributos: {
      marca: 'Seat',
      modelo: 'Ibiza',
      anio: 2015,
      km: 98000,
      combustible: 'gasolina'
    }
  }
]

//5.3

db.anuncios.find({
  categoria: "Móviles",
  "atributos.almacenamientoGB": { $gte: 128 }
})

[
  {
    _id: ObjectId('670000000000000000000004'),
    titulo: 'Samsung Galaxy A52',
    descripcion: 'Pantalla sin rayas.',
    precio: 150,
    categoria: 'Móviles',
    estado: 'VENDIDO',
    ciudad: 'Alicante',
    fechaPublicacion: ISODate('2026-09-05T00:00:00.000Z'),
    visitas: 210,
    vendedor: { id: ObjectId('660000000000000000000003'), nombre: 'Marta Ruiz' },
    fotos: [ { url: 'https://img.rastro.es/a4-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Samsung',
      modelo: 'Galaxy A52',
      almacenamientoGB: 128,
      bateriaPct: 80
    }
  },
  {
    _id: ObjectId('6af0d113dafbb452049180c7'),
    titulo: 'Google Pixel 7',
    descripcion: 'Libre, con caja.',
    precio: 260,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-28T00:00:00.000Z'),
    visitas: 0,
    vendedor: { id: ObjectId('660000000000000000000005'), nombre: 'Sara López' },
    fotos: [
      { url: 'https://img.rastro.es/pixel-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/pixel-2.jpg', orden: 2 }
    ],
    atributos: {
      marca: 'Google',
      modelo: 'Pixel 7',
      almacenamientoGB: 128,
      bateriaPct: 92
    }
  },
  {
    _id: ObjectId('670000000000000000000003'),
    titulo: 'iPhone 13 128 GB',
    descripcion: 'Con funda y cargador.',
    precio: 380,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-20T00:00:00.000Z'),
    visitas: 512,
    vendedor: { id: ObjectId('660000000000000000000001'), nombre: 'Ana García' },
    fotos: [
      { url: 'https://img.rastro.es/a3-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/a3-2.jpg', orden: 2 },
      { url: 'https://img.rastro.es/a3-3.jpg', orden: 3 }
    ],
    atributos: {
      marca: 'Apple',
      modelo: 'iPhone 13',
      almacenamientoGB: 128,
      bateriaPct: 87
    }
  }
]

//5.4

db.anuncios.find({
  precio: { $gte: 50, $lte: 400 }
})

[
  {
    _id: ObjectId('670000000000000000000003'),
    titulo: 'iPhone 13 128 GB',
    descripcion: 'Con funda y cargador.',
    precio: 380,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-20T00:00:00.000Z'),
    visitas: 512,
    vendedor: { id: ObjectId('660000000000000000000001'), nombre: 'Ana García' },
    fotos: [
      { url: 'https://img.rastro.es/a3-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/a3-2.jpg', orden: 2 },
      { url: 'https://img.rastro.es/a3-3.jpg', orden: 3 }
    ],
    atributos: {
      marca: 'Apple',
      modelo: 'iPhone 13',
      almacenamientoGB: 128,
      bateriaPct: 87
    }
  },
  {
    _id: ObjectId('670000000000000000000004'),
    titulo: 'Samsung Galaxy A52',
    descripcion: 'Pantalla sin rayas.',
    precio: 150,
    categoria: 'Móviles',
    estado: 'VENDIDO',
    ciudad: 'Alicante',
    fechaPublicacion: ISODate('2026-09-05T00:00:00.000Z'),
    visitas: 210,
    vendedor: { id: ObjectId('660000000000000000000003'), nombre: 'Marta Ruiz' },
    fotos: [ { url: 'https://img.rastro.es/a4-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Samsung',
      modelo: 'Galaxy A52',
      almacenamientoGB: 128,
      bateriaPct: 80
    }
  },
  {
    _id: ObjectId('670000000000000000000005'),
    titulo: 'Xiaomi Redmi Note 10',
    descripcion: 'Funciona perfecto.',
    precio: 90,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-22T00:00:00.000Z'),
    visitas: 48,
    vendedor: { id: ObjectId('660000000000000000000002'), nombre: 'Luis Martín' },
    fotos: [ { url: 'https://img.rastro.es/a5-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Xiaomi',
      modelo: 'Redmi Note 10',
      almacenamientoGB: 64,
      bateriaPct: 91
    }
  },
  {
    _id: ObjectId('670000000000000000000008'),
    titulo: 'Mesa de comedor de roble',
    descripcion: 'Para 6 personas.',
    precio: 120,
    categoria: 'Muebles',
    estado: 'DISPONIBLE',
    ciudad: 'Castellón',
    fechaPublicacion: ISODate('2026-10-26T00:00:00.000Z'),
    visitas: 160,
    vendedor: { id: ObjectId('660000000000000000000004'), nombre: 'Hugo Sanz' },
    fotos: [ { url: 'https://img.rastro.es/a8-1.jpg', orden: 1 } ],
    atributos: { material: 'roble', ancho: 160, fondo: 90, alto: 75 }
  },
  {
    _id: ObjectId('6af0d09cdafbb452049180c6'),
    titulo: 'Bicicleta de montaña Orbea',
    descripcion: 'Revisada en taller.',
    precio: 300,
    categoria: 'Deporte',
    estado: 'DISPONIBLE',
    ciudad: 'Castellón',
    fechaPublicacion: ISODate('2026-10-27T00:00:00.000Z'),
    visitas: 0,
    vendedor: { id: ObjectId('660000000000000000000004'), nombre: 'Hugo Sanz' },
    fotos: [ { url: 'https://img.rastro.es/bici-1.jpg', orden: 1 } ],
    atributos: { talla: 'L', tipo: 'montaña', ruedasPulgadas: 29 }
  },
  {
    _id: ObjectId('6af0d113dafbb452049180c7'),
    titulo: 'Google Pixel 7',
    descripcion: 'Libre, con caja.',
    precio: 260,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-28T00:00:00.000Z'),
    visitas: 0,
    vendedor: { id: ObjectId('660000000000000000000005'), nombre: 'Sara López' },
    fotos: [
      { url: 'https://img.rastro.es/pixel-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/pixel-2.jpg', orden: 2 }
    ],
    atributos: {
      marca: 'Google',
      modelo: 'Pixel 7',
      almacenamientoGB: 128,
      bateriaPct: 92
    }
  }
]

//5.5

db.anuncios.find({
  titulo: { $regex: "nike", $options: "i" }
})

[
  {
    _id: ObjectId('670000000000000000000003'),
    titulo: 'iPhone 13 128 GB',
    descripcion: 'Con funda y cargador.',
    precio: 380,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-20T00:00:00.000Z'),
    visitas: 512,
    vendedor: { id: ObjectId('660000000000000000000001'), nombre: 'Ana García' },
    fotos: [
      { url: 'https://img.rastro.es/a3-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/a3-2.jpg', orden: 2 },
      { url: 'https://img.rastro.es/a3-3.jpg', orden: 3 }
    ],
    atributos: {
      marca: 'Apple',
      modelo: 'iPhone 13',
      almacenamientoGB: 128,
      bateriaPct: 87
    }
  },
  {
    _id: ObjectId('670000000000000000000004'),
    titulo: 'Samsung Galaxy A52',
    descripcion: 'Pantalla sin rayas.',
    precio: 150,
    categoria: 'Móviles',
    estado: 'VENDIDO',
    ciudad: 'Alicante',
    fechaPublicacion: ISODate('2026-09-05T00:00:00.000Z'),
    visitas: 210,
    vendedor: { id: ObjectId('660000000000000000000003'), nombre: 'Marta Ruiz' },
    fotos: [ { url: 'https://img.rastro.es/a4-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Samsung',
      modelo: 'Galaxy A52',
      almacenamientoGB: 128,
      bateriaPct: 80
    }
  },
  {
    _id: ObjectId('670000000000000000000005'),
    titulo: 'Xiaomi Redmi Note 10',
    descripcion: 'Funciona perfecto.',
    precio: 90,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-22T00:00:00.000Z'),
    visitas: 48,
    vendedor: { id: ObjectId('660000000000000000000002'), nombre: 'Luis Martín' },
    fotos: [ { url: 'https://img.rastro.es/a5-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Xiaomi',
      modelo: 'Redmi Note 10',
      almacenamientoGB: 64,
      bateriaPct: 91
    }
  },
  {
    _id: ObjectId('670000000000000000000008'),
    titulo: 'Mesa de comedor de roble',
    descripcion: 'Para 6 personas.',
    precio: 120,
    categoria: 'Muebles',
    estado: 'DISPONIBLE',
    ciudad: 'Castellón',
    fechaPublicacion: ISODate('2026-10-26T00:00:00.000Z'),
    visitas: 160,
    vendedor: { id: ObjectId('660000000000000000000004'), nombre: 'Hugo Sanz' },
    fotos: [ { url: 'https://img.rastro.es/a8-1.jpg', orden: 1 } ],
    atributos: { material: 'roble', ancho: 160, fondo: 90, alto: 75 }
  },
  {
    _id: ObjectId('6af0d09cdafbb452049180c6'),
    titulo: 'Bicicleta de montaña Orbea',
    descripcion: 'Revisada en taller.',
    precio: 300,
    categoria: 'Deporte',
    estado: 'DISPONIBLE',
    ciudad: 'Castellón',
    fechaPublicacion: ISODate('2026-10-27T00:00:00.000Z'),
    visitas: 0,
    vendedor: { id: ObjectId('660000000000000000000004'), nombre: 'Hugo Sanz' },
    fotos: [ { url: 'https://img.rastro.es/bici-1.jpg', orden: 1 } ],
    atributos: { talla: 'L', tipo: 'montaña', ruedasPulgadas: 29 }
  },
  {
    _id: ObjectId('6af0d113dafbb452049180c7'),
    titulo: 'Google Pixel 7',
    descripcion: 'Libre, con caja.',
    precio: 260,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-28T00:00:00.000Z'),
    visitas: 0,
    vendedor: { id: ObjectId('660000000000000000000005'), nombre: 'Sara López' },
    fotos: [
      { url: 'https://img.rastro.es/pixel-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/pixel-2.jpg', orden: 2 }
    ],
    atributos: {
      marca: 'Google',
      modelo: 'Pixel 7',
      almacenamientoGB: 128,
      bateriaPct: 92
    }
  }
]
rastro> 

rastro> 

rastro> 

rastro> 

rastro> db.anuncios.find({
|   titulo: { $regex: "nike", $options: "i" }
| })
[
  {
    _id: ObjectId('670000000000000000000007'),
    titulo: 'Zapatillas Nike Air',
    descripcion: 'Talla 42, como nuevas.',
    precio: 40,
    categoria: 'Ropa',
    estado: 'RESERVADO',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-18T00:00:00.000Z'),
    visitas: 77,
    vendedor: { id: ObjectId('660000000000000000000001'), nombre: 'Ana García' },
    fotos: [ { url: 'https://img.rastro.es/a7-1.jpg', orden: 1 } ],
    atributos: { talla: '42', marca: 'Nike', genero: 'hombre' }
  }
]

//5.6

db.anuncios.find({
  "vendedor.id": ObjectId("660000000000000000000002")
})

[
  {
    _id: ObjectId('670000000000000000000001'),
    titulo: 'Seat Ibiza 2015',
    descripcion: 'Siempre en garaje, ITV pasada.',
    precio: 6500,
    categoria: 'Coches',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-01T00:00:00.000Z'),
    visitas: 340,
    vendedor: { id: ObjectId('660000000000000000000002'), nombre: 'Luis Martín' },
    fotos: [
      { url: 'https://img.rastro.es/a1-1.jpg', orden: 1 },
      { url: 'https://img.rastro.es/a1-2.jpg', orden: 2 }
    ],
    atributos: {
      marca: 'Seat',
      modelo: 'Ibiza',
      anio: 2015,
      km: 98000,
      combustible: 'gasolina'
    }
  },
  {
    _id: ObjectId('670000000000000000000005'),
    titulo: 'Xiaomi Redmi Note 10',
    descripcion: 'Funciona perfecto.',
    precio: 90,
    categoria: 'Móviles',
    estado: 'DISPONIBLE',
    ciudad: 'Valencia',
    fechaPublicacion: ISODate('2026-10-22T00:00:00.000Z'),
    visitas: 48,
    vendedor: { id: ObjectId('660000000000000000000002'), nombre: 'Luis Martín' },
    fotos: [ { url: 'https://img.rastro.es/a5-1.jpg', orden: 1 } ],
    atributos: {
      marca: 'Xiaomi',
      modelo: 'Redmi Note 10',
      almacenamientoGB: 64,
      bateriaPct: 91
    }
  }
]

//5.7

db.anuncios.find({
  fotos: { $size: 0 }
})

[
  {
    _id: ObjectId('670000000000000000000006'),
    titulo: "Chaqueta vaquera Levi's",
    descripcion: 'Poco uso.',
    precio: 25,
    categoria: 'Ropa',
    estado: 'DISPONIBLE',
    ciudad: 'Alicante',
    fechaPublicacion: ISODate('2026-10-25T00:00:00.000Z'),
    visitas: 12,
    vendedor: { id: ObjectId('660000000000000000000003'), nombre: 'Marta Ruiz' },
    fotos: [],
    atributos: { talla: 'M', marca: "Levi's", genero: 'unisex' }
  }
]

//5.8

db.ofertas.find({
  estado: "PENDIENTE",
  "anuncio.titulo": "Seat Ibiza 2015"
})

[
  {
    _id: ObjectId('680000000000000000000003'),
    importe: 6200,
    estado: 'PENDIENTE',
    fecha: ISODate('2026-10-26T00:00:00.000Z'),
    anuncio: {
      id: ObjectId('670000000000000000000001'),
      titulo: 'Seat Ibiza 2015',
      precio: 6500
    },
    comprador: { id: ObjectId('660000000000000000000005'), nombre: 'Sara López' }
  }
]

//5.9

db.usuarios.find(
  { favoritos: ObjectId("670000000000000000000008") },
  { nombre: 1, _id: 0 }
)

[ { nombre: 'Ana García' }, { nombre: 'Sara López' } ]

//5.10

db.anuncios.countDocuments({
  estado: "VENDIDO"
})

1

//5.11

db.anuncios.find(
  {},
  { titulo: 1, visitas: 1, _id: 0 }
).sort({ visitas: -1 }).limit(3)

[
  { titulo: 'iPhone 13 128 GB', visitas: 512 },
  { titulo: 'Seat Ibiza 2015', visitas: 340 },
  { titulo: 'Samsung Galaxy A52', visitas: 210 }
]

//Ejercicio B6

//6.1

db.anuncios.aggregate([
  {
    $group: {
      _id: "$categoria",
      total: { $sum: 1 }
    }
  },
  {
    $sort: { total: -1 }
  }
])

[
  { _id: 'Móviles', total: 4 },
  { _id: 'Ropa', total: 2 },
  { _id: 'Coches', total: 2 },
  { _id: 'Muebles', total: 1 },
  { _id: 'Deporte', total: 1 }
]

//6.2

db.anuncios.aggregate([
  {
    $group: {
      _id: "$categoria",
      precioMedio: { $avg: "$precio" }
    }
  }
])

[
  { _id: 'Muebles', precioMedio: 120 },
  { _id: 'Móviles', precioMedio: 220 },
  { _id: 'Coches', precioMedio: 5350 },
  { _id: 'Ropa', precioMedio: 32.5 },
  { _id: 'Deporte', precioMedio: 300 }
]

//6.3

db.anuncios.aggregate([
  {
    $group: {
      _id: "$ciudad",
      total: { $sum: 1 }
    }
  }
])

[
  { _id: 'Alicante', total: 2 },
  { _id: 'Valencia', total: 5 },
  { _id: 'Castellón', total: 3 }
]

//6.4

db.anuncios.aggregate([
  {
    $match: { estado: "DISPONIBLE" }
  },
  {
    $group: {
      _id: "$vendedor.nombre",
      valorTotal: { $sum: "$precio" }
    }
  }
])

[
  { _id: 'Hugo Sanz', valorTotal: 4620 },
  { _id: 'Luis Martín', valorTotal: 6590 },
  { _id: 'Ana García', valorTotal: 380 },
  { _id: 'Sara López', valorTotal: 260 },
  { _id: 'Marta Ruiz', valorTotal: 25 }
]

//6.5

db.anuncios.aggregate([
  {
    $group: {
      _id: "$categoria",
      visitasTotales: { $sum: "$visitas" }
    }
  },
  {
    $sort: { visitasTotales: -1 }
  },
  {
    $limit: 1
  }
])

[ { _id: 'Móviles', visitasTotales: 770 } ]

//  Ejercicio B7

//7.1

db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000003") },
  {
    $push: {
      fotos: {
        url: "https://img.rastro.es/a3-4.jpg",
        orden: 4
      }
    }
  }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//7.2

db.anuncios.find(
  { _id: ObjectId("670000000000000000000005") }
)

db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000005") },
  { $inc: { visitas: 1 } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//7.3

db.usuarios.find(
  { _id: ObjectId("660000000000000000000005") }
)

db.anuncios.find(
  { titulo: /Ford Focus/i },
  { titulo: 1, _id: 1 }
)



var fordFocus = db.anuncios.findOne(
  { titulo: /Ford Focus/i },
  { _id: 1 }
)

db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  {
    $pull: {
      favoritos: ObjectId("670000000000000000000003")
    }
  }
)

db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  {
    $addToSet: {
      favoritos: fordFocus._id
    }
  }
)

db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000005") },
  {
    $addToSet: {
      favoritos: fordFocus._id
    }
  }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}

//No se ha duplicado el anuncio en favoritos porque ya estaba en la lista de favoritos del usuario.

//7.4

db.ofertas.find(
  { _id: ObjectId("680000000000000000000003") }
)

db.ofertas.updateOne(
  { _id: ObjectId("680000000000000000000003") },
  { $set: { estado: "ACEPTADA" } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

db.anuncios.updateOne(
  { _id: ObjectId("670000000000000000000001") },
  { $set: { estado: "RESERVADO" } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//7.5

db.anuncios.find(
  { categoria: "Coches" }
)

db.anuncios.updateMany(
  { categoria: "Coches" },
  { $mul: { precio: 0.9 } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}

//7.6

db.usuarios.find(
  { _id: ObjectId("660000000000000000000002") }
)

db.usuarios.updateOne(
  { _id: ObjectId("660000000000000000000002") },
  { $set: { nombre: "Luis M. Martín" } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

db.anuncios.find(
  { "vendedor.id": ObjectId("660000000000000000000002") }
)

db.anuncios.updateMany(
  { "vendedor.id": ObjectId("660000000000000000000002") },
  { $set: { "vendedor.nombre": "Luis M. Martín" } }
)

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}