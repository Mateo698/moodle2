import { useRouter } from "next/router"
export default function hanlder(){
    const router = useRouter()
    const data = router.query

    function onCreateClick(e){
        location = "/testform"
    }

    return(
        <div>
            <h1>Teacher: {data.teacher}</h1>
            <div>
                <h2>Create new tests</h2><button onClick={onCreateClick}>Create</button>
            </div>
            <div>

            </div>
        </div>
    )
}