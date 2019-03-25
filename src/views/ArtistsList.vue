<template>
<div class="container-fluid">
  <div class="container">
    <div class="row">
      <div id="filters_desktop" class="d-none d-lg-inline col-lg-3 col-xl-2">
        <FiltersSideMenu :filters_data="filter_parameters" @onFiltersChange="updateFilters" />
      </div>
      <div id="results" class="col-12 col-lg-9 col-xl-10">
        <div class="row">
          <div v-for="artist in datos_prueba" :key="artist.artistURI" class="tarjeta col-12 col-md-6 col-xl-4">
            <ArtistCard :artistImage="artist.artistImage" :artistName="artist.artistName" />
          </div>
        </div>
      </div>
    </div>
    <div id="floating-button" class="d-lg-none" @click="showFilterSelectionModal = !showFilterSelectionModal">
      <a href="#" class="floating-btn vertical-center">
        <i class="material-icons vertical-center">more_vert</i>
      </a>
    </div>
  </div>
  <FiltersModalMenu :filters_data="filter_parameters" v-if="showFilterSelectionModal" @onFiltersChange="updateFilters" @filterSelectionClose="toggleFilterSelectionModal()"/>
  </div>
</template>

<script>

import FiltersSideMenu from '@/components/menus/FiltersSideMenu.vue';
import FiltersModalMenu from '@/components/menus/FiltersModalMenu.vue';
import ArtistCard from '@/components/ArtistCard.vue';

export default {
  name: 'ArtistList',
  components: {
    ArtistCard,
    FiltersSideMenu,
    FiltersModalMenu
  },

  data: function(){
    return {
        filter_parameters: [
            {id: 0, text: "Genre", selected: false},
            {id: 1, text: "Artist Name", selected: true}
        ],

        datos_prueba:[
          {
            artistURI: '#', 
            artistImage: 'https://img.europapress.es/fotoweb/fotonoticia_20181107115306_1920.jpg',
            artistName: 'ROSALÍA',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          },
          {
            artistURI: '#', 
            artistImage: 'https://4c79id2ej5i11apui01ll2wc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/Charli-XCX-Gallery-1.jpg',
            artistName: 'Charli XCX',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          },
          {
            artistURI: '#', 
            artistImage: 'https://sound-images.s3.amazonaws.com/images/2016/lorde.jpg',
            artistName: 'Lorde',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          },
          {
            artistURI: '#', 
            artistImage: 'https://images.clarin.com/2019/01/15/b970GiEQU_1256x620__1.jpg',
            artistName: 'Shawn Mendes',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          },
          {
            artistURI: '#', 
            artistImage: 'https://abitofpopmusic.files.wordpress.com/2014/10/marina-the-diamonds-froot.jpg?w=560&h=300',
            artistName: 'MARINA',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          },
          {
            artistURI: '#', 
            artistImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lana_Del_Rey_at_KROQ_Weenie_Roast_2017_%28cropped%29.jpg/250px-Lana_Del_Rey_at_KROQ_Weenie_Roast_2017_%28cropped%29.jpg',
            artistName: 'Lana',
            artistGenres: ['Pop', 'Flamenco'],
            hireURI: '#'
          }     
        ], 
        showFilterSelectionModal: false,
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

  .hidden {
    display: none;
  }
  .container-fluid{
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .tarjeta{
    padding-bottom: 20px;
  }

  .floating-btn{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    z-index: 10;
    background-image: linear-gradient(to right, #00fb82, #187fe6);
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
    text-decoration:none;
    
  }

  .floating-btn:hover{
    background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
  }

  .vertical-center{
    display: flex; 
    align-items: center;  /*Aligns vertically center */
    justify-content: center; /*Aligns horizontally center */
  }

</style>

