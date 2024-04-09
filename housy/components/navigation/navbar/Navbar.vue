<script setup lang="ts">
import { MoonIcon, SunIcon, UserIcon, HomeIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/solid"
import { useDark, useToggle } from '@vueuse/core'

import { useListingStore } from "../../../stores/listingStore.ts"


const isDark = useDark()
const toggleDark = useToggle(isDark)
const listingStore = useListingStore()

const { filter_listings } = listingStore;

const search_value = ref<string>("");

const search = () => {
  filter_listings()
  navigateTo("/listings")
}
</script>

<template lang="html">
  <div class="fixed z-10 top-0 left-1/2 -translate-x-1/2 flex flex-row items-center justify-between w-10/12 mx-auto h-20 gap-2 bg-white dark:bg-neutral-900">
    <div class="flex flex-row items-center justify-start w-[30%] gap-2">
      <Button 
        variant="ghost"
        class="bg-white dark:bg-black"
      >
        <NuxtLink to="/">
          <HomeIcon class="w-5 h-5 text-neutral-600 dark:text-white" />
        </NuxtLink>
      </Button>
    </div>
    <div class="flex flex-row items-center justify-between gap-2 w-[70%]">
      <div class="flex flex-row items-center justify-start w-full gap-1">
        <Input v-model="search_value" placeholder="Search... " class="w-8/12 text-neutral-900 font-semibold dark:text-white" />
        <Button @click="search" variant="outline" class="text-neutral-900 dark:text-white">
          <MagnifyingGlassIcon class="w-5 h-5" /> 
        </Button>
      </div>
      
      <div class="w-4-12 flex flex-row gap-2 items-center justify-end">
        <Button @click="toggleDark()" variant="ghost" class="bg-white dark:bg-black" >
          <SunIcon v-if="isDark" class="text-white w-5 h-5"/>
          <MoonIcon v-else class="w-5 h-5 text-neutral-600" />
        </Button>
      </div>
    </div>
  </div>
</template>
