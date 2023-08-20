import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7dffe13c638b414b8471f1387620731f'
    }
})