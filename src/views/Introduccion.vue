<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 Para dar comienzo al desarrollo de este componente formativo, se comparten algunos elementos que permiten adentrarse en las temáticas principales en la siguiente infografía:
    ImagenInfografica.color-primario
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/introduccion/img-introduccion.png', alt='elementos del componente formativo')

      .tarjeta.color-primario.p-3(x="2.2%" y="27%" numero="1")
        p Con el paso del tiempo, el ser humano ha visto la necesidad de desarrollar diferentes mecanismos de almacenamiento, debido al crecimiento de la cantidad de datos originados y a los diferentes desafíos que emergen de la administración de la información.

      .tarjeta.color-primario.p-3(x="21%" y="10%" numero="2")
        p Desde la antigüedad, la información se almacenaba. Los sumerios usaban tablillas de arcilla para este proceso o actividad, ubicándose este como un primer sistema de almacenamiento.

      .tarjeta.color-primario.p-3(x="71.3%" y="8%" numero="3")
        p En la era digital, el almacenamiento de datos nace hacia mediados del siglo XX, con la invención de los computadores y las unidades de discos duros (HDD).

      .tarjeta.color-primario.p-3(x="6.5%" y="90.5%" numero="4")
        p Estos sistemas para datos digitales han cambiado nuestra forma de guardar, tomando en cuenta la necesidad de más capacidad de espacio, rapidez y velocidad en los dispositivos de ingreso y salida para entrar y consultar la información.

      .tarjeta.color-primario.p-3(x="36.5%" y="90%" numero="5")
        p De esta manera, a través de la evolución de la tecnología, se han logrado suplir las necesidades requeridas de almacenamiento. De allí, nos encontramos en una fase de arduo trabajo, donde es más sencillo crear datos que guardarlos y administrarlos. Para optimizar los beneficios, es necesario establecer una relación de asociación de los procesos que participan en la logística.

      .tarjeta.color-primario.p-3(x="82%" y="90%" numero="6")
        p La integración de la analítica de datos se presenta como un enfoque adecuado para aprovechar la forma en que una empresa que trabaja en esta área es capaz de mejorar la eficiencia y la eficacia de todos sus procesos.

    .container-text-arrow.pe-0.pe-md-5.pt-5
      p.pe-0.pe-md-4.d-block Para la elaboración de este componente, se abordaron varios autores conocidos en análisis y clasificación de la información, de quienes se han <br>
        | citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo <br>
        | tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en <br>
        | general, que estén interesados en acercarse a asuntos básicos de analítica de datos de procesos logísticos.
      img(src="@/assets/curso/introduccion/arrow-text.svg").ms-4

    .container-text-arrow.pe-0.pe-md-5
      img(src="@/assets/curso/introduccion/arrow-text.svg").ms-auto.me-4(style="transform: rotate(-180deg)")
      p.ps-0.ps-ms-4.d-block En este componente formativo, se presenta información sobre los conceptos, la información, los registros y los soportes, con base en los <br>
        | procesos logísticos, clasificación e interpretación  de datos,  herramientas tecnológicas y almacenamiento de la información. Observe el <br>
        | siguiente video que ilustra de manera abierta lo que representa la analítica de datos en la vida cotidiana. 
    
    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-text-arrow
  display: flex
  align-items: center
  margin-bottom: 3rem
  img
    max-width: 55px
    max-height: 62px
    min-height: 62px
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
