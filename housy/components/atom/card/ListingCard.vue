<script setup lang="ts">
  
</script>

<template lang="html">
<div class="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 bg-clip-border rounded-xl w-96">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-neutral-800 ">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />
  </div>
  <div class="p-6 text-neutral-900 dark:text-white bg-white dark:bg-neutral-800">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div class="p-6 pt-0 bg-white dark:bg-neutral-800 rounded-b-lg">
    <Button
      variant="outline"
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-neutral-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-neutral-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      <NuxtLink to="/listings/1234">Read More</NuxtLink>
    </Button>
  </div>
</div>  

</template>
