<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useOffsetPagination } from '@vueuse/core'

import {type Listing, useListingStore } from "../../stores/listingStore.ts"

const listingStore = useListingStore();
const { filtered_listings } = storeToRefs(listingStore);

function fetch(page: number, pageSize: number) {
  return new Promise<Listing[]>((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    setTimeout(() => {
      resolve(filtered_listings.value.slice(start, end))
    }, 100)
  })
}

const data: Ref<Listing[]> = ref([])

const page = ref(1)
const pageSize = ref(12)

fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
})

function fetchData({ currentPage, currentPageSize }: { currentPage: number, currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: filtered_listings.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})
</script>


<template>
  <div class="min-h-dvh pt-20 bg-white dark:bg-neutral-900 flex flex-col items-center w-10/12 mx-auto">
    <div class="h-full flex flex-row gap-10 items-center justify-center flex-wrap mb-40">
    <ListingCard 
      v-for="(item, index) in data"
      :key="index"
      :item="item"
    />
    </div>
    <div class="my-4 flex flex-row gap-1 fixed bottom-10 bg-white dark:bg-neutral-900 p-3 rounded-md border-2 border-neutral-200 dark:border-neutral-800">
      <Button variant="outline" class="text-neutral-900 dark:text-white font-semibold" :disabled="isFirstPage" @click="prev">
        prev
      </Button>
      <Button
        variant="outline"
        class="text-neutral-900 dark:text-white font-semibold"
        v-for="item in pageCount"
        :key="item"
        :disabled="currentPage === item"
        @click="currentPage = item"
      >
        {{ item }}
      </Button>
      <Button variant="outline" class="text-neutral-900 dark:text-white font-semibold" :disabled="isLastPage" @click="next">
        next
      </Button>
    </div>
  </div> 
</template>
