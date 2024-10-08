import React from 'react'
import '../heroBanner/heroBanner.css'

const HeroBanner = props => {
  return (
    <section className="css-1mitaq5 e1gathm30">
    <div className="main-wrapper">
      <article className="css-940b0i e1gathm31">
        <div className="title">Drink brilliantly</div>
        <h1 className="headline">
          <strong>Up to 40% off accessories!</strong>
        </h1>
        <div className="description">
          Upgrade your bottle with Nano Zero or PureVis™ caps, or add accessories
          to complete the look.
        </div>
        <a
          href="/accessories"
          className="hero-cta_button css-1vhtz12 edhpqag0"
          tabIndex={0}
        >
          <span>Shop now  <i class="fa-solid fa-arrow-right"></i></span>
          <span className="btn_icon btn_iconRight">
            <span color="text.default" className="css-11qxqh7 e18bqli0">
              <svg
                className="css-82n8sf expsv8r0"
                focusable="false"
                viewBox="0 0 22 10"
                color="text.default"
                aria-hidden="true"
                fill="undefined"
              >
                <path d="M10.4688 10.7812C10.3125 10.6562 10.25 10.4688 10.25 10.25C10.25 10.0625 10.3125 9.875 10.4688 9.75L13.4375 6.75H0.75C0.3125 6.75 0 6.4375 0 6C0 5.59375 0.3125 5.25 0.75 5.25H13.4375L10.4688 2.28125C10.1562 2 10.1562 1.53125 10.4688 1.25C10.75 0.9375 11.2188 0.9375 11.5312 1.25L15.7812 5.5C16.0625 5.78125 16.0625 6.25 15.7812 6.53125L11.5312 10.7812C11.2188 11.0938 10.75 11.0938 10.4688 10.7812Z" />
              </svg>
            </span>
          </span>
        </a>
      </article>
      <div className="main-wrapper_right" />
    </div>
  </section>
  
  )
}

HeroBanner.propTypes = {}

export default HeroBanner