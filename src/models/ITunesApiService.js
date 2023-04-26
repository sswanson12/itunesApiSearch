import axios from "axios";
import MediaFactory from "@/models/MediaFactory";

export default class ITunesApiService {
    static search(keyword){
        let results = [];

        // Changes spaces input by user to pluses to work with iTunes API.
        keyword = keyword.split(' ').join('+');

        axios.get('https://itunes.apple.com/search?term='+keyword+'&limit=36')
            .then((response) => {
                response.data.results.forEach((result) => results.push(MediaFactory.createMedia(result)));
            });

        return results;
    }
}