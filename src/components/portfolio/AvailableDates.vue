<template>
    <div> 
        <h2 class="availableDates"><strong>Available dates</strong></h2>  
    <div class="contentCalendar">
        
        <div><vuejs-datepicker :disabledDates="disabledDates" :value="currentDate" :full-month-name="true" :inline="true"></vuejs-datepicker></div>
        <!--<div class="contentForm"> 
            <form class="form-inline formulario">
                <div class="form-group mb-2">
                    <input class="form-control inputFecha" type="text" id="inputFecha" placeholder="YYYY-MM-DD">
                </div>
                <button class="btn btn-primary mb-2" v-on:click="addRejectedDate">ADD</button>
            </form>
        </div>-->
    </div>
    </div>
</template>

<script>



var yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);

var rejectedDates = [];




export default {
    name: "Calendar",
    props: {
    },
    components: {
        vuejsDatepicker
    },
    data () {
        return {
            currentDate: new Date(),
            disabledDates: {
                to: yesterday,
                dates: rejectedDates
            }
        }
    },

    methods: {
        addRejectedDate: function (event) {
            alert("HOLA!!");

            var fecha = document.getElementById("inputFecha").value;
            alert(fecha);
            var fecha2 = new Date(fecha);

            alert(fecha2);
            rejectedDates.push(fecha2);
        }
  }
}
</script>

<style>

    .contentForm{
        margin: 0 auto !important;
    }

    .form-inline .formulario{
        margin: 0 auto !important;
    }

    .vdp-datepicker__calendar {
        width: 100%;
        border: 0px;
        margin-top: 10px;
    }

    .contentCalendar{
        width: 100%;
        margin: 0 auto !important;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;

    }

    .availableDates{
        text-align: left;
        margin-left: 20px;
        font-weight: semibold;
    }

    @media (min-width: 768px){
        .vdp-datepicker__calendar {
            width: 100%;
            border: 0px;
            margin-top: 10px;
            margin: 0 auto !important;
        }

        .availableDates{
            text-align: center;
            margin-bottom: 20px;
            font-weight: semibold;
        }

        .contentCalendar{
            width: 30%;
            
            margin: 0 auto !important;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, .5);

        }
    }

    
    .vdp-datepicker__calendar header span {
        font-weight: bold;
    }
    .vdp-datepicker__calendar .cell.day-header {
        color: #187FE6;
        font-weight: bold;
    }
    .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
        border: none !important;
    }
    .vdp-datepicker__calendar .cell.selected {
        background-image: linear-gradient(to right, #00fb82, #187fe6);
        
        border: none;
        border-radius: 30px;
        color: #ffffff;
    }
    .vdp-datepicker__calendar .cell.selected:hover {
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    
</style>

<style scoped>
    * {
        color: #000000;
    }
</style>