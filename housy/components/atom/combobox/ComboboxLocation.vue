<script setup lang="ts">
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid'
import { useListingStore } from "../../../stores/listingStore.ts"
import { storeToRefs } from "pinia"
import { cn } from '@/lib/utils'


const listingStore = useListingStore()

const { listings } = storeToRefs(listingStore)


const locations = listings.value.map((listing, index ) => {
  return {
    id: index, 
    city: listing.city
  }
})

const open = ref(false)
const value = ref('')

const emits = defineEmits(["updated"])
watch(value, () => {
  emits("updated", value)
})

console.log(locations)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-full justify-between text-neutral-900 dark:text-white"
      >
        {{ value
          ? locations.find((framework) => framework.city === value).city
          : "Search Location......" }}
        <ChevronUpDownIcon class=" h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[890px] max-w-[890px] p-0">
      <Command>
      <CommandInput placeholder="Enter Location Name"/>
        <CommandEmpty>No Listing within City has been found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in locations"
              :key="framework.id"
              :value="framework.city"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ framework.city }}
              <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.city ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
