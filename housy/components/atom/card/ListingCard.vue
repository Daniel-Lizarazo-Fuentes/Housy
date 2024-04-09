<script setup lang="ts">
defineProps<{
  item: Listing;
}>();

</script>

<template lang="html">
  <div
    class="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 bg-clip-border rounded-xl w-96"
  >
    <div
      class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-neutral-800"
    >
      <img :src="item.imgUrl" alt="card-image" />
    </div>

    <div
      class="p-6 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800"
    >
      <h5
        class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
      >
        {{ item.name }}
      </h5>
      <p
        class="block font-sans text-base antialiased font-light leading-relaxed text-inherit"
      >
        The place is close to {{ item.city }}. It costs €{{ item.price }} per
        month, utilities {{ item.cover_cost }}. This beatifull
        {{ item.listing_type }} is {{ item.size }} meters squared and
        {{ item.furnishing }}. <br /><br />
        {{ item.description.slice(0,80) }}...
      </p>
    </div>
    <div class="p-6 pt-0 bg-white dark:bg-neutral-800 rounded-b-lg">
      <Button
        variant="outline"
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-neutral-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
      >
        <NuxtLink :to="'/listings/' + item.id">Read More</NuxtLink>
      </Button>
    </div>
  </div>
</template>
