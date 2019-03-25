<template>
    <div>
        <div class="card tarjeta">
            <router-link v-bind:to="artistURI"><img v-bind:src="artistImage" class="card-img-top artistImage" alt="Artist's Image"></router-link>
            <div class="card-body cuerpoTarjeta">
                <div class="leftContent">
                    <h5 class="card-title artistName">{{ artistName }}</h5>
                    <span class="card-text artistGenres">{{ genresToString() }}</span>
                </div>
                <div class="rightContent">
                    <router-link v-bind:to="hireURI" class="btn btn-primary hireButton"><span class="hireText">HIRE</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArtistCard",
    props: {
        artistURI: {
            type: String,
            default: 'showPortfolio'
        },
        artistImage: {
            type: String,
            default: 'https://img.europapress.es/fotoweb/fotonoticia_20181107115306_1920.jpg',
        },
        artistName: {
            type: String,
            default: 'ROSALÍA'
        },
        artistGenres: {
            type: Array,
            default: ['Pop', 'Flamenco']
        },
        hireURI: {
            type: String,
            default: 'hiringType'
        } 
    },

    methods: {
        genresToString() {

            var res = "";
            var i = 0;

            for (i = 0; i < this.artistGenres.length; i++) { 
                if (i != this.artistGenres.length - 1) {
                    res += this.artistGenres[i] + ", ";
                } else {
                    res += this.artistGenres[i];
                }
            }

            return res;
        }
    }
}
</script>

<style scoped>
    * {
        font-family: "Archivo"
    }

    .tarjeta {
        max-width: 350px;
        width: 100%;
        margin: 0 auto !important;
        border-radius: 20px;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    }

    .artistImage {
        object-fit: cover;
        height: 20rem;
        width: 100%;

        border-radius: 20px 20px 0px 0px;
    }

    .cuerpoTarjeta {
        display: flex;
        align-items: center; 
    }

    .leftContent {
        float: left;
        text-align: left;
        width: 65%;
    }

    .artistName {
        font-weight: bold;
        font-size: 2rem;
    }

    .artistGenres {
        color: #187FE6;
        font-size: 18px;
    }

    .rightContent {
        float: right;
        text-align: center;
        padding-left: 20px;
    }

    .hireButton {
        font-size: 24px;
        font-weight:bold;
        
        border: none;
        border-radius: 30px;

        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .hireButton:hover{
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

    .hireText {
        padding: 0px 10px 0px 10px;
    }

</style>
