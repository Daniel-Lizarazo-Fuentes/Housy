import { defineStore } from "pinia"

export type Listing = {
  id: string,
  name: string,
  listing_type: "house" | "apartment" | "studio" | "room" | "attic",
  price: number,
  utilities: Array<string>,
  cover_cost: "included" | "excluded",
  city: string,
  size: number,
  url: string,
  date: string,
  furnishing: "furnished" | "unfirnished" | "carpeted" | "uncarpeted", 
  landlord: {
    name: string,
    number: string | undefined,
    email: string| undefined
  }
}

export const useListingStore = defineStore("listing_store", () => {
  const listings = ref<Array<Listing>>([
    {
      id: "hello",
      name: "Some house",
      listing_type: "house",
      price: 1095,
      utilities: ["garden", "balcony", "the good stuff"],
      cover_cost: "excluded",
      city: "Enschede",
      size: 43,
      url: "https://kamernet.nl/en/for-rent/apartment-enschede/kortenaerstraat/apartment-2213534",
      date: "recent",
      furnishing: "furnished",
      landlord: {
        name: "Dave",
        number: "+31 6 835 7353",
        email:"dave@daving.com"
      }
    }
  ])

  const filtered_listings = listings; 
  
  function find_by_id(id: string) : Listing | undefined {
    return listings.value.find( (listing: Listing) => {
      listing.id === id
    })
  }


  function filter_listings(cost: string, location: string, price: string, house_type: string) : void {
    
  }


  return {
    filtered_listings, filter_listings, find_by_id, listings 
  }
}, {
    persist: {
      storage: persistedState.sessionStorage
    }
})
