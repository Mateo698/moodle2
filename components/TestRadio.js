export default function TestRadio(props){


    return(
        <div>
            <input type="radio" id="contactChoice1"
            name="contact" value="email" onClick={props.onClick}></input><label for="contactChoice1">Email</label>
        </div>
    )
}