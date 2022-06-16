import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Test() {
  const router = useRouter()

  useEffect(()=>{
    console.log('test useEffect')
    router.beforePopState((url)=>{
      console.log(url)
      console.log('여긴 test')
      return false
  })
  })
  
  const route = () =>{
    router.push('/router-before/asda')
  }
  return (
    <div>테스트

      <button onClick={route}>sadsa</button>

    </div>
  )
}

export default Test