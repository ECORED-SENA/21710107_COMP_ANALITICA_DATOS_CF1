<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-primario
      .titulo-principal__numero
        span 4
      h1 Procedimiento documental 

    .col-12.mx-auto.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.container-bloque-texto_t_4-1
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-1.png')})`}"
          style="background-position-x: inherit; width: 433px"
          data-aos="fade-right"
        )
        .d-flex.flex-wrap.justify-content-end
          .bloque-texto-g__texto.py-4.py-md-5.px-3.px-md-5
            p.mb-0(data-aos="fade-left") La gestión de documentos es el proceso de manejar los documentos de tal manera que la información pueda ser creada, compartida, organizada y almacenada, de manera eficiente y apropiada. Por ello, aprender a crear un sistema de gestión de documentos es fundamental para las empresas.
    
    .col-12.mx-auto.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.ps-md-0.container-bloque-texto_t_4-2
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img_t_4-2.png')})`}"
          style="background-position-x: inherit; width: 433px; left: auto; right: 0"
          data-aos="fade-left"
        )
        .d-flex.flex-wrap.justify-content-start
          .bloque-texto-g__texto.py-4.py-md-5.px-3.px-md-5
            p.mb-0(data-aos="fade-right") Muchas empresas manejan información de alto riesgo, que debe mantenerse segura y privada, o a la que se debe acceder rápidamente. En estos casos, un sistema de gestión de documentos que funcione bien es esencial. Pero incluso si su negocio es de naturaleza más informal, sigue siendo importante mantener registros adecuados para la contabilidad y en aras de la eficiencia.

    .cajon-b.color-primario.color-bg-text.col-12.col-md-11.mx-auto(data-aos="fade-right")
      p En la actualidad, la mayoría de las empresas trabajan cómodamente con documentos digitales y utilizan programas con funciones de almacenamiento y gestión. No faltan programas de gestión de documentos generales y específicos del sector ni aplicaciones diseñadas específicamente para mejorar la gestión de los archivos electrónicos de su empresa.  Por ejemplo, es posible que los hoteles sigan teniendo un registro tipo libro en el momento del <em>check-in</em> y que sigan pidiendo una firma en una ficha de tarjeta de crédito en papel.
        br
        br
        | Las opciones de pago como pagos seguros en línea  PSE y transferencia se utilizan cada vez más en el sector de producción y de servicios, eliminando también la necesidad de llevar la contabilidad en papel.
        br
        br
        | Sin embargo, muchas empresas tienen que lidiar con una mezcla de datos anticuados en papel y archivos electrónicos, y, en algunos casos, la proporción de datos en papel es mucho mayor.

    .d-flex.flex-wrap.mb-5.col-12.col-md-11.mx-auto
      .col-12.col-md-3.d-flex.align-items-center
        div
          img(src="@/assets/curso/tema4/img_t_4-3.png" data-aos="fade-right")
      .col-12.col-md-9.container-text-bloque-b.h-auto
        .cajon-b.color-primario.color-bg-text(data-aos="fade-left")
          p.ps-0.ps-md-4 Una solución al problema de un entorno de datos mixtos sería utilizar un sistema de digitalización de documentos para convertir todos los documentos de su empresa en archivos electrónicos. Dependiendo del tipo de datos y documentos con los que se trabaje, esto podría ser un proceso relativamente sencillo o podría implicar cierta creatividad y enfoques especializados.
            br
            br
            | Por ejemplo, un almacén a pequeña escala, que gestiona recibos e inventarios, puede convertir los documentos en papel en hojas de cálculo digitales, con algo de trabajo adicional de introducción de datos. En cambio, un consultorio odontológico, que mantiene registros de la salud de los pacientes, la facturación, las radiografías, etc., probablemente necesitará un método más sólido para convertir sus numerosos archivos en papel a formatos digitales, como la contratación de un servicio de escaneo de documentos apropiado para la empresa o la compra de un <em>software</em> de escaneo capaz de transferir imágenes de alta resolución.

    // Tema 4.1
    .titulo-segundo.color-primario
      h2#t_4_1 4.1. Proceso documental

    p.mb-5(data-aos="fade-up") Tanto si se trabaja con un entorno exclusivamente digital como en un entorno híbrido, con documentos digitales y en papel, la creación de un sistema de gestión de documentos implica tres pasos:

    img(src="@/assets/curso/tema4/img_t_4-8.svg" data-aos="zoom-in").col-12.mb-5
    p.mb-5 Cada uno de estos pasos se describen a continuación:
    
    .col-md-11.mx-auto
      LineaTiempoD.color-primario
        .row(numero="1" titulo="Crear un plan de gestión de documentos.")
          .col-md-7.mb-4.mb-md-0
            p.text-small Facturas, cartas de recordatorio de pago, folletos de ventas, correo electrónico, balances, hojas de cálculo, informes... Todas las empresas crean una gran variedad de documentos en el transcurso de su actividad y de su seguimiento. Y, para mantener las cosas organizadas, todas las empresas necesitan establecer reglas para crear documentos.
              br
              br
              | ¿Existen plantillas internas para algunos de sus documentos empresariales, como cartas o facturas? ¿Dónde se encuentran?
              | ¿Existe una guía de estilo interna que deba seguirse?
              | ¿Deben fecharse o sellarse los nuevos documentos?
              | ¿Qué procedimientos deben seguirse para compartir o revisar los documentos?
              br
              br
              | Para algunas pequeñas empresas, los únicos puntos importantes serán dónde se encuentran las plantillas de los distintos documentos empresariales y cómo utilizarlas. Pero si la creación de documentos dentro de su empresa implica que diferentes personas colaboren en ellos, los revisen o los actualicen, tendrá que dedicar algún tiempo a decidir cómo deben hacerse estos elementos, para garantizar la eficiencia y la coherencia.
              br
              br
              | TIP: Google Docs es un estándar del sector para los proyectos de colaboración, ya que ofrece varias opciones para controlar los permisos, ver las ediciones y compartir un mismo documento entre varias personas, con controles de seguridad.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/img-1.png')

        .row(numero="2" titulo="Poner en marcha el plan de gestión documental.")
          .col-md-7.mb-4.mb-md-0
            p.text-small Una vez que haya creado su plan de gestión de documentos, respondiendo a las preguntas anteriores, estará listo para ponerlo en práctica. Asegúrese de que todo el personal conoce los detalles del sistema de gestión de documentos de su empresa y de que todo el mundo sigue los procedimientos adecuados a la hora de crear, almacenar y recuperar documentos.
              br
              br
              | También tendrá que asegurarse de que todas las personas que acceden a los documentos y los utilizan dentro de su organización sigan el procedimiento de nombrar y almacenar los documentos de forma adecuada.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/img-2.png')
        .row(numero="2" titulo="Realizar un seguimiento.")
          .col-md-7.mb-4.mb-md-0
            p.text-small Compruebe periódicamente que determinados archivos pueden encontrarse fácilmente y evite que se archiven de forma incorrecta. Incluso, un descuido ocasional puede echar a perder todo el sistema.
              br
              br
              | Por último, un proceso documental en un sistema de administración gana interés una vez que, al implementarse una herramienta tecnológica usada en procesos logísticos, como Enterprise Resource Planning (planificación de recursos empresariales, ERP),  posibilita vincular los datos y registros con documentos, perfeccionando la estabilidad de ingreso, y desde luego, con la probabilidad de su uso de manera remota, en tiempo real,  sobre toda su información y en cualquier instante.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/img-3.png')
    
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
.container-bloque-texto_t_4-1
  background-color: transparent !important
  .bloque-texto-g__texto
    background-color: #DEDEDE !important
    width: 70%
    position: relative
    &::before
      content: ''
      position: absolute
      top: -14px
      right: 0
      height: 14px
      width: 417px
      background-color: #7F0F98
    &::after
      content: ''
      position: absolute
      bottom: -14px
      right: 0
      height: 14px
      width: 278px
      background-color: #7F0F98
.container-bloque-texto_t_4-2
    background-color: #B1C6F6 !important
    .bloque-texto-g__texto
      width: 80%
      padding-left: 107px !important
      padding-right: 307px !important
.container-text-bloque-b
  .cajon-b
    &::before
      top: 60%
      left: 45%
      right: 0
      bottom: 0
.cajon.color-primario::before
  background-color: white
@media (max-width: 1200px)
  .container-bloque-texto_t_4-1
    .bloque-texto-g__img
      width: 100% !important
    .bloque-texto-g__texto
      width: 100% !important
      padding-left: 3rem !important
      padding-right: 3rem !important
  .container-bloque-texto_t_4-2
    background-color: #B1C6F6 !important
    padding-left: 3rem !important
    .bloque-texto-g__img
      width: 100% !important
    .bloque-texto-g__texto
      width: 100% !important
      padding-left: 3rem !important
      padding-right: 3rem !important
@media (max-width: 768px)
  .container-bloque-texto_t_4-1
    .bloque-texto-g__texto
      width: 100% !important
      &::before
        display: none
        content: ''
        position: absolute
        top: -14px
        right: 0
        height: 14px
        width: 417px
        background-color: #7F0F98
      &::after
        display: none
        content: ''
        position: absolute
        bottom: -14px
        right: 0
        height: 14px
        width: 278px
        background-color: #7F0F98
  .container-bloque-texto_t_4-2
    padding-left: 1rem !important
.color-bg-text
  &::before
    height: auto !important
</style>
