import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {


    try {
        await axios.post(`${url}/add`, data)
        console.log(data);

    } catch (error) {
        console.log("error to  post the request to database", error)
    }
}

export const getUsers = async() => {
    try {
        let response = await axios.get(`${url}/users`)
        return response.data
        console.log(response.data)
    } catch (error) {
        console.log("erroe to get the data from database ", error)
    }
}
