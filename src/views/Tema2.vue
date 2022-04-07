<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 2
      h1 Soporte de análisis de datos
    .d-flex.flex-wrap.flex-md-nowrap.mb-5
      p.col-12.col-md-6.col-xl-7.py-4(data-aos="fade-right") El área de soporte técnico es la encargada de ofrecer ayuda a clientes cuando presentan inconvenientes al usar un producto o servicio, tal como un software o hardware en un equipo de cómputo, un servidor de Internet o un dispositivo. 
        br
        br
        | Con el creciente uso de la tecnología en los tiempos modernos, hay una necesidad cada vez mayor de proporcionar soporte técnico. Muchas organizaciones ubican sus departamentos de soporte técnico o centros de llamadas en países o regiones con costes más bajos. Dell fue una de las primeras empresas en externalizar sus departamentos de soporte técnico y atención al cliente a la India, en 2004. También han aumentado las empresas especializadas en ofrecer soporte técnico a otras organizaciones.
        br
        br
        | Para las empresas que necesitan proporcionar soporte técnico, la externalización les permite mantener una alta disponibilidad del servicio. Esta necesidad puede ser el resultado de picos en el volumen de llamadas durante el día, periodos de gran actividad debido a la introducción de nuevos productos o paquetes de servicios de mantenimiento, o el requisito de proporcionar a los clientes un alto nivel de servicio a un bajo costo para la empresa.
      .col-12.col-md-6.col-xl-5.d-flex.align-items-center.justify-content-center(style="background: linear-gradient(90deg, #FFFAFA, #D8D7D7")
        img(src="@/assets/curso/tema2/imagen_t_2-1.png" data-aos="zoom-in" style="max-width: 411px")
    
    p.py-5.mb-0 Los tipos de soporte de datos más conocidos son: 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-1.svg' data-aos="zoom-out-right" alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h3.text-center.mb-5 Vía telefónica
        p.text-center(data-aos="fade-up") Es la alternativa más ágil de solucionar cualquier requerimiento que presente el cliente.

      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-2.svg' data-aos="zoom-out-up" alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h3.text-center.mb-5 Visita en presencia física
        p.text-center(data-aos="fade-up") Se generan algunos problemas que no pueden solucionarse a distancia. Por lo tanto, existe   la alternativa de que un experto técnico del área se desplace al domicilio del cliente o al sitio donde esté ubicado el sistema objeto de soporte.

      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/tarjeta_t_2-3.svg' data-aos="zoom-out-left" alt='Texto que describa la imagen', style="max-height: 126px; max-width: 126px")
          
        h3.text-center Correo o texto a través de un dispositivo o vía remota
        p.text-center(data-aos="fade-up") Con este sistema, el cliente no deberá estar en espera para contactar con un técnico, puede resolver su duda en el chat o en el sitio web y hacerlo en el momento que presente la necesidad.
    Separador
    // Tema 2.1
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Características del soporte
    
    .d-block.d-md-flex.mb-0.container-decorador
      img(src="@/assets/curso/tema2/decorador_t_2_1.svg" data-aos="flip-left" style="max-width: 45px").me-5.d-none.d-md-flex
      p El soporte técnico se suele subdividir en niveles, para poder atender mejor a una empresa o a una base de clientes. El número de niveles que una empresa utiliza para organizar su grupo de soporte técnico depende de las necesidades de la empresa, en cuanto a su capacidad para atender suficientemente a sus clientes o usuarios. 
        br
        br
        |La razón para proporcionar un sistema de soporte de varios niveles, en lugar de un grupo de soporte general, es proporcionar el mejor servicio posible y de la manera más eficiente posible; el éxito de la estructura organizativa depende de que los técnicos comprendan su nivel de responsabilidad, sus compromisos de tiempo de respuesta al cliente, cuándo escalar adecuadamente un problema y a qué nivel.  
        br
        br
        |Una estructura de soporte común gira en torno a un sistema de soporte técnico de tres niveles, como se comparte en la siguiente imagen: 

    .mt-5.container-card-niveles.col-12.col-xl-6(style="z-index: 3; color: #7F0F98" data-aos="fade-right")
      .card-nivel-1.col-6
        p Nivel 1
      .card-nivel-2.col-6
        p Es el nivel de asistencia inicial, responsable de los problemas básicos de los clientes.

    .container-card-niveles.col-12.col-xl-6.mx-auto(style="z-index: 2; color: #0754FF" data-aos="fade-right")
      .card-nivel-1.col-6
        p Nivel 2
      .card-nivel-2.col-6
        p Técnicos que tienen más experiencia y conocimientos sobre un producto o servicio concreto.

    .mb-5.container-card-niveles.col-12.col-xl-6.ms-auto(style="z-index: 1; color: #8A8AF9" data-aos="fade-right")
      .card-nivel-1.col-6
        p Nivel 3
      .card-nivel-2.col-6
        p El nivel más alto de apoyo en un modelo de soporte técnico, responsable de manejar los problemas más difíciles o avanzados.

    .container-text-arrow.pe-0
      img(src="@/assets/curso/introduccion/arrow-text.svg").me-4(style="transform: rotate(-180deg)")
      p.d-block Cuando se produce una incidencia relacionada con Tecnologías de la Información,  se sigue un proceso que comienza con el acceso de la incidencia, que lleva a un registro y categorización de la misma. Después, se hace un diagnóstico, que conlleva la solución y cierre de la incidencia.

    .container-text-arrow.pe-0.mb-3
      p.d-block Una vez que se genera una incidencia, se traslada a un técnico, de acuerdo con el tipo o nivel de incidencia en el caso concreto, y se asigna de manera directa; dicho técnico diagnostica el problema, identificando la causa que lo genera, y trata de resolverlo. En caso de conseguirlo, se cierra la incidencia como solucionada. Si el problema no se puede solucionar, se pasa al siguiente grado de soporte, para que se encargue de esa incidencia, contando con la información aportada por el grado inferior.
      img(src="@/assets/curso/introduccion/arrow-text.svg").ms-4.me-auto(style="filter: invert(23%) sepia(83%) saturate(4852%) hue-rotate(222deg) brightness(101%) contrast(106%);").me-auto
    Separador

    // Tema 2.2
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2. Almacenamiento de la información
      
    .cajon-b.color-primario.p-3.mb-5.cajon-b-left
      p.mb-0 El almacenamiento de datos se refiere al uso de medios de grabación para conservar los datos, mediante ordenadores u otros dispositivos. Las formas más frecuentes de almacenamiento de datos son el almacenamiento de archivos, el almacenamiento de bloques y el almacenamiento de objetos, siendo cada uno de ellos ideal para diferentes fines.

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-tarjeta-flip_t_2-1.png')})`}" style="background-size: contain; background-repeat: no-repeat; background-color: #719DFF")
            .tarjeta-flip__contenido.p-4.flex-wrap(style="background-color: #719DFF;")
              h4.my-4 Almacenamiento en carpetas 
              p(style="color: black") Los datos que son  de construcción básica se almacenan en archivos y carpetas. Por lo general, se encuentran en los discos duros y significa que los archivos tienen exactamente el mismo aspecto  del disco duro  para el usuario.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-tarjeta-flip_t_2-2.png')})`}" style="background-size: contain; background-repeat: no-repeat; background-color: #76C2FF")
            .tarjeta-flip__contenido.p-4.flex-wrap(style="background-color: #9ACDF6")
              h4.my-4 Almacenamiento en bloques
              p(style="color: black") Los datos se almacenan en bloques de tamaño uniforme. Aunque es más caro, complejo y menos escalable, el almacenamiento en bloques es ideal para los datos a los que hay que acceder y editar con frecuencia.
        
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img-tarjeta-flip_t_2-3.png')})`}" style="background-size: contain; background-repeat: no-repeat; background-color: #8BACF5")
            .tarjeta-flip__contenido.p-4.flex-wrap(style="background-color: #8BACF5;")
              h4.my-4 Almacenamiento de objetos
              p(style="color: black") Los datos se almacenan como objetos, con metadatos e identificadores únicos. Aunque generalmente es menos costoso almacenar los datos de esta manera, el almacenamiento de objetos solo es ideal para los datos que no necesitan ser editados.

    .cajon-b.color-primario.p-3.mb-5.cajon-b-right
      p.mb-0 En términos sencillos, los ordenadores modernos, o terminales, se conectan a dispositivos de almacenamiento directamente o a través de una red. Los usuarios dan instrucciones a los ordenadores para que accedan a los datos desde estos dispositivos de almacenamiento y los almacenen en ellos. Sin embargo, en un nivel fundamental, hay dos bases para el almacenamiento de datos: la forma que adoptan los datos y los dispositivos en los que se registran y almacenan.

    .col-12.col-md-9.mx-auto
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/imagen_t_2-2.png')})`}"
        )
        .d-flex.flex-wrap.justify-content-end
          .bloque-texto-g__texto.py-4.py-md-5.px-3.px-md-5
            p.mb-0(data-aos="fade-up") Las tecnologías utilizadas para almacenamiento están en permanente cambio;  la mejor elección es la que obedezca a las necesidades, además de ser productiva, con posibilidades de proyecciones de ampliación y escalabilidad.
</template>

<script>
export default {
  name: 'Tema2',
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
.container-card-niveles
  position: relative
  display: flex
  margin-bottom: .5rem
  box-shadow: -10px 50px 20px -30px rgba(0,0,0,0.1)
  &::after
    content: ''
    position: absolute
    left: -12px
    top: 50%
    transform: translateY(-50%)
    border-left: 24px solid
    border-top: 17px solid transparent
    border-bottom: 17px solid transparent
  &::before
    content: ''
    position: absolute
    left: 0px
    top: 50%
    height: 30px
    width: 30px
    box-shadow: inset 2px 2px 2px 0px rgba(112, 111, 111, 0.3)
    transform: translateY(-50%) rotate(135deg)
  .card-nivel-1
    min-height: 226px
    display: flex
    align-items: center
    justify-content: center
    p
      font-size: 30px
      font-weight: bold
      margin-bottom: 0
      color: inherit
  .card-nivel-2
    background-color: #F5F7E8
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    padding-right: 2rem
    padding-left: 2rem
    text-align: center
.cajon-b.color-primario
  &::before
    height: 100%
@media (max-width: 768px)
  .container-card-niveles
    &::after
      left: -12px
    &::before
      12px
.texto_t_2
  background-color: white
  margin-top: 3rem
  margin-left: -3rem
  margin-bottom: 0
  padding-right: 4rem
  padding-top: 1rem
  @media (max-width: 768px)
    margin-left: 0
    padding: 1rem
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
    align-items: flex-start
    img
      margin-top: 3rem
      max-width: 35px
      max-height: 62px
      min-height: 62px
  br
    display: none
.cajon-b-left
  &::before
    height: 50% !important
    background-color: #d7e2fa !important
.cajon-b-right
  &::before
    height: 50% !important
    background-color: #d7e2fa !important
    left: 60%
    right: 0
    top: 50%
</style>
