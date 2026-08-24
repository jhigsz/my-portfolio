export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Name: </label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div>
            <label>Message: </label>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }