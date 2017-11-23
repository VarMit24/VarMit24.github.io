import { Injectable } from '@angular/core';

@Injectable()
export class DoorServiceService {

  constructor() { }

  door : {
  	"iternal" : {
  		"name" : "Internal",
  		"imgURL" : "./../assets/internal_peeble.png",
  		"desciprtion" : "For bedrooms, door, kitchen etc.",
  		"price" : "10000"
  	},
  	"external" : {
  		"name" : "External",
  		"imgURL" : "./../assets/external_wave.PNG",
  		"desciprtion" : "For Main enterance",
  		"price" : "20000"
  	},
  	"design" : [
  		{
  			"name" : "Peeble",
  			"imgURL" : "./../assets/internal_peeble.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Coast",
  			"imgURL" : "./../assets/coast.png",
  			"price" : "1250"
  		},
  		{
  			"name" : "Ripple",
  			"imgURL" : "./../assets/ripple.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Wave",
  			"imgURL" : "./../assets/external_wave.png",
  			"price" : "1200"
  		},
  		{
  			"name" : "Shell",
  			"imgURL" : "./../assets/shell.png",
  			"price" : "1500"
  		},
  		{
  			"name" : "No Design",
  			"imgURL" : "./../assets/nodesign.png",
  			"price" : "0"
  		}
  	],
  	"wood_finish" : [
  		{
  			"name" : "Lava Teak",
  			"imgURL" : "./../assets/lavateak.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Sun Teak",
  			"imgURL" : "./../assets/sunteak.png",
  			"price" : "1250"
  		},
  		{
  			"name" : "Trunk Mahogany",
  			"imgURL" : "./../assets/trunk_mahogany.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Nest Mahogany",
  			"imgURL" : "./../assets/nest_mahogany.png",
  			"price" : "1200"
  		}
  	],
  	"coloured" : [
  		{
  			"name" : "Volcano Red",
  			"imgURL" : "./../assets/volcano_red.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Fire Red",
  			"imgURL" : "./../assets/fire_red.png",
  			"price" : "1250"
  		},
  		{
  			"name" : "Sand Grey",
  			"imgURL" : "./../assets/sand_grey.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Pearl White",
  			"imgURL" : "./../assets/peral_white.png",
  			"price" : "1200"
  		},
  		{
  			"name" : "Sapphire Blue",
  			"imgURL" : "./../assets/sapphire_blue.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Ocean Blue",
  			"imgURL" : "./../assets/ocean_blue.png",
  			"price" : "1250"
  		},
  		{
  			"name" : "Crystal Blue",
  			"imgURL" : "./../assets/crystal_blue.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Forest Brown",
  			"imgURL" : "./../assets/forest_brown.png",
  			"price" : "1200"
  		},
  		{
  			"name" : "Snowflake White",
  			"imgURL" : "./../assets/snowflake_white.png",
  			"price" : "1000"
  		},
  		{
  			"name" : "Moon White",
  			"imgURL" : "./../assets/moon_white.png",
  			"price" : "1250"
  		},
  		{
  			"name" : "Cloud White",
  			"imgURL" : "./../assets/cloud_white.png",
  			"price" : "1000"
  		}
  	],
  	"infills": [
  		{
  			"name" : "HONEYCOMB",
  			"price" : "100"
  		},
  		{
  			"name" : "MINERAL WOOL",
  			"price" : "200"
  		},
  		{
  			"name" : "POLYURETHANE FOAM",
  			"price" : "300"
  		}
  	],
  	"accesories": [
  		{
  			"name" : "PEEPHOLE",
  			"price" : "100"
  		},
  		{
  			"name" : "SECONDARY LOCK",
  			"price" : "200"
  		},
  		{
  			"name" : "DOOR CLOSER",
  			"price" : "300"
  		},
  		{
  			"name" : "FLY MESH",
  			"price" : "1000"
  		}
  	],

  }


  getDoor() {
  	return this.door;
  }
}
