<script setup lang="ts">
import { ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid'

import { cn } from '@/lib/utils'

const frameworks = [
  { value: 'apartment', label: 'Apartment' },
  { value: 'house', label: 'House' },
  { value: 'studio', label: 'Studio' },
  { value: 'room', label: 'Room' },
]

const open = ref(false)
const value = ref('')

const emits = defineEmits(["updated"])
watch(value, () => {
  emits("updated", value)
})
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="w-[200px] justify-between text-neutral-900 dark:text-white"
      >
        {{ value
          ? frameworks.find((framework) => framework.value === value)?.label
          : "Accomodation" }}
        <ChevronUpDownIcon class="h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandEmpty>No Listing within City has been found.</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="framework in frameworks"
              :key="framework.value"
              :value="framework.value"
              @select="(ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value
                }
                open = false
              }"
            >
              {{ framework.label }}
              <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === framework.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
