const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "once-in-ho.jpg",
        "title": "Once Upon a Time... in Hollywood",
        "description": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
        "genre": "Comedy/Drama",
        "rating": 5,
        "price": 140
    },
    {
        "id": crypto.randomUUID(),
        "cover": "marriage-strory.jpg",
        "title": "Marriage Story",
        "description": "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
        "genre": "Comedy/Drama",
        "rating": 3,
        "price": 90
    },
    {
        "id": crypto.randomUUID(),
        "cover": "pain-and-gain.jpg",
        "title": "Pain & Gain",
        "description": "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
        "genre": "Action/Comedy/Crime/Drama",
        "rating": 4,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "parasite.jpg",
        "title": "Parasite",
        "description": "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
        "genre": "Comedy, Drama, Thriller",
        "rating": 4,
        "price": 250
    },
    {
        "id": crypto.randomUUID(),
        "cover": "iron-man.png",
        "title": "Iron Man",
        "description": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
        "genre": "Action/Adventure/Sci-fi",
        "rating": 5,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "shawshank.webp",
        "title": "The Shawshank Redemption",
        "description": "Two inmates bond over years in prison, finding solace and purpose in their friendship, ultimately leading one toward freedom through acts of kindness and resilience.",
        "genre": "Drama",
        "rating": 5,
        "price": 120
    },
    {
        "id": crypto.randomUUID(),
        "cover": "forestGump.jpg",
        "title": "Forrest Gump",
        "description": "A man with a unique view of life experiences monumental historical events and inspires everyone around him with his kindness and genuine outlook.",
        "genre": "Drama/Romance",
        "rating": 5,
        "price": 110
    },
    {
        "id": crypto.randomUUID(),
        "cover": "the-silence-of-the-lambs.jpg",
        "title": "The Silence of the Lambs",
        "description": "A young FBI trainee seeks the help of a manipulative, imprisoned serial killer to catch another active killer targeting young women.",
        "genre": "Thriller/Crime",
        "rating": 5,
        "price": 115
    },
    {
        "id": crypto.randomUUID(),
        "cover": "schindlers-list.webp",
        "title": "Schindler's List",
        "description": "During WWII, a businessman unexpectedly finds himself protecting hundreds of Jews from Nazi persecution, risking his own safety to save innocent lives.",
        "genre": "Biography/Drama/History",
        "rating": 5,
        "price": 130
    },
    {
        "id": crypto.randomUUID(),
        "cover": "goodfellas.jpg",
        "title": "Goodfellas",
        "description": "A young man rises through the ranks of a New York mob, only to experience betrayal, tragedy, and the consequences of his choices.",
        "genre": "Crime/Drama",
        "rating": 5,
        "price": 120
    },
    {
        "id": crypto.randomUUID(),
        "cover": "saving-private-ryan.jpg",
        "title": "Saving Private Ryan",
        "description": "Amid the chaos of WWII, soldiers risk their lives on a mission to locate and bring home a paratrooper whose brothers have perished.",
        "genre": "War/Drama",
        "rating": 5,
        "price": 130
    },
    {
        "id": crypto.randomUUID(),
        "cover": "pulp-fiction.jpg",
        "title": "Pulp Fiction",
        "description": "The intersecting lives of hitmen, a boxer, and petty criminals unfold in unpredictable ways in this darkly comedic crime drama.",
        "genre": "Crime/Drama",
        "rating": 5,
        "price": 115
    },
    {
        "id": crypto.randomUUID(),
        "cover": "braveheart.jpg",
        "title": "Braveheart",
        "description": "In a quest for Scotland's freedom, a defiant warrior leads his people against English forces in an epic, historical battle.",
        "genre": "Action/Drama/History",
        "rating": 5,
        "price": 125
    },
    {
        "id": crypto.randomUUID(),
        "cover": "in-the-name-of-the-father.jpg",
        "title": "In the Name of the Father",
        "description": "Wrongly convicted and imprisoned with his father, a man fights tirelessly to prove their innocence against overwhelming odds.",
        "genre": "Biography/Drama",
        "rating": 4,
        "price": 100
    },
    {
        "id": crypto.randomUUID(),
        "cover": "a-beautiful-mind.jpg",
        "title": "A Beautiful Mind",
        "description": "A mathematician's brilliance is challenged by his struggles with schizophrenia, and he finds hope through family support and self-discovery.",
        "genre": "Biography/Drama",
        "rating": 5,
        "price": 120
    },
    {
        "id": crypto.randomUUID(),
        "cover": "se7en.jpg",
        "title": "Se7en",
        "description": "Two detectives face a gruesome mystery as they hunt a serial killer whose twisted motive revolves around the seven deadly sins.",
        "genre": "Crime/Drama/Thriller",
        "rating": 5,
        "price": 110
    },
    {
        "id": crypto.randomUUID(),
        "cover": "gladiator.jpg",
        "title": "Gladiator",
        "description": "A betrayed general seeks revenge in the gladiator arena, striving to reclaim his honor and the lives taken from him.",
        "genre": "Action/Adventure/Drama",
        "rating": 5,
        "price": 130
    }
]

function getAllMovies() {
    return data;
}

export { getAllMovies };