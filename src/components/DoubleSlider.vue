<template>
    <div>
        <input type="text" class="js-range-slider" value="" data-type="double"/>
    </div>
</template>

<script>

export default {
    name: "DoubleSlider",

    mounted: function() {
       $(".js-range-slider").ionRangeSlider({
        type: "double",
        skin: "round",
        values: ["00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30",
                 "06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
                 "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
                 "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"]
        });

    },
}

</script>

<style>

    .irs--round .irs-from, .irs--round .irs-to, .irs--round .irs-single {
        background-color: #ffffff;
        color: #187fe6;
        font-weight: bold;
    }

    .irs--round .irs-from:before, .irs--round .irs-to:before, .irs--round .irs-single:before {
        border-top-color: white;
    }

    .irs-handle.from {
        border: 4px solid #00fb82;
    }

    .irs-handle.to {
        border: 4px solid #187fe6;
    }

    .irs--round .irs-bar {
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

</style>

<style scoped>
    * {
        font-family: "Archivo";
    }
</style>

