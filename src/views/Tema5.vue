<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 5
      h1 Herramientas tecnológicas

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.img-text-imagen-1
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_t_5-1.png')})`}"
        data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4.ps-md-5.d-flex.align-items-center
        p.mb-0 Según una definición global, una herramienta tecnológica es cualquier "software" o <em>hardware</em>" que ayuda a realizar bien una tarea, entendiéndose por "realizar bien" que se obtenga los resultado esperados, con ahorro de tiempo y ahorro en recursos personales y económicos.

    .d-flex.pt-0.pt-md-5.position-relative.mb-5
      img(src="@/assets/curso/tema5/decorador-card-img-1.svg"  style="max-height: 107px; max-width: 44px" data-aos="fade-right")
      p.ps-2.ps-md-4(data-aos="fade-up") La implementación de herramientas tecnológicas en las organizaciones puede contribuir a incrementar la productividad de sus negocios, perfeccionando la efectividad de sus procesos y ubicando la compañía en un estado de innovación permanente, capaz de ajustarse a las necesidades de los clientes y posicionarse en un mercado cada vez más amplio y competitivo. Para lograr una transformación digital y aceptación positiva de la nueva situación, los directivos tienen que estar expectantes de los adelantos tecnológicos que ofrece el mercado.
        br
        br
        | Hay muchas opciones de tecnología, herramientas y plataformas que ayudarán a hacer crecer las empresas. Una vez se identifique lo que se quiere lograr, se debe tener en cuenta cuál es la mejor opción para su implementación .
    Separador
    // Tema 5.1
    .titulo-segundo.color-primario
      h2#t_5_1 5.1 Características de las herramientas tecnológicas

    p En la siguiente infografía interactiva, se describen las principales características de las herramientas usadas en el entorno empresarial
    
    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema5/img_t_5-2.png')

      div(x="20%" y="15%" tooltip="Sistema ERP (Enterprise Resource Planning)" numero="+").modal-tipo-modal-1.p-3.p-md-4
        p(style="color: black !important") <b>ERP:</b> la planificación de recursos empresariales es un proceso utilizado por las empresas para gestionar e integrar las partes importantes de sus negocios. Muchas aplicaciones de <em>software</em> ERP son importantes para las empresas, porque les ayudan a implementar la planificación de recursos integrando todos los procesos necesarios para dirigir sus empresas con un único sistema. Un sistema de <em>software</em> ERP también puede integrar la planificación, el inventario de compras, las ventas, el marketing, las finanzas, los recursos humanos, entre otros.
      div(x="45%" y="15%" tooltip="CRM (Customer Relationship Management)" numero="+").modal-tipo-modal-1.p-3.p-md-4
        p(style="color: black !important") <b>CRM:</b> se puede traducir al español como Gestión de las Relaciones con los Clientes y se refiere a todas las estrategias, técnicas, herramientas y tecnologías utilizadas por las empresas para desarrollar, retener y adquirir clientes.
          | Este <em>software</em> garantiza que cada paso de la interacción con los consumidores se desarrolle de forma fluida y eficaz, para aumentar los beneficios globales. El <em>software</em> recopila datos de los clientes, procedentes de múltiples canales. Por lo tanto, el CRM almacena información detallada sobre el historial general de compras, información personal e incluso patrones de comportamiento de compra.
      div(x="68%" y="15%" tooltip="Herramientas de BI - Business Intelligence" numero="+").modal-tipo-modal-1.p-3.p-md-4
        p(style="color: black !important") <b>BI:</b> la inteligencia empresarial se refiere a la infraestructura técnica y de procedimiento que recoge, almacena y analiza los datos producidos por las actividades de una empresa. BI es un término amplio, que engloba la extracción de datos, el análisis de procesos, la evaluación comparativa del rendimiento y el análisis descriptivo. La BI analiza todos los datos generados por una empresa y presenta informes fáciles de digerir, medidas de rendimiento y tendencias que informan las decisiones de gestión.
      div(x="92%" y="15%" tooltip="Tecnología Workflow o BPM" numero="+").modal-tipo-modal-1.p-3.p-md-4
        p(style="color: black !important") <b>BPM:</b> la Gestión de Procesos Empresariales es una forma de observar y luego controlar los procesos presentes en una organización. Es una metodología eficaz, que se utiliza en tiempos de crisis para asegurarse de que los procesos son eficientes y eficaces, ya que esto dará lugar a una organización mejor y más rentable.
          br
          br
          | El término Gestión de Procesos Empresariales abarca la forma de estudiar, identificar, cambiar y supervisar los procesos empresariales, para garantizar que funcionen sin problemas y puedan mejorarse con el tiempo. A menudo, se enmarca en términos de flujo de trabajo diario -y sí, el "flujo de trabajo" generalmente encaja en el paraguas de la mejora de procesos-, que es una pieza importante en el rompecabezas del acceso y el uso, ya que un proceso deficiente realmente degrada la capacidad para obtener y aprovechar la información.
          br
          br
          |La mejor manera de considerar el BPM es como una práctica empresarial que abarca técnicas y métodos estructurados. No es una tecnología, aunque hay tecnologías en el mercado que permiten identificar y modificar los procesos existentes, para que se alineen con un estado de cosas futuro deseado, presumiblemente mejorado. Se trata de formalizar e institucionalizar mejores formas de hacer el trabajo.
      div(x="20%" y="58%" tooltip="Sistema de Administración de Almacenes -WMS" numero="+").modal-tipo-modal-2.p-3.p-md-4
        p(style="color: black !important") <b>SGA:</b> un Sistema de Gestión de Almacenes ofrece un conjunto de funciones y servicios que abordan un conjunto completo de operaciones de almacén. Aunque cada SGA puede proporcionar diferentes servicios de nivel secundario, las características principales de un SGA se centran en la gestión del inventario. Un SGA típico puede ofrecer funciones como la gestión de los registros de inventario, los detalles de los envíos de inventario, la ubicación de las existencias dentro del almacén y la gestión de la capacidad general del almacén. El SGA suele formar parte de una solución de <em>software</em> de planificación de recursos empresariales (ERP), pero también puede ser una aplicación independiente. Además, un SGA suele integrarse directamente con otros sistemas de información, como el sistema de gestión de la cadena de suministro, el sistema de información de producción/fabricación y los sistemas de información de ventas.
      div(x="45%" y="58%" tooltip="Facturación electrónica" numero="+").modal-tipo-modal-2.p-3.p-md-4
        p(style="color: black !important") <b>La facturación electrónica</b>, o el pago y la presentación de facturas electrónicas, es cuando un vendedor, una empresa, una organización o un grupo envía sus cuentas o facturas a través de Internet, y los clientes pagan las facturas electrónicamente. Esto sustituye el método tradicional, en el que las facturas se enviaban en papel y los pagos se hacían por medios manuales, como el envío de cheques.
          br
          br
          | La facturación electrónica tiene una serie de ventajas, como la rapidez en la presentación de las facturas y la reducción de los costes de manipulación de los documentos en papel. Sin embargo, para aprovechar al máximo las ventajas de la facturación electrónica, tanto el vendedor como el comprador deben disponer de sistemas informáticos capaces de gestionar la facturación electrónica y tener acceso a instituciones financieras que puedan realizar pagos electrónicos.
      div(x="68%" y="58%" tooltip="Aplicaciones móviles" numero="+").modal-tipo-modal-2.p-3.p-md-4
        p(style="color: black !important") <b>Una aplicación móvil</b>, más comúnmente conocida como app, es un tipo de <em>software</em> de aplicación diseñado para ejecutarse en un dispositivo móvil, como un smartphone o una tableta. Las aplicaciones móviles suelen servir para ofrecer a los usuarios servicios similares a los de los ordenadores. Las apps suelen ser pequeñas unidades de <em>software</em> individuales, con funciones limitadas. Este uso del <em>software</em> de aplicaciones fue popularizado originalmente por Apple Inc. y su App Store, que ofrece miles de aplicaciones para el iPhone, el iPad y el iPod Touch.
          br
          br
          | Una aplicación móvil también puede ser conocida como app, web app, <em>online</em> app, iPhone app o smartphone app.
          br
          br
          |Las aplicaciones móviles se alejan de los sistemas de <em>software</em> integrados que suelen encontrarse en los PC. En su lugar, cada app ofrece una funcionalidad limitada y aislada, como un juego, una calculadora o la navegación web móvil. Aunque las aplicaciones pueden haber evitado la multitarea debido a los limitados recursos de <em>hardware</em> de los primeros dispositivos móviles, su especificidad es ahora parte de su atractivo, porque permite a los consumidores elegir a dedo lo que sus dispositivos son capaces de hacer.
      div(x="92%" y="58%" tooltip="Sistemas de geolocalización" numero="+").modal-tipo-modal-2.p-3.p-md-4
        p(style="color: black !important") <b>Sistema de geolocalización</b> es la capacidad de rastrear la ubicación de un dispositivo utilizando el GPS, las torres de telefonía móvil, los puntos de acceso WiFi o una combinación de ellos. Dado que los dispositivos son utilizados por individuos, la geolocalización utiliza sistemas de posicionamiento para rastrear el paradero de un individuo hasta las coordenadas de latitud y longitud, o más prácticamente, una dirección física. Tanto los dispositivos móviles como los de escritorio pueden utilizar la geolocalización.
      
    .container-text-arrow.pe-0(data-aos="fade-right")
      img(src="@/assets/curso/introduccion/arrow-text.svg" style="transform: rotate(-180deg)").me-4
      p.d-block Finalmente, existen diferentes herramientas tecnológicas que se adaptan a cada necesidad de la empresa, el objetivo es ahorrar tiempo y dinero ofreciendo servicios más competitivos en sus procesos de gestión e innovación y generando cambios en la logística del negocio.
    
    // Tema 5.2
    .titulo-segundo.color-primario
      h2#t_5_2 5.2 Tipos y usos de <em>software</em> para análisis de datos
    
    .container-text-arrow.pe-0
      div(data-aos="fade-right")
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); width: 36px")
        img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg); margin-top: -5px")
      p.d-block(data-aos="fade-left") El <em>software</em> es un conjunto de instrucciones, datos o programas que se utilizan para hacer funcionar los ordenadores y ejecutar tareas específicas. Es lo contrario del <em>hardware</em>, que describe los aspectos físicos de un ordenador. El <em>software</em> es un término genérico utilizado para referirse a las aplicaciones, <em>scripts</em> y programas que se ejecutan en un dispositivo. Puede considerarse como la parte variable de un ordenador, mientras que el <em>hardware</em> es la parte invariable.
    
    .d-flex.flex-wrap.mb-5
      .col-12.col-md-3
        img(src="@/assets/curso/tema5/img_t_5-3.png" style="max-width: 190px" data-aos="fade-up").mx-auto.ms-md-auto.mb-4.mb-md-0
      .col-12.col-md-8(data-aos="fade-left")
        p Por ejemplo, el monitor del ordenador que está utilizando para leer este texto y el ratón que está utilizando para navegar por esta página web son <em>hardware</em> informático. El navegador de Internet que le permite ver esta página y el sistema operativo en el que se ejecuta el navegador se consideran software. Una tarjeta de video es <em>hardware</em>, y un juego de ordenador es software. Se puede tocar y sentir la tarjeta de video, y el ordenador la utiliza para desplegar un juego de ordenador, pero no se puede tocar ni sentir el código de programación que compone el juego de ordenador.
    p.mb-5 Los programas de aplicación que ayudan a los usuarios en las tareas habituales de oficina, como la creación, actualización y mantenimiento de documentos, el manejo de grandes cantidades de datos, la creación de presentaciones, la programación, etc., se denominan herramientas ofimáticas. El uso de herramientas ofimáticas ahorra tiempo y esfuerzo y permite realizar fácilmente muchas tareas repetitivas. Algunos de los programas que hacen esto son:

    TabsA.color-acento-contenido.mb-5.tabs-a_t_5
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Procesador de texto")
        .container-text-arrow.pe-0.flex-wrap.flex-md-nowrap.mb-3.mb-md-0
          img(src="@/assets/curso/tema5/pestanas_t_5-1.png" style="max-width: 53px; max-height: 70px").me-4.mb-4
          p.d-block
            b Procesador de texto
            br
            | Un <em>software</em> para crear, almacenar y manipular documentos de texto. Algunos procesadores de texto comunes son MS-Word, AbiWord, WordPerfect, Google docs, etc.
            br
            br
            | Un procesador de textos le permite:
            br
            br
            | Crear, guardar y editar documentos.
            br
            | Formatear las propiedades del texto, como la fuente, la alineación, el color de la fuente, el color de fondo, etc.
            br
            | Revisar la ortografía y la gramática.
            br
            | Añadir imágenes.
            br
            | Añadir cabeceras y pies de página, establecer márgenes de página e insertar marcas de agua.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Hoja de calculo")
        .container-text-arrow.pe-0.flex-wrap.flex-md-nowrap.mb-3.mb-md-0
          img(src="@/assets/curso/tema5/pestanas_t_5-2.png" style="max-width: 53px; max-height: 70px").me-4.mb-4
          p.d-block
            b Hoja de calculo
            br
            | La hoja de cálculo es un <em>software</em> que ayuda a los usuarios a procesar y analizar datos tabulares. Es una herramienta informática de contabilidad. Los datos se introducen siempre en una celda (intersección de una fila y una columna), y es fácil disponer de fórmulas y funciones para procesar un grupo de celdas. 
            br
            br
            | Algunos de los programas de hojas de cálculo más conocidos son MS-Excel, Gnumeric, Google Sheets, etc. 
            br
            br
            | Esta es una lista de actividades que se pueden realizar dentro de un <em>software</em> de hoja de cálculo:
            br
            br
            | Cálculos sencillos, como la suma, la media, el recuento, etc.
            br
            | Preparación de tablas y gráficos sobre un grupo de datos relacionados.
            br
            | Introducción de datos.
            br
            | Formateo de datos.
            br
            | Formateo de celdas.
            br
            | Cálculos basados en comparaciones lógicas.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Sistemas de bases de datos")
        .container-text-arrow.pe-0.flex-wrap.flex-md-nowrap.mb-3.mb-md-0
          img(src="@/assets/curso/tema5/pestanas_t_5-3.png" style="max-width: 53px; max-height: 70px").me-4.mb-4
          p.d-block
            b Sistemas de bases de datos
            br
            | El <em>software</em> que gestiona el almacenamiento, la actualización y la recuperación de datos mediante la creación de bases de datos se denomina sistema de gestión de bases de datos. Algunas herramientas populares de gestión de bases de datos son MS-Access, MySQL, Oracle, FoxPro, etc.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Software de presentación")
        .container-text-arrow.pe-0.flex-wrap.flex-md-nowrap.mb-3.mb-md-0
          img(src="@/assets/curso/tema5/pestanas_t_5-4.png" style="max-width: 53px; max-height: 70px").me-4.mb-4
          p.d-block
            b Software de presentación
            br
            | La herramienta de presentación permite al usuario mostrar información desglosada en pequeños fragmentos y dispuesta en páginas denominadas diapositivas. Una serie de diapositivas que presentan una idea coherente a un público se denomina presentación. Las diapositivas pueden tener texto, imágenes, tablas, audio, video u otra información multimedia. MS-PowerPoint, OpenOffice Impress, Lotus Freelance, etc., son algunas de las herramientas de presentación más populares.

      .tarjeta.color-acento-contenido--borde.p-4(titulo="Herramientas de correo electrónico")
        .container-text-arrow.pe-0.flex-wrap.flex-md-nowrap.mb-3.mb-md-0
          img(src="@/assets/curso/tema5/pestanas_t_5-5.png" style="max-width: 70px; min-height: 38px").me-4.mb-4
          p.d-block
            b Herramientas de correo electrónico
            br
            | Son herramientas que las empresas utilizan para crear, enviar, probar, optimizar e informar sobre sus campañas de correo electrónico. Una de las herramientas de <em>marketing</em> por correo electrónico más comunes es un proveedor de servicios de correo electrónico, o ESP, como Campaign Monitor. Campaign Monitor permite a las empresas crear hermosos correos electrónicos, crear recorridos automatizados y entregar mensajes personalizados, que mejoran la relación con los clientes.

    .cajon-b.color-primario.mb-5.other-color.col-12.col-md-11.mx-auto
      p(data-aos="fade-right") Documentos, hojas de cálculo, presentaciones y notas: son los archivos que hacen que el trabajo funcione, que muestran un nuevo proyecto y el rendimiento de un espacio de tiempo, así como las ideas para el futuro. Son una parte tan crucial de la informática que, hoy en día, es difícil imaginar un ordenador sin un paquete ofimático. <br><br><br> Durante años -incluso décadas- eso significaba que era difícil imaginar un ordenador sin Microsoft Office. Hoy en día, es fácil si lo intentamos. Office tiene más y mejores competidores que nunca, al mismo que cambian las características que se requiere de las herramientas ofimáticas, cosas como la colaboración, el acceso <em>offline</em> y <em>online</em>, y la compatibilidad con múltiples dispositivos
    
    .container-text-arrow.flex-wrap.flex-md-nowrap.pt-0.pt-md-5.other-color.col-12.col-md-11.mx-auto
      img(src="@/assets/curso/tema5/img_t_5-4.png" style="max-width: 278px; max-height: 270px" data-aos="fade-right").mb-4
      .container-text-bloque-b.h-auto
        .cajon-b.color-primario(data-aos="fade-left")
          p.mb-0.ps-0.ps-md-4 Microsoft Office 365, Google G Suite, Zoho Workplace, Apple iWork, Quip y LibreOffice son los principales actores de la suite ofimática actual. ¿Qué conjunto de herramientas debería utilizar? Es posible que ya tenga una suite ofimática más antigua y se pregunte si debería pasarse a Office 365, o si las herramientas de G Suite de su cuenta de Gmail son suficientes. O tal vez esté tratando de decidir qué suite implementar en su equipo.<br><br><br>	Se espera que los temas de este componente de formación, en su estudio, le ayudará a ampliar conocimientos  de análisis de datos,  manejo de la información y formas de hacer registros; a identificar  características del almacenamiento de la información y el tratamiento de manera competente; la importancia de los diferentes tipos de  redes de datos; los sistemas de gestión documental; además, la aplicación de herramientas tecnológicas en los diferentes procesos logísticos y comerciales de las empresas. 
    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.img-text-imagen-1
  min-height: 312px
  margin-bottom: 70px
  .bloque-texto-g__img
    min-height: 376px
@media (max-width: 768px)
  .img-text-imagen-1
    min-height: auto
    .bloque-texto-g__img
      min-height: auto
.modal-tipo-modal-2
  background-color: #D4E0FA
  border-radius: 29px
.modal-tipo-modal-1
  background-color: #CBAED1
  border-radius: 29px
.container-text-arrow
  display: flex
  align-items: center
  margin-bottom: 3rem
  img
    max-width: 36px
    max-height: 41px
    min-height: 41px
@media (max-width: 768px)
  .container-text-arrow
    align-items: start
    img
      margin-top: 3rem
      max-width: 35px
      max-height: 62px
      min-height: 62px
  br
    display: none
.container-text-bloque-b
  .cajon-b
    &::before
      top: 60%
      left: 55%
      right: 0
      bottom: 0
.tabs-a_t_5
  .tabs-a__tab__selected
    .tabs-a__tab__text
      color: white
.other-color
  .cajon-b.color-primario:before
    background-color: #DFC2E5
    height: 50%
.other-color.cajon-b.color-primario:before
  height: 40%
  background-color: #DFC2E5
</style>
