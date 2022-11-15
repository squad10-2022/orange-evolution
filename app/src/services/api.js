import axios from "axios"

const apiOrangeJuice = axios.create ({
    baseURL: "https://orangeevolution.onrender.com/"
})

export default apiOrangeJuice