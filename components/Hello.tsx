import { GetServerSideProps } from "next"
import axios from "axios"

const Hello = (props:any) => {
  console.log(props)
  return (
    <div>
      헬로 컴포넌트 입니다. 
    </div>
  )
}


export const getSeverSideProps: GetServerSideProps = async() => {
  const {data} = await axios.get(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)

  return {
    props: {
      data
    }
  }
}

export default Hello