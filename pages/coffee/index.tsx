import React, { useEffect } from "react"
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from "next"

interface Props {
  data: MovieData
  status: string,
  status_message: string
}

interface MovieData {
  limit: number,
  movie_count: number,
  movies: Movie[],
  page_number: number
}

interface Movie {
  background_image : string,
  genres: string[],
  data_uploaded: string,
  rating: number,
  id: number,
  title: string,
  year: number,
  summary: string
}
// interface 


 function CoffeePage({data} :Props) {
  console.log(data)


  return (
    <div>
      {data.data.movies.map((item: Movie,index: number)=>{
        return(
          <h1 key={index}>{item.title}</h1>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async  (context) => {
  const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

  return {
    props: {
      data,
    }
  }
}



export default CoffeePage