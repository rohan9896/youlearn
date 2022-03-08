import axios from "axios";

const base_url = `https://youlearn-api.herokuapp.com/api/v1`;

export const getGenres = async () => {
    try {
        const response = await axios({
            method: "GET",
            url: base_url+"/common/genres",
        });
        return response.data.data;
    } catch(error) {
        //TODO - add toast
    }
}