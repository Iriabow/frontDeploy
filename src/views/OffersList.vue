<template>
  <div>
    <hr />
    <TabbedSubMenu />
    <div class="container-fluid" style="padding-top: 20px">
      <div class="container">
          <div id="results" class="col-12 col-lg-9 col-xl-10 results">
            <div class="row">
              <div v-for="oferta in datos_prueba" :key="oferta.offerID" class="tarjeta col-12 col-md-6 col-xl-6">
                <Offer :offerID="oferta.offerID" :confirmURI="oferta.confirmURI" :date="oferta.date" :price="oferta.price" :place="oferta.place" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import Offer from '@/components/Offer.vue';
import TabbedSubMenu from '@/components/menus/TabbedSubMenu.vue';

export default {
  name: 'OffersList',
  components: {
    Offer,
    TabbedSubMenu
  },

  data: function(){
    return {

        datos_prueba:[
          {
            offerID:  1, 
            date: 'January 1, 2019',
            price: 95.00,
            place: 'LPGC',
            confirmURI: 'offerDetails'
          },
          {
            offerID: 3, 
            date: 'February 19, 2019',
            price: 38.00,
            place: 'La Orotava',
            confirmURI: 'offerDetails'
          },
          {
            offerID: 5, 
            date: 'June 28, 2019',
            price: 120.00,
            place: 'Tacoronte',
            confirmURI: 'offerDetails'
          },
        ], 
      }
    },
    methods: {
      toggleFilterSelectionModal: function (){
        this.showFilterSelectionModal = !this.showFilterSelectionModal;
      },
      updateFilters: function() {
        var selected = Array();

        for(var i = 0; i < arguments[0].length; i++){
          selected.push(arguments[0][i]);
        }

        for(var j = 0; j < this.filter_parameters.length; j++){
          if(selected.includes(this.filter_parameters[j].id)){
            this.filter_parameters[j].selected = true;
          }
        }
      }
    }
}
</script>

<style scoped>

    .results{
      margin: 0 auto; 
      padding: 0px;
    }    

    .tarjeta{
      padding-bottom: 20px;
    }

    hr {
      margin: 0px;
    }

</style>

