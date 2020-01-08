<template>
      <v-container class="grey lighten-5">
    <v-row no-gutters>
      <template v-for='info in pcinformation' >
        <v-col :key= "info.id">
         
              <v-card   
                    class="mx-auto marg"
                    max-width="344"
                  >
                    <v-card-text>
                      <p  class="display-1 text--primary ">
                        {{info.name}}
                      </p>
                      <div class="text--primary">
                        Ram : {{info.Ram}}<br>
                        Model : {{info.Model}}<br>
                        location : {{info.location}}

                      </div>
                    </v-card-text>
                    <v-card-actions>
                    
                    </v-card-actions>
                  </v-card>
      
        </v-col>
      </template>
    </v-row>
  </v-container>
 
 
</template>


<script>


export default {
    name: 'Second' ,
    data : function () {
        return {
        pageName : 'Second page' ,
        pcinformation : 
        [
          {
            id : '1',
            name : 'BC303',
            Ram : 8,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 25

          },

          {
            id : '2',
            name : 'BC306',
            Ram : 6,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 26

          },

            {
            id : '3',
            name : 'BC308',
            Ram : 4,
            Model : 'Dell OptiPlex 3050 Desktop',
            location : 27

          },

            {
            id : '4',
            name : 'BC309',
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
 
.marg {
 margin-top: 50px;
}
</style>