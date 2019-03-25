<template>
    <div class="content">
    <form>
        <div class="form-row">
            <div class="form-group col-12">
                <input :value="location" type="text" class="form-control" placeholder="Location">
            </div>  
        </div>
        <div class="form-row">
            <div class="form-group col-12">
                <input :value="zipcode" type="text" class="form-control" placeholder="Zip code">
            </div>  
        </div>
        <div class="form-row">
            <div class="form-group col-12">
                <input :value="street" type="text" class="form-control" placeholder="Street">
            </div>  
        </div>
        <div class="continueButtonDiv"><router-link v-bind:to="continueURI" 
            class="btn btn-primary continueButton"><span class="continueText">CONTINUE</span></router-link></div>

    </form>
    </div>
</template>

<script>
export default {
    name: "addressData",
    props: {
        location: {
            type: String,
            default: 'Sevilla'
        },
        zipcode: {
            type: String,
            default: '41802',
        },
        street: {
            type: String,
            default: 'C/ Reina Mercedes, 10'
        },
        continueURI: {
            type: String,
            default: 'eventInput'
        } 
    },
    components: {
    },
}
</script>

<style scoped>
    
    input:hover{
        border-color: #187fe6;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .3) !important;
    }

    select:hover{
        border-color: #187fe6;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .5) !important;
    }

    input:focus{
        border-color: #00fb82;
        font-weight: semibold;
        color:black;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        
    }

    select:focus{
        border-color: #00fb82;
        font-weight: semibold;
        color:black;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        
    }

    .continueButton {
        font-size: 18px;
        padding-left: 4%;
        padding-right: 4%;
        border: none;
        border-radius: 30px;
        width: fit-content;
        margin-top: 2%;
        font-weight: bold;
    
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    .continueButton:hover{
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .7) !important;
        background-image: linear-gradient(to right, #14Ca9f, #1648d0) !important;
    }

    

    @media (max-width:767px)  {
        .content{
            padding-top: 5%;
            margin-right: 3%;
            margin-left: 3%;
    }
    }

    @media (min-width:768px)  {

        .continueButton{
            
            margin-right: 25%;
            margin-left: 25%;
        }
        
        form{
            margin-top:5px;
            width: 320px;
            margin-right: 4%;
            margin-left: 4%;
            margin-bottom: 0;
        }

        .content{
            margin-left: 3%;
            height: 300px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .3);
            
            
        }

        .entrada{
            width: 5px !important;
        }
    }


</style>
