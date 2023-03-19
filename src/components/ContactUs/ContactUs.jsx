import React from 'react'

export default function ContactUs() {
  return (
    <div className='h-100 container mt-5 pt-5 px-4'>
      <h2 className='m-5 pt-5'>Contact us</h2>
      <div className="row gx-5">
        <div className="col">
          <div className=" row gx-1 mb-4 text-center">
            <div className="col pt-3 shadow-lg p-3 bg-body-tertiary rounded">
              <i class="fa-solid fa-location-dot fs-3 p-3 border rounded-circle"></i>
              <h3>Our Address</h3>
              <p>Assuit University</p>
            </div>
          </div>
          <div className=" row gx-1 p-1 text-center">
            <div className="col pt-3 shadow-lg p-3 bg-body-tertiary rounded me-3">
              <i className="fa-regular fa-envelope fs-3 p-3 border rounded-circle"></i>
              <h3>Email Us</h3>
              <p>info@example.com</p>
            </div>
            <div className="col pt-3 shadow-lg p-3 bg-body-tertiary rounded">
              <i className="fa-solid fa-phone-volume fs-3 p-3 border rounded-circle"></i>
              <h3>Call Us</h3>
              <p>+201111111111</p>
            </div>
          </div>

        </div>
        <div className="col shadow-lg p-3 bg-body-tertiary rounded">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label ms-3">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label ms-3">Subject</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label ms-3">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="d-flex justify-content-center">
            <input class="btn btn-submit" type="submit" value="Send Message"></input>
          </div>
        </div>

      </div>
    </div>
  )
}
