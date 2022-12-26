import { PlaceLocation } from "./PlaceLocation";
import { TastingRating } from "./TastingRating";

export class Coffee {
    // properties
    type: string | undefined;
    rating: number | undefined;
    notes: string | undefined;
    tastingRating?: TastingRating;
    constructor(public name: string = "", 
    public place:string ="", 
    public location: PlaceLocation,
    ) {
     
    }
}