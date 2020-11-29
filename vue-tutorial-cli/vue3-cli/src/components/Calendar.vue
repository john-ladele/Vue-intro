<template>
	<div class="mt-5 col-lg-5">
		<div class="">
			<div class="">
				<h1 class="text-center text-secondary">Vue Calendar</h1>
				<section class="row mx-2 justify-content-between">
					<!-- <h5>{{ startDay() }}</h5> -->
					<h4 class="text-danger">{{currentMonthName}}</h4>
					<h4 class="text-primary">{{currentYear}}</h4>
				</section>
				<section>
					
				</section>
				<section class="row my-2">
					<p  class=" text-center" style="width:14% !important; height: 10% !important;" v-for="(day, index) in days" v-bind:key="index">{{day}}</p>
				</section>
				<section class="row">
					<p 
						class=" text-center" 
						style="width:14% !important; height: 10% !important;" 
						v-for="num in  startDay()" 
						v-bind:key="num"
						>
					</p>

					<p 
						class=" text-center" 
						style="width:14% !important; height: 10% !important;" 
						v-for="num in  daysInMonth()" 
						v-bind:key="num"
						v-bind:class="currentDateClass(num)"
						>
						{{num}}
					</p>
				</section>
				<section class="row justify-content-between mx-2 my-2">
					<button class="btn btn-secondary" @click="prev()">Prev</button>
					<button class="btn btn-primary" @click="next()">Next</button>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),

      // currentMonthName: new Date().toLocaleString("default", {month: "long"}),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    }
  },
  methods:{
    daysInMonth(){
    // const month = new Date().getMonth() + 1;
    // console.log(new Date().getMonth() + 0);
    return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },

    startDay(){
    return new Date(this.currentYear, this.currentMonth).getDay();
    },

    next(){
	if (this.currentMonth === 11) {
		this.currentMonth = 0;
		this.currentYear++;
	}else {
		this.currentMonth++;
    }
	},

    prev(){
    if (this.currentMonth === 0) {
	this.currentMonth = 11;
	this.currentYear--;
    }else {
    this.currentMonth--;
	}
    },

    currentDateClass(num){
	const calendarFullDate = new Date(this.currentYear, this.currentMonth, num).toDateString();
	const currentFullDate = new Date().toDateString();
    return calendarFullDate === currentFullDate ? 'bg-danger text-white font-italic font-weight-bold' : '' ;
    }

  },
  computed:{
  currentMonthName(){
    return new Date(this.currentYear, this.currentMonth).toLocaleString("default", { month:"long" });
	}
  }
};
</script>

<style lang="css" scoped>
</style>