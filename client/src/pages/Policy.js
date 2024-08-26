import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            When you visit our website, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device.
          </p>
          <p>
            We may also collect information about how you interact with our
            website, such as the pages you visit and the links you click.
          </p>
          <p>
            We use the information we collect to: Process your orders Provide
            customer support Send you marketing emails (you can opt out at any
            time)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
