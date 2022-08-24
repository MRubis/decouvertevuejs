<script setup>
const props = defineProps({
  city: Object,
});
</script>

<template >
  <p>{{ city.name }}</p>
  <p>{{ city.weather }}</p>
  <p>{{ city.temperature }}</p>
  <p>{{ city.updatedAt }}</p>
</template>