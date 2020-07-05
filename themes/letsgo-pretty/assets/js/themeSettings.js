var themeSettings = {
    theme: {
        name: 'letsgo',
    },

    pokeImg: {
        eggType: 'static',

        routeColor: false,
        pokemonColor: false,
        typeColor: true,
        // false to disable, can be a hex color, can be an rgb or rgba value, can also be an html color name
        // like red, or pink etc... https://htmlcolorcodes.com/ works as a color picker
        staticColor: false,

        // switch to columns instead of rows
        verticalPokemon: true,
        // will use species name instead (eg Bulbasaur.gif instead of 1.gif),
        useDexNumbers: false,
        // valid image types include: gif, jpg, jpeg, png etc
        fileType: 'png',
        showHeldItem: false, // settings.pokeImg.showHeldItem
    },

    imgPaths: {
        // normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/gen8/animated/',
        normal: 'https://pokelink.cybershade.org/assets/sprites/pokemon/home/normal/',
    },

    letsgo: {
        colorPokeball: false,
        colorBothSidesPokeball: false,
        colorBorder: false,
        colorBg: true,
    }
};