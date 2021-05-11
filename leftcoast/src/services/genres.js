export const genres = [


  
  { 
  	_id: "100", 
  	name: "Metal Bits",
    cat: { _id: "1", 
          name: "Drill Bits", 
          symbol: "target",
          count: 3 
        },
  },
 
  {
  	_id: "101", 
  	name: "Wood Bits" ,
    cat: { _id: "1", 
          name: "Drill Bits", 
          symbol: "target",
          count: 3 
        },
  },

  { 
  	_id: "102", 
  	name: "Concrete Bits" ,
    cat:  {  _id: "1", 
            name: "Drill Bits", 
            symbol: "target",
            count: 3 
          },
  },

  { 
  	_id: "103", 
  	name: "Saw Blades",
    cat:  {  _id: "2", 
            name: "Saw Blades",
            symbol: "data-increase",
            count: 1
          },
  },

  {
  	 _id: "104", 
  	name: "Safety Items" ,
    cat:  { _id: "3", 
            name: "Safety Items" ,
            symbol: "expand-o",
            count: 1       
          },
  },
  
  { 
  	_id: "105", 
  	name: "Cords & Lights" ,
    cat:  {  _id: "4", 
            name: "Electrical",
            symbol: "creative",
            count: 2 
          },
  },
  
  {
    _id: "106", 
   name: "Holesaw & Misc" ,
   cat: {   _id: "4", 
            name: "Electrical",
            symbol: "creative",
            count: 2
        },
 },

 { 
   _id: "107", 
   name: "Cutting & Grinding" ,
   cat: {   _id: "5", 
            name: "Abrasive", 
            symbol: "cog",
            count: 2
        },
 },

 { 
   _id: "108", 
   name: "Sanding Products",
   cat: {   _id: "5", 
            name: "Abrasive",     
            symbol: "cog",
            count: 2 
        },
 },

 {
    _id: "109", 
   name: "Diamond Products" ,
   cat: {   _id: "6", 
            name: "Diamond Products",
            symbol: "diamond",
            count: 1  
        },
 },

 { 
   _id: "110", 
   name: "Chemicals" ,
   cat: {   _id: "7", 
            name: "Chemicals",
            symbol: "tint",
            count: 1 
        },
 },

 { 
  _id: "111", 
  name: "Power Tools" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "112", 
  name: "Wrenches" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "113", 
  name: "Sockets" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "114", 
  name: "Extractors & Threaders" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "115", 
  name: "Pliers & Clamps" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "116", 
  name: "Williams Tools" ,
  cat: {   _id: "8", 
           name: "Hand Tools",
           symbol: "wrench",
           count: 6 
       },
},

{ 
  _id: "117", 
  name: "Hydraulics" ,
  cat: {   _id: "9", 
           name: "Shop Tools",
           symbol: "magic2",
           count: 3 
       },
},

{ 
  _id: "118", 
  name: "Pneumatic Tools" ,
  cat: {   _id: "9", 
           name: "Shop Tools",
           symbol: "magic2",
           count: 3 
       },
},

{ 
  _id: "119", 
  name: "Miscellaneous" ,
  cat: {   _id: "9", 
           name: "Shop Tools",
           symbol: "magic2",
           count: 3 
       },
},

{ 
  _id: "120", 
  name: "Tarps, Straps, & Ties" ,
  cat: {   _id: "10", 
           name: "Expendables",
           symbol: "refresh2",
           count: 3 
       },
},

{ 
  _id: "121", 
  name: "Screw & Nut Drivers" ,
  cat: {   _id: "10", 
           name: "Expendables",
           symbol: "refresh2",
           count: 3 
       },
},

{ 
  _id: "122", 
  name: "Tapes" ,
  cat: {   _id: "10", 
           name: "Expendables",
           symbol: "refresh2",
           count: 3 
       },
},


];

export function getGenres() {
  return genres.filter(g => g);
}
