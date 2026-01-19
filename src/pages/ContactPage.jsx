import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Contact />
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Dev Patel. All rights reserved.
        </div>
      </footer>
    </>
  );
}
