const recetas = [
  {
    id: "1",
    name: "Empanada fritas de pino",
    ingredients: [
      "500 gr Carne molida de vacuno",
      "300 gr Cebolla granel",
      "750 gr Harina con polvos de hornear Unimarc",
      "100 gr Manteca Astra",
      "4 Huevos",
      "Sal al gusto",
      "Aceite para freír",
      "Aceitunas al gusto",
    ],
    preparation:
      "Partimos cortando la cebolla en cubos muy pequeños y luego en un sartén temperado con aceite, la dejamos cocinar a fuego medio/alto hasta cristalizar. Posteriormente agregamos al sartén con cebolla la carne molida y dejamos cocinar por unos 6 a 8 minutos a fuego medio/alto para luego reservar. Vertemos agua hirviendo en una olla y dejamos a fuego alto para que continúe hirviendo. Luego metemos los 4 huevos y los dejamos cocer durante 6 a 8 minutos. Una vez cocidos, le quitamos la cáscara y los cortamos en seis pedazos. Apartamos 80 g de harina en un pocillo y al resto le agregamos la manteca junto a dos tazas de agua tibia con sal, revolvemos y agregamos un poco de harina (en caso de ser necesario) para tener una consistencia homogénea. Utilizamos parte de la harina que estaba reservada para espolvorear la mesa y amasar hasta que la masa no se pegue ni en los dedos ni en la mesa. Luego espolvoreamos un poco más de harina en la mesa para estirar la masa con un uslero. Una vez estirada y asegurándonos que la masa sea delgada, procedemos a tomar un pocillo para cortar la masa en forma circular. Antes de terminar, retiramos los primeros círculos y volvemos a estirar la masa restante para aprovecharla al máximo. Tomamos las masas circulares y en el centro le incorporamos el relleno de pino junto a un pedazo de huevo cortado y una aceituna. Luego pasamos un dedo mojado en agua por el borde de la masa para cerrar fácilmente la empanada. En un wok ponemos aceite a calentar a fuego alto, con un espumadero colocamos las empanadas en el interior y freímos hasta que estén doradas. Una vez fritas las empanadas, retirarlas e incorporarlas a una fuente con papel absorbente y luego emplatar",
    difficulty: "Intermedio",
    time: "40 min.",
    portions: "4 personas",
    nutrititional: "",
    img: "https://i.ibb.co/cNzfy16/empanadadepino.jpg",
    category: ["cocinaChilena"],
  },
  {
    id: "2",
    name: "Empanadas fritas de queso",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/xJGdgkM/empanadas-de-queso.png",
    category: ["cocinaChilena"],
  },
  {
    id: "3",
    name: "Tomates rellenos",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/fQmmRhn/Botana-adobada.png",
    category: ["cocinaChilena"],
  },
  {
    id: "4",
    name: "Brownie de banana",
    ingredients: [
      "Plátano 2 un",
      "Avena instantánea Selecta 2 tazas",
      "Cacao dulce en polvo Gourmet 200 gr",
      "Maní sin sal Unimarc 100 gr",
      "Bicarbonato Marco Polo 30 gr",
    ],
    preparation:
      "Comenzamos tomando 150 gramos de avena equivalente a 2 tazas, y las procesamos en una licuadora hasta moler por completo. Reservamos.Tomamos los 2 plátanos maduros, los ponemos en una licuadora y agregamos 3 huevos, 50 gramos de cacao equivalente a 1 taza y 20 gotas de endulzante. Procesamos todo hasta tener una mezcla homogénea.En un bowl incorporamos la mezcla que acabamos de preparar y agregamos la avena procesada que reservamos anteriormente. Revolvemos y añadimos 1 cucharada de bicarbonato para lograr que el brownie tenga una textura esponjosa. Seguimos revolviendo hasta integrar todo.Tomamos 100 gramos de maní sin sal, cortamos la mitad en trozos pequeños y se lo incorporamos a la preparación para seguir mezclando. Una vez lista la mezcla, tomamos un poco de mantequilla y la esparcimos sobre una fuente de vidrio. Luego sobre la misma fuente ponemos papel mantequilla y vertemos la preparación.Tomamos los 50 gramos de maní que nos quedaron y lo ponemos sobre toda la preparación para decorar. Llevamos al horno por 20 a 25 minutos a 180 °C. Pasado el tiempo, retiramos del horno y dejamos reposar entre 45 minutos a 1 hora para enfriar.Para emplatar, retiramos el brownie de la bandeja y cortamos en 8 partes iguales. Ponemos dos trozos triangulares en cada plato y listo. Como tip, para que el brownie se enfríe más rápido, lo pueden cortar al sacar del horno",
    difficulty: "Fácil",
    time: "45 Minutos.",
    portions: "4 personas",
    nutrititional: "",
    img: "https://i.ibb.co/mN5FPZc/brownie.jpg",
    category: ["cocinaParaNiños"],
  },
  {
    id: "5",
    name: "Colegial",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/jG7wMLM/budindepan.jpg",
    category: ["cocinaParaNiños"],
  },
  {
    id: "6",
    name: "Panqueque con manjar",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/dDcv3pL/Crepes-o-panqueques-celestinos-Postres-Irene-Mercadal.jpg",
    category: ["postresYDulces"],
  },
  {
    id: "7",
    name: "Galletas de navidad",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/1nFnJPT/Galletas-caseras-de-Navidad-Peque-Recetas.png",
    category: ["postresYDulces"],
  },
  {
    id: "8",
    name: "Leche asada",
    ingredients: [
      "Leche sin lactosa Colun 1 lt",
      "Huevo grande blanco Unimarc 6 un.",
      "Azúcar granulada Iansa 1 kg",
      "Naranja 1 kg. 2 un.",
      "Canela molida Gourmet 15 grs.",
    ],
    preparation:
      "Calentar 500 cc de leche y una taza de azúcar en una olla a fuego bajo, revolver hasta que los cristales de azúcar se hayan diluido. En una fuente aparte, agregar 500 cc de leche, 6 huevos y batimos por 15 minutos.En una sartén, verter 1 taza de azúcar y ½ taza de agua, revolver suavemente hasta obtener el caramelo. En la olla que estábamos cocinando la leche y el azúcar, agregar la mezcla de leche y huevos batidos e incorporar canela en polvo y cáscaras de naranja para darle más sabor. Revolver por 20 minutos.En una fuente de vidrio incorporar el caramelo y extender. Sobre éste vertemos la mezcla de leche con huevos batidos de la olla con un colador y luego llevamos al horno por 45 minutos a 180°. Una vez lista la leche asada, retiramos del horno con cuidado para cortar en trozos cuadrados y emplatamos decorando con rodajas de naranja.",
    difficulty: "Desafiante",
    time: "60 minutos",
    portions: "4 personas",
    nutrititional: "",
    img:
      "https://i.ibb.co/V3hhZbY/F-cil-Pastel-De-Leche-Asada-Para-Cenas-Esp-ntaneas.jpg",
    category: ["postresYDulces"],
  },
  {
    id: "9",
    name: "Barra de cereal",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/tMVXqZH/Barritas-de-cereal-caseras-de-avena-y-pl-tano.png",
    category: ["postresYDulces"],
  },
  {
    id: "10",
    name: "Semola con leche sin lactosa y berries",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/G5tzLwN/SEMOLA-CON-LECHE-Y-BERRIES-SIN-LACTOSA.jpg",
    category: ["postresYDulces"],
  },
  {
    id: "11",
    name: "Pan amasado",
    ingredients: [
      "Harina 1 kg",
      "Sal 1 cucharada sopera",
      "Aceite 1/2 taza",
      "Levadura 1 cucharada sopera",
      "Agua tibia",
    ],
    preparation:
      "Comenzamos activando la levadura. Para esto agregamos la cucharada de levadura en 1/4 de taza de agua tibia e incorporamos una punta de una cucharadita con azúcar. Revolvemos hasta que se disuelva y la dejamos reposar por aproximadamente 10 minutos. Una vez que subió la levadura hacemos un volcán de harina y agregamos la cucharada de sal.A continuación, calentamos el aceite por 30 segundos. Al volcán de harina le agregamos la levadura y el aceite y vamos mezclando todos los ingredientes. Al mismo tiempo vamos incorporando el agua tibia en la medida que vaya siendo necesario.Amasamos hasta que la masa no se pegue en las manos, una vez lograda la consistencia, la dejamos reposar en un bowl tapado y esperamos a que doble su volumen.Cuando la masa ya haya doblado su volumen la sacamos del bowl y amasamos unos segundos más. Luego, comenzamos a formar las pelotitas, dejándolas todas del mismo tamaño. A continuación, pinchamos con un tenedor y tapamos con un paño esperando que suban un poco más.Precalentamos el horno a 180° por aproximadamente 10 minutos. Metemos la masa y dejamos unos 20 minutos aprox. Una vez dorados los panes, estamos listos para servir.",
    difficulty: "Fácil",
    time: "90 minutos",
    portions: "4 personas",
    nutrititional: "",
    img: "https://i.ibb.co/y42G4dt/Pan-amasado-En-Mi-Cocina-Hoy.jpg",
    category: ["acompañamientos"],
  },
  {
    id: "12",
    name: " Ensalada de brocoli y nueces",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/d2ztxWN/F-CIL-Y-ADICTIVO-ENSALADA-TIBIA-DE-BR-COLI-AJO-Y-NUECES.jpg",
    category: ["acompañamientos"],
  },
  {
    id: "13",
    name: "Guiso de lentejas",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/QchNTG5/Harira-sopa-de-lentejas-especiada-marroqu-En-Mi-Cocina-Hoy.jpg",
    category: ["platosDeFondo"],
  },
  {
    id: "14",
    name: "Pastel de coliflor y champiñón al horno",
    ingredients: [
      "Coliflor bandeja 1 un.",
      "Leche natural Colún 200 ml.",
      "Huevo grande blanco Unimarc 6 un.",
      "Queso rallado Unimarc 40 gr.",
      "Champiñón bandeja 200 gr.",
      "Cebolla Granel.",
    ],
    preparation:
      "Comenzamos cortando la coliflor en trozos muy pequeños y la agregamos a una olla con aceite, añadimos leche, sal, pimienta y revolvemos. Dejamos cocinar por 20 a 25 minutos. Luego cortamos la cebolla en brunoise y la ponemos en un sartén con un poco de aceite, sal y pimienta. Cortamos los champiñones y los incorporamos junto a la cebolla para formar el sofrito. Revolvemos y dejamos cocinar por 5 minutos. Una vez lista la coliflor con la leche, la procesamos para formar una especie de puré y dejamos enfriar en un bowl. Cuando se enfrié agregamos el queso parmesano dejando reservado un poco para luego cubrir el pastel. Agregamos dos huevos a la mezcla y revolvemos. En pocillos de greda agregamos nuestro sofrito de champiñón, añadimos nuestra mezcla de coliflor y finalmente el queso parmesano restante. Llevamos al horno por unos 10 minutos para que dore.Para emplatar, una vez pasado el tiempo retiramos los pasteles del horno y montamos cada pocillo de greda sobre un plato.",
    difficulty: "Intermedia",
    time: "30 minutos",
    portions: "4 personas",
    nutrititional: "",
    img:
      "https://i.ibb.co/rkSmSdZ/Hornea-este-pastel-de-coliflor-con-jam-n-y-queso-te-va-a-encantar.png",
    category: ["platosDeFondo"],
  },
  {
    id: "15",
    name: "Veggie burger",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/0sJ7PPz/veggieburger.jpg",
    category: ["platosDeFondo"],
  },
  {
    id: "16",
    name: "Brochetas de champiñón",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/88hnmpj/Brocheta-de-champi-ones-Cocinando-con-Neus.png",
    category: ["platosDeFondo"],
  },
  {
    id: "17",
    name: "Crepes de verduras",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img:
      "https://i.ibb.co/NxCWhLL/Recetas-con-espinacas-irresistibles-y-f-ciles-de-hacer.jpg",
    category: ["platosDeFondo"],
  },
  {
    id: "18",
    name: "Gazpachio",
    ingredients: [""],
    preparation: "",
    difficulty: "",
    time: "",
    portions: "",
    nutrititional: "",
    img: "https://i.ibb.co/G57Mbx2/Receta-de-gazpacho-andaluz-tradicional.png",
    category: ["sopasYCremas"],
  },
];
export default recetas;
