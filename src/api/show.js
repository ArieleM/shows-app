import axios from 'axios';

export default axios.create({
  baseURL:"http://7717be36c33a.ngrok.io",
  headers:{
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNlbmhhIiwiaWF0IjoxNTk2NzUwOTA4LCJleHAiOjE1OTY3Njg5MDh9.8PrnStj1Y3vKZ-Sss5B61UgfySjMq48Kf2DgDKqzX28"
  }
});