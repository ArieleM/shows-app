import axios from 'axios';

export default axios.create({
  baseURL:"http://931cb297dd96.ngrok.io",
  headers:{
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNlbmhhIiwiaWF0IjoxNTk2ODQzMTk0LCJleHAiOjE1OTY4NjExOTR9.IMrqS_Avr9uZeIkoiP-iLK7BXZ-XsuHDqCxi5O-Ehkc"
  }
});