<template>
  <div class="col">
    <div class="image">
      <img class="tunimentti" src="/img/tunimentti.png">
    </div>
    <h1 class="title">Tunimentin huutokauppa</h1>
    <div class="description">
      <p>
        Korkeakoulutettujenyhteisö on päätynyt huutokauppaamaan tunimentin päästösyistä. Tarjoukset Tunimentista otetaan vastaan sähköpostilla osoitteeseen <strong>tarjoukset@tunimentti.com</strong> tai alta löytyvään julkiseen chattiin.
      </p>
      <div>
        <strong>Mitat:</strong>
        <li>
          leveys <strong>1,5m</strong>
        </li>
        <li>
          syvyys: <strong>0,40m</strong>
        </li>
        <li>
          Korkeus: <strong>13,5m</strong>
        </li>
      </div>
      <p>
        Tiedämme Tunimentin olevan suuri nähtävyys, mutta vaikka Tunimentti on kaupan, korkeakoulutettujenyhteisö pyytää kaikkia kohtelemaan sitä arvokkaasti ja annetaan sen olla rauhassa sen nykyisessä kotipaikassa.
      </p>
      <p>
        Otamme tarjouksia vastaan <strong>8.9.2021 23:59</strong> saakka.
      </p>
      <p>
        Tarjousajan päätyttyä Tampereen korkeakouluyhteisön täytyy hyväksyä hinta ja antaa lupa myynnille. Pidämme oikeudet olla myymättä tuotetta jos tarjous ei ole riittävä.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import productDescription from '../productDescription'

export default defineComponent({
  name: 'TunimenttiInfo',
  setup() {
    return { productDescription }
  }
})
</script>

<style scoped>
  .col {
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
  .title {
    margin-top: 0;
  }
  .description {
    white-space: pre-line;
  }
  .image {
    display: flex;
    justify-content: center;
  }
  .tunimentti {
    height: 700px;
    top: 120px;
    opacity: 0.14;
    position: absolute;
    transform-origin: center;
    animation: bigtuni 2s;
  }
</style>
