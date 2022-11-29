<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos intermedios
    .bg2.mb-5.p-5 
      .row.justify-content-center.align-items-center
        .col-lg-12.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 Estos productos son aquellos que son complementarios y que ayudan a cumplir con funciones específicas en el proceso de elaboración. A continuación, se muestran algunos que se pueden obtener y su uso. 
    .bg8
      .row.align-items-center.mb-4.m_left(data-aos="fade-right")
        .col-lg-1.col-2.img01
          img.w-50(src="@/assets/curso/tema1/img19.png")
        .col
          .h4.ms-5.mb-0 <span style="color:#7D5F54">Manteca de cacao </span> 

      .row.justify-content-center.align-items-center.mb-lg-4.mb-3
        .col-lg-6(data-aos="fade-right").mb-3.mb-lg-0
          p.mb-0 Es utilizada en la elaboración de confitería, en productos cosméticos y en la industria farmacéutica.
          p.mb-0 En estado sólido, su olor y sabor son característicos del producto, su color es amarillo claro.
          P.mb-0 La temperatura adecuada en el almacenamiento para que no pierda su contextura es inferior a 36 °C.
        .col-lg-4.col-9.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img2.png") 
        .col-lg-10
          hr
      .row.align-items-center.mb-4.m_left(data-aos="fade-right")
        .col-lg-1.col-2.img01
            img.w-50(src="@/assets/curso/tema1/img19.png")
        .col
            .h4.ms-5.mb-0 <span style="color:#7D5F54">Pulpa de cacao </span>  
      .row.justify-content-center.align-items-center.mb-lg-4.mb-3
        .col-lg-6(data-aos="fade-right").mb-3.mb-lg-0
          p.mb-0 Es utilizada en la producción de bebidas, pueden ser alcohólicas, no alcohólicas o gasificadas
          p.mb-0 Gracias a sus propiedades nutricionales, se dice que ayuda a prevenir enfermedades crónicas y a mejorar el sistema inmunológico.  
        .col-lg-4.col-9.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img3.png") 
        .col-lg-10
          hr
      .row.align-items-center.mb-4.m_left(data-aos="fade-right")
        .col-lg-1.col-2.img01
            img.w-50(src="@/assets/curso/tema1/img19.png")
        .col
            .h4.ms-5.mb-0 <span style="color:#7D5F54">Jugo de cacao </span>  
      .row.justify-content-center.align-items-center.mb-lg-4.mb-3
        .col-lg-6(data-aos="fade-right").mb-3.mb-lg-0
          p.mb-0 Es utilizado en la elaboración de jaleas, compotas y mermeladas. 
          P.mb-0 Se dice que consumir constantemente este jugo, ayuda a la prevención de la diabetes y fortalece la salud del corazón.
        .col-lg-4.col-9.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img4.png") 
        .col-lg-10
          hr
      .row.align-items-center.mb-4.m_left(data-aos="fade-right")
        .col-lg-1.col-2.img01
            img.w-50(src="@/assets/curso/tema1/img19.png")
        .col
            .h4.ms-5.mb-0 <span style="color:#7D5F54">Polvo de cacao  </span>  
      .row.justify-content-center.align-items-center.mb-lg-4.mb-3
        .col-lg-6(data-aos="fade-right").mb-3.mb-lg-0
          p.mb-0 Es utilizado en la producción de bebidas chocolatadas, postres, helados y productos de repostería. 
          P.mb-0 Este producto contiene flavonoides, ayuda a aumentar el flujo sanguíneo, por ende, puede prevenir los coágulos de sangre, además ayuda a evitar la pérdida de la memoria. 
        .col-lg-4.col-9.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img5.png") 
        .col-lg-10
          hr
      .row.align-items-center.mb-4.m_left(data-aos="fade-right")
        .col-lg-1.col-2.img01
            img.w-50(src="@/assets/curso/tema1/img19.png")
        .col
            .h4.ms-5.mb-0 <span style="color:#7D5F54">Pasta o licor de Cacao </span>  
      .row.justify-content-center.align-items-center.mb-lg-4.mb-3
        .col-lg-6(data-aos="fade-right").mb-3.mb-lg-0
          p.mb-0 Es utilizada en la elaboración de chocolate negro, blanco y mixto. 
          P.mb-0 El consumo ayuda a reducir los niveles de estrés en las personas.
        .col-lg-4.col-9.mb-lg-0.mb-4(data-aos="fade-left")
          img(src="@/assets/curso/tema2/img6.png") 
        .col-lg-10
          hr
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

<style lang="sass"></style>
