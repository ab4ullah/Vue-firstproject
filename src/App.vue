<template>
  <v-app>
    <v-app-bar
      app
      color="Dark"
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://pngimage.net/wp-content/uploads/2018/05/ab-logo-png-5.png"
          transition="scale-transition"
          width="40"
        />

       
         <span class="headline"> AB application </span>
      </div>

      <v-spacer></v-spacer>
      <div >
        <v-btn 
          href="#"
          @click= 'swithtext()'
          text
        >
          <span class="mr-2"   > {{sign}} </span>
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            v-bind:src= "urls"
            transition="scale-transition"
            width="40"
          />
        </v-btn>
      </div>
    </v-app-bar>

      
   
    <v-content>
      
      
    <v-navigation-drawer  v-model="drawer"
      :mini-variant.sync="mini"
      permanent class="float-left ps-5" > 
     <br/>
   

     <br/>
        
        <div class=" grab ">
         <h3 @click="component = 'HelloWorld' "> <v-icon>mdi-mouse</v-icon> <router-link class=" grab" to="/"> Search </router-link>  </h3>
        </div>

 <br/>
       <div class=" grab">
         <h3  @click="component = 'Second' ">  <v-icon>mdi-watch</v-icon> <router-link class=" grab" to="/data"> BC infomartion </router-link> </h3>
        </div>


 <br/>
      <div class=" grab">
         <h3 @click="component = 'Third' "> <v-icon>mdi-xbox-controller</v-icon>  <router-link class=" grab" to="/about"> About me </router-link> </h3>
        </div>


 <br/>
      <div class=" grab">
         <h3 @click="component = 'DataTable' "> <v-icon>mdi-anchor</v-icon>  <router-link class=" grab" to="/datatable"> Data Table </router-link> </h3>
        </div>
     
   </v-navigation-drawer>



   <div >
   <!--   <component  v-bind:is='component'> </component> -->
      <router-view> </router-view>
    </div>
    </v-content>

    <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      
    >
      

      <v-card-text class="primary lighten-2 py-3 text-center black--text ">
        {{ new Date().getFullYear() }} — <strong>Abdullah</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import Second from './components/Second';
// import Third from './components/Third';
// import DataTable from './components/dataTable';

export default {
  name: 'App',

  

  components: {
    // HelloWorld,
    // Second,
    // Third,
    // DataTable

  },

  data: () => ({
    component : 'HelloWorld',
    sign : 'sign out',
    urls : "https://www.vippng.com/png/detail/499-4993984_logout-comments-fa-sign-out-icon.png",
    drawer : null,
    mini : null,
    searchText : null
    
  }),

  methods : {
    swithtext : function () {
      if(this.sign == 'sign out') {
         this.sign = 'sing in'
         this.urls = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoLe01CCKV8RjeEjElXAWb0fMylDzDZvbIU7K-N37clrHd7kD8w&s"
         
      }
      else if (this.sign == 'sing in'){
        this.sign = 'sign out'
        this.urls = "https://www.vippng.com/png/detail/499-4993984_logout-comments-fa-sign-out-icon.png"
        

      }
    }
  }
};
</script>


<style scoped>

  .grab {cursor: -webkit-grab; cursor: grab; color: #000; text-decoration: none;}
  .grab:hover {
    color : blue;
  }
</style>