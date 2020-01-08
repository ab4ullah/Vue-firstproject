<template>
    <div   class=" mx-8 w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 border-2 sm:border-t-8 md:border-r-8 lg:border-b-8 xl:border-8 ">
    
      <h1 > PC Name : {{ info.hostname }} </h1>
      <h1> Model : {{ info.model }} </h1>
      <h1> os name : {{ info.os_name }} </h1>
      <h1> Ram : {{ info.ram_total }} </h1>
      <h1> last seen : {{ info.last_seen }} </h1>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Headers',
    data : function() {
        return {
            info: ''
        }
        
        
    },
    mounted () {
       for (var i = 1 ; i <=6 ; i++) { 
    axios
      .get('http://gbmoon.greeenboard.com/devices/'+ i)
      .then(response => (this.info = response.data))
      .catch(error => alert(error))
      }
       }
  
}
</script>


<style scoped>
.headers{
    margin: 0 auto;
}
</style>