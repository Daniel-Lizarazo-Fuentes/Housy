import { defineStore } from "pinia";
import listingsJSON from "../content/listings.json";

export type Listing = {
  id: string;
  name: string;
  listing_type: "house" | "apartment" | "studio" | "room" | "attic";
  price: number;
  utilities: Array<string>;
  cover_cost: "included" | "excluded";
  city: string;
  size: number;
  url: string;
  date: string;
  furnishing: "furnished" | "unfirnished" | "carpeted" | "uncarpeted";
  landlord: {
    name: string;
    number: string | undefined;
    email: string | undefined;
  };
};

export const useListingStore = defineStore(
  "listing_store",
  () => {
    const listings = ref<Array<Listing>>([]);

    listingsJSON.forEach((data, index) => {
      listings.value.push({
        id: index.toString(),
        name: "Listing" + index.toString(),
        listing_type: (data.type.match(
          /\b(?:house|apartment|studio|room|attic)\b/i
        ) || ["room"])[0] as
          | "house"
          | "apartment"
          | "studio"
          | "room"
          | "attic",
        price: parseInt(data.price.toString().replace(",", "")),
        utilities: [],
        cover_cost: (data.type.match(/\b(?:incl.)\b/i) || ["excluded"])[0] as
          | "included"
          | "excluded",
        city: data.city,
        size: parseInt(data.size.replace(" m²", "")),
        url: data.url,
        date: data.date,
        furnishing: (data.type.match(
          /\b(?:furnished|unfirnished|carpeted|uncarpeted)\b/i
        ) || ["unfirnished"])[0] as
          | "furnished"
          | "unfirnished"
          | "carpeted"
          | "uncarpeted",
        landlord: {
          name: "Dave van Dijk",
          number: "+31 6 835 7353",
          email: "dvd@gmail.com",
        },
      });
    });

    const filtered_listings = listings;

    function find_by_id(id: string): Listing | undefined {
      return listings.value.find((listing: Listing) => {
        listing.id === id;
      });
    }

    function filter_listings(
      cost: string,
      location: string,
      price: string,
      house_type: string
    ): void {
      //TODO
    }

    return {
      filtered_listings,
      filter_listings,
      find_by_id,
      listings,
    };
  },
  {
    persist: {
      storage: persistedState.sessionStorage,
    },
  }
);
