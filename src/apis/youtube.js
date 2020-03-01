import axios from 'axios';

const KEY = "AIzaSyAIKJWQQu3m_SogAbVGVRhqLJm8JLktYDs";

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
  }



})