import Image from 'next/image';
import React from 'react';
import LoginImg from '@/assets/images/hero-4.jpg';
import Link from 'next/link';

const LoginForm: React.FC = () => {
  return (
    <section className="section-register section-login py-60 py-lg-90">
      <div className="container">
        <div className="row g-40">
          <div className="col-xl-5 col-xxl-6">
            <div className="register-image-wrapper rounded-3 h-100 overflow-hidden">
              <Image
                src={LoginImg}
                className="img-fluid object-fit-cover h-100"
                alt="login img"
              />
            </div>
          </div>

          <div className="col-xl-7 col-xxl-6">
            <div className="register-form-wrap h-100 d-flex flex-column justify-content-center">
              <form id="callRequestForm" className="contact-form row g-20">
                <div className="col-12">
                  <div className="register-title mb-2">
                    <h2>Welcome back to Eventiva</h2>
                    <p className="mb-0">
                      Crafting Eventiva Designing and Masterpieces Interior
                      Wonders, Join us on a journey marked by accolades and
                      distinctions as we carve our path in the world of design.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="position-relative">
                    <label for="InputEmail3" className="form-label">
                      Username or Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="InputEmail"
                      id="InputEmail3"
                      placeholder="Email"
                      required
                    />
                    <span className="form-icon form-email-icon">
                      <i className="fa-thin fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="position-relative">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                    <span className="form-icon form-email-icon">
                      <i className="fa-thin fa-key"></i>
                    </span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                    />
                    <label className="form-check-label" for="rememberMe">
                      Remember Me
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </div>
                </div>
                <p className="text-center mb-0 opacity-50">
                  <Link
                    className="text-decoration-underline"
                    href={`/lost-password`}
                  >
                    Lost Password?
                  </Link>
                </p>
                <p className="create-account text-center mb-0">
                  <span>Don't have an account? </span>
                  <Link
                    className="text-decoration-underline"
                    href={`/register`}
                  >
                    SignUp
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
