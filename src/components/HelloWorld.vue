<template>

<div class="marg">
    <v-col   md="4">
      <v-autocomplete  width=" 10px "  placeholder="Search" autocomplete="on"
                  v-model="searchText"
                  :items="componentss"
                  solo hide-details single-line 
                    chips                                            

                    item-text= 'name' 
                    item-value= 'id' 

                    return-object 
                  ></v-autocomplete>
    </v-col>
    <v-icon>fas fa-search</v-icon>
    </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
   componentss: [
     {'name':'Tide', 'id':'628652145552'} , {'name':'Airwick', 'id':'62965216429'} ,  {'name':'BATH TOWEL', 'id':'6273254264'} ,  {'name':'DETTOL HW 200ML', 'id':'6296274565'}
        ],
  }),
}
</script>




<style scoped>
.marg {
 padding-left: 250px;
}
</style>