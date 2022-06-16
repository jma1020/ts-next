import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

function Details() {
  const router = useRouter()

  const aaa = useRef<any>(null)
  useEffect(() => {
  //   router.beforePopState((url)=>{
  //     console.log(aaa.current?.value)
  //     console.log('여긴 디테일')
  //     history.pushState(null, "", location.href);
  //     window.addEventListener("popstate", () => {
  //       if(aaa.current?.value){
  //         history.pushState(null, "", location.href)  
  //       }
  //       else history.back()
  //       });
  //     console.log(url)
  //     return false
  // })
  console.log(location.href)
    history.pushState(null, "", location.href);
    window.addEventListener("popstate", () => {
      if(aaa.current?.value){
        history.pushState(null, "", location.href)  
        console.log('ㅁㄴㅇㅁㄴㅇ')
      }
      else history.back()
      });
      
  },[])
  
  

  const dd = () =>{
    router.push('/router-before/qqqqq')
  }

  return (
    <div>디테일
      <input type="text" name="" id="" ref={aaa}></input>
      <button onClick={dd}>디테일 버튼{router.pathname}</button>
    </div>
  )
}

export default Details

