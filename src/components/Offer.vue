<template>
    <div class="everything">
        <div class="card tarjeta">
            <div class="container-fluid">
                <div class="row" style="padding-top: 10px">
                    <div class="col-8 texto-izq"> 
                        <span class="card-title"><strong>Offer #{{ offerID }} - {{price}}€</strong></span>
                    </div>
                    <div class="col-4 texto-dcha">
                        <i class="material-icons align-middle" style="font-family: 'Material Icons'">date_range</i>
                        <span>Date</span>
                    </div>
                </div>
                <div class="row subtitle">
                    <div class="col-6 texto-izq"> 
                        <p> In {{place}}</p>
                    </div>
                    <div class="col-6 texto-dcha">
                        <p>{{date}}</p>
                    </div>
                </div>
                <div class="row botonera">
                <div class="rejectButtonDiv"><router-link v-bind:to="rejectURI" class="btn btn-primary rejectButton"><span class="continueText">REJECT</span></router-link></div>
                <div class="confirmButtonDiv"><router-link v-bind:to="confirmURI" class="btn btn-primary confirmButton"><span class="continueText">ACCEPT</span></router-link></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Offer',
        
        props: {
            offerID: {
                type: Number,
                default: 3
            },
            date: {
                type: String,
                default: 'March 19, 2019',
            },
            price: {
                type: Number,
                default: 61.00
            },
            place: {
                type: String,
                default: 'Pontevedra',
            },
            rejectURI: {
                type: String,
                default: '#'
            },
            confirmURI: {
                type: String,
                default: '#'
            }
        },
    }   

</script>

<style scoped>
    * {
        font-family: "Archivo"
    }

    .botonera{
        padding-left: 10px; 
        padding-bottom:10px
    }

    .subtitle{
        color: #187FE6;
    }
    .texto-izq{
        text-align:left;
    }

    .texto-dcha{
        text-align:right;
    }

    .card-title{
        font-size: 1.25rem;
    }

    .tarjeta {
        width: 100%;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    }
    
    .leftContent {
        text-align: left;
    }

    .rejectButtonDiv, .confirmButtonDiv {
        padding: 5px;
    }

    .bothButtons {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
    }

    .confirmButton, .rejectButton {
        font-size: 21px;
        font-weight:bold;
        
        border: none;
        border-radius: 30px;
    }

    .confirmButton {
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .rejectButton {        
        background-image: linear-gradient(to right, #FB8600, #FF0000);
    }

    .confirmButton:hover {
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

    .rejectButton:hover {
        background-image: linear-gradient(to right, #ED7F00, #A20101) !important;
    }

    @media (min-width:768px)  {

        .tarjeta {
            min-width: 335px;
            box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
        }
      
    }

    .everything {
        margin: 0 auto;
    }

</style>
