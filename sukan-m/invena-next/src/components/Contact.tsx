"use client";

import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-40 appoinment-area-start rts-section-gapBottom" id="contact">
      <div className="container">
        <div className="row align-items-center">

          {/* FORM */}
          <div className="col-lg-7 order-2 order-lg-1">
            <div className="appoinment-wrapper-one-start">
              <div className="title-style-two mb--40 left">
                <span className="bg-content">Hello</span>
                <span className="pre">Make An Appointment</span>
                <h2 className="title">Request a enquiry</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="single-input-wrapper">
                  <div className="single-input">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="single-input">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="single-input rounded">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="single-input mb--30">
                  <textarea
                    name="message"
                    placeholder="Type Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  className="rts-btn btn-primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>

          {/* IMAGE */}
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="appoinment-thumbnail text-center mb-4 mb-lg-0">
              <Image
                src="/assets/images/appoinment/10.webp"
                alt="appoinment"
                width={700}
                height={700}
                className="img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
