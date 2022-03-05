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
      img(src="@/assets/curso/tema1/imagen_t_1.png").mt-4.mt-md-0

    .container-decorador.col-12.col-md-11.mb-3
      .container-decorador-text
        p El Big Data en logística requiere una gran cantidad de fuentes de información de alta calidad para <br>
         | funcionar eficazmente. ¿De dónde van a salir todos esos datos? A continuación, se relaciona una <br>
         | amplia selección de posibles fuentes de datos, entre las que se incluyen:
      img(src="@/assets/curso/tema1/decorador_t_1-1.svg").d-none.d-md-flex
    
    .row.mb-0.mb-md-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_1.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Datos tradicionales de la empresa procedentes de los sistemas operativos

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_2.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Datos de tráfico y meteorológicos procedentes de sensores, monitores y sistemas de previsión.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_3.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Diagnósticos de vehículos, patrones de conducción e información de localización.
      
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_4.svg')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Previsiones financieras del negocio.
              
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.ms-auto
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_5.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Datos de respuesta publicitaria.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_6.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Datos de patrones de navegación de sitios web.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0.me-auto
        .tarjeta.tarjeta-flip
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/tarjeta-flip-1_t_7.png')})`, 'border' : '4px solid #3D72E8'}")
            .tarjeta-flip__contenido(style="background-color: #A6BAE6")
              p Datos de redes sociales
    
    .container-bg
      img(src="@/assets/curso/tema1/imagen_t_1_img-1.png" style="max-width: 400px; max-height: 237px").mb-4.mb-md-0
      .container-bg-text-img
        img(src="@/assets/curso/tema1/imagen_t_1_img-2.png").d-none.d-md-block
        p Es claro que hay muchas formas de alimentar los sistemas de datos con la información que necesitan. Todas estas fuentes de datos y casos de uso potenciales han llevado a afirmar que la tecnología de Big Data y automatización conducirá a niveles de optimización antes inimaginables en la fabricación, la logística, el almacenamiento y la entrega de última milla.
          br
          | Los Big Data pueden recopilarse a partir de comentarios compartidos públicamente en redes sociales y sitios web, recogidos voluntariamente en aparatos electrónicos y aplicaciones personales, mediante cuestionarios, compras de productos y registros electrónicos. La presencia de sensores y otras entradas en los dispositivos inteligentes permite recopilar datos en un amplio espectro de situaciones y circunstancias. En cualquier caso, parece que el futuro es brillante para las empresas de logística que estén dispuestas a aprovechar el Big Data

    // Tema #1
    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 información
    
    .container_t_1_ad
      .pe-4.mb-auto.mb-md-0
        img(src="@/assets/curso/tema1/icono_t_1.svg" style="height: 50px")
        img(src="@/assets/curso/tema1/icono_t_1.svg" style="height: 50px").mt-3
      p Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.<br> es fundamental, ya que procesa los datos a través de la inteligencia intencionada para interpretar, predecir o explicar.
        br
        br
        | En esencia, la información existe para sistematizar datos relevantes y oportunos para presentar o desarrollar ideas. A diferencia de los datos, la <br>información es fundamental, ya que procesa los datos a través de la inteligencia intencionada para interpretar, predecir o explicar.

    p.col-12.col-md-11.ms-auto El Big Data en logística requiere una gran cantidad de fuentes de información de alta calidad para funcionar eficazmente. ¿De dónde van a salir todos esos datos? A continuación, se relaciona una amplia selección de posibles fuentes de datos, entre las que se incluyen:

    img(src="@/assets/curso/tema1/imagen_t_1-1.png").my-5

    .container_t_1_ad
      .pe-4.mb-auto.mb-md-0
        img(src="@/assets/curso/tema1/icono_t_1-2.svg" style="height: 50px")
      p(style="background-color: #A6BAE6") El conocimiento es una información procesada en la mente de su poseedor. Son informaciones personalizadas, que se recogen mediante el estudio o las experiencias. El conocimiento también puede verse desde perspectivas diferenciales; de allí, la información representa un mensaje con significado que se deriva de los datos, que consisten en un conjunto de registros simples, no filtrados y objetivos.
        br
        br
        |En el cuadro que se comparte, se presentan algunos elementos que permiten reconocer los datos, la información y el conocimiento. 
    .d-flex.flex-wrap.mt-5.justify-content-center.mb-4
      .container_card_t_1.col-12.col-md-4.mx-auto.mb-3.mb-md-0
        img(src="@/assets/curso/tema1/imagen_t_1_card_1.png")
        .d-flex.justify-content-center.align-items-center.w-100(style="background-color: #9541A8; min-height: 128px;")
          p Información refinada, estructurada y evolucionada a partir de datos brutos listos para ser analizados

      .container_card_t_1.col-12.col-md-4.mx-auto.mb-3.mb-md-0
        img(src="@/assets/curso/tema1/imagen_t_1_card_2.png")
        .d-flex.justify-content-center.align-items-center.w-100(style="background-color: #9541A8; min-height: 128px;")
          p La información requiere ser contextualizada para convertirse en conocimiento.
      
      .container_card_t_1.col-12.col-md-4.mx-auto
        img(src="@/assets/curso/tema1/imagen_t_1_card_3.png")
        .d-flex.justify-content-center.align-items-center.w-100(style="background-color: #9541A8; min-height: 128px;")
          p La información se refiere a un flujo de mensajes.
      
    .d-flex.flex-wrap.justify-content-center.mb-5
      .container_card_t_1.col-12.col-md-4.me-0.me-md-2.mb-3.mb-md-0
        img(src="@/assets/curso/tema1/imagen_t_1_card_4.png")
        .d-flex.justify-content-center.align-items-center.w-100(style="background-color: #9541A8; min-height: 128px;")
          p La información son datos pero con contexto.

      .container_card_t_1.col-12.col-md-4.md-0.ms-md-2.mb-3.mb-md-0
        img(src="@/assets/curso/tema1/imagen_t_1_card_5.png")
        .d-flex.justify-content-center.align-items-center.w-100(style="background-color: #9541A8; min-height: 128px;")
          p La información se refiere a un flujo de mensajes.
    
    p.col-12.col-md-9.mb-3 La ciencia y la tecnología de la información han ganado potencial en términos de transición tecnológica: desde los servidores hasta la nube y las bases de datos más inteligentes, los datos se procesan en un abrir y cerrar de ojos. Con la velocidad, viene la capacidad de procesar datos, incluso con unidades de <em>hardware</em> de bajo coste, como las SSD (unidades de estado sólido), los HDD (discos duros) y los servicios en la nube. Las organizaciones almacenan ahora montones de datos, con la esperanza de procesarlos para obtener información que les ayude a tomar decisiones organizativas o a predecir la futura fiabilidad de sus productos o servicios en el mercado.
    p.col-12.col-md-9.ms-auto Desde la ciencia médica, la educación, la logística, hasta los programas espaciales, por nombrar algunos escenarios, los datos y la información resuelven problemas de la vida real a una velocidad vertiginosa, con sus diversas aplicaciones. Prácticamente, no hay límites para sus aplicaciones en las industrias y los beneficios que albergan. 

    // Tema #1.2
    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Registro de datos

    .container_t_1_ad.col-12.col-md-9
      p.fw-bold.ps-5(style="background-color: #AB62BB; color: black") El concepto de registro de datos se define como el  grupo  de  información, con cierta correlación, estructurado en una tabla comportada por campos, como columnas y filas; el objetivo general de este es poner por escrito y asegurar la conservación de los datos recogidos para estudios específicos  a desarrollar e implementar dentro de la empresa. Cada estudio o necesidad determina los tipos de datos que deben recogerse en función de los objetivos y los recursos disponibles para el mismo. 
    .container_t_1_ad.col-12.col-md-9.ms-auto
      p.fw-bold.ps-5.py-4(style="background-color: #AAC2F5; color: black") Los tipos de datos utilizados habitualmente en los estudios   suelen estar relacionados con la actividad económica de la empresa. Sin embargo, sea cual sea la naturaleza de los tipos de datos, es necesario disponer de formularios o cuestionarios adecuados para registrar la información que se va a recoger. A menudo, es conveniente preparar estos formularios o cuestionarios por disciplina o tipo de datos. Es preferible el uso de formularios o cuestionarios precodificados, que permitan el registro directo de los datos, ya que, con una formación adecuada, su uso suele dar lugar a menos errores. Además, se utilizará un solo protocolo o conjunto de formularios para recoger y codificar la información que se registrará en el campo para cada unidad de estudio (por ejemplo, familia o individuo).

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
    
    p(style="max-width: 610px").mx-auto.text-center.mb-5 A continuación, se presenta un ejemplo de formulario de registro de datos de la Secretaría de Hacienda para obtener el Registro de Información Tributaria RIT
      br
      | Además de ello, las instrucciones de diligenciamiento

    .tarjeta.px-3.py-4.mb-3(style="background: linear-gradient(90DEG, #A904C2, #400F71)").col-12
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/download-icon.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="color: white")
              h3.mb-1.texto-blanco Documento
              p.text-small.texto-blanco Registro De Información Tributaria RIT
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
      .row.justify-content-around.align-items-center.mt-5
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/download-icon.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0(style="color: white")
              h3.mb-1.texto-blanco Documento
              p.text-small.texto-blanco Registro De Información Tributaria RIT
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
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
    align-items: center
    justify-content: center
    padding-right: 2rem
    padding-left: 2rem
    text-align: center
    p
      color: white
.container-bg
  display: flex
  margin-bottom: 3rem
  .container-bg-text-img
    position: relative
    padding-left: 1rem
    overflow-x: hidden
    img
      position: absolute
      bottom: 0
      z-z-index: 0
    p
      position: relative
@media (max-width: 768px)
  .container-bg
    flex-wrap: wrap
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
      background-color: #F5F5F5
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
