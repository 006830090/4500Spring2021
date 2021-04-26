export const genres = [
  { 
  	_id: "100", 
  	name: "Metal Bits",
  },
  {
  	 _id: "101", 
  	name: "Wood Bits" ,
  },
  { 
  	_id: "102", 
  	name: "Concrete Bits" ,
  }
];

export function getGenres() {
  return genres.filter(g => g);
}
