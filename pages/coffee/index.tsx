import React, { useEffect } from "react"
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import { MEDIA_QUERY_ENDPOINT } from "../../shared/constants"
import type { NextPage } from 'next'
import styled from "@emotion/styled"


interface Props {
  data:{
    data: MovieData
    status: string,
    status_message: string
  }
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


const CoffeePage: NextPage<Props> =({data})=> {
  console.log(data)

  return (
    <Container as="section">
      {data.data.movies.map((item: Movie,index: number)=>
        (
          <Link href={`/coffee/${item.id.toString()}`}  passHref  key={`${item.id}`}>
            <CardLink>{item.title}</CardLink>
          </Link>
        )
    )}
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  
  return {
    props: {
      data : data,
    }
  }
}




// export async function getStaticProps(context){
//   const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

//   return {
//     props: {
//       data,
//     }
//   }
// }


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px;
  gap: 60px;
  @media (max-width: ${MEDIA_QUERY_ENDPOINT.TABLE}){
    grid-template-columns: repeat(3,1fr);
  }

  @media (max-width: ${MEDIA_QUERY_ENDPOINT.MOBILE}) {
    grid-template-columns: repeat(2,1fr);
  }
`

const CardLink = styled.a`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  box-sizing: border-box;
  &:hover {
    border: 10px solid white;
    border-radius: 20px;
  
  }
`

export default CoffeePage