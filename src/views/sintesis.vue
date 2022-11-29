<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

        
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.pt-5
        .tarjeta.position-relative.bg1.p-4.mb-5(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3
              .imagen-absolute
                img(data-aos="zoom-in")(src='@/assets/curso/portada/imgsint.svg', alt='')
            .col-lg-11
              p(data-aos="fade-down").mb-0.ps-5 En la siguiente síntesis, se comparte el proceso productivo del cacao, las fases y cada uno de los aspectos que lo integran, además de los resultados y principales atributos que allí se tienen presentes. 
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
