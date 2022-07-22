const database = {
    fish: [
        {
            name: "Sampson",
            species: "Devil's Hole Pupfish",
            length: 2,
            location: "Devil’s Hole, Death Valley National Park Nevada, USA",
            food: "Tacos"
        },
        {
            name: "Skrillah",
            species: "Sakhalin Sturgeon",
            length: 14,
            location: "The Tumnin or Datta river, northern Japan, Korea, and the Bering Sea",
            food: "Tiny Insects"
        },
        {
            name: "Blort",
            species: "Red Handfish",
            length: 2,
            location: "Hobart’s Frederick Henry Bay, Eastern Tasmania",
            food: "Other Red Handfish"
        },
        {
            name: "Dory",
            species: "Adriatic Sturgeon",
            length: 12,
            location: "The Eastern Adriatic Sea and the coast of Italy",
            food: "Funions"
        },
        {
            name: "Kyle",
            species: "Tequila Splitfin",
            length: 2,
            location: "A small spring pool in Rio Teuchitlan, Mexico",
            food: "Patron"
        }
       
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}