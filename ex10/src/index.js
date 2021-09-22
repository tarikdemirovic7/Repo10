function myFunction() {
    var myMusic = {
    001: {
        artist: "Billy Joel",
        title: "Piano Man",
        release_year: 1973,
        formats: {
            1: "CD",
            2: "8T",
            3: "LP"
        },
        gold: true
    },
    002: {
    // Add a record here
    artist: "Artist1",
    title: "Title1",
    release_year: 1999,
    formats: {
        1: "XX",
        2: "YY",
        3: "ZZ"
        },
        gold: false
    }
    };
    return myMusic;
}
myFunction()[2]
module.exports = myFunction;