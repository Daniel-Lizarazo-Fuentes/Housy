<script setup lang="ts">

import { useListingStore } from "../../stores/listingStore.ts"

const listingStore = useListingStore()
const route = useRoute()

const listing_id = route.params.id;
const { find_by_id } = listingStore;

</script>

<template lang="html">
  
<div class="py-20 sm:py-20 h-dvh"> 
  <div class="container mx-auto px-4">
    <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
      <div class="lg:col-span-3 lg:row-end-1">
        <div class="lg:flex lg:items-start">
          <div class="lg:order-2 lg:ml-5">
            <div class="max-w-xl overflow-hidden rounded-lg">
              <img class="h-full w-full max-w-full object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>

          <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div class="flex flex-row items-start lg:flex-col">
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </button>
              <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-2 lg:row-span-2 lg:row-end-2 text-neutral-900 dark:text-white">
        <h1 class="sm: text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">Listing name</h1>

        <h2 class="mt-8 text-base text-neutral-900 dark:text-white font-semibold">Core Type</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <Badge
            v-for="(item,index) in 10"
            :key="index"
          >Badge</Badge> 
        </div>

        <h2 class="mt-8 text-base text-neutral-900 dark:text-white font-semibold">Utilities</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <Badge
            v-for="(item,index) in 10"
            :key="index"
          >Badge</Badge>
        </div>

        <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div class="flex items-end">
            <h1 class="text-3xl font-bold">$60.50</h1>
            <span class="text-base">/month</span>
          </div>
          
          <Dialog>
            <DialogTrigger>
              <Button variant="outline">
                Contact Landlord
              </Button>
            </DialogTrigger>
            <DialogContent class=" text-neutral-900 dark:text-white">
              <DialogTitle>
                Contact Landlord
              </DialogTitle>
            </DialogContent>
          </Dialog>
        </div>

        <ul class="mt-8 space-y-2">
          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" class=""></path>
            </svg>
            Free shipping worldwide
          </li>

          <li class="flex items-center text-left text-sm font-medium text-gray-600">
            <svg class="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" class=""></path>
            </svg>
            Cancel Anytime
          </li>
        </ul>
      </div>

      <div class="lg:col-span-3">
        <div class=" text-neutral dark:text-white">
          <Tabs default-value="description" class="w-full">
            <TabsList class="grid w-full grid-cols-2">
              <TabsTrigger value="description">
               Description
              </TabsTrigger>
              <TabsTrigger value="landlord">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta, ipsa neque, aliquid optio porro repellat quas placeat amet harum quibusdam rerum voluptatem fugiat! Voluptatibus corporis veritatis consequuntur tempore natus.
            </TabsContent>
            <TabsContent value="landlord">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
