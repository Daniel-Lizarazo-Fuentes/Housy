<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { useListingStore } from "../stores/listingStore.ts";
const listingStore = useListingStore();

const house_type = ref<string>("");
const house_size = ref<string>("");
const house_location = ref<string>("");
const house_price = ref<string>("");

const select_house_type = (type: string) => {
  house_type.value = type;
};
const select_house_size = (type: string) => {
  house_size.value = type;
};
const select_house_location = (type: string) => {
  house_location.value = type;
};
const select_house_price = (type: string) => {
  house_price.value = type;
};

function performSearch() {
  listingStore.filter_listings(
    house_type.value,
    house_size.value,
    house_location.value,
    house_price.value
  );
}
</script>

<template lang="html">
  <div
    class="h-dvh pt-20 bg-white dark:bg-neutral-900 flex flex-col items-center w-10/12 mx-auto"
  >
    <div
      class="w-full h-[40dvh] flex flex-col items-center justify-end gap-2 p-10"
    >
      <h1 class="text-5xl font-extrabold text-neutral-900 dark:text-white">
        WELCOME TO HOUSY
      </h1>
      <h4 class="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
        FIND YOUR NEXT HOME QUICK AND EASY
      </h4>
    </div>
    <div
      class="flex flex-row items-center justify-center p-10 rounded-md w-full bg-neutral-100 dark:bg-black/40"
    >
      <div class="w-5/12 flex flex-row gap-2">
        <div class="flex flex-col items-start jusitfy-center gap-1">
          <p
            class="font-semibold text-neutral-500 dark:text-neutral-100 text-sm pl-1"
          >
            Housing Type
          </p>
          <ComboboxHouseType v-on:updated="select_house_type" />
        </div>
        <div class="flex flex-col items-start justify-center gap-1">
          <p
            class="font-semibold text-neutral-500 dark:text-neutral-100 text-sm pl-1"
          >
            Price
          </p>
          <ComboboxPrice v-on:updated="select_house_price" />
        </div>
        <div class="flex flex-col items-start justify-center gap-1">
          <p
            class="font-semibold text-neutral-500 dark:text-neutral-100 text-sm pl-1"
          >
            Size
          </p>
          <ComboboxSize v-on:updated="select_house_size" />
        </div>
      </div>
      <div class="w-7/12 flex flex-row items-center justify-center gap-1">
        <div class="flex flex-col items-start justify-center gap-1 w-full">
          <p
            class="font-semibold text-neutral-500 dark:text-neutral-100 text-sm"
          >
            Location
          </p>
          <ComboboxLocation v-on:updated="select_house_location" />
        </div>
        <div class="flex flex-col items-center justify-end pt-6">
          <Button variant="outline" @click="performSearch()">
            <NuxtLink  to="/listings" >
              <MagnifyingGlassIcon
                class="w-5 h-5 text-neutral-900 dark:text-white"
              />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
