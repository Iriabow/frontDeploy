<template>
    <div class="container tarjeta">
        <div class="contenido">
            <div id="titulo">
                <strong>
                    <h3>{{ title }}</h3>
                </strong>
            </div>
            <hr />
            <div v-for="item in filters_data" :key="item.id" class="row filter-item">
                <div class="col vertical-center">
                    <span>{{item.text}}</span>
                </div>
                <div class="col right-alignment">
                    <label class="switch" style="margin:0px;">
                        <input :id="item.id" type="checkbox" :checked="item.selected ? true : false" @change="onFiltersChange($event)">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <hr />
            <span>Other Options</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'FiltersSideMenu',
    props:{
        filters_data: Array
    },
    data: function(){
        return{
            title: "Filter by",
        }
    },
    methods:{
        onFiltersChange: function (event){
            this.$props.filters_data[event.target.id].selected = !this.$props.filters_data[event.target.id].selected;
            var status = Array();

            for(var key in this.$props.filters_data){
                var value = this.$props.filters_data[key];

                if(value.selected){
                    status.push(value.id);
                }
            }

            this.$emit('onFiltersChange', status);
        }
    }
}
</script>

<style scoped>

    .tarjeta{
        border-radius: 10px;
        background-color: rgb(246, 247, 248); 
        text-align: left; 
        max-width:300px;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, .2);
    }

    .contenido{
        padding-top: 10px; 
        padding-bottom: 20px;
    }

    .right-alignment{
        text-align:right
    }

    .filter-item{
        padding-bottom: 10px;
    }

    .vertical-center{
        display: flex; 
        align-items: center;  /*Aligns vertically center */
    }

    /* Switch */
    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 25px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-image: linear-gradient(to right, #00fb82, #187fe6);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

</style>


