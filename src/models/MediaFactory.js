import { Movie, Podcast, Music, MusicVideo, AudioBook, Software, TvShow, EBook } from '@/models/Media.js';

export default class MediaFactory {
    // Factory to create object models for results returned by iTunes Search API.
    static createMedia(iTunesApiJsonObject){
        if (iTunesApiJsonObject.wrapperType === 'track') {
            switch (iTunesApiJsonObject.kind) {
                case 'feature-movie':
                    return Object.assign(new Movie(), iTunesApiJsonObject);
                case 'podcast':
                    return Object.assign(new Podcast(), iTunesApiJsonObject);
                case 'song':
                    return Object.assign(new Music(), iTunesApiJsonObject);
                case 'music-video':
                    return Object.assign(new MusicVideo(), iTunesApiJsonObject);
                case 'software':
                    return Object.assign(new Software(), iTunesApiJsonObject);
                case 'tv-episode':
                    return Object.assign(new TvShow(), iTunesApiJsonObject);

            }
        } else if (iTunesApiJsonObject.wrapperType === 'audiobook') {
            return Object.assign(new AudioBook(), iTunesApiJsonObject);
        } else if (iTunesApiJsonObject.kind === 'ebook') {
            return Object.assign(new EBook(), iTunesApiJsonObject);
        }
    }
}