const state = {   
   
   users: { username: "", password: "" },
    listings: [
        {
           id: 1,
          name:"Baker St. Pub and Grill",
           description: "Convivial Sherlock Holmes-themed destination offering draft beer & a menu of bar food staples.",
           hours:"Monday - Sunday | 11 AM - 2 AM",
            address:"3003 S Lamar Blvd, Austin, TX 78704",
        },
        {
         id: 2,
           name:`Veracruz All Natural`,
           description: "Food Truck outside of Radio Coffee & Beer serving homemade Mexican tacos and snacks. ",
           hours:"Monday - Sunday | 7 AM - 11 PM",
           address:"4208 Menchaca Rd, Austin, TX 78704"
        },
        {
           id: 3,
           name:"Dong Nai",
           description:"Strip-mall eatery offering a large menu of Vietnamese & Chinese dishes in a simple but modern space.",
            hours:"Wednesay - Monday | 11 AM - 9 PM",
           address:"4211 S Lamar Blvd E-1, Austin, TX 78704"
        },
        {
         id: 4,
         name:"Sap's Ver Fine Thai Cuisine",
           description:"Cheery eatery with colorful umbrellas on the ceiling & a menu of classic Thai entrees & desserts.",
           hours:"Monday - Sunday | 11 AM - 3 AM",
           address:"4514 West Gate Blvd, Austin, TX 78745"
        },
        {
            id:5,
            name:"Deckhand Oyster Bar and Seafood",
           description:"Casual seafood eatery serving fresh and fried seafood as well as Thai cuisine in nautical themed surroundings. ",
           hours:"Monday - Sunday | 11 AM - 10 PM",
           address:"4211 S Lamar Blvd C-1, Austin, TX 78704"
        }
    ]
  };
  
  export default state;
