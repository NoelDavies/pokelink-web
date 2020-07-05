var themeSettings = {
    theme: {
        name: 'pokeball',
    },

    pokeImg: {
        eggType: 'animated',
        fileType: 'svg',
        useDexNumbers: true,

        routeColor: params.get( 'route_color' ) ? true : false,
        pokemonColor: params.get( 'pokemon_color' ) ? true : false,
        typeColor: params.get( 'type_color' ) ? true : false,
    },

    imgPaths: {
        normal: 'https://www.cpokemon.com/pokes/dream-world/',
        shiny: 'https://www.cpokemon.com/pokes/dream-world/',
        party: 'https://www.cpokemon.com/pokes/dream-world/',
        animatedEgg: 'https://pokelink.cybershade.org/assets/sprites/egg.gif',
        staticEgg: 'https://pokelink.cybershade.org/assets/sprites/egg.png',
        missingno: 'https://pokelink.cybershade.org/assets/sprites/missingno.png',
        unknown: 'https://pokelink.cybershade.org/assets/sprites/',
        badges: 'https://pokelink.cybershade.org/assets/sprites/badges/',
        status: 'https://pokelink.cybershade.org/assets/sprites/status/',
        types: 'https://pokelink.cybershade.org/assets/sprites/types/',
        items: 'https://pokelink.cybershade.org/assets/sprites/items/',
    },
};