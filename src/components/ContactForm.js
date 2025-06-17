export default function ContactForm() {
  return (
    <div className="contact-section">
      <h2>Contact us</h2>
      <div className="contact-form-wrapper">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone number" />
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}