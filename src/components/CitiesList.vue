<script setup>
import { format} from 'timeago.js';
import City from "./City.vue";
const cities = [
  {
    id: 1,
    name: "Ville 1",
    weather: "Ensoleillé",
    temperature: 22.0,
    updatedAt: format(new Date()),
  },
  {
    id: 2,
    name: "Ville 2",
    weather: "Peu nuageux",
    temperature: 19.5,
    updatedAt: format(new Date()),
  },
];

</script>

<template>

  <City
    v-for=" city in cities"
    :key ="city.id"
    :city ="city"
  />
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
</style>
