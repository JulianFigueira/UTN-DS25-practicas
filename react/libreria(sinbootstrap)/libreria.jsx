<!DOCTYPE html>
<html>
<head>
    <style>

        *{
            margin:0
        }

        header h2{
            margin-left:30px;
            position:relative;
            top: -35px;
            
        }

        header{
            background-color: red;
            display:flex;
        }

        header img{
            height:50px;
            width:50px
        }

        nav{
            margin:20px
        }

        main h2{
            margin-left:20px
        }


        #Categoria{
            margin-left:30px
        }

        header h2 {
        padding:40px;
        text-align: center;
        align-items: center;
       }

       footer{
        background-color: lightblue;
        height:60px
        
       }

       #footer{
        margin-top:50px
       }

       #Libros{
        display:flex;
        gap: 40px;
       }

       img{
        height:200px
       }

       .Desc{
        border:solid black 2px;
        padding:20px;
       }

       h3{
        margin-bottom:20px;
       }

       form label{
        display:block;
       }

       a{
        text-decoration: none;
       }

       .Registro{
        margin:30px
       }

       .Registro div{
        margin:25px
       }

       #Contacto{
        margin:25px;
       }

       .Foto{
         display:flex;
         gap:50px;
         max-width: 550px;
       }

       .Foto img{
        height:120px
       }

       textarea{
        height:15px
       }
    </style>
</head>
<body>



    <header>
        <img src="Tercer año/Desarrollo de Software/UTN_logo.jpg">
        <h2>Libreria UTN</h2>
    </header>

    <nav>
        <h2>Menu</h2>
        <ul>
        <li><a href="#Categoria">Inicio</a></li>
        <li><a href="#CienciaF">Seccion de Ciencia Ficcion</a></li>
        <li><a href="#Historia">Seccion de Historia</a></li>
        <li><a href="#Ciencia">Seccion de Ciencia</a></li>
        <li><a href="#Arte">Seccion de Arte</a></li>
        <li><a href="#Registro">Registro</a></li>
        <li><a href="#Contacto">Contacto</a></li>
        
        </ul>
    </nav>
    <main>
        <h2>Bloques</h2>
        <br><section id="Categoria">
            <div id="Libros">
            <div>
                <h4><a href="#CienciaF">Ciencia Ficcion</a></h4>
                <h5>Harry Potter
                <br> J.K Rowling</h5>
                <img src="harrypotter.webp">
            </div>
            <div>
                <h4><a href="#Historia">Historia</a></h4>
                <h5>Titulo:Sapiens: De animales a dioses
                <br>Autor:Yuval Noah Harari</h5>
                <img src="sapiens.jpg">
            </div>
            <div>
                <h4><a href="#Ciencia">Ciencia</a></h4>
                <h5>Titulo:Breves respuestas a las grandes preguntas
                <br>Autor:Stephen Hawking</h5>
                <img src="respuestas.jpg">
            </div>
            <div>
                <h4><a href="#Arte">Arte</a></h4>
                <h5>Titulo:La historia del arte
                  <br>Autor:E.H. Gombrich</h5>
                <img src="historia.webp">
            </div>
            </div>
        </section>
        <section id="CienciaF" class="Desc">
            </h2>
            <h3>Ciencia Ficcion</h3>
            <ul>
                <li><div class="Foto">
                    Titulo:Harry Potter
                    <br>Autor: J.K Rowling 
                     <br>Descripcion: Saga fantástica que sigue la vida de Harry Potter, 
                     <br>un joven mago que asiste a la escuela de magia Hogwarts y se 
                     <br>enfrenta al oscuro mago Lord Voldemort. Combina aventuras, amistad y 
                     <br>magia en un mundo fascinante.
                     <img src="harrypotter.webp">
                     </div>
                </li>
                <br><li><div class="Foto">Titulo:1984
                    <br>Autor: George Orwell
                    <br>Descripcion: Novela distópica sobre un régimen totalitario que vigila 
                    <br>y controla cada aspecto de la vida humana. El protagonista, Winston Smith, 
                    <br>lucha por preservar su libertad y pensamiento individual en un mundo de opresión 
                    <br>y manipulación.
                    <img src="Tercer año/Desarrollo de Software/1984.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo: Los juegos del hambre
                    <br>Autor:Suzanne Collins
                    <br>Descripcion:En un futuro postapocalíptico, Katniss Everdeen debe sobrevivir a un
                    <br>mortal torneo televisado donde jóvenes luchan a muerte. Una crítica al poder 
                    <br>autoritario y al entretenimiento extremo.
                    <img src="Tercer año/Desarrollo de Software/losjuegosdelhambre.jpg"></div>
                </li>
                <br><li><div class="Foto">Titulo: La mano izquierda de la oscuridad
                    <br>Autor: Ursula K. Le Guin
                    <br>Descripcion:Un enviado humano llega a un planeta donde los habitantes no tienen 
                    <br>género fijo. La novela explora temas de identidad, política y cultura, desafiando
                    <br> las nociones tradicionales de género.
                    <img src="Tercer año/Desarrollo de Software/lamano.jpg"></div>
                    </li>
                <br><li><div class="Foto">Titulo: Fundación
                    <br>Autor: Isaac Asimov
                    <br>Descripcion:Primer libro de una saga épica que narra cómo un científico intenta 
                    <br>salvar el conocimiento humano ante la inminente caída de un imperio galáctico. 
                    <br>Introduce el concepto de "psicohistoria", una ciencia ficticia que predice el 
                    <br>futuro.
                    <img src="Tercer año/Desarrollo de Software/fundacion.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:Neuromante
                    <br>Autor:William Gibson
                    <br>Descripcion:Obra pionera del ciberpunk que sigue a un hacker en un mundo dominado 
                    <br>por corporaciones, inteligencia artificial y realidades virtuales. Influyó profundamente 
                    <br>en la cultura digital y la ciencia ficción moderna.
                    <img src="Tercer año/Desarrollo de Software/neuromante.jpg"></div>
                    </li>

            </ul>
           </section>
           <section id="Historia" class="Desc">
            <h3>Historia</h3>
            <ul>
                <li><div class="Foto">
                    Titulo:Sapiens: De animales a dioses
                    <br>Autor:Yuval Noah Harari
                    <br>Descripcion:Un recorrido por la historia de la humanidad desde el surgimiento 
                    <br>del Homo sapiens hasta la actualidad, analizando cómo la biología y la 
                    <br>cultura moldearon nuestras sociedades.
                    <img src="sapiens.jpg"></div>
                </li>
                <br><li><div class="Foto">Titulo:Los pilares de la Tierra
                    <br>Autor:Ken Follett
                    <br>Descripcion:Una novela histórica ambientada en la Edad Media que narra la 
                    <br>construcción de una catedral, entrelazando política, religión y luchas de poder 
                    <br>en la Inglaterra del siglo XII.
                    <img src="Tercer año/Desarrollo de Software/lospilares.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:Guns, Germs, and Steel
                    <br>Autor:Jared Diamond
                    <br>Descripcion:Explora cómo las condiciones geográficas y ambientales influyeron en el 
                    <br>desarrollo de civilizaciones y la conquista del mundo por las potencias europeas.
                    <img src="Tercer año/Desarrollo de Software/guns.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:Una historia popular de Estados Unidos
                    <br>Autor:Howard Zinn
                    <br>Descripcion:Presenta la historia de EE.UU. desde la perspectiva de los grupos oprimidos,
                    <br>como trabajadores, mujeres y minorías, cuestionando la narrativa tradicional.
                    <img src="Tercer año/Desarrollo de Software/unahistoria.jpg"></div>
                </li>
                <br><li><div class="Foto">Titulo:El siglo de oro español
                   <br>Autor:Henry Kamen
                   <br>Descripcion:Analiza el apogeo cultural, político y militar de España durante los siglos XVI y XVII,
                   <br>desmontando mitos sobre su decadencia.
                   <img src="Tercer año/Desarrollo de Software/elsiglodeoro.webp"></div>
               </li>
                <br><li><div class="Foto">Titulo:La Segunda Guerra Mundial
                    <br>Autor:Antony Beevor
                    <br>Descripcion:Relato detallado y riguroso del conflicto global más devastador de la historia,
                    <br>incluyendo testimonios y análisis estratégicos de los frentes de batalla.
                    <img src="Tercer año/Desarrollo de Software/lasegundaguerra.jpg"></div>
                </li>
                </ul>
            </section>


            <section id="Ciencia" class="Desc">
             <h3>Ciencia</h3>
             <ul>
              <li><div class="Foto">Titulo:Breves respuestas a las grandes preguntas
                  <br>Autor:Stephen Hawking
                  <br>Descripcion:Una recopilación de ideas del famoso físico sobre el universo, los agujeros negros,
                  <br>el futuro de la humanidad y las grandes incógnitas científicas.
                  <img src="respuestas.jpg">
              </div>
              </li>
              <br><li><div class="Foto">Titulo:El gen: Una historia íntima
                  <br>Autor:Siddhartha Mukherjee
                  <br>Descripcion:Explora la historia y la ciencia detrás de la genética, desde los primeros descubrimientos
                  <br>hasta la biotecnología moderna.
                  <img src="Tercer año/Desarrollo de Software/elgen.webp"></div>
              </li>
             <br><li><div class="Foto">Titulo:Cosmos
                  <br>Autor:Carl Sagan
                 <br>Descripcion:Un viaje fascinante a través del universo, combinando ciencia, historia y filosofía
                 <br>para explicar el lugar de la humanidad en el cosmos.
                 <img src="Tercer año/Desarrollo de Software/cosmos.webp"></div>
             </li>
             <li><div class="Foto">Titulo:El universo en una cáscara de nuez
                 <br>Autor:Stephen Hawking
                 <br>Descripcion:Explica de forma accesible conceptos complejos de física moderna como la teoría de cuerdas,
                 <br>los agujeros negros y el tiempo.
                 <img src="Tercer año/Desarrollo de Software/eluniverso.jpg"></div>
             </li>
             <br><li><div class="Foto">Titulo:La estructura de las revoluciones científicas
                 <br>Autor:Thomas S. Kuhn
                 <br>Descripcion:Propone que el progreso científico no es lineal, sino que avanza mediante “revoluciones”
                 <br>que cambian paradigmas establecidos.
                <img src="Tercer año/Desarrollo de Software/laestructura.webp"></div>
             </li>
             <br><li><div class="Foto">Titulo:Una breve historia de casi todo
                 <br>Autor:Bill Bryson
                 <br>Descripcion:Explica con humor y claridad los grandes descubrimientos científicos en campos como la física,
                 <br>la química, la biología y la geología.
                <img src="Tercer año/Desarrollo de Software/unabrevehistoria.jpg"></div>
             </li>
            </ul>
            </section>
            <section id="Arte" Class="Desc">
                <h3>Arte</h3>
                <ul><li>
                  <div class="Foto">Titulo:La historia del arte
                  <br>Autor:E.H. Gombrich
                  <br>Descripcion:Obra clásica que recorre la evolución del arte occidental desde la 
                  <br>prehistoria hasta el siglo XX,
                  <br>con explicaciones claras y accesibles.
                  <img src="historia.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:El arte y la percepción visual
                  <br>Autor:Rudolf Arnheim
                  <br>Descripcion:Analiza cómo percibimos visualmente las obras de arte, combinando psicología, teoría del diseño
                  <br>y análisis artístico.
                  <img src="Tercer año/Desarrollo de Software/elarte.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:El shock del nuevo
                  <br>Autor:Robert Hughes
                  <br>Descripcion:Explora el arte moderno del siglo XX, desde el cubismo hasta el pop art, en un estilo directo
                  <br>y con aguda crítica cultural.
                  <img src="Tercer año/Desarrollo de Software/elschock.webp"></div>
                </li>
                <br><li><div class="Foto">Titulo:The Monuments Men
                  <br>Descripcion: Narra la misión de un grupo aliado que, durante la Segunda Guerra Mundial,
                  <br>protegió y recuperó obras de arte saqueadas por los nazis para devolverlas a sus dueños 
                  <br>legítimos.
                  <img src="Tercer año/Desarrollo de Software/monuments.webp"></div>
                </li>
               <br><li><div class="Foto">Titulo:La mirada inquieta
                  <br>Autor:Eugenia Tenenbaum
                  <br>Descripcion:Explora el arte desde la Antigüedad hasta el siglo XX con una voz cercana y 
                  <br>reflexiva, invitando al lector a cuestionar lo que nos han contado y a disfrutar de las obras 
                  <br>con ojos propios
                <img src="Tercer año/Desarrollo de Software/mirada.jpg"></div>
            </li>
            <br><li><div class="Foto">Titulo:¿Qué estás mirando?
                <br>Autor:Will Gompertz
                <br>Descripcion:Guía entretenida sobre el arte moderno y contemporáneo, explicando movimientos y 
                <br>artistas de forma clara y accesible para el lector general.
                <img src="Tercer año/Desarrollo de Software/que esta mirando.webp"></div>
            </li>
            </ul>
          </section>

            
        </section>
        <section id="Registro" class="Registro">
            <form>
            <h3>Formulario</h3>
            <div class="completo">
             <input type="text" id="name" name="name" placeholder="Julian">
             <label for="nombre">Nombre</label></div>
            <div class="completo">
             <input type="text" id="ape" name="ape" placeholder="Figueira">
             <label for="Apellido">Apellido</label></div>
            <div class="completo">
             <input type="datetime" id="nacimiento" name="nacimiento" placeholder="16/12/2004">
             <label>Fecha de nacimiento</label></div>
            <div class="completo">
             <input type="email" id="mail" name="mail" placeholder="julianfigueira485...">
             <label>Mail</label></div>
            <div class="completo">
             <input type="password" id="ps" name="ps" placeholder="......">
             <label>Constraseña</label></div>
            <div class="completo">
             <label>Sexo</label>
             <input type="radio" name="sexo" value="masculino">Masculino
             <br><input type="radio" name="sexo" value="femenino">Femenino</div>
            <div class="completo">
            <label>Genero</label>
            <select>
                <option value=".">..</option>
                <option value="cf">Ciencia Ficcion</option>
                <option value="h">Historia</option>
                <option value="c">Ciencia</option>
                <option value="a">Arte</option>
            </select>
            </div>
            <div class="completo">
            <button type="submit">Enviar</button></div>
        </form>
        </section>

        <section id="Contacto" class="Registro">
            <h3>Contacto</h3>
            <div>
            <p>Teléfono: +54 11 1234-5678</p>
            <p>Email: contacto@libreriautn.com</p>
            <form>
            <label>Mensaje: <textarea></textarea></label><br />
            <button type="submit">Enviar</button>
            </form>
            </div>
            </section>
           
         <footer>
            <p id="footer">&copy; 2025 Librería UTN - Todos los derechos reservados</p>
        </footer>
    </main>
</body>
</html>