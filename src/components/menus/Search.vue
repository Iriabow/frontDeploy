<template>
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header vertical-center" id="modalTitle">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-10 col-lg-11">
                        <form class="form-inline my-2 my-lg-0">
                            <input @keypress.enter="search()" v-model="searchQuery" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </div>
                    <div class="col-2 col-lg-1 vertical-center">
                        <button style="width: 100%" class="btn center-block" type="submit" @click="close" aria-label="Close modal">
                            <i class="material-icons align-middle">cancel</i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <section class="modal-body" id="modalDescription">
        </section>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Search',
    data: function() {
        return {
            searchQuery: ''
        }
    },
    methods: {
      close() {
        this.$emit('closeSearch');
      },
      search() {
          this.close();
          this.$router.push({ path: '/artist_search', query: { query : this.searchQuery } });
      }
    },
  };
</script>

<style scoped>

    header{
        height: 75px;
    }

    input{
        border-radius:100px; 
        width: 100%;
    }
    
    .vertical-center{
        display: flex; 
        align-items: center;  /*Aligns vertically center */
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background: rgba(255, 255, 255, 0.75);
        
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        
    }

    .modal-header{
        padding: 15px;
        display: flex;
        background-color: rgb(246, 247, 248);
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
        filter: blur(8px);
        -webkit-filter: blur(8px);
        background-color: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(2px);
    }
    
</style>