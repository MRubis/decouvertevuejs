<script >
import { format } from "timeago.js";
export default {
  props: {
    city: Object,
  },
  computed: {
    relativeDate: function () {
      return format(new Date(this.city.dt * 1000));
    },
  },
};
</script>

<template >
  <p>{{ city.name }}</p>
  <p>{{ city.weather[0].description }}</p>
  <p>{{ city.temperature }}</p>
  <p>{{ relativeDate }}</p>
</template>