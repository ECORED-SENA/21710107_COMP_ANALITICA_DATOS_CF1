export default {
  global: {
    componenteFormativo: 'Análisis y clasificación de la información ',
    descripcionCurso: `El concepto de estudio de analítica de datos aplica para realizar diferentes <br>
      funciones cotidianas en el proceso logístico, lo que facilita un mayor <br>
      dominio del ecosistema de datos y su respectivo análisis para interpretar, <br>
      comunicar y tomar decisiones estratégicamente en la empresa.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Registro de datos ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Soporte de análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características del soporte',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características de redes de datos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos y usos de redes de datos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procedimiento documental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Proceso documental',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características de las herramientas tecnológicas',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos y usos de software para análisis de datos',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bansal, S. (s. f.). What is the Difference Between Data And Information? AnalytixLabs.',
      link:
        'https://www.analytixlabs.co.in/blog/difference-between-data-and-information/',
    },
    {
      referencia:
        'Ballou, R. (2004). Logística: administración de la cadena de suministro. Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Pantaleo, G. y Rinaudo, L. (2018). Ingeniería de Software. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2011). Ingeniería de Software. Pearson Educación.',
      link:
        'https://sistemamid.com/panel/uploads/biblioteca/2018-06-11_03-37-12144643.pdf',
    },
    {
      referencia:
        'Comunidad Baratz. (2021). Los 7 procesos de la gestión documental en empresas y organizaciones.',
      link:
        'https://www.comunidadbaratz.com/blog/los-7-procesos-de-la-gestion-documental-en-empresas-y-organizaciones/',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'Proceso en el cual se utilizan herramientas tecnológicas con necesidad mínima de recurso humano.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'Es una herramienta en la cual se define un flujo con una serie de secuencias que dan paso a un resultado de valor observable.',
    },
    {
      termino: 'Data',
      significado:
        'Término usado para detallar un alto volumen de datos, de manera organizada, para el manejo de diferentes procesos dentro de la organización.',
    },
    {
      termino: 'Defecto',
      significado:
        'Problema encontrado en un sistema que causa que este falle cuando desempeña funciones requeridas.',
    },
    {
      termino: 'Red',
      significado:
        'Se refiere a un grupo de sistemas informáticos autónomos, unidos de forma que se posibilita un intercambio de datos, para lo cual se necesita un vínculo físico y una conexión lógica de los sistemas.',
    },
    {
      termino: 'Redes de datos',
      significado:
        'Sistemas de comunicación que se instalan y operan exclusivamente para la transferencia de información entre dispositivos de comunicación de datos (como los ordenadores). Conjunto asociado para manejo de información.',
    },
    {
      termino: 'Registro',
      significado:
        'Grupo de datos  de  información con cierta correlación para un fin.',
    },
  ],
  complementario: [
    {
      texto: 'formato registro de datos',
      tipo: 'Formulario ',
      link: 'https://www.shd.gov.co/shd/node/28582',
    },
    {
      texto: 'manejo Excel',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FCLmYmzJkWs',
    },
    {
      texto: 'Tratamiento de datos personales',
      tipo: 'guía ',
      link: 'https://issuu.com/quioscosic/docs/guia_cloud_computing_2021',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experta temática',
        centro: 'Distrito Capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejia',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      // {
      //   nombre: 'Andrés Mauricio Santaella Ochoa',
      //   cargo: 'Soporte front-end',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
