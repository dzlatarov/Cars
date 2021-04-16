import axios from 'axios'

export default axios.create({
    baseURL: 'https://apis.solarialabs.com/shine/v1/vehicle-stats'
});