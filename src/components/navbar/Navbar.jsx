import React,{useEffect} from "react";
import "../navbar/navbar.css";
import { useSelector } from "react-redux";
import { cartSlice } from "../../store/slices/cartSlice";

const Navbar = () => {
  let cartstate = useSelector((state) => state.cartSlice);

  useEffect(() => {
  }, [cartstate.carts]);

  return (
    <>
      <section className="css-1iu2kf2 epn6cc50">
        <div className="navigation-head-skinny-wrap">
          <div className="navigation-head">
            <button
              type="button"
              className="navigation-hamburger"
              aria-label="Open main navigation"
            >
              <svg
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <path
                  d="M16.25 18.625C16.25 18.3125 16.5234 18 16.875 18H33.125C33.4375 18 33.75 18.3125 33.75 18.625C33.75 18.9766 33.4375 19.25 33.125 19.25H16.875C16.5234 19.25 16.25 18.9766 16.25 18.625ZM16.25 24.875C16.25 24.5625 16.5234 24.25 16.875 24.25H33.125C33.4375 24.25 33.75 24.5625 33.75 24.875C33.75 25.2266 33.4375 25.5 33.125 25.5H16.875C16.5234 25.5 16.25 25.2266 16.25 24.875ZM33.125 31.75H16.875C16.5234 31.75 16.25 31.4766 16.25 31.125C16.25 30.8125 16.5234 30.5 16.875 30.5H33.125C33.4375 30.5 33.75 30.8125 33.75 31.125C33.75 31.4766 33.4375 31.75 33.125 31.75Z"
                  fill="#153A5B"
                />
              </svg>
            </button>
            <div className="main-navigation-wrap">
              <nav
                className="main-navigation-links main-navigation-links-left"
                role="navigation"
                aria-label="main navigation"
              >
                <ul>
                  <li>
                    <button
                      className=""
                      aria-label="Shop all"
                      tabIndex={0}
                      role="button"
                    >
                      Shop all
                    </button>
                  </li>
                  <li>
                    <button
                      className=""
                      aria-label="Purification"
                      tabIndex={0}
                      role="button"
                    >
                      Purification
                    </button>
                  </li>
                  <li>
                    <button
                      className=""
                      aria-label="Home"
                      tabIndex={0}
                      role="button"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      className=""
                      aria-label="Drinkware"
                      tabIndex={0}
                      role="button"
                    >
                      Drinkware
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navigation-logo">
              <a aria-label="LARQ Homepage" href="/">
                <h1 className="josefin-sans brand-logo-text text-decoration-none">
                  Veloz
                </h1>
              </a>
            </div>
            <div className="navigation-mobile-account-cart">
              <a className="navigation-account" href="/user/sign-in">
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                >
                  <path
                    opacity="0.64"
                    d="M22.5 16C22.5 15.125 22 14.3125 21.25 13.8438C20.4688 13.4062 19.5 13.4062 18.75 13.8438C17.9688 14.3125 17.5 15.125 17.5 16C17.5 16.9062 17.9688 17.7188 18.75 18.1875C19.5 18.625 20.4688 18.625 21.25 18.1875C22 17.7188 22.5 16.9062 22.5 16ZM16 16C16 14.5938 16.75 13.2812 18 12.5625C19.2188 11.8438 20.75 11.8438 22 12.5625C23.2188 13.2812 24 14.5938 24 16C24 17.4375 23.2188 18.75 22 19.4688C20.75 20.1875 19.2188 20.1875 18 19.4688C16.75 18.75 16 17.4375 16 16ZM14.5312 26.5H25.4375C25.1562 24.5312 23.4688 23 21.4062 23H18.5625C16.5 23 14.8125 24.5312 14.5312 26.5ZM13 27.0938C13 24 15.4688 21.5 18.5625 21.5H21.4062C24.5 21.5 27 24 27 27.0938C27 27.5938 26.5625 28 26.0625 28H13.9062C13.4062 28 13 27.5938 13 27.0938Z"
                    fill="#153A5B"
                  />
                </svg>
              </a>
              <button
                className="navigation-cart"
                aria-label="Open cart slide out"
              >
                <a href="/cart">
                  <svg
                    width={40}
                    height={40}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <path
                      opacity="0.64"
                      d="M11.75 12H13.1562C13.8438 12 14.4688 12.4062 14.75 13H27.5938C28.4062 13 29 13.7812 28.7812 14.5938L27.5 19.3438C27.25 20.3438 26.3438 21 25.3438 21H16.3125L16.5 21.9062C16.5625 22.25 16.875 22.5 17.2188 22.5H26.25C26.6562 22.5 27 22.8438 27 23.25C27 23.6875 26.6562 24 26.25 24H17.2188C16.1562 24 15.2188 23.25 15.0312 22.1875L13.4062 13.7188C13.375 13.5938 13.2812 13.5 13.1562 13.5H11.75C11.3125 13.5 11 13.1875 11 12.75C11 12.3438 11.3125 12 11.75 12ZM15.0938 14.5L16.0312 19.5H25.3438C25.6875 19.5 25.9688 19.2812 26.0625 18.9688L27.25 14.5H15.0938ZM16.5 28C15.9375 28 15.4688 27.7188 15.1875 27.25C14.9062 26.8125 14.9062 26.2188 15.1875 25.75C15.4688 25.3125 15.9375 25 16.5 25C17.0312 25 17.5 25.3125 17.7812 25.75C18.0625 26.2188 18.0625 26.8125 17.7812 27.25C17.5 27.7188 17.0312 28 16.5 28ZM27 26.5C27 27.0625 26.6875 27.5312 26.25 27.8125C25.7812 28.0938 25.1875 28.0938 24.75 27.8125C24.2812 27.5312 24 27.0625 24 26.5C24 25.9688 24.2812 25.5 24.75 25.2188C25.1875 24.9375 25.7812 24.9375 26.25 25.2188C26.6875 25.5 27 25.9688 27 26.5Z"
                      fill="#153A5B"
                    />
                  </svg>
                </a>
              </button>
            </div>
            <div className="main-navigation-wrap main-navigation-wrap-right">
              <nav className="main-navigation-links main-navigation-links-right">
                <ul>
                  <li className="text-decoration-none">
                    <a href="/technology">Technology</a>
                  </li>
                  <li className="text-decoration-none">
                    <a href="checkout">Checkout</a>
                  </li>
                  <li className="icon-item account-item">
                    <a className="navigation-account" href="/user/sign-in">
                      <svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                      >
                        <path
                          opacity="0.64"
                          d="M22.5 16C22.5 15.125 22 14.3125 21.25 13.8438C20.4688 13.4062 19.5 13.4062 18.75 13.8438C17.9688 14.3125 17.5 15.125 17.5 16C17.5 16.9062 17.9688 17.7188 18.75 18.1875C19.5 18.625 20.4688 18.625 21.25 18.1875C22 17.7188 22.5 16.9062 22.5 16ZM16 16C16 14.5938 16.75 13.2812 18 12.5625C19.2188 11.8438 20.75 11.8438 22 12.5625C23.2188 13.2812 24 14.5938 24 16C24 17.4375 23.2188 18.75 22 19.4688C20.75 20.1875 19.2188 20.1875 18 19.4688C16.75 18.75 16 17.4375 16 16ZM14.5312 26.5H25.4375C25.1562 24.5312 23.4688 23 21.4062 23H18.5625C16.5 23 14.8125 24.5312 14.5312 26.5ZM13 27.0938C13 24 15.4688 21.5 18.5625 21.5H21.4062C24.5 21.5 27 24 27 27.0938C27 27.5938 26.5625 28 26.0625 28H13.9062C13.4062 28 13 27.5938 13 27.0938Z"
                          fill="#153A5B"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="icon-item">
                    <a href="/cart">
                      <button
                        className="navigation-cart"
                        aria-label="Open cart slide out"
                      >
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                        >
                          <path
                            opacity="0.64"
                            d="M11.75 12H13.1562C13.8438 12 14.4688 12.4062 14.75 13H27.5938C28.4062 13 29 13.7812 28.7812 14.5938L27.5 19.3438C27.25 20.3438 26.3438 21 25.3438 21H16.3125L16.5 21.9062C16.5625 22.25 16.875 22.5 17.2188 22.5H26.25C26.6562 22.5 27 22.8438 27 23.25C27 23.6875 26.6562 24 26.25 24H17.2188C16.1562 24 15.2188 23.25 15.0312 22.1875L13.4062 13.7188C13.375 13.5938 13.2812 13.5 13.1562 13.5H11.75C11.3125 13.5 11 13.1875 11 12.75C11 12.3438 11.3125 12 11.75 12ZM15.0938 14.5L16.0312 19.5H25.3438C25.6875 19.5 25.9688 19.2812 26.0625 18.9688L27.25 14.5H15.0938ZM16.5 28C15.9375 28 15.4688 27.7188 15.1875 27.25C14.9062 26.8125 14.9062 26.2188 15.1875 25.75C15.4688 25.3125 15.9375 25 16.5 25C17.0312 25 17.5 25.3125 17.7812 25.75C18.0625 26.2188 18.0625 26.8125 17.7812 27.25C17.5 27.7188 17.0312 28 16.5 28ZM27 26.5C27 27.0625 26.6875 27.5312 26.25 27.8125C25.7812 28.0938 25.1875 28.0938 24.75 27.8125C24.2812 27.5312 24 27.0625 24 26.5C24 25.9688 24.2812 25.5 24.75 25.2188C25.1875 24.9375 25.7812 24.9375 26.25 25.2188C26.6875 25.5 27 25.9688 27 26.5Z"
                            fill="#153A5B"
                          />
                        </svg>
                        {cartstate.carts.length > 0 && (
                          <span className="cart-indicator">{cartstate.carts.length}</span>
                        )}
                      </button>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
