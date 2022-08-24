<script>
import City from "./City.vue";
import axios from "axios";
export default {
  components: { City },
  data() {
    return {
      cities: [],
      loading: true,
      errored: false,
    };
  },
  created() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=79b41523ca2afacea5d999662ab73c01"
      )
      .then((response) => {
        this.cities = response.data.list;
      })

      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<template>
  <City v-for="city in cities" :key="city" :city="city" />
   <section v-if="errored">
    <p id="red">We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

   <section v-else>
    <div v-if="loading">Requête en cours</div>
    </section>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
#red{
  color:red;
}
</style>
