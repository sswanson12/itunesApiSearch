class Media {
    static type = 'Media';

    get type() {
        return this.type;
    }

    trackName = undefined;
    artistName = undefined;
    artworkUrl100 = undefined;
}

class Movie extends Media {
    type = 'Movie';

    trackTimeMillis = undefined;
    shortDescription = undefined;
    longDescription = undefined;
    primaryGenreName = undefined;
    contentAdvisoryRating = undefined;

}

class Podcast extends Media {
    type = 'Podcast';

    trackTimeMillis = undefined;
    genres = undefined;
    contentAdvisoryRating = undefined;

}

class Music extends Media {
    type = 'Music';

    trackExplicitness = undefined;
    trackTimeMillis = undefined;
    primaryGenreName = undefined;
}

class MusicVideo extends Media {
    type = 'MusicVideo';

    trackExplicitness = undefined;
    trackTimeMillis = undefined;
    primaryGenreName = undefined;
}

class AudioBook extends Media {
    type = 'AudioBook';

    collectionName = undefined;
    description = undefined;
    primaryGenreName = undefined;
    collectionExplicitness = undefined;
}

class Software extends Media {
    type = 'Software';

    genres = undefined
    averageUserRating = undefined;
    trackContentRating = undefined;
}

class TvShow extends Media {
    type = 'TvShow';

    contentAdvisoryRating = undefined;
    shortDescription = undefined;
    longDescription = undefined;
    primaryGenreName = undefined;
}

class EBook extends Media {
    type = 'EBook';

    genres = undefined;
    description = undefined;
}

export { Media, Movie, Podcast, Music, MusicVideo, AudioBook, Software, TvShow, EBook}