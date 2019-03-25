<template>
    <div>
        <div><vuejs-datepicker v-model="model.date" :disabledDates="disabledFn" :full-month-name="true" :inline="true"></vuejs-datepicker></div>
    </div>
</template>

<script>
export default {
    name: "Calendar",
    props: {
    },
    components: {
        vuejsDatepicker
    },
    data () {
        return {
            model: {
                date: ""
            },
            disabledFn: {
                customPredictor (date) {
                    if (date.getTime() <= new Date(Date.now() - 8640000)) {
                        return true;
                    }

                    if (date.getDate() % 7 === 0) {
                        return true;
                    }
                }
            },
        }
    },
}
</script>

<style>

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

