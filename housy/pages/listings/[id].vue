<script setup lang="ts">
import { useToast } from "vue-toastification"
import { useListingStore } from "../../stores/listingStore.ts"

const listingStore = useListingStore()
const route = useRoute()
const toast = useToast()

const listing_id = route.params.id;
const { find_by_id } = listingStore;

const listing = find_by_id(listing_id)
console.log(listing)

const onSumbit = () => {
  toast.success("Successfully contacted Landlord")
}
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
          <h1 class="sm: text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl">{{ listing.name }}</h1>

        <h2 class="mt-8 text-base text-neutral-900 dark:text-white font-semibold">Core</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
            <Badge class="text-sm px-2 py-1 rounded-md">City: {{ listing.city }} </Badge>
            <Badge class="text-sm px-2 py-1 rounded-md">Type: {{listing.listing_type }}</Badge>
            <Badge class="text-sm px-2 py-1 rounded-md">Size: {{ listing.size }} </Badge>
            <Badge class="text-sm px-2 py-1 rounded-md">Price: {{ listing.price }} </Badge>
            <Badge class="text-sm px-2 py-1 rounded-md">Utilities: {{listing.cover_cost}} </Badge>  
        </div>

        <h2 class="mt-8 text-base text-neutral-900 dark:text-white font-semibold">Utilities</h2>
        <div class="mt-3 flex select-none flex-wrap items-center gap-1">
          <Badge
            v-for="(item,index) in listing.utilities"
            :key="index"
          >Badge</Badge>
        </div>

        <div class="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
          <div class="flex items-end">
              <h1 class="text-3xl font-bold flex gap-1">€{{listing.price}}</h1>
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
              <form class="w-2/3 space-y-6">
                <FormField v-slot="{ componentField }" name="username">
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Textarea type="text" placeholder="Some nice message" v-bind="componentField" />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <div @click="onSumbit()" >
                  Submit
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
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
              <h1 class="text-neutral-900 dark:text-white font-semibold">
                {{ listing.description}}
              </h1>    
            </TabsContent>
            <TabsContent value="landlord" class="flex flex-col items-start justify-start gap-2">
              <h1 class="text-neutral-900 dark:text-white font-semibold">Name: {{listing.landlord.name}}</h1>
              <h1 class="text-neutral-900 dark:text-white font-semibold">Number: {{listing.landlord.number}}</h1>
              <h1 class="text-neutral-900 dark:text-white font-semibold">Email: {{listing.landlord.email}}</h1>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
