import { useRouter } from "next/router"

export default function(){
    const router = useRouter()
    const id = router.query
    console.log(id.test)
    handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
      };
    return(

       // <h1>Exam id: {id.test}</h1>
        <div className="radio-buttons">
        Windows
        <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
        Mac
        <input
          id="mac"
          value="mac"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
        Linux
        <input
          id="linux"
          value="linux"
          name="platform"
          type="radio"
          onChange={this.handleChange}
        />
      </div>
    )
}