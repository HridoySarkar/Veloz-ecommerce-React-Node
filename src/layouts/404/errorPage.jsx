import '../404/style.css'
import "../../App.css"
import React from 'react'

const error404 = () => {
  return (
    <div>
    <section className="page_40">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <a href="/" className="link_404 text-decoration-none">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}



export default error404;