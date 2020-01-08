<template>

    <div class="About">
    <br/>
    <input type="text" v-model="username" placeholder="Enter your username" />

       <p >{{validation}}</p>
       <br/>
       <h1 v-text="pageName" class="bg-red-500 text-white"> </h1>
       <br/>
       <p> {{pageDescrptions}} </p>
       <br/>
       <u>
        <li > {{skils[0]}} </li>
       </u>
       <br/>
       <img :src='url' />
       <br/>
       <p> {{saysometing(1,2)}} </p>
       <br/>
       <p>{{count }}</p>
       <br/>
       <p> {{ calculate }} </p>
       <br/>
       <p> {{ calculate2() }} </p>
       <button v-on:click="count += 1"> click to increase </button>
       <br/>
       
       
    </div>

</template>


<script>
export default {
    name: 'AboutMe' ,
    data : function () {
        return {
        pageName : 'About us page' ,
        pageDescrptions : 'we are the best company in the world',
        url : 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
        count : 0 ,
        age : 3 ,
        skils : ['HTML' , 'CSS' , 'JavaScript' , 'PHP'],
        username : ''

        }

    } ,

    methods : {
        saysometing : function (a,b) {
            return a + b ;
            

        } ,

        calculate2 : function () {
            return this.age * 4 ;
        }


    } ,

    computed : {
        calculate : function () {
            return this.age * 4
        } ,
        validation : function () {
            
            return this.username
            
        }
    }
}
</script>


<style scoped>
 

</style>