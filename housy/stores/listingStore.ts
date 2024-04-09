import { defineStore } from "pinia";
import listingsJSON from "../content/listings.json";

export type Listing = {
  id: string;
  name: string;
  listing_type: "house" | "apartment" | "studio" | "room";
  price: number;
  utilities: Array<string>;
  cover_cost: "included" | "excluded";
  city: string;
  size: number;
  url: string;
  imgUrl: string;
  date: string;
  furnishing: "furnished" | "unfurnished" | "carpeted" | "uncarpeted";
  description: string;
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

    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomImageUrl(listingType: string) {
      const basePath = `img/`;
      const randomNumber = getRandomInt(1, 5);
      return `${basePath}${listingType.toLowerCase()}${randomNumber}.jpg`;
    }

    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    listingsJSON.forEach((data, index) => {
      const listingType = (data.type.match(
        /\b(?:house|apartment|studio|room|attic)\b/i
      ) || ["room"])[0] as "house" | "apartment" | "studio" | "room";

      listings.value.push({
        id: index.toString(),
        name: capitalizeFirstLetter(listingType) + " in " + data.city,
        listing_type: listingType,
        price: parseInt(data.price.toString().replace(",", "")),
        utilities: [],
        cover_cost: (data.type.match(/\b(?:incl.)\b/i) || ["excluded"])[0] as
          | "included"
          | "excluded",
        city: data.city,
        size: parseInt(data.size.replace(" m²", "")),
        url: data.url,
        imgUrl: getRandomImageUrl(listingType),
        date: data.date,
        furnishing: (data.type.match(
          /\b(?:furnished|unfurnished|carpeted|uncarpeted)\b/i
        ) || ["unfurnished"])[0] as
          | "furnished"
          | "unfurnished"
          | "carpeted"
          | "uncarpeted",
        description: "",
        landlord: {
          name: "Dave van Dijk",
          number: "+31 6 835 7353",
          email: "dvd@gmail.com",
        },
      });
    });

    const filtered_listings = ref<Array<Listing>>(listings.value);

    const filters = ref({
      house_type: "",
      house_size: "",
      house_location: "",
      house_price: "",
    });

    function find_by_id(id: string): Listing | undefined {
      return listings.value.find((listing: Listing) => {
        return listing.id === id;
      });
    }

    function filterSizeRange(size: number, sizeCategory: string): boolean {
      if (sizeCategory === "100plus") {
        return size >= 100;
      } else {
        const [lower, upper] = sizeCategory
          .split("to")
          .map((value) => parseInt(value));
        if (!upper) {
          return size >= lower;
        } else {
          return size >= lower && size < upper;
        }
      }
    }

    function filterPriceRange(price: number, priceCategory: string): boolean {
      switch (priceCategory) {
        case "300":
          return price <= 300;
        case "500":
          return price <= 500;
        case "700":
          return price <= 700;
        case "900":
          return price <= 900;
        case "99999999":
          return price > 900;
        default:
          return true;
      }
    }

    function filter_listings(
      house_type: string,
      size: string,
      location: string,
      price: string
    ): void {
      filters.value.house_type = house_type;
      filters.value.house_size = size;
      filters.value.house_location = location;
      filters.value.house_price = price;

      filtered_listings.value = listings.value.filter((listing) => {
        const typeMatch =
          filters.value.house_type === "" ||
          listing.listing_type.toLowerCase() === filters.value.house_type;
        const sizeMatch =
          filters.value.house_size === "" ||
          filterSizeRange(listing.size, filters.value.house_size);
        const locationMatch =
          filters.value.house_location === "" ||
          listing.city === filters.value.house_location;
        const priceMatch =
          filters.value.house_price === "" ||
          filterPriceRange(listing.price, filters.value.house_price);

        return typeMatch && sizeMatch && locationMatch && priceMatch;
      });
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
