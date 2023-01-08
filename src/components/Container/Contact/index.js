import './index.css'

const Contact = ()=>{

    return(
        <div className="contact-div" data-aos="fade-up">
            <h3 className="title">10.💬 Contact Me</h3>
           <form className="contact">
           <input type="text" name="name" placeholder="Name" required/>
           
            <input type="email" name="email" placeholder="Email" required/>
            <textarea required placeholder="Message"></textarea>
            <button>Send</button>
            </form>

        </div>
    )
}
export default Contact