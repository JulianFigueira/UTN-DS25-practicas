import{Book, AgregarLibro, BookResponse, BookListResponse} from '../types/books';


let books:Book[]=[
    {
      id: 1,
      titulo: "Harry Potter",
      autor: "J.K Rowling",
      descripcion: "Saga fantástica que sigue la vida de Harry Potter, un joven mago que asiste a la escuela de magia Hogwarts y se enfrenta al oscuro mago Lord Voldemort. Combina aventuras, amistad y magia en un mundo fascinante.",
      imagen: '/assets/harrypotter.webp',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 2,
      titulo: "1984",
      autor: "George Orwell",
      descripcion: "Novela distópica sobre un régimen totalitario que vigila y controla cada aspecto de la vida humana. El protagonista, Winston Smith, lucha por preservar su libertad y pensamiento individual en un mundo de opresión y manipulación.",
      imagen: '/assets/1984.webp',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 3,
      titulo: "Los juegos del hambre",
      autor: "Suzanne Collins",
      descripcion: "En un futuro postapocalíptico, Katniss Everdeen debe sobrevivir a un mortal torneo televisado donde jóvenes luchan a muerte. Una crítica al poder autoritario y al entretenimiento extremo.",
      imagen: '/assets/losjuegosdelhambre.jpg',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 4,
      titulo: "La mano izquierda de la oscuridad",
      autor: "Ursula K. Le Guin",
      descripcion: "Un enviado humano llega a un planeta donde los habitantes no tienen género fijo. La novela explora temas de identidad, política y cultura, desafiando las nociones tradicionales de género.",
      imagen: '/assets/lamano.jpg',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 5,
      titulo: "Fundación",
      autor: "Isaac Asimov",
      descripcion: "Primer libro de una saga épica que narra cómo un científico intenta salvar el conocimiento humano ante la inminente caída de un imperio galáctico. Introduce el concepto de 'psicohistoria', una ciencia ficticia que predice el futuro.",
      imagen: '/assets/fundacion.webp',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 6,
      titulo: "Neuromante",
      autor: "William Gibson",
      descripcion: "Obra pionera del ciberpunk que sigue a un hacker en un mundo dominado por corporaciones, inteligencia artificial y realidades virtuales. Influyó profundamente en la cultura digital y la ciencia ficción moderna.",
      imagen:  '/assets/neuromante.jpg',
      categoria: "Ciencia Ficcion"
    },
    {
      id: 7,
      titulo: "Sapiens: De animales a dioses",
      autor: "Yuval Noah Harari",
      descripcion: "Un recorrido por la historia de la humanidad desde el surgimiento del Homo sapiens hasta la actualidad, analizando cómo la biología y la cultura moldearon nuestras sociedades.",
      imagen: "/assets/sapiens.jpg",
      categoria: "Historia"
    },
    {
      id: 8,
      titulo: "Los pilares de la Tierra",
      autor: "Ken Follett",
      descripcion: "Una novela histórica ambientada en la Edad Media que narra la construcción de una catedral, entrelazando política, religión y luchas de poder en la Inglaterra del siglo XII.",
      imagen: "/assets/lospilares.webp",
      categoria: "Historia"
    },
    {
      id: 9,
      titulo: "Guns, Germs, and Steel",
      autor: "Jared Diamond",
      descripcion: "Explora cómo las condiciones geográficas y ambientales influyeron en el desarrollo de civilizaciones y la conquista del mundo por las potencias europeas.",
      imagen:"/assets/guns.webp",
      categoria: "Historia"
    },
    {
      id: 10,
      titulo: "Una historia popular de Estados Unidos",
      autor: "Howard Zinn",
      descripcion: "Presenta la historia de EE.UU. desde la perspectiva de los grupos oprimidos, como trabajadores, mujeres y minorías, cuestionando la narrativa tradicional.",
      imagen: "/assets/unahistoria.jpg",
      categoria: "Historia"
    },
    {
      id: 11,
      titulo: "El siglo de oro español",
      autor: "Henry Kamen",
      descripcion: "Analiza el apogeo cultural, político y militar de España durante los siglos XVI y XVII, desmontando mitos sobre su decadencia.",
      imagen:  "/assets/elsiglodeoro.webp",
      categoria: "Historia"
    },
    {
      id: 12,
      titulo: "La Segunda Guerra Mundial",
      autor: "Antony Beevor",
      descripcion: "Relato detallado y riguroso del conflicto global más devastador de la historia, incluyendo testimonios y análisis estratégicos de los frentes de batalla.",
      imagen: "/assets/lasegundaguerra.jpg",
      categoria: "Historia"
    },
      {
      id: 13,
      titulo: "Breves respuestas a las grandes preguntas",
      autor: "Stephen Hawking",
      descripcion: "Descripcion:Una recopilación de ideas del famoso físico sobre el universo, los agujeros negros, el futuro de la humanidad y las grandes incógnitas científicas.",
      imagen: "/assets/respuestas.jpg",
      categoria: "Ciencia"
    },
    {
      id: 14,
      titulo: "El gen",
      autor: "Siddhartha Mukherjee",
      descripcion: "Explora la historia y la ciencia detrás de la genética, desde los primeros descubrimientos hasta la biotecnología moderna.",
      imagen: "/assets/elgen.webp",
      categoria: "Ciencia"
    },
    {
      id: 15,
      titulo: "Cosmos",
      autor: "Carl Sagan",
      descripcion: "Un viaje fascinante a través del universo, combinando ciencia, historia y filosofía para explicar el lugar de la humanidad en el cosmos.",
      imagen: "/assets/cosmos.webp",
      categoria: "Ciencia"
    },
    {
      id: 16,
      titulo: "El universo en una cáscara de nuez",
      autor: "Stephen Hawking",
      descripcion: "Explica de forma accesible conceptos complejos de física moderna como la teoría de cuerdas, los agujeros negros y el tiempo.",
      imagen: "/assets/eluniverso.jpg",
      categoria: "Ciencia"
    },
    {
      id: 17,
      titulo: "La estructura de las revoluciones científicas",
      autor: "Bill Bryson",
      descripcion: "Relato sobre la física de partículas y la búsqueda del bosón de Higgs, explicando conceptos complejos con humor y claridad.",
      imagen: "/assets/laestructura.webp",
      categoria: "Ciencia"
    },
    {
      id: 18,
      titulo: "Una breve historia de casi todo",
      autor: "Bill Bryson",
      descripcion: "Explica con humor y claridad los grandes descubrimientos científicos en campos como la física, la química, la biología y la geología.",
      imagen: "/assets/unabrevehistoria.jpg",
      categoria: "Ciencia"
    },
    {
      id: 19,
      titulo: "La historia del arte",
      autor: "E.H. Gombrich",
      descripcion: "Una introducción accesible al arte occidental desde la prehistoria hasta el siglo XX, explicando estilos, técnicas y contextos históricos.",
      imagen: "/assets/historia.webp",
      categoria: "Arte"
      },
      {
       id: 20,
       titulo: "El shock del nuevo",
       autor: "Robert Hughes",
       descripcion: "Explora el arte moderno del siglo XX, desde el cubismo hasta el pop art, en un estilo directo y con aguda crítica cultural.",
       imagen: "/assets/elschock.webp",
      categoria: "Arte"
        },
        {
          id: 21,
          titulo: "El arte y la percepción visual",
          autor: "Rudolf Arnheim",
          descripcion: "Analiza cómo percibimos visualmente las obras de arte, combinando psicología, teoría del diseño y análisis artístico.",
          imagen: "/assets/elarte.webp",
          categoria: "Arte"
        },
        {
          id: 22,
          titulo: "¿Qué estás mirando?",
          autor: "Will Gompertz",
          descripcion: "Guía entretenida sobre el arte moderno y contemporáneo, explicando movimientos y artistas de forma clara y accesible para el lector general.",
          imagen: "/assets/que esta mirando.webp",
          categoria: "Arte"
        },
        {
          id: 23,
          titulo: "The Monuments Men",
          autor: "Marion Augustin y Bruno Heitz",
          descripcion: "Narra la misión de un grupo aliado que, durante la Segunda Guerra Mundial, protegió y recuperó obras de arte saqueadas por los nazis para devolverlas a sus dueños  legítimos.",
          imagen: '/assets/monuments.webp',
          categoria: "Arte"
        },
        {
          id: 24,
          titulo: "La mirada inquieta",
          autor: "Eugenia Tenenbaum",
          descripcion: "Explora el arte desde la Antigüedad hasta el siglo XX con una voz cercana y  reflexiva, invitando al lector a cuestionar lo que nos han contado y a disfrutar de las obras con ojos propios",
          imagen: "/assets/mirada.jpg",
          categoria: "Arte"
        }
];

export async function getAllBooks():Promise<Book[]>{
  return books;
}

export async function createBook(bookData: AgregarLibro):
 Promise<Book>{
 const newBook: Book={
   id:Math.max(...books.map(b=>b.id))+1,
   ...bookData,
 };
 books.push(newBook);
 return newBook;
}