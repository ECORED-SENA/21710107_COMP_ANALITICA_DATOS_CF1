<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 1
      h1 Análisis de datos
    
    .container-data-t_1
      .container-data-parrafo-t_1
        p El manejo de los datos, en los últimos años, está revolucionando muchos campos de la empresa, y la analítica logística es uno de ellos. La naturaleza compleja y dinámica de la logística, junto con la dependencia de muchas partes móviles que pueden crear cuellos de botella en cualquier punto de la cadena de suministro, hacen de la logística un caso de uso perfecto para el Big Data.
          br
          br
          | El aumento de la cantidad de datos disponibles presenta tanto oportunidades como problemas. En general, disponer de más datos sobre los clientes (y los clientes potenciales) debería permitir a las empresas adaptar mejor los productos y los esfuerzos de <em>marketing</em>, con el fin de crear mayor nivel de satisfacción y de repetición del negocio. Las empresas que recogen una gran cantidad de datos tienen la oportunidad de realizar análisis más profundos y ricos, en beneficio de todas las partes interesadas. Por ejemplo, el Big Data logístico puede utilizarse para optimizar las rutas, racionalizar las funciones de las fábricas y dar transparencia a toda la cadena de suministro, en beneficio tanto de las empresas como de su logística.
      img(src="@/assets/curso/tema1/imagen_t_1.png" data-aos="fade-up").mt-4.mt-md-0

    .container-decorador.col-12.col-md-11.mb-3
      .container-decorador-text(data-aos="fade-right")
        p El Big Data en logística requiere una gran cantidad de fuentes de información de alta calidad para 
         | funcionar eficazmente. ¿De dónde van a salir todos esos datos? A continuación, se relaciona una 
         | amplia selección de posibles fuentes de datos, entre las que se incluyen:
      img(src="@/assets/curso/tema1/decorador_t_1-1.svg" data-aos="fade-left").d-none.d-md-flex
    
    .row.mb-0.mb-md-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_1.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p <b>Datos tradicionales de la empresa</b> <br><br> procedentes de los sistemas operativos

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_2.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p <b>Datos de tráfico y meteorológicos</b> <br><br> procedentes de sensores, monitores y sistemas de previsión.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_3.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p <b>Diagnósticos de vehículos</b> <br><br> patrones de conducción e información de localización.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_4.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p.fw-bold Previsiones financieras del negocio.
              
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.ms-auto
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_5.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p.fw-bold Datos de respuesta publicitaria.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_6.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p.fw-bold Datos de patrones de navegación de sitios web.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.me-auto
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_7.svg')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p.fw-bold Datos de redes sociales
    
    .container-bg
      img(src="@/assets/curso/tema1/imagen_t_1_img-1.png" data-aos="fade-right" style="max-width: 400px; max-height: 237px").mb-4.mb-md-0
      .container-bg-text-img(data-aos="fade-left")
        p Es claro que hay muchas formas de alimentar los sistemas de datos con la información que necesitan. Todas estas fuentes de datos y casos de uso potenciales han llevado a afirmar que la tecnología de Big Data y automatización conducirá a niveles de optimización antes inimaginables en la fabricación, la logística, el almacenamiento y la entrega de última milla.
          br
          br
          | Los Big Data pueden recopilarse a partir de comentarios compartidos públicamente en redes sociales y sitios web, recogidos voluntariamente en aparatos electrónicos y aplicaciones personales, mediante cuestionarios, compras de productos y registros electrónicos. La presencia de sensores y otras entradas en los dispositivos inteligentes permite recopilar datos en un amplio espectro de situaciones y circunstancias. En cualquier caso, parece que el futuro es brillante para las empresas de logística que estén dispuestas a aprovechar el Big Data.
    Separador
    // Tema #1
    .titulo-segundo.color-primario
      h2#t_1_1 1.1 información
    
    .container_t_1_ad-1.mb-5
      p La información son datos cotejados para derivar inferencias significativas según su requisito contextual, que se estructura, procesa y presenta con un significado asignado que mejora la fiabilidad de los datos adquiridos, garantizando que no haya incertidumbre y que sean pertinentes.
        br
        br
        | En esencia, la información existe para sistematizar datos relevantes y oportunos para presentar o desarrollar ideas. A diferencia de los datos, la información es fundamental, ya que procesa los datos a través de la inteligencia intencionada para interpretar, predecir o explicar.

    p.col-12 En el siguiente esquema, se comparte la diferencia entre datos e información:

    img(src="@/assets/curso/tema1/imagen_t_1-1.svg" data-aos="fade-down").my-5

    .container_t_1_ad
      p(style="background-color: #D4E0FA; color: black" data-aos="fade-up") El conocimiento es una información procesada en la mente de su poseedor. Son informaciones personalizadas, que se recogen mediante el estudio o las experiencias. El conocimiento también puede verse desde perspectivas diferenciales; de allí, la información representa un mensaje con significado que se deriva de los datos, que consisten en un conjunto de registros simples, no filtrados y objetivos.
        br
        br
        |En el cuadro que se comparte, se presentan algunos elementos que permiten reconocer los datos, la información y el conocimiento. 
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen_t_1_card_1.png')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p Información refinada,<br> estructurada y<br> evolucionada a partir de<br> datos brutos listos para<br> ser analizados.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen_t_1_card_2.png')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p La información requiere<br> ser contextualizada para<br> convertirse en<br> conocimiento.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen_t_1_card_3.png')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p La información se refiere a<br> un flujo de mensajes.
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen_t_1_card_4.png')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p La información son datos<br> pero con contexto.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/imagen_t_1_card_5.png')})`}" style="background-color: #F0F0F0")
            .tarjeta-flip__contenido(style="background-color: #F0F0F0;")
              p La información tiene las<br> cualidades de transmitir y<br> comunicar, impactar en<br> los juicios y en el<br> comportamiento.
    
    .d-flex.flex-wrap.flex-md-nowrap.mb-5
      img(src="@/assets/curso/tema1/img-1.png" data-aos="fade-right" style="max-width: 282px").mb-4.mb-md-0
      p(data-aos="fade-left") La ciencia y la tecnología de la información han ganado potencial en términos de transición tecnológica: desde los servidores hasta la nube y las bases de datos más inteligentes, los datos se procesan en un abrir y cerrar de ojos. Con la velocidad, viene la capacidad de procesar datos, incluso con unidades de <em>hardware</em> de bajo coste, como las SSD (unidades de estado sólido), los HDD (discos duros) y los servicios en la nube. Las organizaciones almacenan ahora montones de datos, con la esperanza de procesarlos para obtener información que les ayude a tomar decisiones organizativas o a predecir la futura fiabilidad de sus productos o servicios en el mercado.
        br
        br
        | Desde la ciencia médica, la educación, la logística, hasta los programas espaciales, por nombrar algunos escenarios, los datos y la información resuelven problemas de la vida real a una velocidad vertiginosa, con sus diversas aplicaciones. Prácticamente, no hay límites para sus aplicaciones en las industrias y los beneficios que albergan. 
    Separador
    // Tema #1.2
    .titulo-segundo.color-primario
      h2#t_1_2 1.2 Registro de datos
    .d-flex.flex-wrap
      .container_t_1_ad.col-12.col-md-9.bg-2(data-aos="fade-right")
        p.ps-5(style="background-color: #E7D2EC; color: black") El concepto de registro de datos se define como el  grupo  de  información, con cierta correlación, estructurado en una tabla comportada por campos, como columnas y filas; el objetivo general de este es poner por escrito y asegurar la conservación de los datos recogidos para estudios específicos  a desarrollar e implementar dentro de la empresa. Cada estudio o necesidad determina los tipos de datos que deben recogerse en función de los objetivos y los recursos disponibles para el mismo. 
      .col-12.col-md-3.d-flex.align-items-end.px-4(data-aos="fade-left")
        .col-6(style="background-color: #DBDADA; height: 3px; margin-bottom: 2rem")
        .col-6(style="background-color: #7F0F98; height: 3px; margin-bottom: 2rem")
      .col-12.col-md-3.d-flex.align-items-end.px-4(data-aos="fade-right")
        .col-6(style="background-color: #3D72E8; height: 3px; margin-bottom: 2rem")
        .col-6(style="background-color: #DBDADA; height: 3px; margin-bottom: 2rem")
      .container_t_1_ad.col-12.col-md-9.ms-auto(data-aos="fade-left")
        p.ps-5.py-4(style="background-color: #D4E0FA; color: black") Los tipos de datos utilizados habitualmente en los estudios   suelen estar relacionados con la actividad económica de la empresa. Sin embargo, sea cual sea la naturaleza de los tipos de datos, es necesario disponer de formularios o cuestionarios adecuados para registrar la información que se va a recoger. A menudo, es conveniente preparar estos formularios o cuestionarios por disciplina o tipo de datos. Es preferible el uso de formularios o cuestionarios precodificados, que permitan el registro directo de los datos, ya que, con una formación adecuada, su uso suele dar lugar a menos errores. Además, se utilizará un solo protocolo o conjunto de formularios para recoger y codificar la información que se registrará en el campo para cada unidad de estudio (por ejemplo, familia o individuo).

    p El objetivo de esta etapa es elaborar todos los formularios y/o cuestionarios necesarios en sus versiones definitivas, tal y como se utilizarán sobre el registro de la empresa. Estos formularios y cuestionarios deben ir acompañados de un conjunto de instrucciones detalladas, recogidas explícitamente en un manual de codificación. 
    p Los formularios y cuestionarios contienen la información necesaria tanto para el desarrollador como para el personal de procesamiento de datos, y generalmente constan de dos partes:

    .tabla-b.color-acento-contenido.mb-5
      table.tabla-custom
        thead
          tr
            th Un encabezado
            th Un cuerpo
        tbody
          tr
          tr
            td.have-border El encabezamiento de los formularios o cuestionarios incluye la información necesaria, principalmente, para preparar los archivos de datos adecuados de acuerdo con los objetivos del estudio, definidos por el investigador responsable.
            td Se hace necesario solicitar los datos y la información real  que se requiera para satisfacer los objetivos del estudio.
          tr
            td.have-border Puede incluir información para que el investigador pueda recuperar a los sujetos, ya sea para realizar nuevas entrevistas o para comprobar las grabaciones originales.
            td En el cuerpo del formulario, pueden utilizarse tantos campos y dígitos como sean necesarios para completar el registro.
          tr
            td.have-border Evidentemente, el tipo de ítems de esta parte del formulario o cuestionario varía según la naturaleza del estudio, pero generalmente debe incluir información del tipo especificado.
            td Sin embargo, siempre es aconsejable consultar con el personal que se encargará del procesamiento y análisis de los datos para evitar problemas relacionados con la gestión de estos.
    
    p.mb-5 A continuación, se presenta un ejemplo de formulario de registro de datos de la Secretaría de Hacienda para obtener el Registro<br class="d-none d-md-flex"> de Información Tributaria RIT

    .tarjeta.px-3.py-4.mb-5(style="background: linear-gradient(90DEG, #A904C2, #400F71)").col-12
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/download-icon.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="color: white")
              h3.mb-0.texto-blanco Registro De Información Tributaria RIT
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.shd.gov.co/shd/node/28582" target="_blank")
                span Descargar
                i.fas.fa-file-download
    p Además de ello, las instrucciones de diligenciamiento
    .tarjeta.px-3.py-4.mb-3(style="background: linear-gradient(90DEG, #A904C2, #400F71)").col-12
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/download-icon.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="color: white")
              h3.mb-0.texto-blanco Instrucciones de diligenciamiento
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.shd.gov.co/shd/node/28582" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaFlip: true,
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
.container-data-t_1
  display: flex
  align-items: center
  .container-data-parrafo-t_1
    position: relative
    margin-right: .5rem
    p
      position: relative
      z-index: 1
    &::after
      content: ''
      position: absolute
      width: 433px
      height: 75px
      background-color: #d7e2fa
      bottom: -5px
      right: 0
      z-index: 0
    &::before
      content: ''
      position: absolute
      width: 273px
      height: 75px
      background-color: #d7e2fa
      top: -23px
      left: 0
      z-index: 0
  img
    max-width: 405px
    max-height: 405px
@media (max-width: 768px)
  .container-data-t_1
    flex-wrap: wrap
.container-decorador
  display: flex
  margin-left: auto
  margin-top: 3rem
  position: relative
  padding-bottom: 3rem
  .container-decorador-text
    width: 100%
    text-align: center
    p
      background-color: #d7e2fa
      font-weight: bold
      padding: 1rem 4rem
      text-align: left
    @media (max-width: 768px)
      p
        padding: 2rem
  img
    max-width: 190px
    padding-left: 1rem
  &::before
    content: ''
    position: absolute
    bottom: 1rem
    left: 4rem
    height: 0
    width: 0
    border-top: 37px solid #d7e2fa
    border-left: 62.5px solid transparent
    border-right: 62.5px solid transparent
.tarjeta-flip__contenedor
  min-height: 364px
  .tarjeta-flip__img
    background-size: 224px
    background-repeat: no-repeat
    cursor: pointer
  .tarjeta-flip__contenido
    display: flex
    align-items: start
    justify-content: center
    padding: 2rem
.container-bg
  display: flex
  margin-bottom: 3rem
  .container-bg-text-img
    position: relative
    padding-left: 1rem
    p
      position: relative
    &::after
      content: ''
      position: absolute
      width: 250px
      height: 3px
      right: 0
      background: linear-gradient(90deg, rgba(151,157,158,1) 66%, rgba(151,157,158,1) 66%, rgba(127,15,152,1) 66%)
@media (max-width: 768px)
  .container-bg
    flex-wrap: wrap
.container_t_1_ad-1
  position: relative
  &::after
    position: absolute
    content: ''
    left: -3rem
    top: 0
    width: 50%
    height: 30px
    background-color: #DBBBE2
  &::before
    position: absolute
    content: ''
    right: -3rem
    bottom: 0
    width: 50%
    height: 64px
    background-color: #DBBBE2
  p
    position: relative
    z-index: 1
    margin-bottom: 0
.bg-2
  p
    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 25px
      height: 8px
      background-color: #D993E9 !important
.container_t_1_ad
  display: flex
  align-items: center
  position: relative
  margin-bottom: 2rem
  p
    position: relative
    background-color: #7F0F98
    color: white
    margin-bottom: 0
    padding: .5rem 1rem
    width: 100%
    &::before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 25px
      height: 8px
      background-color: #A0BDFF
.container_card_t_1
  max-width: 390px
  border: 1px solid #707070
  display: flex
  flex-wrap: wrap
  img
    width: auto
    height: 205px
    margin-right: auto
    margin-left: auto
    padding: .3rem
  p
    text-align: center
    max-width: 236px
    color: white
    margin-bottom: 0
    padding: 1rem
.tabla-custom
  thead
    background-color: #7F0F98
    text-align: center
    color: white
  tbody
    border-bottom: 1px solid #AFAFAF
    tr td.have-border
      border-right: 1px solid #AFAFAF
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
</style>
