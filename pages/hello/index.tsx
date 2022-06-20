import axios from "axios"
import React from "react"
import Hello from "../../components/Hello"
import { GetStaticProps } from "next"

function HelloPage({data}:any) {
  console.log(data)
  return (
    <Hello />
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

  return {
    props: {
      data
    }
  }
}
export default HelloPage