import axios from 'axios';
import { TRIPS_API_URI } from 'constants/vars'

export default axios.create({
  baseURL: TRIPS_API_URI
});