import "./form.scss"

export default function Form(props) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </section>
        <section>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
        </section>
        <section>
          <button type="submit">Submit</button>
        </section>
        <section>
          <div className="form__footer">
            By continuing, you agree to Chillspace's{" "}
            <a href="#">Terms &amp; Conditions</a> and Privacy Policy
          </div>
        </section>
      </form>
    </div>
  )
}
