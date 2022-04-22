/**
 * Server creado por Leonardo para la clase de linea de profundización.
 */
 const express = require('express');
 const app = express();
 const morgan = require('morgan');
 const cors = require('cors');
 
 //Configuraciones
 app.set('port', process.env.PORT || 8080);
 app.set('json spaces', 2)
 //Middleware
 app.use(morgan('dev'));
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 app.use(cors())
 app.use("/public", express.static("public"));
 //Objetos JSON para guardar los datos de cada libro :D
 let JSON_Libros = [
     {
         id: 1,
         titulo: 'Morellonomicón',
         autor: 'Tryndamere',
         genero: 'Cortacuración',
         imagen: 'http://localhost:8080/public/negronomicon.jpg',
         descripcion: 'ÚNICA – AFLICCIÓN: Infligir daño mágico a campeones enemigos les inflige un 40% de Grievous Wounds icon.png Heridas graves durante 3 segundos, que se aumenta al 60% si el objetivo está por debajo del 50% de su vida máxima.'
     },
     {
         id: 2,
         titulo: 'Libro Amplificador',
         autor: 'Tryndamere',
         genero: 'Objeto de creacion',
         imagen: 'http://localhost:8080/public/amplificador.jpg',
         descripcion: '+20 de poder de habilidad Valor: 435 monedas de oro'
     },
     {
         id: 3,
         titulo: 'Códice Diabólico',
         autor: 'Tryndamere',
         genero: 'objeto épico',
         imagen: 'http://localhost:8080/public/diablos.jpg',
         descripcion: '+35 de poder de habilidad y +10 de aceleración de habilidad Valor: 900 monedas de oro'
     },
     {
         id: 4,
         titulo: 'Libro de Hechizos Abierto',
         autor: 'Tryndamere',
         genero: 'Runa de la ruta de inspiración',
         imagen: 'http://localhost:8080/public/hechizos.jpg',
         descripcion: 'PASIVA: Mientras no se use Teleportación Teleportación y estés fuera de combate durante 5 segundos, intercambia uno de tus hechizos de invocador equipados por un nuevo hechizo de invocador de un solo uso. No puedes seleccionar un hechizo de invocador que ya hayas equipado.'
     },
     {
         id: 5,
         titulo: 'Robaalmas de Mejai',
         autor: 'Tryndamere',
         genero: 'objeto legendario',
         imagen: 'http://localhost:8080/public/mejai.jpg',
         descripcion: 'ÚNICA – GLORIA: Gana 4 acumulaciones por cada muerte de campeón, 2 por asistencias, hasta un máximo de 25. Pierde 10 acumulaciones al morir. Las acumulaciones se conservan de El Sello de la Oscuridad El Sello de la Oscuridad.'
     },
     {
            id: 6,
            titulo: 'Capítulo Perdido',
            autor: 'Tryndamere',
            genero: 'objeto épico',
            imagen: 'http://localhost:8080/public/perdido.jpg',
            descripcion: '+40 de poder de habilidad, +10 de aceleración de habilidad y +300 de maná Valor: 1300 monedas de oro'
     },
     {
        id: 7 ,
        titulo: 'Cuchilla de ascuas',
        autor: 'Desconocido',
        genero: 'objeto inicial',
        imagen: 'http://localhost:8080/public/cuchilla_ascuas.jpg',
        descripcion: 'Abrasar: Dañar a los monstruos los quema por 60 (+ 30% AP) (+ 5% DA adicional) (+ 2% de vida adicional) de daño mágico durante 5 s.'
     },
     {
         id: 8 ,
         titulo: 'Cuerno del guardian',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/cuerno_guardian.jpg',
            descripcion: 'Impávido: Bloquea 15 de daño de todas las fuentes de campeón (3,75 de daño contra habilidades de daño prolongado).'
     },
        {
            id: 9 ,
            titulo: 'Escudo de doran',
            autor: 'Doran',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/escudo_doran.jpg',
            descripcion: 'Persistir: Después de recibir daño de un campeón, monstruo grande o monstruo épico, obtienes una regeneración de vida equivalente a 0 − 40 (según el vida faltante actual) durante 8 s.'
        },
        {
            id: 10 ,
            titulo: 'espada de doran',
            autor: 'Doran',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/espada_doran.jpg',
            descripcion: 'Belicista: +2,5% de omnivampirismo.'
        },
        {
            id: 11 ,
            titulo: 'Espada de guardián',
            autor: 'Greyor el vikingo',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/espada_guardian.jpg',
            descripcion: '+15 de aceleración de habilidad, +30 de daño de ataque y +150 de vida'
        },
        {
            id: 12 ,
            titulo: 'Espada de Granizo',
            autor: 'Tryndamere',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/espada_granizo.jpg',
            descripcion: 'Abrasar: Dañar a los monstruos los quema por 60 (+ 30% AP) (+ 5% DA adicional) (+ 2% de vida adicional) de daño mágico durante 5 s.'
        },
        {
            id: 13 ,
            titulo: 'Martillo del guardián',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/martillo_guardian.jpg',
            descripcion: '	+25 de daño de ataque, +150 de vida y +10% de robo de vida'
        },
        {
            id: 14 ,
            titulo: 'Orbe del guardián',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/orbe_guardian.jpg',
            descripcion: 'Recuperación: Restaura 10 de maná cada 5 s, si no puedes recuperar maná te restaura 15 de vida.'
        },
        {
            id: 15 ,
            titulo: 'Sacrificar',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/sacrificar.jpg',
            descripcion: 'Segar: Asesinar a un súbdito del carril otorga 1 de oro adicional. Asesinar a 100 súbditos del carril otorga una bonificación de oro adicional de 350 de inmediato e inhabilita esta pasiva.'
        },
        {
            id: 16 ,
            titulo: 'Anillo de Doran',
            autor: 'Doran',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/anillo_doran.jpg',
            descripcion: 'Drenaje: Restaura 0,75 de maná por segundo. Infligir daño a un campeón enemigo aumenta esa cantidad a 1,25 de maná cada segundo durante 10 s. Si no puedes obtener maná, restaura un 50 % de vida en su lugar.'
        },
        {
            id: 17 ,
            titulo: 'Sello de la Oscuridad',
            autor: 'Tryndamere',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/sello_oscuridad.jpg',
            descripcion: 'ÚNICA – GLORIA: Gana 4 acumulaciones por cada muerte de campeón, 2 por asistencias, hasta un máximo de 25. Pierde 10 acumulaciones al morir. Las acumulaciones se conservan de El Sello de la Oscuridad El Sello de la Oscuridad.'
        },
        {
            id: 18 ,
            titulo: 'Escudo reliquia',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/escudo_reliquia.jpg',
            descripcion: 'Botín de guerra: cuando estés cerca de un campeón aliado, los ataques ejecutan a los súbditos con menos del (50% para campeones cuerpo a cuerpo o 30% para campeones a distancia) de la vida máxima. Al asesinar a un súbdito, el campeón aliado más cercano recibe la misma cantidad de oro correspondiente. Este efecto se recarga cada 35 s (máximo de 3 cargas).'
        },
        {
            id: 19 ,
            titulo: 'Hoz espectral',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/hoz_espectral.jpg',
            descripcion:'Tributo: Otorga una carga cada 10 segundos, hasta 3 cargas. Las habilidades dañinas y los ataques contra campeones y estructuras consumen una carga, hasta uno por ataque o lanzamiento. Consumir un cargo otorga 20 de oro. Recibe oro decreciente de las muertes excesivas de súbditos.'
        },
        {
            id: 20 ,
            titulo: 'Filo del robahechizos',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/filo_robahechizos.jpg',
            descripcion: 'Robar: Otorga una carga cada 10 segundos, hasta 3 cargas. Las habilidades dañinas y los ataques contra campeones y estructuras consumen una carga, hasta uno por ataque o lanzamiento. Consumir un cargo otorga 20 de oro. Recibe oro decreciente de las muertes excesivas de súbditos.'
        },
        {
            id: 21 ,
            titulo: 'Hombreras de acero',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/hombreras_acero.jpg',
            descripcion: 'Botín de guerra: Otorga una carga cada 35 segundos, hasta 3 cargas. Los ataques básicos pueden consumir una carga para ejecutar súbditos. Los ataques básicos cuerpo a cuerpo ejecutan súbditos por debajo de 50% de su vida máxima y los ataques básicos a distancia por debajo de 30% de su vida máxima. Matar a un súbdito por cualquier medio con una carga te otorga a ti y al campeón aliado más cercano oro por muerte. Estos efectos requieren que un campeón aliado esté cerca. Recibe oro decreciente por asesinatos de súbditos excesivos.'
        },
        {
            id: 22 ,
            titulo: 'Lágrima de la diosa',
            autor: 'Desconocido',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/lagrima_diosa.jpg',
            descripcion:'Carga de maná: Otorga una carga cada 8 segundos, hasta 4 cargas. Afectar a un enemigo o aliado con una habilidad consume una carga y otorga 3 de maná adicional, aumentado a 6 si es un campeón, hasta un máximo de 450 de manpa adicional.'
        },
        {  
            id: 23 ,
            titulo: 'Lanza negra de Kalista',
            autor: 'Kalista',
            genero: 'objeto inicial',
            imagen: 'http://localhost:8080/public/lanza_negra_kalista.jpg',
            descripcion: 'Este objeto solo está disponible con Kalista y Sylas. Activa - Consumir: Ofrece un pacto a un aliado durante el resto de la partida, lo que os convierte en Juramentados. El pacto potencia a ambos campeones mientras estéis cerca el uno del otro'
        },
        {
            id: 24 ,
            titulo: 'Espadón',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/espadon.jpg',
            descripcion: '+40 de daño de ataque'
        },
        {
            id: 25 ,
            titulo: 'Varita explosiva',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/varita_explosiva.jpg',
            descripcion: '+40 de poder de habilidad'
        },
        {
            id: 26 ,
            titulo: 'Cronometro',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/cronometro.jpg',
            descripcion: 'ÚNICA – ESTASIS: Te pones en Stasis inalcanzable e invulnerable por la duración de su efecto activo, pero también incapaz de moverte, atacar, lanzar habilidades o usar objetos durante este tiempo.'
        },
        {
            id: 27 ,
            titulo: 'Capa de agilidad',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/capa_agilidad.jpg',
            descripcion: '+15% de probabilidad de golpe crítico'
        },
        {
            id: 28 ,
            titulo: 'Armadura de tela',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/armadura_tela.jpg',
            descripcion: '+15 de armadura'
        },
        {
            id: 29 ,
            titulo: 'Daga',
            autor: 'Desconocido',
            genero: 'objeto basico',
            imagen: 'http://localhost:8080/public/daga.jpg',
            descripcion: '+12% de velocidad de ataque'
        },
        {
            id: 30 ,
            titulo: 'Cercenador divino',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/cercenador_divino.jpg',
            descripcion: 'Hoja encantada: Tras usar una habilidad, tu siguiente ataque inflige un 12% (9% para campeones a distancia) de la vida máxima del objetivo como daño físico adicional al golpear (1,5 s de enfriamiento). Si el objetivo es un campeón, restaura un 50% del daño mejorado (30% para campeones a distancia). Inflige un mínimo de (un 150% del daño de ataque básico) de daño contra unidades, pero un máximo de (un 250% del daño de ataque básico) de daño contra monstruos. La pasiva mítica otorga a todos los demás objetos legendarios un 5% de penetración de armadura y penetración mágica'
        },
        {
            id: 31 ,
            titulo: 'Hoja crepuscular de Draktharr',
            autor: 'Draktharr',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/hoja_crepuscular_draktharr.jpg',
            descripcion: 'Acechador nocturno: Atacar de forma básica un campeón enemigo inflige 75 (+30 % del DA adicional) para campeones cuerpo a cuerpo / 55 (+25 % del DA adicional) para campeones a distancia y los ralentiza en un 99% durante 0,25 segundos (15 s de enfriamiento). Los derribos de campeones en 3 segundos restablecen el tiempo de enfriamiento de este efecto y te otorga invisibilidad durante 1,5 segundos. La pasiva mítica otorga a todos los demás objetos legendarios 5 de velocidad de habilidades.'
        },
        {
            id: 32 ,
            titulo: 'Eclipse',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/eclipse.jpg',
            descripcion: 'Luna creciente: Golpear a un campeón con 2 ataques o habilidades diferentes en 1,5 segundos da 6% de la vida máxima del objetivo como daño físico adicional y te otorga 15% de velocidad de movimiento adicional y un escudo de (180 + 40% del daño de ataque adicional) (50% para campeones a distancia) durante 2 s (6 s de enfriamiento, 16 s de enfriamiento para campeones a distancia). La pasiva mítica otorga a todos los demás objetos legendarios 4% de penetración de armadura.'
        },
        {
            id: 33 ,
            titulo: 'Hielo eterno',
            autor: 'Lissandra',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/hielo_eterno.jpg',
            descripcion: 'Activa - Glaciación: Después de 0,3 segundos, inflige 100 (+ 30% PH) como daño mágico en un cono, ralentiza enemigos en un 65% por 1,5 segundos. Los enemigos en el centro del cono son enraizados por la misma duración (30 s de enfriamiento).'
        },
        {
            id: 34 ,
            titulo: 'Guantelete de fuego escarchado',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/guantelete_fuego_escarchado.jpg',
            descripcion:'Inmolar: Recibir o infligir daño activa esta pasiva durante 3 segundos. Inflige 12 − 30 (según el nivel) (+ 1% de vida adicional) de daño mágico cada segundo a los enemigos dentro de 325 (+100% de tamaño adicional) unidades, aumentado en un 25% contra súbditos y 150% contra monstruos. La pasiva mítica otorga a todos los demás objetos legendarios 100 de vida y 6% de tamaño.'
        },
        {
            id: 35 ,
            titulo: 'Fuerza del viento',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/fuerza_del_viento.jpg',
            descripcion: 'Activa - Aguacero: Te deslizas a la ubicación del objetivo (alcance 450, 200 mínimo), aunque no a través del terreno, y dispara tres misiles autoguiados al enemigo con la mayor vida faltante dentro de 750 de radio de ti al final del deslizamiento, priorizando campeones enemigos. Cada misil inflige 60 − 105 (según el nivel) (+ 15% DA adicional) de daño mágico, por un total de 180 − 315 (según el nivel) (+ 45% DA adicional), aumentado en 0% − 50% (según el vida faltante del enemigo) (tiempo de enfriamiento de 90 s). La pasiva mítica otorga a todos los demás objetos legendarios 2% de velocidad de movimiento adicional.'
        },
        {
            id: 36 ,
            titulo: 'Bebedor de sangre',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/bebedor_de_sangre.jpg',
            descripcion: 'Activa - Cuchillada sedienta: Inflige 100% DA como daño físico a los enemigos en un círculo de radio de 450 unidades a tu alrededor. Restaura 25% DA (+ 10% de vida faltante) por cada campeón alcanzado (tiempo de enfriamiento de 15 s, reducido por la aceleración de habilidad).'
        },
        {
            id: 37 ,
            titulo: 'Cinturon cohete hextech',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/cinturon_cohete_hextech.jpg',
            descripcion:'Activa - Hexproyectil: Te deslizas en la dirección del objetivo, aunque no a través del terreno, desatando un arco de cohetes que infligen 125 (+ 15% PH) de daño mágico. Luego, obtienes 30% de velocidad de movimiento adicional hacia campeones enemigos durante 1,5 segundos (40 s de enfriamiento). Reinicia el temporizador de ataque básico del usuario. La pasiva mítica otorga a todos los demás objetos legendarios 5 de penetración de magia.'
        },
        {
            id: 38 ,
            titulo: 'Arcoescudo inmortal',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/arcoescudo_inmortal.jpg',
            descripcion:'Salvavidas: Cuando recibas daño que te reduciría por debajo de 30% de vida máxima, obtienes un escudo por 300 − 800 (según el nivel) durante 3 segundos y 13 − 35 (según el nivel) de daño de ataque adicional durante 8 segundos (tiempo de enfriamiento de 90 s). La pasiva mítica otorga a todos los demás objetos legendarios 5 de daño de ataque adicional y 50 de vida adicional.'
        },
        {
            id: 39 ,
            titulo: 'Mandato imperial',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/mandato_imperial.jpg',
            descripcion:'Fuego coordinado: Las habilidades que ralentizan o inmovilizan campeones enemigos infligen 60 − 100 (según el nivel) de daño mágico adicional y los marcan durante 4 segundos. Los campeones aliados que dañan a los enemigos marcados consumen la marca para infligir 60 − 100 (según el nivel del objetivo) de daño mágico adicional y otorgarte a ti y al aliado 20% de velocidad de movimiento adicional durante 2 segundos (6 s de tiempo de enfriamiento por campeón enemigo). La pasiva mítica otorga a todos los demás objetos legendarios 15 de poder de habilidad.'
        },
        {
            id: 40 ,
            titulo: 'Mata krakens',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/mata_krakens.jpg',
            descripcion:'Abatir: Los ataques básicos al impacto otorgan una acumulación durante 3 segundos, hasta 2 acumulaciones. Con 2 acumulaciones, el siguiente ataque básico consume todas las acumulaciones para infligir 60 (+ 30% DA adicional) de daño verdadero adicional al impacto. La pasiva mítica otorga a todos los demás objetos legendarios 10% de velocidad de ataque'
        },
        {
            id: 41 ,
            titulo: 'Angustia de Liandry',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/angustia_de_liandry.jpg',
            descripcion:'Tormento: Infligir daño de habilidad quema a los enemigos, lo que hace que reciban 60 (+ 10% PH) (+ 4% de la vida máxima del objetivo) como daño mágico durante 4 segundos. La pasiva mítica otorga a todos los demás objetos legendarios 5 de aceleración de habilidades.'
        },
        {
            id: 42 ,
            titulo: 'Medallón de los solari de Hierro',
            autor: 'Los Solari de Hierro',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/medallon_de_los_solari_de_hierro.jpg',
            descripcion:'Consagración: Otorga a los campeones aliados cercanos 5 de armadura adicional y 5 de resistencia mágica adicional. La pasiva mítica otorga a todos los demás objetos legendarios 2 de armadura/resistencia mágica de mejora a Consagración.'
        },
        {
            id: 43 ,
            titulo: 'Tempestad de Luden',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/tempestad_de_luden.jpg',
            descripcion: 'Eco: Dañar a un enemigo con una habilidad inflige 100 (+ 15% PH) de daño mágico adicional a tu objetivo y a 3 enemigos cercanos y te otorga 30% de velocidad de movimiento adicional durante 2 segundos. Infligir daño de habilidad contra campeones reduce el tiempo de enfriamiento de Eco en 0,5 segundos por campeón, hasta un máximo de 3 segundos por lanzamiento (10 s de enfriamiento). La pasiva mítica otorga a todos los demás objetos legendarios 5 de penetración de magia.'
        },
        {
            id: 44 ,
            titulo: 'Renovacion de piedra lunar',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/renovacion_de_piedra_lunar.jpg',
            descripcion:'Gracia estelar: Al afectar a campeones con ataques o habilidades en combate, cura al campeón aliado cercano (excluyéndote a ti) con la mayor cantidad de vida faltante por 70 (2 s de enfriamiento). Cada segundo que pasas en combate con campeones aumenta el poder de curación y escudo en un 7%, acumulándose hasta 5 veces para un máximo del 35%. La pasiva mítica otorga a todos los demás objetos legendarios 5 de aceleración de habilidad.'
        },
        {
            id: 45 ,
            titulo: 'Cosechador nocturno',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/cosechador_nocturno.jpg',
            descripcion:'Desgarrar alma: Dañar a un campeón enemigo inflige 125 (+ 15% PH) de daño mágico adicional y te otorga 25% de velocidad de movimiento adicional durante 1,5 segundos, y la duración se extiende al dañar a nuevos campeones (40 s de enfriamiento por campeón). La pasiva mítica otorga a todos los demás objetos legendarios 5 de aceleración de habilidad.'
        },
        {
            id: 46 ,
            titulo: 'Garra del merodeador',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/garra_del_merodeador.jpg',
            descripcion:'Activa - Golpe de arena: Después de 0,2 segundos de tiempo de lanzamiento, te deslizas en una línea a través de la ubicación del campeón enemigo objetivo, y al completar el deslizamiento, infliges 75 (+30 % del DA adicional) de daño físico al objetivo y aumenta el daño que le infliges en un 15% durante los siguientes 3 segundos (90 s de enfriamiento).'
        },
        {
            id: 47 ,
            titulo: 'Agrietador',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/agrietador.jpg',
            descripcion:'Corrupción del vacío: Por cada segundo en combate con campeones, inflige un 3% más de daño, acumulándose hasta 3 veces para un máximo del 9%. Mientras este efecto está completamente acumulado, convierte el 100% del daño adicional en daño verdadero. La pasiva mítica otorga a todos los demás objetos legendarios 2% de omnivampirismo y 8 de poder de habilidad.'
        },
        {
            id: 48 ,
            titulo: 'Cancion de batalla de Shurelya',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/cancion_de_batalla_de_shurelya.jpg',
            descripcion:'Motivación: Fortalecer o proteger a un campeón aliado (excluyendo a ti mismo) te otorga 25% de velocidad de movimiento adicional por 1,5 segundos. Un aliado solo puede verse afectado por Motivación una vez cada 4 segundos. La pasiva mítica otorga a todos los demás objetos legendarios 5 de aceleración de habilidad.'
        },
        {
            id: 49 ,
            titulo: 'Rompeavances',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/rompeavances.jpg',
            descripcion:'Activa - Cuchillada paralizante: Inflige 100% DA de daño físico a los enemigos en un radio de 450 centrado en frente de ti en tu valor de alcance de ataque (distancia máxima de 250) y ralentizando en un 40% durante 3 segundos (15 s de enfriamiento, reducido por la aceleración de habilidad). Se puede lanzar mientras se mueve. La pasiva mítica otorga a todos los demás objetos legendarios 2% de velocidad de movimiento adicional.'
        },
        {
            id: 50 ,
            titulo: 'Égida de fuego solar',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/egida_de_fuego_solar.jpg',
            descripcion:'Inmolar: Recibir o infligir daño activa esta pasiva durante 3 segundos. Inflige 12 − 30 (según el nivel) (+ 1% vida adicional) de daño mágico por segundo a los enemigos cercanos, aumentado en un 25% contra súbditos y 150% contra monstruos. Dañar a campeones enemigos o monstruos épicos con este efecto agrega una acumulación durante 5 segundos, lo que aumenta el daño subsiguiente de Inmolar en un 12%, acumulándose hasta 6 veces para un aumento del 72%.'
        },
        {
            id: 51 ,
            titulo: 'Fuerza de la trinidad',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/fuerza_de_la_trinidad.jpg',
            descripcion:'Golpe triple: Los ataques básicos otorgan 20 de velocidad de movimiento adicional durante 3 segundos. Si el objetivo es un campeón o una estructura, también aumenta el daño de ataque base en un 6% durante la misma duración, acumulándose hasta 5 veces para un 30% de aumento.'
        },
        {
            id: 52 ,
            titulo: 'Quimiotanque turbo',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/quimiotanque_turbo.jpg',
            descripcion:'Activa - Sobrecarga: Durante 4 segundos, otorga 40% de velocidad de movimiento adicional y fantasmal cuando se mueve hacia una torreta o campeón enemigo visible (radio de 2000). Después de la duración o cuando un campeón enemigo está dentro del alcance de 225, emites una onda de choque, ralentizando campeones enemigos dentro de 450 de alcance en un 50% durante 2 segundos (tiempo de enfriamiento de 90 s).'
        },
        {
            id: 53 ,
            titulo: 'Corona de la Reina Fragmentada',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/corona_de_la_reina_fragmentada.jpg',
            descripcion:'Salvaguarda (Pasiva): Otorga Salvaguarda, lo que reduce el daño recibido un 75 %. Salvaguarda persiste durante 1,5 s tras recibir daño de campeones (40 s de enfriamiento, se reinicia al recibir daño de un campeón enemigo).'
        },
        {
            id: 54 ,
            titulo: 'Manto de quietud',
            autor: 'Desconocido',
            genero: 'objeto Mitico',
            imagen: 'http://localhost:8080/public/manto_de_quietud.jpg',
            descripcion:'Resplandor: Tras inmovilizar a campeones enemigos o recibir una inmovilización, hace que el objetivo y todos los enemigos cercanos se arrepientan, lo que aumenta el daño que reciben un 12 % durante 5 s.'
        },
        {
            id: 55 ,
            titulo: 'Centinela de control',
            autor: 'Desconocido',
            genero: 'Baratija',
            imagen: 'http://localhost:8080/public/centinela_de_control.jpg',
            descripcion:'Activar - Consumir: coloca un poderoso guardián de control que otorga visión de la zona circundante. Este dispositivo también revela las trampas invisibles, los enemigos camuflados y deshabilita los guardianes invisibles del enemigo. Puedes llevar hasta 2 guardianes de control (no deshabilitan otros guardianes de control).'
        },
        {
            id: 56 ,
            titulo: 'Poción de corrupción',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/pocion_de_corrupcion.jpg',
            descripcion:'	Activar - Consumir: consume una carga para restaurar 125 de vida y 75 de maná a lo largo de 12 s. Durante este tiempo, las habilidades y ataques de daño queman a los campeones enemigos e infligen 15 (20 si no puedes obtener maná) de daño mágico durante 3 s. Contiene hasta 3 cargas y se rellena al visitar la tienda. El daño de corrupción se reduce a un 50% cuando se activa con hechizos de daño en área o prolongado.'
        },
        {
            id: 57 ,
            titulo: 'Elixir de hierro',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/elixir_de_hierro.jpg',
            descripcion:'	Activar - Consumir: se bebe para obtener 300 de vida, 25% de tenacidad y aumenta el tamaño del campeón durante 3 min. Mientras está activo, al moverte dejas atrás una senda que aumenta en un 15% la velocidad de movimiento de los campeones aliados. Al beber un elixir diferente, se reemplazan los efectos del actual.'
        },
        {
            id: 58 ,
            titulo: 'Elixir de brujeria',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/elixir_de_brujeria.jpg',
            descripcion:'	Activar - Consumir: se bebe para obtener 50 de poder de habilidad y un 15% de regeneración de maná durante 3 min. Mientras está activo, al dañar a un campeón o una torreta, infliges 25 de daño verdadero adicional (5 s de enfriamiento). Se necesita nivel 9 o superior para comprar este objeto. Al beber un elixir diferente, se reemplazan los efectos del actual.'
        },
        {
            id: 59 ,
            titulo: 'Elixir de berserker',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/elixir_de_berserker.jpg',
            descripcion:'	Activar - Consumir: se bebe para obtener 30 de daño de ataque y un 15% de succión física (contra campeones) durante 3 min. Al beber un elixir diferente, se reemplazan los efectos del actual.'
        },
        {
            id: 60 ,
            titulo: 'Poción de vida',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/pocion_de_vida.jpg',
            descripcion:'Activar - Consumir: consume la poción para restaurar 150 de vida a lo largo de 15 s. Puedes llevar hasta 5.'
        },
        {
            id: 61 ,
            titulo: 'Poción reutilizable',
            autor: 'Desconocido',
            genero: 'Consumible',
            imagen: 'http://localhost:8080/public/pocion_reutilizable.jpg',
            descripcion:'Activar - Consumir: consume una carga para restaurar 125 de vida a lo largo de 12 s. Contiene hasta 2 cargas y se rellena al visitar la tienda.'
        },
        {
            id: 62 ,
            titulo: 'Centinela de visión lejana',
            autor: 'Desconocido',
            genero: 'Baratija',
            imagen: 'http://localhost:8080/public/centinela_de_vision_lejana.jpg',
            descripcion:'Activa - Talismán: Revela una zona y coloca un guardián visible y vulnerable a un máximo de 4.000 unidades de distancia. Los aliados no pueden seleccionar este guardián con habilidades o hechizos de invocador (198 - 99 s de enfriamiento).'
        },
        {
            id: 63 ,
            titulo: 'Lente del oráculo',
            autor: 'Desconocido',
            genero: 'Baratija',
            imagen: 'http://localhost:8080/public/lente_del_oraculo.jpg',
            descripcion:'Activa - Talismán: Escudriña tus alrededores, alerta sobre unidades enemigas y revela las trampas invisibles y los guardianes invisibles cercanos del enemigo (y los desactiva temporalmente) durante 10 s (90 - 60 de enfriamiento).'
        },
        {
            id: 64 ,
            titulo: 'Centinela invisible',
            autor: 'Desconocido',
            genero: 'Baratija',
            imagen: 'http://localhost:8080/public/centinela_invisible.jpg',
            descripcion:'Activa - Talismán: Coloca un guardián invisible en el suelo que dura 90 - 120 s y los enemigos no pueden ver, pero otorga a tu equipo visión de la zona circundante. Almacena hasta 2 guardianes invisibles y genera un nuevo guardián cada 240 - 120 s.'
        },
        {
            id: 65 ,
            titulo: 'Figura de espantapajaros',
            autor: 'Desconocido',
            genero: 'Baratija',
            imagen: 'http://localhost:8080/public/figura_de_espantapajaros.jpg',
            descripcion:'	Este objeto solo está disponible para Fiddlesticks. Activa - Talismán: Coloca una figura que dura 130 - 300 (según el nivel) s y tiene la misma apariencia que Fiddlesticks para los enemigos. Acumula una carga cada 115 - 30 (según el nivel) s hasta un máximo de 2 cargas. Los campeones enemigos que se aproximen activarán la figura, lo que provoca que esta simule una acción aleatoria, tras lo cual se desmoronará.'
        },
        {
            id: 66 ,
            titulo: 'Grebas de berserker',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/grebas_de_berserker.jpg',
            descripcion:'+35% de velocidad de ataque y +45 de velocidad de movimiento.'
        },
        {
            id: 67 ,
            titulo: 'Botas',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas.jpg',
            descripcion:'+25 de velocidad de movimiento.'
        },
        {
            id: 68 ,
            titulo: 'Botas de rapidez',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_de_rapidez.jpg',
            descripcion:'+60 de velocidad de movimiento (la fuerza de los efectos de ralentización de movimiento se reduce un 25%).'
        },
        {
            id: 69 ,
            titulo: 'Ricos hotcakes, Ricos Ricos hotcakes',
            autor: 'Jake el Perro',
            genero: 'Comida',
            imagen: 'http://localhost:8080/public/ricos_hotcakes_ricos_ricos_hotcakes.jpg',
            descripcion:'yo los hago mas sabrosos con tocino'
        },
        {
            id: 70 ,
            titulo: 'Botas jonianas de lucidez',
            autor: 'Los jonianos',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_jonianas_de_lucidez.jpg',
            descripcion:'+20 de velocidad de habilidades y +45 de velocidad de movimiento (otorga 12 de velocidad de hechizos de invocador).'
        },
        {
            id: 71 ,
            titulo: 'Botas de movilidad',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_de_movilidad.jpg',
            descripcion:'+25 de velocidad de movimiento (al estar fuera de combate durante al menos 5 s, aumenta el efecto de este objeto a 115).'
        },
        {
            id: 72 ,
            titulo: 'Botas de mercurio',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_de_mercurio.jpg',
            descripcion:'+25 de resistencia mágica, +45 de velocidad de movimiento y +30% de tenacidad.'
        },
        {
            id: 73 ,
            titulo: 'Botas de acero revestidas',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_de_acero_revestidas.jpg',
            descripcion:'+20 de armadura y +45 de velocidad de movimiento (reduce un 12% el daño sufrido por ataques).'
        },
        {
            id: 74 ,
            titulo: 'Botas de hechicero',
            autor: 'Desconocido',
            genero: 'Botas',
            imagen: 'http://localhost:8080/public/botas_de_hechicero.jpg',
            descripcion:'+18 de penetración mágica y +45 de velocidad de movimiento.'
        },
        {
            id: 75 ,
            titulo: 'Amuleto de las hadas',
            autor: 'hadas',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/amuleto_de_las_hadas.jpg',
            descripcion:'	+50% de regeneración de maná básica'
        },
        {
            id: 76 ,
            titulo: 'Espada larga',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/espada_larga.jpg',
            descripcion:'+10 de daño de ataque'
        },
        {
            id: 77 ,
            titulo: 'Vara innecesariamente grande',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/vara_innecesariamente_grande.jpg',
            descripcion:'+60 de poder de habilidad'
        },
        {
            id: 78 ,
            titulo: 'Manto de negatrones',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/manto_de_negatrones.jpg',
            descripcion:'+25 de resistencia mágica'
        },
        {
            id: 79 ,
            titulo: 'Pico',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/pico.jpg',
            descripcion:'	+25 de daño de ataque'
        },
        {
            id: 80 ,
            titulo: 'Perla de rejuvenecimiento',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/perla_de_rejuvenecimiento.jpg',
            descripcion:'	+50% de regeneración de vida básica'
        },
        {
            id: 81 ,
            titulo: 'Cristal de rubi',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/cristal_de_rubi.jpg',
            descripcion:'+150 de vida'
        },
        {
            id: 82 ,
            titulo: 'Cristal de zafiro',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/cristal_de_zafiro.jpg',
            descripcion:'+250 de maná'
        },
        {
            id: 83 ,
            titulo: 'Brillo',
            autor: 'Desconocido',
            genero: 'Objeto basico',
            imagen: 'http://localhost:8080/public/brillo.jpg',
            descripcion:'Hoja encantada: tras usar una habilidad, tu siguiente ataque inflige (un 100% del daño de ataque básico) de daño físico al golpear adicional (1,5 s de enfriamiento).'
        },
        {
            id: 84 ,
            titulo: 'Egida de la legión',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/egida_de_la_legion.jpg',
            descripcion:'	+30 de armadura, +30 de resistencia mágica y +10 de velocidad de habilidades'
        },
        {
            id: 85 ,
            titulo: 'Brisa de éter',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/brisa_de_eter.jpg',
            descripcion:'Planear: otorga un 5% de velocidad de movimiento'
        },
        {
            id: 86 ,
            titulo: 'Ceniza de Bami',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/ceniza_de_bami.jpg',
            descripcion:'Inmolar: Recibir o infligir daño hace que comiences a infligir (15 + 1% de vida adicional) de daño mágico por segundo a los enemigos cercanos (aumenta un 25% contra súbditos y un 25% contra monstruos) durante 3 s. También ejecuta súbditos que morirían por el siguiente pulso de Inmolar.'
        },
        {
            id: 87 ,
            titulo: 'Espejo de cristal de Bandle',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/espejo_de_cristal_de_bandle.jpg',
            descripcion:'+20 de poder de habilidad, +10 de velocidad de habilidades y +50% de regeneración de maná básica'
        },
        {
            id: 88 ,
            titulo: 'Joya maldita',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/joya_maldita.jpg',
            descripcion:'+25 de poder de habilidad y +15% de penetración mágica'
        },
        {
            id: 89 ,
            titulo: 'Vestas espinoza',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/vestas_espinoza.jpg',
            descripcion:'Espinas: Al recibir un ataque, inflige 3 de daño mágico al atacante y aplica un 40% de Heridas graves durante 3 s si se trata de un campeón.'
        },
        {
            id: 90 ,
            titulo: 'Martillo de guerra de Caulfield',
            autor: 'Caulfield',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/martillo_de_guerra_de_caulfield.jpg',
            descrpcion:'+25 de daño de ataque y +10 de velocidad de habilidades'
        },
        {
            id: 91 ,
            titulo: 'Cota de escamas',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/cota_de_escamas.jpg',
            descripcion:'+40 de armadura'
        },
        {
            id: 92 ,
            titulo: 'Brazal cristalino',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/brazal_cristalino.jpg',
            descripcion:'+200 de vida y +50% de regeneración de vida básica'
        },
        {
            id: 93 ,
            titulo: 'Llamado del verdugo',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/llamado_del_verdugo.jpg',
            descripcion:'Desgarrar: Infligir daño físico aplica un 40% de Heridas graves a los campeones enemigos durante 3 s.'
        },
        {
            id: 94 ,
            titulo: 'Ídolo prohibido',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/idolo_prohibido.jpg',
            descripcion:'+50% de regeneración de maná básica y +10% de poder de curaciones y escudos'
        },
        {
            id: 95 ,
            titulo: 'Colmillo de escarcha',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/colmillo_de_escarcha.jpg',
            descripcion:'Tributo: Otorga una carga cada 10 segundos, hasta 3 cargas. Si un campeón aliado está cerca, las habilidades dañinas y los ataques contra campeones y edificios consumen una carga, hasta uno por ataque o lanzamiento. Consumir un cargo otorga 20 de oro. Recibe oro decreciente de las muertes excesivas de súbditos.'
        },
        {
            id: 96 ,
            titulo: 'Cinturón de gigante',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/cinturon_de_gigante.jpg',
            descripcion:'+350 de vida'
        },
        {
            id: 97 ,
            titulo: 'Egida glacial',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/egida_glacial.jpg',
            descripcion:'+20 de armadura, +250 de maná y +10 de velocidad de habilidades'
        },
        {
            id: 98 ,
            titulo: 'Creciente de sombras',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/creciente_de_sombras.jpg',
            descripcion:'Tributo: Otorga una carga cada 10 segundos, hasta 3 cargas. Si un campeón aliado está cerca, las habilidades dañinas y los ataques contra campeones y edificios consumen una carga, hasta uno por ataque o lanzamiento. Consumir un cargo otorga 20 de oro. Recibe oro decreciente de las muertes excesivas de súbditos.'
        },
        {
            id: 99 ,
            titulo: 'Hacha hogareña',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/hacha_hogareña.jpg',
            descripcion:'Agilidad: atacar a una unidad otorga (20 10 para campeones a distancia) de velocidad de movimiento durante 2 s.'
        },
        {
            id: 100 ,
            titulo: 'Sorbehechizos',
            autor: 'Desconocido',
            genero: 'Objeto épico',
            imagen: 'http://localhost:8080/public/sorbehechizos.jpg',
            descripcion:'Salvavidas: al recibir daño mágico que reduzca la vida por debajo del 30%, otorga un escudo que absorbe 110 - 280 (según el nivel) de daño mágico durante 3 s (90 s de enfriamiento).'
        },
        {
            id: 101 ,
            titulo: 'Pantheon la lanza inquebrantable',
            autor: 'Pantheon',
            genero: 'Aspecto de las estrellas',
            imagen: 'http://localhost:8080/public/pantalon.jpg',
            descripcion:'quisiera ser panadero'
        },
 ];
 // console.log(JSON_Libros);
 //Metodo de para obtener los datos de los libros mediante el id
 app.get('/libros/:id', (req, res) => {
     res.setHeader('X-Requested-With', 'XMLHttpRequest');
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.json(JSON_Libros.find(libro => libro.id === parseInt(req.params.id)));
 })
 //Metodo para obtener todos los libros del formato JSON
 app.get('/libros', (req, res) => {
     res.setHeader('X-Requested-With', 'XMLHttpRequest');
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.json(JSON_Libros);
 })

 app.listen(app.get('port'), () => {
     console.log("Server listening on port ${app.get('port')}");
 });