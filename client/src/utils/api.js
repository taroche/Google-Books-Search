import Axios from "axios";
const apiKey = "AIzaSyBtCCiV0sxQ4CrYgr7nxilKaQJRjR5NFIw"

export default {

    getBooks: function (books) {
        return Axios.get(`https://www.googleapis.com/books/v1/search?q=harrypotter&key=${apiKey}`)
    }
}