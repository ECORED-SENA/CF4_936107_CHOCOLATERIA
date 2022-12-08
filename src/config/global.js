export default {
  global: {
    componenteFormativo: 'Ejecución y evaluación de operación de equipos',
    descripcionCurso:
      'En la presente competencia, encontrará el proceso productivo del cacao, haciendo énfasis en sus etapas, condiciones y factores incidentes; también se hablará del rendimiento de la maquinaria que se utiliza en dicho proceso y de los residuos sólidos que se generan y a la vez se reutilizan.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
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
        titulo: 'Procesamiento de cacao',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etapas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Condiciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Factores incidentes',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos intermedios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Rendimiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Residuos sólidos ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Rendimiento',
      referencia:
        'Jahurul, M., Zaidul, I., Norulaini, N., Sahena, F., Abedin, M., Ghafoor, K. y Mohd, A. (2014). Characterization of crystallization and melting profiles of blends of mango seed fat and palm oil mid-fraction as cocoa butter replacers using differential scanning calorimetry and pulse nuclear magnetic resonance. Food Research International, 55, p. 103-109. ',
      tipo: 'Artículo',
      link: 'https://doi.org/10.1016/j.foodres.2013.10.050',
    },
    {
      tema: 'Procesamiento de cacao',
      referencia:
        'M, J. (2017). Conceptos básicos de tecnología de transformación y elaboración de chocolate. Escuela Latinoamericana y del Caribe de Chocolatería.',
      tipo: 'Artículo',
    },
  ],
  glosario: [
    {
      termino: 'Cacao',
      significado:
        'árbol de América, de la familia de las esterculiáceas, de tronco liso de cinco a ocho metros de altura, hojas alternas, lustrosas, lisas, duras y aovadas, flores pequeñas, amarillas y encarnadas, cuyo fruto se emplea como principal ingrediente del chocolate.',
    },
    {
      termino: 'Chocolate',
      significado:
        'alimento que se elabora con pasta de chocolate, azúcar y aderezos. Su presentación varía de acuerdo con el requerimiento del fabricante.',
    },
    {
      termino: 'Condiciones',
      significado:
        'situación o circunstancia indispensable para la existencia de otra.',
    },
    {
      termino: 'Fases',
      significado:
        'característica de la variación de una magnitud periódica que determina la iniciación de cada periodo.',
    },
    {
      termino: 'Licor de chocolate',
      significado:
        'producto obtenido de la molienda del cacao tostado sin cáscara. Es la materia prima utilizada en todo el proceso productivo de la chocolatería.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'conjunto de las fases sucesivas de un fenómeno natural o de una operación artificial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2016). Manual para la evaluación de la calidad del grano de cacao. Fundación Hondureña de Investigación',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Cajo, M. (2021.) Control de calidad de chocolate. Editorial Barreto SAC. ',
      link:
        'https://repositorio.unamad.edu.pe/bitstream/handle/20.500.14070/705/Control%20de%20calidad%20en%20chocolates_Mar%C3%ADa%20Cajo.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Compañía Nacional de Chocolates. (2019). Cosecha, Beneficio y Calidad del Grano de Cacao (Theobroma cacao L).',
      link:
        'https://chocolates.com.co/wp-content/uploads/2020/06/Cartilla-Cosecha-Benef-Calidad-SEP-2019.pdf',
    },
    {
      referencia:
        'ICONTEC. (2021). Cacao en grano. Especificaciones y requisitos de calidad [NTC 1252:2021].',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/pdfview/viewer.aspx?locale=esES&Q=04D103EFA7FE09150F248A099F1E77F9312408EA304CDFA9&Req=valuacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
    },
    {
      referencia:
        'Aguilar, H. (2016). Manual para la evaluación de la calidad del grano de cacao. Fundación Hondureña de Investigación',
      link:
        'http://www.fhia.org.hn/descargas/Proyecto_de_Cacao_SECO/Manual_para_la_Evaluacion_de_la_Calidad_del_Grano_de_Cacao.pdf',
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
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Abel Gordillo Peña',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía ',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
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
