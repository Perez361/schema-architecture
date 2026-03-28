"use client";
import { useFadeUp } from "./useFadeUp";

export default function Appointment() {
  const refLeft = useFadeUp();
  const refRight = useFadeUp();

  return (
    <section className="container-xxl py-5">
      <div className="appointment-grid">
        {/* Left info */}
        <div ref={refLeft} className="fade-up">
          <h4 className="section-title">Appointment</h4>
          <h1 style={{ color: "#152044", margin: ".75rem 0 1rem", fontSize: "clamp(1.4rem,3vw,2rem)" }}>
            Make An Appointment To Start Your Dream Project
          </h1>
          <p style={{ marginBottom: "1.5rem" }}>
            Start your dream project with us. Schedule an appointment today!
          </p>
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa fa-phone-alt" />
            </div>
            <div className="contact-info">
              <p>Call Us Now</p>
              <h3>+233 55 426 5273</h3>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <i className="fa fa-envelope-open" />
            </div>
            <div className="contact-info">
              <p>Mail Us Now</p>
              <h3>info@shemaarchitecture.com</h3>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div ref={refRight} className="fade-up">
          <div className="form-grid">
            <input className="form-control" type="text" placeholder="Your Name" style={{ height: 55 }} />
            <input className="form-control" type="email" placeholder="Your Email" style={{ height: 55 }} />
            <input className="form-control" type="tel" placeholder="Your Mobile" style={{ height: 55 }} />
            <select className="form-select form-control" style={{ height: 55 }}>
              <option>Choose Service</option>
              <option>Architectural Drawing</option>
              <option>3D Animation</option>
              <option>Structural Drawing</option>
            </select>
            <input className="form-control" type="date" placeholder="Choose Date" style={{ height: 55 }} />
            <input className="form-control" type="time" placeholder="Choose Time" style={{ height: 55 }} />
            <div className="full">
              <textarea className="form-control" rows={5} placeholder="Message" />
            </div>
            <div className="full">
              <button className="btn btn-primary" style={{ width: "100%", padding: ".85rem" }}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
