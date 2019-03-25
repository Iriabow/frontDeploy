<template>
    <div class="everything">
        <div class="tarjeta">
            <ul class="list-group list-group-flush"><li class="list-group-item">Offer #{{ offerID }}</li></ul>
            <div class="card-body cuerpoTarjeta">
                <div class="confirmation"><img class="tick" src="@/assets/img/approved_tick.png"/>
                    <p class="price">{{sentText}}</p>
                </div>      
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'AcceptedOffer',
        
        props: {
            offerID: {
                type: Number,
                default: 1
            },
            sentText: {
                type: String,
                default: 'You have accepted the offer'
            },
        },
    }   

</script>

<style scoped>
    * {
        font-family: "Archivo"
    }

    .tick{
        margin-top: 10px;
        width: 140px;
        margin-bottom: 20px;
    }
    .price {
        font-size: 35px;
        margin-bottom: 0px;
        color: #187FE6;
    }
    .tarjeta {
        width: auto;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
        margin-left: 2.5%;
        margin-right: 2.5%;
        margin-top: 2em;
        border-radius: 10px;
        padding-top: 10px
    }

    .list-group-item {
        font-size: 36px;
        text-align: center;
    }

    @media (min-width:768px)  {

        .tarjeta {
            min-width: 335px;
            width: 25%;
            box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
            margin-left: 2.5%;
            margin-right: 2.5%;
            margin-top: 2em;
            border-radius: 10px;
        }
      
        .everything {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 15px;
            margin-left: 10%;
            margin-right: 10%;

        }
    }

</style>
