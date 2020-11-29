<template>
	<div class="">
      <div class="mt-5 col-sm-8 offset-2">
        <!-- <h1>Heyy Vue2 from CLI</h1>
        <p>Something else</p>

        {{title.toUpperCase()}}<br> -->

        <!-- vue-directive (v-html)-->
       <!--  <span v-if="isShowing" v-html="titleInsideH1"></span>
        <h2 v-else-if="isShowing === null">This is the v-else-if taking care of the NULL</h2>
        <h5 v-else>This is the v-else part for the false</h5>
        <span v-show="isShowing">This is the section for V-show</span> -->

        <!-- <p>--------------------</p> -->
        <h1 class="text-center">DC Heros :: {{herosCount}}</h1>
        <ol class="list-group">
         <!--  <li>SuperGirl</li>
          <li>The Flash</li>
          <li>Arrow</li>
          <li>Batman</li>
          <li>Superman</li> -->
          <!-- You can bind the key value to index or hero.name  -->
          <!-- <li v-for="(hero, index) in dcHeros" v-bind:key="index">{{index}} : {{ hero.name }}</li> -->
          <li class="row pb-2 justify-content-between  lh-condensed" v-for="(hero, index) in dcHeros" v-bind:key="hero.name">
            <div class="" >
              {{ hero.name }}
            </div>
              <button class="btn btn-sm btn-danger" @click="removeHero(index)">x</button>
          </li>
        </ol>

        <!-- Some v-bind tutorial -->
        <!-- <input v-bind:value="addNewHero" type="" name="" /> -->

        <!-- .trim removes white spaces on the vue state / data side-->
        <!-- <input v-model.trim="addNewHero" type="" name=""> -->
        <!-- So I can remove "v-bind" and replace with just the full-colon (:) -->
        <!-- &nbsp;<input :value="addNewHeroWithoutVbind" type="" name="" /> -->
        <!-- &nbsp;<button v-bind:disabled="isDisabled">Add Hero</button> -->

        <!-- <form>
          <input v-model="changeHero" type="" name="">
          <button  v-on:click.prevent="changeHero = 'Batman Senior'" type="Submit">Change Hero</button>
        </form> -->

        <!-- .prevent prevents the form from submitting -->
        <!-- <form v-on:submit.prevent="changeHero = 'Batman Seniorita'">
          <input v-model="changeHero" type="" name="">
          <button type="Submit">Change Hero</button>
        </form> -->

        <!-- Push last item into DCHeros List-->
        <form class="mt-3 row" form-control v-on:submit.prevent = "addNewHeroN()">
          
          <div class="input-group">
            <input  v-model="addNewHero" type="" name="" placeholder="Type Hero Name Here..." class="form-control" >
            <div class="input-group-append">
              <button type="submit" class="btn btn-secondary">Add Hero</button>
            </div>
          </div>

        </form>
      </div>
    </div>
</template>

<script>
export default {

  computed: {
    // computed properties - to print length of heros
    herosCount() {
          return this.dcHeros.length;
          },
  },
  data() {
    return {
      changeHero: "Legends of Tomorrow",
      isDisabled: false,
      addNewHero: "Aquaman",
      addNewHeroWithoutVbind: "no V-bind - Aquaman",
      title: "Hello there!",
      titleInsideH1: "<h1> This is a title inside H1 tag </h1>",
      // switch between true or false or null
      isShowing: true,
      // dcHeros: ["SuperGirl", "Superman", "The Flash", "Batman", "Arrow"],

      // Array of Objects
      dcHeros: [
        {name: "SuperGirl"}, 
        {name: "Superman"}, 
        {name: "The Flash"}, 
        {name: "Batman"}, 
        {name: "Arrow"}
      ],
    };
  },
  methods: {
    addNewHeroN() {
      if (this.addNewHero != "") {
        this.dcHeros.push({ name : this.addNewHero });
        // this.dcHeros.unshift adds the new item to the top of the list
        this.addNewHero = '';
      }
      
    },
    removeHero(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },
}
</script>

<style lang="css" scoped>
</style>