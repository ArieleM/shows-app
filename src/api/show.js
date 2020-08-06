import axios from 'axios';

export default axios.create({
  baseURL:"http://643e868b0331.ngrok.io",
  headers:{
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNlbmhhIiwiaWF0IjoxNTk2Njc2NDE2LCJleHAiOjE1OTY2OTQ0MTZ9.xGTVmqfotyyswwNSzmFfwyKx7191kaESPp3Sm04qV0M"
  }
});