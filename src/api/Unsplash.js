import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:'Client-ID uKvXKpt-BD6RBs8IfJZmv-GQjuEZgvTySJ9oSV1MDl0'
    }
})