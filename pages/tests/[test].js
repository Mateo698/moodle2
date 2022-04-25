import { useRouter } from "next/router"

export default function(){
    const router = useRouter()
    const id = router.query
    console.log(id.test)

    return(

        <h1>Exam id: {id.test}</h1>
    )
}