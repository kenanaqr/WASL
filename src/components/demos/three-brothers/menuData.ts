/**
 * Three Brothers Restaurant — Menu Data Model
 *
 * Source of truth: supplied physical menu images.
 * Do NOT invent descriptions, claims, or items not present in the source material.
 */

export interface MenuItem {
  name: string;
  price: string;
  /** Secondary price option (e.g. different size) */
  priceAlt?: string;
  /** Price label for alt (e.g. "20pc") */
  priceAltLabel?: string;
  /** Price label for primary (e.g. "12pc") */
  priceLabel?: string;
  /** Brief note from the menu, not invented copy */
  note?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export const threeBrothersMenu: MenuCategory[] = [
  {
    id: 'seafood',
    name: 'Seafood Dinners & Shrimp',
    note: 'Choose any two of the following sides: Fries · Coleslaw · Hush Puppies · Green Beans',
    items: [
      { name: 'Whiting Fish Fillet (2pc)', price: '$12.99' },
      { name: 'Tilapia Fish Fillet (2pc)', price: '$12.99' },
      { name: 'Catfish Fillet (2pc)', price: '$13.99' },
      { name: 'Catfish Nuggets', price: '$13.99' },
      { name: 'Ocean Perch Fillet (2pc)', price: '$13.99' },
      { name: 'Cod Fish Fillet (2pc)', price: '$13.99' },
      { name: 'Alaskan Salmon Fillet (2pc)', price: '$15.99' },
      { name: 'Fried Pan Oysters (6pc)', price: '$13.99' },
      { name: 'Clam Strips 1/2 lb', price: '$13.99' },
      { name: '3 Pairs Frog Legs', price: '$10.99' },
      { name: 'Regular Shrimp', price: '$11.99', priceLabel: '12pc', priceAlt: '$17.99', priceAltLabel: '20pc' },
      { name: 'Jumbo Shrimp', price: '$13.99', priceLabel: '6pc', priceAlt: '$23.99', priceAltLabel: '12pc' },
    ],
  },
  {
    id: 'grilled',
    name: 'Grilled Dinner',
    items: [
      { name: 'Grilled Alaskan Salmon Fillet (2pc)', price: '$18.49' },
      { name: 'Grilled Cajun Shrimps Jumbo (12pc)', price: '$25.49' },
    ],
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches & Burgers',
    note: 'Comes with Fries only',
    items: [
      { name: 'Fish Sandwich', price: '$9.49' },
      { name: '3 Brothers Burger', price: '$12.99' },
      { name: 'Crispy Chicken', price: '$10.49' },
      { name: 'Cheese Burger', price: '$10.49' },
      { name: 'Gyro (Lamb Meat)', price: '$10.49' },
      { name: 'Salmon Fish Sandwich', price: '$11.99' },
      { name: 'Grilled Salmon Sandwich', price: '$12.99' },
      { name: 'Philly Cheesesteak', price: '$11.99' },
      { name: 'Chicken Philly', price: '$11.99' },
      { name: 'Chicken Burrito', price: '$12.99' },
    ],
  },
  {
    id: 'whole-wings',
    name: 'Whole Wings',
    note: 'Add basket of fries for $5.99 · BBQ · Buffalo · Lemon Pepper · Garlic Parmesan',
    items: [
      { name: '4 pc with Fries', price: '$7.99' },
      { name: '6 pc with Fries', price: '$11.99' },
      { name: '10 pc with Fries', price: '$15.99' },
      { name: '20 pc Only', price: '$30.99' },
      { name: '30 pc Only', price: '$45.99' },
      { name: '50 pc Only', price: '$64.99' },
    ],
  },
  {
    id: 'wing-pieces',
    name: 'Wings Pieces',
    note: 'Add basket of fries for $5.99 · BBQ · Buffalo · Lemon Pepper · Garlic Parmesan',
    items: [
      { name: '6 pc with Fries', price: '$8.99' },
      { name: '10 pc with Fries', price: '$11.99' },
      { name: '16 pc Only', price: '$18.99' },
      { name: '25 pc Only', price: '$26.99' },
      { name: '50 pc Only', price: '$50.99' },
    ],
  },
  {
    id: 'tenders',
    name: 'Chicken Tenders',
    note: 'Comes with 1 side',
    items: [
      { name: '3 pc', price: '$9.49' },
      { name: '4 pc', price: '$11.99' },
      { name: '6 pc', price: '$14.99' },
    ],
  },
  {
    id: 'combos',
    name: 'Value Meals',
    items: [
      {
        name: 'Meal for Two',
        price: '$21.99',
        note: 'Your choice of 4 pieces of fish (White, Whiting, Tilapia or Perch) with 2 small fries & 2 small coleslaw',
      },
      {
        name: '3 Brothers Feast',
        price: '$20.99',
        note: '2 pieces of fish (White, Whiting, Tilapia or Perch) with 4 Jumbo Shrimps & 4 Oysters · Served with Fries & Coleslaw',
      },
      {
        name: '3 Brothers Combo',
        price: '$18.99',
        note: 'Your choice of 2 items: 2pc White, 2pc Whiting, 2pc Perch, 2pc Chicken Tenders, 4pc Wings or 8pc Regular Shrimps · Served with Fries & Coleslaw',
      },
    ],
  },
  {
    id: 'fish-by-piece',
    name: 'Fish by the Piece',
    items: [
      { name: 'Cat Fish (12pc)', price: '$49.49' },
      { name: 'Ocean Perch (12pc)', price: '$44.99' },
      { name: 'Whiting (12pc)', price: '$38.99' },
      { name: 'Tilapia (12pc)', price: '$38.99' },
    ],
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { name: 'Fresh Fried Green Tomatoes', price: '$5.99' },
      { name: 'Crab Cake', price: '$4.99' },
      { name: 'Breaded Cauliflower', price: '$5.99' },
      { name: 'Breaded Mushrooms (8 pc)', price: '$5.99' },
      { name: 'Breaded Okra', price: '$5.99' },
      { name: 'Onion Rings - Hand Made (8 pc)', price: '$5.99' },
      { name: 'Italian Cheese Sticks (5 pc)', price: '$5.99' },
      { name: 'Fried Pickles (handmade)', price: '$5.99' },
      { name: 'Jalapeño Poppers (5 pc)', price: '$5.99' },
      { name: 'Chicken Nachos', price: '$9.99' },
      { name: 'Fries Supreme', price: '$9.49' },
      { name: 'Pizza Puff', price: '$4.99' },
      { name: "Mac n' Cheese", price: '$3.49' },
      { name: 'Hush Puppies (8pc)', price: '$4.99' },
    ],
  },
  {
    id: 'sides',
    name: 'Sides',
    items: [
      { name: 'French Fries', price: '$2.99', priceLabel: 'Small', priceAlt: '$4.99 / $7.99', priceAltLabel: 'Large / Box' },
      { name: 'Hush Puppies', price: '$2.99', priceLabel: '4 pc', priceAlt: '$4.99', priceAltLabel: '8 pc' },
      { name: 'Coleslaw', price: '$1.99', priceLabel: 'Small', priceAlt: '$4.99', priceAltLabel: 'Large' },
      { name: 'Green Beans', price: '$1.99', priceLabel: 'Small', priceAlt: '$4.99', priceAltLabel: 'Large' },
    ],
  },
  {
    id: 'salads',
    name: 'Salads',
    items: [
      { name: 'Caesar Salad', price: '$7.99', priceLabel: 'Small', priceAlt: '$10.49', priceAltLabel: 'Large' },
      { name: 'Garden Salad', price: '$6.99', priceLabel: 'Small', priceAlt: '$9.49', priceAltLabel: 'Large' },
    ],
  },
  {
    id: 'kids',
    name: 'Kids Menu',
    note: 'Comes with Fries & Juice',
    items: [
      { name: 'Cheese Burger', price: '$7.99' },
      { name: '2 pc Wings', price: '$7.99' },
      { name: '2 pc Tenders', price: '$7.99' },
      { name: '6 pc Nuggets', price: '$6.99' },
      { name: '8 pc Nuggets', price: '$9.99' },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    items: [
      { name: 'Can Drinks', price: '$1.49' },
      { name: 'Bottled Drinks', price: '$1.99' },
      { name: 'Flavored Drinks', price: '$2.49' },
      { name: "Lady J's Lemonade", price: '$4.99' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    note: 'All desserts $4.99',
    items: [
      { name: 'Lemon Cake', price: '$4.99' },
      { name: 'Oreo Cheese Cake', price: '$4.99' },
      { name: 'Carrot Cake', price: '$4.99' },
      { name: 'Triple Chocolate Cake', price: '$4.99' },
      { name: 'Strawberry Cheese Cake', price: '$4.99' },
      { name: 'Red Velvet Cake', price: '$4.99' },
      { name: 'Banana Pudding', price: '$4.99' },
    ],
  },
];

/** Add-on pricing from the menu */
export const menuAddOns = [
  'Add 1 pc Wing — $2.49',
  'Add 1 pc Tender — $2.49',
  'Add 1 pc Fillet — $5.99',
  'Add (6pc) Jumbo Shrimp — $10.99',
  'Add (8pc) Regular Shrimp — $5.99',
  'Add (4pc) Oyster — $9.49',
];

/** Restaurant info from the menu & digital positioning */
export const restaurantInfo = {
  name: 'Three Brothers Restaurant',
  tagline: 'Seafood, Chicken & More.',
  subtitle: 'Made to Order.',
  motto: 'Every meal is Made to Order.',
  locationContext: 'Three Brothers Restaurant · Louisville, KY',
  cityState: 'Louisville, KY',
  phone: '502-409-7447',
  address: {
    street: '2001 7th Street Rd',
    city: 'Louisville',
    state: 'KY',
    zip: '40208',
  },
  hours: {
    monThu: '11 AM - 10 PM',
    fri: '11 AM - 11 PM',
    sat: '11 AM - 10 PM',
    sun: 'CLOSED',
  },
  services: ['Dine In', 'Carry Out', 'Delivery'],
  delivery: ['Uber Eats', 'DoorDash', 'Postmates'],
  features: ['Catering Available', 'We use 100% Pure Vegetable Oil'],
};
