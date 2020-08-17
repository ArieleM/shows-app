import axios from 'axios';

export default axios.create({
  baseURL:"http://a4d4684c19aa.ngrok.io",
  headers:{
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InNlbmhhIiwiaWF0IjoxNTk3NjkwNTI1LCJleHAiOjE1OTc3MDg1MjV9.S9mV5MIn5zDbnQ24cdqKJlxie4Hgf-3uwIuyzrYATd8"
  }
});