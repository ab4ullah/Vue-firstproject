<template>

  
    <div>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    
    <v-data-table
    :headers="headers" 
    :items="desserts"
    :search="search"
    class="elevation-1 light"
  ></v-data-table>
</div>

</template>


<script>
export default {
    name: 'DataTable' ,
    data : function () {
        return {
        pageName : 'DataTable' ,
        headers: [
          {text: 'Hostname',value: 'Hostname'},
          { text: 'Ram', value: 'Ram' },
          { text: 'Model', value: 'Model' },
          { text: 'location', value: 'location' }
        ],
        search: '',
        desserts: [
          {
            id : '1',
            Hostname : 'BC303',
            Ram : 8,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 25

          },

          {
            id : '2',
            Hostname : 'BC306',
            Ram : 6,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 26

          },

            {
            id : '3',
            Hostname : 'BC308',
            Ram : 4,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 27

          },

            {
            id : '4',
            Hostname : 'BC309',
            Ram : 8,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 25

          },

        ]
        }

    } ,

    methods : {
      
    } ,

    computed : {
    
}
}
</script>


<style scoped>
 

</style>