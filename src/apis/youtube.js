import axios from 'axios';
const KEY = 'AIzaSyCmkyqBrE6HkrUxgNPn3clN6RKFpQOrR4U';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
