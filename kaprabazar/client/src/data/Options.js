const categoryOptions = [
  { value: "Bags", label: "Bags" },
  { value: "Bed Sheets", label: "Bed Sheets" },
  { value: "Carpet", label: "Carpet" },
  { value: "Clothes", label: "Clothes" },
  { value: "Coronavirus", label: "Coronavirus" },
  { value: "Covers", label: "Covers" },
  { value: "Fashion", label: "Fashion" },
  { value: "Footwear", label: "Footwear" },
  { value: "Formal Suits", label: "Formal Suits" },
  { value: "Jewellery", label: "Jewellery" },
  { value: "Kids & Babies", label: "Kids & Babies" },
  { value: "Leather", label: "Leather" },
  { value: "Lunda Bazar", label: "Lunda Bazar" },
  { value: "Mens Clothing", label: "Mens Clothing" },
  { value: "Womens Clothing", label: "Womens Clothing" },
  { value: "Others", label: "Others" },
];

const bagsCategory = [
  { value: "Backpack", label: "Backpack" },
  { value: "Crossbody Bags", label: "Crossbody Bags" },
  { value: "Ladies Purse", label: "Ladies Purse" },
  { value: "Laptop Bags", label: "Laptop Bags" },
  { value: "Male Purse", label: "Male Purse" },
  { value: "Shoulder Bags", label: "Shoulder Bags" },
];

const bedsheetsCategory = [
  { value: "3D Design", label: "3D Design" },
  { value: "King Size", label: "King Size" },
  { value: "Others", label: "Others" },
  { value: "Panel Design", label: "Panel Design" },
  { value: "PC Polyester Cotton", label: "PC Polyester Cotton" },
  { value: "Pure Cotton", label: "Pure Cotton" },
  { value: "Single Bedsheets", label: "Single Bedsheets" },
];

const carpetCategory = [
  { value: "Classic", label: "Classic" },
  { value: "Modern", label: "Modern" },
  { value: "Outdoor", label: "Outdoor" },
];

const coronavirusCategory = [
  { value: "Gloves", label: "Gloves" },
  { value: "Mask", label: "Mask" },
  { value: "PPE", label: "PPE" },
];

const coverCategory = [
  { value: "Bike Cover", label: "Bike Cover" },
  { value: "Car Cover", label: "Car Cover" },
  { value: "Sofa Cover", label: "Sofa Cover" },
];

const fashionCategory = [{ value: "Watches", label: "Watches" }];

const footwearCategory = [
  { value: "Aval", label: "Aval" },
  { value: "Chappal", label: "Chappal" },
  { value: "Heels", label: "Heels" },
  { value: "Joggers", label: "Joggers" },
  { value: "Khussa", label: "Khussa" },
  { value: "Others", label: "Others" },
  { value: "Sandals", label: "Sandals" },
  { value: "Shoes", label: "Shoes" },
  { value: "Slippers", label: "Slippers" },
  { value: "Slippers Aval", label: "Slippers Aval" },
  { value: "Sneakers", label: "Sneakers" },
  { value: "Sports", label: "Sports" },
];

const jewelleryCategory = [
  { value: "Anklets", label: "Anklets" },
  { value: "Antique Jewellery", label: "Antique Jewellery" },
  { value: "Baju Band", label: "Baju Band" },
  { value: "Bangals & Bracelets", label: "Bangals & Bracelets" },
  { value: "Bridal Jewellery", label: "Bridal Jewellery" },
  { value: "Bridal Sets", label: "Bridal Sets" },
  { value: "Earrings", label: "Earrings" },
  { value: "Handmade Jewellery", label: "Handmade Jewellery" },
  { value: "Kundan Jewellery", label: "Kundan Jewellery" },
  { value: "Necklace Sets", label: "Necklace Sets" },
  { value: "Nose Rings", label: "Nose Rings" },
  { value: "Pearl Jewellery", label: "Sports" },
  { value: "Pendants", label: "Pendants" },
  { value: "Rings", label: "Rings" },
  { value: "Silk Thread Jewellery", label: "Silk Thread Jewellery" },
  { value: "Temple Jewellery", label: "Temple Jewellery" },
];

const kidsCategory = [
  { value: "Boy", label: "Boy" },
  { value: "Cotton", label: "Cotton" },
  { value: "Diapers", label: "Diapers" },
  { value: "Dungaree", label: "Dungaree" },
  { value: "Girl", label: "Girl" },
  { value: "Imported", label: "Imported" },
  { value: "Infant", label: "Infant" },
  { value: "Jeans", label: "Jeans" },
  { value: "Shorts", label: "Shorts" },
];

const mensCategory = [
  { value: "Blazer", label: "Blazer" },
  { value: "Dungaree", label: "Dungaree" },
  { value: "Hankerchief", label: "Hankerchief" },
  { value: "Hoddies & Sweetshirts", label: "Hoddies & Sweetshirts" },
  { value: "Innerwear", label: "Innerwear" },
  { value: "Jeans", label: "Jeans" },
  { value: "Kameez Shalwar", label: "Kameez Shalwar" },
  { value: "Kurta Shalwar", label: "Kurta Shalwar" },
  { value: "Linen", label: "Linen" },
  { value: "Necktie", label: "Necktie" },
  { value: "Others", label: "Others" },
  { value: "Pajamas", label: "Pajamas" },
  { value: "Polo Shirts", label: "Polo Shirts" },
  { value: "Scarf", label: "Scarf" },
  { value: "Sherwani", label: "Sherwani" },
  { value: "Shirts", label: "Shirts" },
  { value: "Shorts", label: "Shorts" },
  { value: "Socks", label: "Socks" },
  { value: "Sweaters", label: "Sweaters" },
];

const womensCategory = [
  { value: "Abayas & Hijabs", label: "Abayas & Hijabs" },
  { value: "Ajrak", label: "Ajrak" },
  { value: "Banarsi", label: "Banarsi" },
  { value: "Bras", label: "Bras" },
  { value: "Bridal Clutch", label: "Bridal Clutch" },
  { value: "Bridal Dress", label: "Bridal Dress" },
  { value: "Cambric", label: "Cambric" },
  { value: "Chiffon", label: "Chiffon" },
  { value: "Chikankari", label: "Chikankari" },
  { value: "Chunri", label: "Chunri" },
  { value: "Cotton", label: "Cotton" },
  { value: "Dungaree", label: "Dungaree" },
  { value: "Dupattas", label: "Dupattas" },
  { value: "Embroidery", label: "Embroidery" },
  { value: "Frock", label: "Frock" },
  { value: "Georgette", label: "Georgette" },
  { value: "Handwork", label: "Handwork" },
  { value: "Innerwear", label: "Innerwear" },
  { value: "Jacquard", label: "Jacquard" },
  { value: "Jeans", label: "Jeans" },
  { value: "Kameez", label: "Kameez" },
  { value: "Kurtis", label: "Kurtis" },
  { value: "Lawn", label: "Lawn" },
  { value: "Lehanga", label: "Lehanga" },
  { value: "Lingerie", label: "Lingerie" },
  { value: "Maxi", label: "Maxi" },
  { value: "Maysoori", label: "Maysoori" },
  { value: "Net Fabric", label: "Net Fabric" },
  { value: "Nightwear", label: "Nightwear" },
  { value: "Organza", label: "Organza" },
  { value: "Others", label: "Others" },
  { value: "Part Waer", label: "Part Waer" },
  { value: "Peshwas", label: "Peshwas" },
  { value: "Pret", label: "Pret" },
  { value: "Printed Lawn", label: "Printed Lawn" },
  { value: "Saree", label: "Saree" },
  { value: "Shirts", label: "Shirts" },
  { value: "Silk", label: "Silk" },
  { value: "Trousers", label: "Trousers" },
  { value: "Unstiched Dress", label: "Unstiched Dress" },
];

const conditionOptions = [
  { value: "New", label: "New" },
  { value: "Used", label: "Used" },
];

const serviceOptions = [
  { value: "Within City", label: "Within City" },
  { value: "Accross Country", label: "Accross Country" },
  { value: "Worldwide Delivery", label: "Worldwide Delivery" },
];

const priceTypeOptions = [
  { value: "Fixed", label: "Fixed" },
  { value: "Price on call", label: "Price on call" },
  { value: "Negotiable", label: "Negotiable" },
  { value: "Sale", label: "Sale" },
];

const salePercentageOptions = [
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" },
  { value: "60", label: "60" },
  { value: "70", label: "70" },
];

const stateOptions = [
  { value: "Balochistan", label: "Balochistan" },
  { value: "Gilgit Baltistan", label: "Gilgit Baltistan" },
  { value: "Kashmir", label: "Kashmir" },
  { value: "Khyber Pakhtunkhwa", label: "Khyber Pakhtunkhwa" },
  { value: "Punjab", label: "Punjab" },
  { value: "Sindh", label: "Sindh" },
];

const typeOptions = [
  { value: "Dealer", label: "Dealer" },
  { value: "Individual", label: "Individual" },
];

export {
  categoryOptions,
  conditionOptions,
  serviceOptions,
  priceTypeOptions,
  salePercentageOptions,
  stateOptions,
  typeOptions,
  bagsCategory,
  bedsheetsCategory,
  carpetCategory,
  coronavirusCategory,
  coverCategory,
  fashionCategory,
  footwearCategory,
  jewelleryCategory,
  kidsCategory,
  mensCategory,
  womensCategory,
};
