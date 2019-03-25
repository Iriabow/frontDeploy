<template>
    <div>
    <nav class="navbar-light bg-light">
      <div class="container-fluid limit-max">
        <div class="row">
          <div v-for="tab in tabs" :key="tab.id" class="col-4">
            <button :id="tab.id" @click="selectTab" class="btn center-block" type="submit">
                <i :id="tab.id" :class="{ 'selected-button-icon' : tab.id == selected}" class="material-icons align-middle">{{tab.icon}}</i>
                <p :id="tab.id" :class="{ 'selected-button-text' : tab.id == selected}" class="button-text">{{tab.text}}</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>

export default {
    name: 'TabbedSubMenu',
    data: function(){
      return{
          tabs: [
            {id: 0, text:"Pending", link:"#", icon:"query_builder"},
            {id: 1, text:"Accepted", link:"#", icon:"check_circle"},
            {id: 2, text:"Rejected", link:"#", icon:"cancel"}
          ],
          selected: 0,
      }
    },
    methods: {
        selectTab: function(event) {
          var index = event.target.id;
          this.selected = index;
        }
      }
}
</script>

<style scoped>

  .limit-max{
    max-width: 1000px;
  }

  .font {
    font-family: "Archivo"
  }

  nav{
    height:75px;
    border-top: black;
    border: black !important;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  button{
    width: 100%; 
    padding-left:0px; 
    padding-right:0px;
  }

  .selected-button-icon{
    background-image: linear-gradient(to right, #00fb82, #187fe6); 
    background-clip: text;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
  }

  .selected-button-text{
    font-weight: bold;
  }

  .button-text{
    margin: 0px; 
  }


</style>


