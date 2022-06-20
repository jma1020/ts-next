import React, { useEffect } from "react"
import axios from 'axios'
import { GetStaticPaths, GetStaticProps,GetServerSideProps } from "next"
import styled from "@emotion/styled"


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


function Detail() {

  return(
    <div>
      디테일이다
    </div>
  )
}



export const getStaticPaths: GetStaticPaths = async () => { 
  const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

  function idParamsAll() {
    return data.data.movies.map((item:Movie)=>{
      return {
        params: {
          id: item.id.toString()
        }
      }
    })
  }
  const paths = idParamsAll()
  return {
    paths,
    fallback: false
  }
  
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const {data} = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${params?.id}`)

  return {
    props: {
      data
    }
  }
}



export default Detail