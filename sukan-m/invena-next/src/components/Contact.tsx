import Image from "next/image";

export default function Contact() {
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

              <form action="#" method="post">
                <div className="single-input-wrapper">
                  <div className="single-input">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="single-input">
                    <input type="number" placeholder="Your Phone" />
                  </div>
                </div>

                <div className="single-input rounded">
                  <input type="mail" placeholder="Your E-mail" />
                </div>

                <div className="single-input mb--30">
                  <textarea placeholder="Type Your Message"></textarea>
                </div>

                <button className="rts-btn btn-primary" type="submit">
                  Submit Message
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
