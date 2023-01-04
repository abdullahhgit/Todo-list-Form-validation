import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';
import {useQuery} from "@tanstack/react-query";
import { Axios } from 'axios';

const Home = () => {
    const {user} = useContext(AppContext);
    const {data} = useQuery(["cat"], () => {
            return (Axios.get("https://catfact.ninja/fact").then((res) => res.data));
    });
  return (
    <div>
      <h1>This is Home page and The User is : {user}</h1>
      Hello <h1>{data?.fact}</h1>
    </div>
  )
}

export default Home
