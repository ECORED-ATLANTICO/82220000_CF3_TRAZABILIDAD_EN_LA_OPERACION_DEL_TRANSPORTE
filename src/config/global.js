export default {
  global: {
    Name: 'Supervisión de la operación de transporte',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la supervisión de la operación de transporte con enfoque en trazabilidad. Explora el monitoreo, rastreo y manejo de contingencias, así como la elaboración de reportes e informes. Permite al aprendiz aplicar herramientas y procedimientos para garantizar eficiencia, seguridad y cumplimiento normativo en la gestión logística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Procedimiento',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Rastreo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clases',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procedimiento',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Contingencias aplicadas ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Planes de respuesta',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Criterios de evaluación ',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Protocolos ',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reporte de sistema de trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Informe de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estructura',
            hash: 't_5_2',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA3_82220000_DU.pdf',
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
      tema: 'Monitoreo.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA . (2022, 11 de noviembre). <em>Monitoreo y reportes de operación de transporte</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ImLbCl7IIg0',
    },
    {
      tema: 'Rastreo.',
      referencia:
        'Corporativo Ubícalo. (2019, 14 de mayo). <em>Rastreo Satelital para transporte</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Az4cf0dYSWA',
    },
    {
      tema: 'Reporte de sistema de trazabilidad.',
      referencia:
        'López-Jiménez, S. (2023). <em>Guía de trazabilidad en los procesos logísticos de las pequeñas empresas</em>. Dialnet',
      tipo: 'Manual PDF',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=9124163',
    },
  ],
  glosario: [
    {
      termino: 'Carga',
      significado:
        'Bienes o mercancías que son transportados de un lugar a otro.',
    },
    {
      termino: 'Contingencia',
      significado:
        'Evento inesperado o situación imprevista que puede afectar la normalidad de las operaciones de transporte.',
    },
    {
      termino: 'Despacho',
      significado:
        'Proceso de preparación y envío de la carga, incluyendo la documentación y la asignación de vehículos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Capacidad de lograr un objetivo con el mínimo de recursos posibles.',
    },
    {
      termino: 'Flota',
      significado:
        'Conjunto de vehículos (camiones, autobuses, trenes, barcos, aviones) que una empresa o entidad utiliza para sus operaciones de transporte.',
    },
    {
      termino: 'Geocerca',
      significado:
        'Límite virtual definido en un mapa que genera alertas cuando un activo entra o sale del área establecida.',
    },
    {
      termino: 'GPS (<em>Global Positioning System</em>)',
      significado:
        'Sistema satelital que permite ubicar en tiempo real la posición y movimiento de vehículos, activos o personas.',
    },
    {
      termino: 'Informe de operación',
      significado:
        'Documento que resume el desempeño y los resultados de las actividades de transporte durante un período determinado.',
    },
    {
      termino: 'Logística',
      significado:
        'Conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa, o de un servicio, especialmente de distribución.',
    },
    {
      termino: 'QR (<em>Quick Response</em>)',
      significado:
        'Código bidimensional que almacena información legible por cámaras de teléfonos o escáneres para trazabilidad y acceso a datos.',
    },
    {
      termino: 'Rastreo',
      significado:
        'Proceso de seguimiento en tiempo real de la ubicación y el estado de los vehículos o la carga durante el transporte.',
    },
    {
      termino: 'Reporte de trazabilidad',
      significado:
        'Documento que detalla el historial, la ubicación y la ruta de un producto o envío a lo largo de la cadena de suministro.',
    },
    {
      termino: 'Telemetría',
      significado:
        'Transmisión remota de parámetros técnicos (motor, temperatura, consumo) desde el vehículo a una plataforma central.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el rastro de un producto, desde su origen hasta su destino final, a través de toda la cadena de suministro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calatayud, A., & Montes, L. (2021). Logística en América Latina y el Caribe: Oportunidades, desafíos y líneas de acción. Banco Interamericano de Desarrollo. ',
      link:
        'https://publications.iadb.org/es/logistica-en-america-latina-y-el-caribe-oportunidades-desafios-y-lineas-de-accion',
    },
    {
      referencia:
        'Cardona Arbeláez, D., & Rodríguez Arias, C. A. (2019). Logística y cadena de suministro: Aproximaciones teórico-prácticas. CECAR. ',
      link:
        'https://www.cecar.edu.co/documentos/editorial/e-book/logistica-y-cadena-de-suministro-digital.pdf',
    },
    {
      referencia:
        'Comisión Económica para América Latina y el Caribe (CEPAL). (s. f.). La supervisión, fiscalización y regulación del transporte terrestre. CEPAL. ',
      link:
        'https://www.cepal.org/es/publicaciones/36016-la-supervision-fiscalizacion-regulacion-transporte-terrestre',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2002, 31 de julio). Decreto 1609 de 2002: Por el cual se reglamenta el manejo y transporte terrestre automotor de mercancías peligrosas por carretera. Diario Oficial No. 44.893. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6101',
    },
    {
      referencia:
        'Mora García, L. A. (s. f.). Logística del transporte y distribución de carga. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 26 de mayo). Decreto 1079 de 2015: Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Diario Oficial No. 49.523. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889',
    },
    {
      referencia:
        'Superintendencia de Transporte. (s. f.). Normatividad vigente en transporte terrestre de carga. ',
      link:
        'https://www.supertransporte.gov.co/documentos/2020/Diciembre/Notificaciones_16_RA/Resoluciones/860.pdf',
    },
    {
      referencia:
        'TIBA Group. (s. f.). 6 requisitos para el transporte terrestre de carga en Colombia. ',
      link:
        'https://www.tibagroup.com/es/logistica/transporte-terrestre/requisitos-colombia',
    },
    {
      referencia:
        'Valdés Figueroa, L., & Pérez, G. (2020). Transformación digital en la logística de América Latina y el Caribe. Comisión Económica para América Latina y el Caribe (CEPAL). ',
      link:
        'https://www.cepal.org/es/publicaciones/46018-transformacion-digital-la-logistica-america-latina-caribe',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yasmín Andreina Maldonado Escobar',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
