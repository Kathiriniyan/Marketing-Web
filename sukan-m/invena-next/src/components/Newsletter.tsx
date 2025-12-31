const Newsletter = () => {
    return (
        <div className="row">
          <div className="col-12">
            <div className="rts-cta-wrapper">
              <div className="background-cta">
                <div className="row">
                  {/* cta-left */}
                  <div className="col-lg-6">
                    <div className="cta-left-wrapepr">
                      <p className="cta-disc">Latest Business Ideas</p>
                      <h3 className="title animated fadeIn">Sign Up Newsletter</h3>
                    </div>
                  </div>

                  {/* cta-right */}
                  <div className="col-lg-6">
                    {/* Keep HTML-like form. No React handlers in Server Component */}
                    <form className="cta-input-arae" action="#" method="post">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                        required
                      />
                      <button type="submit" className="rts-btn btn-primary">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Newsletter;
