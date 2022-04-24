import axios from 'axios'
import {useState, useEffect} from 'react'


const baseURL = 'http://localhost:5000/api'
export const publicRequest = axios.create({
  baseURL: baseURL
})
