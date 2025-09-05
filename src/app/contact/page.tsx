"use client";


const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-anim min-h-screen scroll-section container mx-auto px-4 py-14"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4">Feel free to reach out via email or social media!</p>
      <div className="flex gap-4">
        <button className="btn btn-primary">Email</button>
        <button className="btn btn-secondary">LinkedIn</button>
      </div>
    </section>
  );
};

export default Contact;
