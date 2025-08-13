"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Hardcoded array of exhibitor profile images and titles
const exhibitorProfiles = [
  {
    image: "https://indiapharmaexpo.com/images/icons/1.png",
    title: "Active Pharmaceutical Ingredients (API) & Generic APIs",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/2.png",
    title: "Drug Manufacturers",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/3.png",
    title: "Supply Chain",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/4.png",
    title: "PharmaTech IT Solution Provider",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/5.png",
    title: "Automation & Digitalization",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/6.png",
    title: "CMO & CDMO",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/7.png",
    title: "Biological (Innovators & CDMO)",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/8.png",
    title: "Pharmacovigilance",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/9.png",
    title: "Biopharmaceuticals",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/10.png",
    title: "AI and ML in Pharmaceuticals",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/11.png",
    title: "Research & Development",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/12.png",
    title: "Packaging Machinery",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/13.png",
    title: "Clean Rooms",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/14.png",
    title: "Lab Equipments",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/15.png",
    title: "Machinery and Process",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/16.png",
    title: "Contract Manufacturing",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/17.png",
    title: "Smart Molecule",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/18.png",
    title: "QC, QA",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/19.png",
    title: "Pharmaceuticals",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/20.png",
    title: "Nanotechnology",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/21.png",
    title: "Formulation",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/22.png",
    title: "Clinical Trials",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/23.png",
    title: "HealthTech IT Solution Provider",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/insurance.png",
    title: "Medical Insurance & Medical Tourism",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/biotech.png",
    title: "BioTech",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/service.png",
    title: "Health Services Providers (HCPs)",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/27.png",
    title: "HealthTech Startups & Innovation",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/24.png",
    title: "Assistive Technology",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/25.png",
    title: "Medical Equipments",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/26.png",
    title: "Wellness & Prevention",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/27.png",
    title: "Imaging & Diagnostic",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/28.png",
    title: "Medical, Legal",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/29.png",
    title: "Regulatory Compliance",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/30.png",
    title: "Surgical Instrument",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/31.png",
    title: "Lab Devices",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/32.png",
    title: "Devices Manufactures",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/33.png",
    title: "Nutraceutical",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/34.png",
    title: "Dietary Supplement Manufacturers",
  },
  {
    image: "https://indiapharmaexpo.com/images/icons/35.png",
    title: "Vaccines",
  },
]

// Hardcoded array for past partners
const pastPartnersTop = [
  "https://indiapharmaexpo.com/images/past-partner/1.png",
  "https://indiapharmaexpo.com/images/past-partner/2.png",
  "https://indiapharmaexpo.com/images/past-partner/3.jpg",
  "https://indiapharmaexpo.com/images/past-partner/4.png",
  "https://indiapharmaexpo.com/images/past-partner/5.png",
  "https://indiapharmaexpo.com/images/past-partner/6.png",
  "https://indiapharmaexpo.com/images/past-partner/7.png",
]

const pastPartnersBottom = [
  "https://indiapharmaexpo.com/images/past-partner/8.png",
  "https://indiapharmaexpo.com/images/past-partner/9.png",
  "https://indiapharmaexpo.com/images/past-partner/10.jpg",
  "https://indiapharmaexpo.com/images/past-partner/11.png",
  "https://indiapharmaexpo.com/images/past-partner/13.png",
  "https://indiapharmaexpo.com/images/past-partner/14.png",
]

// Hardcoded array for "Whom will you meet" section
const meetingProfiles = [
  "Directors, CEO's of Organizations (Key Decision makers)",
  "Chief Scientific Officers",
  "Quality Control, QA, and R & D Officers",
  "CRO's & CMO's",
  "Complain & Regulatory Officers",
  "Business Entrepreneurs",
  "Investment Analysts",
  "Association, Association presidents and professionals",
  "Moral laureates in Health Care and Medicine",
  "Research Institutes and members",
  "Pharma Solutions Providers.",
  "Scientists & Biotechnology Experts",
  "Clinicians, Pharmacists",
  "Government Heads & Officials",
  "Vendor Development & Purchase",
  "Manufacturing / Production officers",
]

export default function Test() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 272,
    hours: 22,
    minutes: 27,
    seconds: 29,
  })

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date("2026-05-12T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Counter animation effect
  useEffect(() => {
    const counters = document.querySelectorAll(".counter")
    const animateCounter = (el: Element) => {
      const target = +(el as HTMLElement).getAttribute("data-target")!
      const duration = 1500
      const frameRate = 30
      const totalFrames = duration / frameRate
      let frame = 0
      const counter = setInterval(() => {
        frame++
        const progress = Math.min(frame / totalFrames, 1)
        el.textContent = Math.floor(progress * target).toString()
        if (progress === 1) {
          clearInterval(counter)
        }
      }, frameRate)
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target)
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.6,
      },
    )

    counters.forEach((counter) => observer.observe(counter))

    return () => observer.disconnect()
  }, [])

  // Accordion functionality
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button")

    function toggleAccordion(this: HTMLButtonElement) {
      const itemToggle = this.getAttribute("aria-expanded")
      for (let i = 0; i < items.length; i++) {
        ;(items[i] as HTMLButtonElement).setAttribute("aria-expanded", "false")
      }
      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true")
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion))

    return () => {
      items.forEach((item) => item.removeEventListener("click", toggleAccordion))
    }
  }, [])

  // Owl Carousel initialization
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `
      $(document).ready(function(){
        $(".top-carousel, .bottom-carousel").owlCarousel({
          loop: true,
          margin: 20,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 2000,
          responsive: {
            0: {
              items: 2
            },
            600: {
              items: 4
            },
            1000: {
              items: 6
            }
          }
        });
      });
    `
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      {/* WhatsApp Button */}
      <Link href="https://wa.me/919958097807" target="_blank" className="whatsapp-button">
        <Image
          src="https://indiapharmaexpo.com/images/WhatsApp_icon.png"
          alt="WhatsApp"
          width={60}
          height={60}
          className="img-fluid"
        />
      </Link>

      {/* Header Section */}
      <header className="main-header header-style-twelev">
        <div className="topbar-twelev">
          <div className="container">
            <div className="topbar-twelev__wrapper d-flex justify-content-between align-items-center">
              <ul className="topbar-twelev__info list-unstyled mb-0 d-flex flex-wrap align-items-center">
                <li>
                  <span className="linoor-icon-three-location-pin-1 me-2"></span>
                  12-14 May 2026 Hall 1, 2 & 3, Penang Waterfront Convention Centre (Pwcc)
                </li>
                <li>
                  <Link
                    href="./visitor.html"
                    className="feature-twelev__item__rm ms-3"
                    style={{ backgroundColor: "#228989" }}
                  >
                    Be a Visitor <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    href="./exhibitor.html"
                    className="feature-twelev__item__rm ms-3"
                    style={{ backgroundColor: "#228989" }}
                  >
                    Be an Exhibitor <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
              {/* <ul className="topbar-twelev__social list-unstyled d-flex mb-0">
                <li>
                  <Link href="https://www.facebook.com/me/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/showcase/medhealthpharma/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/?__pwa=1" target="_blank">
                    <i className="fa-brands fa-square-instagram"></i>
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="header-style-twelev__main">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="logo-box">
              <Link href="./index.html">
                <Image
                  src="https://www.sahityaclasses.com/wp-content/uploads/2025/08/medlogo-1.png"
                  alt="India Pharma Expo"
                  width={250}
                  height={60}
                  id="thm-logo"
                />
              </Link>
            </div>

            <nav className="main-menu navbar navbar-expand-md navbar-light">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className=" navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link active" href="index.html">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="exhibitorsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Exhibitors
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="exhibitorsDropdown">
                      <li>
                        <Link className="dropdown-item" href="#exhibitor_profile">
                          Why Exhibit
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#exhibitor_profile">
                          Our Exhibitor
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#exhibitor_profile">
                          Exhibitor Profile
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="javascript:void(0)">
                      Participants
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="bookDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Book a Space
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="bookDropdown">
                      <li>
                        <Link className="dropdown-item" href="./registration-form-inr.html">
                          Registration Form (INR)
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="Registration-Form-usd.pdf">
                          Registration Form (USD)
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="align-items-center ms-3 mobile_no">
              <Link className="header-style-twelev__call text-decoration-none" href="tel:+91 9560050693">
                <i className="fa-solid fa-square-phone"></i>
                <span className="header-style-twelev__call__text blink">Book your Stall</span>
                <span className="header-style-twelev__call__number">+91 9958097807</span>
                <span className="header-style-twelev__call__number">+60 12-382 3382</span>
                
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Video Hero Section */}
      <section className="video__wrapper">
        <div className="bg-vd">
          <video
            poster="https://indiapharmaexpo.com/assets/images/poster.png"
            width="100%"
            height="100%"
            autoPlay
            playsInline
            loop
            muted
            className="banner-img"
          >
            <source src="https://indiapharmaexpo.com/images/hero-vdo.mp4" type="video/mp4" />
          </video>
          <div id="vd" className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="lv_timer_info">
                  <div className="venue_txt">
                    <p>
                      <span>
                        <i className="fa fa-map-pin" aria-hidden="true"></i>
                      </span>{" "}
                      <span style={{ color: "#228989", fontWeight: 700, margin: "0 7px" }}>Venue:</span> Hall 1, 2 & 3,
                      Penang Waterfront Convention Centre (Pwcc)
                    </p>
                    <p>
                      <span>
                        <i className="fa-solid fa-calendar"></i>
                      </span>
                      <span style={{ color: "#228989", fontWeight: 700, margin: "0 7px" }}>Date:</span> 12-14 May 2026
                    </p>
                  </div>
                  <h1 className="mt-3">Theme : Empowering Asia&apos;s Pharma & Medhealth Future</h1>
                  <div id="clockdiv">
                    <div>
                      <span className="days">{countdown.days}</span>
                      <div className="smalltext">Days</div>
                    </div>
                    <div>
                      <span className="hours">{countdown.hours}</span>
                      <div className="smalltext">Hours</div>
                    </div>
                    <div>
                      <span className="minutes">{countdown.minutes}</span>
                      <div className="smalltext">Minutes</div>
                    </div>
                    <div>
                      <span className="seconds">{countdown.seconds}</span>
                      <div className="smalltext">Seconds</div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="video_btn">
                    <Link href="./register.html" className="gt-btn gt-btn-icon">
                      Register Now{" "}
                    </Link>
                    <Link
                      href="https://www.sahityaclasses.com/wp-content/uploads/2025/07/Medhealth-Brochure-Website.pdf"
                      target="_blank"
                      className="gt-btn gt-btn-icon"
                    >
                      Download Brochure{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-bg d-none d-sm-block">
          <Image
            decoding="async"
            src="https://wp.storebuild.shop/softec/wp-content/themes/softec/assets/img/hero/scroll-down.png"
            alt=""
            width={250}
            height={70}
          />
        </div>
        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <Link className="mouse-scroll-btn" href="#about"></Link>
          <span>Scroll Down</span>
        </div>
      </section>

      {/* About Section */}
      <section className="about_wrapper" id="about">
        <div className="container">
          <div className="row gx-5 justify-content-center align-items-center">
            <div className="col-md-4">
              <div className="about_left">
                <div className="about_countdown">
                  <h3>
                    <span className="counter" data-target="200">
                      0
                    </span>{" "}
                    +
                  </h3>
                  <p>Exhibitors</p>
                </div>
                <hr />
                <div className="about_countdown">
                  <h3>
                    <span className="counter" data-target="3000">
                      0{" "}
                    </span>{" "}
                    +
                  </h3>
                  <p>Sqm. Net Exhibition Area</p>
                </div>
                <hr />
                <div className="about_countdown">
                  <h3>
                    <span className="counter" data-target="12000">
                      0
                    </span>{" "}
                    +
                  </h3>
                  <p>Visitors </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="about_right">
                <h2>About the MedHealth Pharma</h2>
                <p>
                  The <span> MedHealth Pharma Expo 2026</span> is malaysia&apos;s most comprehensive trade exhibition
                  and conference, covering the pharmaceuticals, medical devices, healthcare, laboratory, logistics, and
                  cosmetics industries. This platform is tailored to connect industry leaders, manufacturers, buyers,
                  r&d professionals, and Regulatory bodies from southeast asia and beyond.
                </p>
                <p>
                  With over 200+ exhibitors, the event offers unparalleled opportunities for partnerships, technology
                  transfer, and business expansion in one of the fastest-growing healthcare- markets in the asia-pacific
                  region.
                </p>
                <div className="moretext">
                  <p>
                    The Expo & conference is expected to be attended by more than 15000+ Visitors, 500 delegates & 300 +
                    Exhibitors across the Globe, including researchers, Healthcare & Pharma Technology authorities, This
                    international event serves as a focused and dedicated platform for professionals across major
                    industries, including Smart Manufacturing, Biopharma & Biosimilars, R&D, Regulatory Affairs, Digital
                    Automation, Continuous Manufacturing, Contract Manufacturing, API, Biotechnology, QC, QA, Clinical
                    Trials, CDMO, Formulation, Pharmacovigilance, Lab Instruments, Hospitals, and Vaccines, academicians
                    and students working in the fields of Pharma- Healthacre- Technologies.
                  </p>
                  <p>
                    {" "}
                    India Pharma Expo is a fascinating event that offers fantastic Opportunities to Connect with a wide
                    range of professionals across the Pharmaceuticals Industry. Where you will gain with unique
                    experience to engage with so many industry experts and peers in one forum.
                  </p>
                  <p>
                    The event will facilitate discussions on potential solutions and research highlighting current
                    scientific and management issues, and explore new directions benefiting the industry across various
                    regions. Our offerings bridge the gap between pharmaceutical innovators, industry leaders, and
                    solution providers to showcase breakthroughs, foster collaborations, and drive the future of
                    healthcare.
                  </p>
                  <p>
                    Discover the products, services and solutions from around 300+ exhibitors from 15+ countries.
                    Experience a compact, certified lecture program with over 25+ presentations session from more than
                    150 speakers and gain a lot of knowledge in a short time with unique Buyer- seller session. Exchange
                    ideas with colleagues and expand your network with new, valuable contacts, which takes place
                    parallel to India Pharma Expo, health politicians and professional representatives set the course
                    for the future of the industry.
                  </p>
                  <p>
                    Connect with the brightest minds in manufacturing to gain insights on technology, Leadership,
                    strategies, emerging trends and innovative solutions to help you stay competitive with
                    Manufacturing.
                  </p>
                </div>
                <Image
                  src="https://indiapharmaexpo.com/images/capsule.png"
                  className="img-fluid"
                  alt=""
                  width={180}
                  height={100}
                />
              </div>
              <Link
                className="moreless-button"
                href="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault()
                  const moretext = document.querySelector(".moretext") as HTMLElement
                  const button = e.target as HTMLElement
                  if (moretext) {
                    if (moretext.style.display === "none" || !moretext.style.display) {
                      moretext.style.display = "block"
                      button.textContent = "Read less"
                    } else {
                      moretext.style.display = "none"
                      button.textContent = "Read more"
                    }
                  }
                }}
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Association Support and Media Partners */}
      <section className="cohosted bg-white">
        <div className="container">
          <div className="row justify-content-center partner_row">
            <h2 className="p-3">Association Support</h2>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/IPA-logo.png"
                  className="img-fluid"
                  style={{ width: "auto", padding: "10px" }}
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/CIPI_Logo.jpg"
                  className="img-fluid"
                  style={{ width: "200px" }}
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/SPER-Logo.jpg"
                  className="img-fluid"
                  style={{ width: "120px" }}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/spsr.jpg"
                  className="img-fluid"
                  style={{ width: "120px" }}
                  alt=""
                  width={120}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/ipga.jpg"
                  className="img-fluid"
                  style={{ width: "140px" }}
                  alt=""
                  width={140}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-center partner_row">
            <h2>Media Partners</h2>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/99.jpg"
                  className="img-fluid"
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/pharma-tutor.jpg"
                  className="img-fluid"
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/pharma-utility.png"
                  className="img-fluid w-50"
                  alt=""
                  width={125}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/spicos.jpeg"
                  className="img-fluid"
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/cn-699.png"
                  className="img-fluid w-75"
                  alt=""
                  width={188}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/Indian Pharma Post logo.jpg"
                  className="img-fluid"
                  style={{ width: "200px" }}
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/IJDR.png"
                  className="img-fluid"
                  style={{ width: "200px" }}
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/the-pharna.jpg"
                  className="img-fluid"
                  style={{ width: "200px" }}
                  alt=""
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/the-pharma-times.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/dug-today_page-0001.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/mazda-pharma.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/Pharma-Machinery.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/packman-logo.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/Medical-Tourism.jpg"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/pharma-focus-asia.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/operantr.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                  alt=""
                  width={150}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/pharma-outlook.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/pharma-now.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/trade4asia-logo.png"
                  className="img-fluid"
                  style={{ width: "150px" }}
                  alt=""
                  width={150}
                  height={100}
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-6 col-lg-3 col-sm-6">
              <div className="hosted_logo">
                <Image
                  src="https://indiapharmaexpo.com/images/Partners/medical-media.png"
                  className="img-fluid"
                  style={{ width: "250px" }}
                  alt=""
                  width={250}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exhibitor Profile Section */}
      <section className="attend_wrapper" id="exhibitor_profile">
        <div className="container">
          <h2>Exhibitors Profile</h2>
          <div className="row">
            {exhibitorProfiles.map((profile, index) => (
              <div key={index} className="col-md-4 col-lg-2 col-sm-6 col-xs-6 col-6">
                <div className="attend_inner-n">
                  <Image
                    src={profile.image || "/placeholder.svg"}
                    className="img-fluid"
                    alt={profile.title}
                    width={64}
                    height={64}
                  />
                  <p>{profile.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="biggest-conference-section w-100">
        <div className="container py-5 py-xl-0">
          <div className="biggest-conference-con123">
            <div className="biggest-text-section text-center">
              <h2 data-aos="fade-up" data-aos-duration="700" className="aos-init">
                Why Attend the Event?{" "}
              </h2>
              <div className="row">
                <div className="col-md-6">
                  <ul className="partner-div">
                    <li>3 Days of Impactful networking events (plus unlimited unscripted and solutions Providers).</li>
                    <li> One on One Meeting between Participants and Solutions Providers. </li>
                    <li> 300 plus exhibitors from 15 plus Countries.</li>
                    <li> 150 plus Global Speakers with an interactive session </li>
                    <li>Key takeaways to add value to your business.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="partner-div">
                    <li>
                      Access to senior-level executives from leading international pharmaceutical & Supply Chain
                      companies.{" "}
                    </li>
                    <li>
                      Global Partnership Opportunities - Discover new companies ready for collaboration, licensing, and
                      investment.{" "}
                    </li>
                    <li>
                      Unmatched Market Reach; Gain access to new and emerging markets in the pharmaceutical and
                      healthcare sectors.
                    </li>
                    <li>
                      Tremendous networking opportunities to meet numerous pharma professionals and pharmaceutical
                      companies in one place at one time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Exhibit Section */}
      <section className="why_attend" id="Why_attend">
        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="why-top-left" data-aos="fade-down-right">
                <div className="why-left-stroke"></div>
                <div className="why-left-cont">
                  <div className="title">
                    <span>Why</span> Exhibit<span>?</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6" data-aos="fade-down-left">
              <div className="why_attend_con">
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/target.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Showcase innovation to a targeted audience </p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/visibility.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Strengthen your brand visibility </p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/global.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Network with the global and regional leaders</p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/technologies.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Showcase your latest products, technologies, and solutions to a highly targeted audience </p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/lead.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Generate high-quality leads and unlock new business partnerships</p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/presentation.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>Network face-to-face with over 15,000 visitors, 500+ delegates, and 300+ exhibitors</p>
                </div>
                <div className="attend_points">
                  <Image
                    src="https://indiapharmaexpo.com/images/medicine-1.png"
                    className="img-fluid"
                    alt=""
                    width={35}
                    height={35}
                  />
                  <p>
                    Be part of the future of Pharma- Healthcare - Technologies; Showcase your innovations, connect
                    globally, and drive real impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whom will you meet Section */}
      <section className="meet_wrapper">
        <div className="container">
          <h2>Whom will you meet?</h2>
          <div className="row justify-content-center">
            {meetingProfiles.map((text, index) => (
              <div key={index} className="col-md-4 col-lg-2 col-xs-6">
                <div className="meet_inner">
                  <div
                    className="attend-box"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: 1,
                    }}
                  >
                    <p className="attend-des">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Partners Section */}
      <section className="past_partner">
        <div className="container">
          <h2>Past Partners</h2>
          <div className="carousel-wrapper">
            <div className="owl-carousel top-carousel">
              {pastPartnersTop.map((src, index) => (
                <div key={index} className="item">
                  <Image src={src || "/placeholder.svg"} className="img-fluid" alt="" width={150} height={100} />
                </div>
              ))}
            </div>
            <div className="owl-carousel bottom-carousel">
              {pastPartnersBottom.map((src, index) => (
                <div key={index} className="item d-flex justify-content-center">
                  <Image
                    src={src || "/placeholder.svg"}
                    className={`img-fluid ${index === 1 ? "alkem" : ""}`}
                    alt=""
                    width={150}
                    height={100}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="magazines_wrapper">
        <div className="container">
          <div className="item active">
            <div className="home-banner-demo-ul-wrapper cc-float-fix">
              <div className="demo-self shelf-left"></div>
              <div className="demo-self shelf-mid"></div>
              <div className="demo-self shelf-right"></div>
              <ul className="home-banner-demo-ul">
                <li className="tall">
                  <div className="home-banner-demo-img-container">
                    <Image
                      className="home-banner-demo-thum img-fluid"
                      src="https://worldfintechsummit.com/assets/img/dl27.png"
                      alt="Magazine Thumbnail"
                      width={160}
                      height={200}
                    />
                  </div>
                </li>
                <li className="tall">
                  <div className="home-banner-demo-img-container">
                    <Image
                      className="home-banner-demo-thum"
                      src="https://worldfintechsummit.com/assets/img/bf27.jpg"
                      alt=""
                      width={160}
                      height={200}
                    />
                  </div>
                </li>
                <li className="tall">
                  <div className="home-banner-demo-img-container">
                    <Image
                      className="home-banner-demo-thum"
                      src="https://worldfintechsummit.com/assets/img/eh27.jpg"
                      alt=""
                      width={160}
                      height={200}
                    />
                  </div>
                </li>
                <li className="tall">
                  <div className="home-banner-demo-img-container">
                    <Image
                      className="home-banner-demo-thum"
                      src="https://events.eletsonline.com/urban/assets/images/egov-mag.jpg"
                      alt=""
                      width={160}
                      height={200}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="apply_btn">
            <Link href="#exhibitor_profile" target="_blank">
              <button className="button">
                <div className="dots_border"></div>
                <span className="text_button">Apply For Magazine</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-shape">
          <Image
            alt=""
            src="https://pixor-next.vercel.app/_next/static/media/funfact-bg-shape.3ca9c34a.svg"
            width={733}
            height={714}
          />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="faqs_wrapper">
        <div className="container">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="accordion">
                <div className="accordion-item">
                  <button id="accordion-button-1" aria-expanded="false">
                    <span className="accordion-title">1. When and where will the event take place? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      The Medhealth Pharma Expo 2026 will take place from{" "}
                      <strong> April 23rd to 25th, 2026 (Thursday, Friday, Saturday)</strong>, at the venue:{" "}
                      <strong>Hall 1, 2 & 3, Penang Waterfront Convention Centre (Pwcc)</strong>.
                    </p>
                    <div className="accordian_btn">
                      <Link href="https://maps.app.goo.gl/q82UqrfpSXASSe6b8" target="_blank">
                        View Location
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-2" aria-expanded="false">
                    <span className="accordion-title">2. How can I register for Medhealth Pharma Expo? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      To register for the Medhealth Pharma Expo 2026, please fill out the registration form available
                      here:
                      <span>
                        <div className="accordian_btn">
                          <Link href="./register.html" target="_blank">
                            Register Now
                          </Link>
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-3" aria-expanded="false">
                    <span className="accordion-title">3. How can I meet key industry professionals at the expo? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      The Medhealth Pharma Expo 2026 offers several opportunities to meet key industry professionals
                      through
                    </p>
                    <ul>
                      <li>
                        <strong>Networking events:</strong> The event includes 3 days of networking.
                      </li>
                      <li>
                        <strong>Buyer-Seller Meet:</strong> This dedicated session facilitates direct interaction.
                      </li>
                      <li>
                        <strong>Plenary Sessions and Panel Discussions:</strong> Engaging with 100+ global speakers.
                      </li>
                      <li>
                        <strong>CEO&apos;s Roundtable Session and R&D Roundtable Session:</strong>Opportunities to
                        connect with high-level executives.
                      </li>
                      <li>Special session for Networking.</li>
                      <li>B2B Meetings and One-on-One Meetings with Clients. </li>
                      <li>Corporate Gala Dinner & Cocktail.</li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-4" aria-expanded="false">
                    <span className="accordion-title">
                      4. Can my company set up a booth at the Pharma Medhealth Expo?{" "}
                    </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, your company can absolutely set up a booth at the Pharma Medhealth Expo. To participate as an
                      exhibitor, simply visit the official exhibitor registration page at:
                      <Link href="https://indiapharmaexpo.com/exhibitor.html">
                        https://indiapharmaexpo.com/exhibitor.html
                      </Link>
                      . It&apos;s a great opportunity to showcase your products, services and connect with key
                      stakeholders in the pharmaceutical industry.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-5" aria-expanded="false">
                    <span className="accordion-title">
                      5- How do I plan meetings with other companies at the Expo?{" "}
                    </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>The event facilitates meetings through:</p>
                    <ul>
                      <li>Buyer-Seller Meet.</li>
                      <li>B2B Meetings and One-on-One Meetings with Clients.</li>
                      <li>Special session for Networking. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="accordion">
                <div className="accordion-item">
                  <button id="accordion-button-10" aria-expanded="false">
                    <span className="accordion-title">6- Can I register people from other companies? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, you can register individuals from other companies. Simply fill out the registration form at:
                      <span>
                        <Link href="https://indiapharmaexpo.com/exhibitor.html">
                          https://indiapharmaexpo.com/exhibitor.html
                        </Link>
                      </span>
                      .
                    </p>
                    <p>
                      Alternatively, you may send your query or expression of interest to{" "}
                      <span>
                        <Link href="mailto:info@indiapharmaexpo.com">info@indiapharmaexpo.com</Link>
                      </span>
                      , and our team will assist you with the process.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-11" aria-expanded="false">
                    <span className="accordion-title">7- Who should attend this event? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>The event is relevant for a wide range of professionals, including:</p>
                    <ul>
                      <li>
                        MD, Directors, Chairman, CEO&apos;s, CTO&apos;s, CXO&apos;s, Presidents, Sr. VP&apos;s,
                        VP&apos;s, GM&apos;s, Heads, Leads, Managers from Drug Manufacturers, Supply Chain, PharmaTech
                        IT Solution Providers, Automation & Digitalization, CMO & CDMO, API manufacturers, Biologics,
                        Pharmacovigilance, Packaging Machinery, Biopharmaceuticals, Clean Rooms, Lab Equipments,
                        Machinery and process, Contract Manufacturing, Smart Molecule, QC/QA, AI/ML in Pharmaceuticals,
                        R&D, Vaccines, Nanotechnology, Formulation, Clinical Trials, HealthTech IT, Medical Insurance &
                        Tourism, Biotech, Health Services Providers, HealthTech Startups & Innovation, Assistive
                        Technology, Medical Equipments, Wellness & Prevention, Imaging & Diagnostic, Medical/Legal,
                        Regulatory Compliance, Surgical Instrument, Lab Devices, Devices Manufacturers, Nutraceutical,
                        Dietary Supplement Manufacturers.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-12" aria-expanded="false">
                    <span className="accordion-title">8- What are the key highlights of the event? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>The key highlights include:</p>
                    <ul>
                      <li>Co-hosted with NextGen Pharma Summit and Healthcare Innovation Summit & Expo.</li>
                      <li>15000+ visitors.</li>
                      <li>400+ Exhibitors from 15+ countries. </li>
                      <li>Extensive exhibition area.</li>
                      <li>700+ Reputed Companies Participating </li>
                      <li>Buyer-Seller Meet. </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-13" aria-expanded="false">
                    <span className="accordion-title">9- Is there an early-bird discount available?</span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, a <strong>flat 15% early-bird discount</strong> is available on stall tariffs for bookings
                      made
                      <strong>before 30th July 2025.</strong> This offer is applicable to the{" "}
                      <strong>first 50 bookings only</strong>, so we encourage you to reserve your space early to take
                      advantage of this limited-time offer.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button id="accordion-button-14" aria-expanded="false">
                    <span className="accordion-title">10- What are the exhibition opportunities? </span>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion-content">
                    <p>The exhibition offers opportunities to:</p>
                    <ul>
                      <li>
                        <strong>Showcase products, services, and solutions </strong>to a large and relevant audience.
                      </li>
                      <li>Connect with potential clients, partners, and investors.</li>
                      <li>
                        <strong>Gain exposure</strong> in new and emerging markets.
                      </li>
                      <li>Generate sales leads.</li>
                      <li>Position your company&apos;s brand.</li>
                      <li>
                        <strong>Launch new products</strong> or services.
                      </li>
                      <li>
                        <strong>Participate</strong> with options for Built-Up Space and Raw Space.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="venue_new">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="venn">
                <h3 style={{ color: "#000", fontSize: "23px", fontWeight: 700 }}>
                  {" "}
                  <span></span>Venue - Penang Waterfront Convention Centre (PWCC)
                </h3>
                <h6 className="mb-4">
                  <span style={{ color: "#000" }}>Address - </span>Hall no. 1, 2 & 3 Penang Waterfront Convention Centre
                  (PWCC)
                </h6>
              </div>
              <div className="mapy">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.3047967070106!2d100.31313707498377!3d5.37040239460844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac176beb3a923%3A0x76e5a9b0fc7d876a!2sPWCC%20-%20Penang%20Waterfront%20Convention%20Centre!5e0!3m2!1sen!2sin!4v1753387726947!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6">
              <Image
                src="https://indiapharmaexpo.com/images/hitex-3.jpeg"
                className="img-fluid"
                alt=""
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="row contact">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="loc">
                    <h3>Stall Booking</h3>
                    <h4>Lalit Kaushal</h4>
                    <p>
                      <span>
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      +91 8679103393
                    </p>
                    <p>
                      {" "}
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      lalit@icexpoindia.com
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="loc">
                    <h3>Delegate Enquiry</h3>
                    <h4>Abhishek Sharma </h4>
                    <p>
                      <span>
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      +91 9958097807
                    </p>
                    <p>
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      abhishek@icexpoindia.com
                    </p>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="loc">
                    <h3>Sponsorship Opportunities & Speaking Opportunities</h3>
                    <h4>Raj</h4>
                    <p>
                      <span>
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      +918860258188
                    </p>
                    <p>
                      <span>
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      marketing@icexpoindia.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-area background-image" style={{ background: "#0d2348", padding: "30px 0" }}>
        <div className="widget-area style2 pt-0">
          <div className="container mt-5">
            <div className="footer-layout style2">
              <div className="row">
                <div className="col-md-3 mb-4">
                  <div>
                    <Image
                      src="https://www.sahityaclasses.com/wp-content/uploads/2025/08/medlogo-1.png"
                      className="img-fluid"
                      width={125}
                      height={60}
                      alt=""
                    />
                    <div className="footer-social__v3">
                      <div className="social-icon">
                        <Link target="_blank" href="https://www.facebook.com/me/">
                          <i className="fab fa-facebook"></i>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/showcase/medhealthpharma/">
                          <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/?__pwa=1">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="widget2 widget_nav_menu footer-widget">
                    <h4 className="widget_title" style={{ color: "#3ea9e0", margin: "0 0 20px" }}>
                      Get In Touch
                    </h4>
                    <div className="menu-all-pages-container">
                      <ul className="menu-foot">
                        <li>
                          <Link href="#about">About the Expo</Link>
                        </li>
                        <li>
                          <Link href="#exhibitor_profile">Exhibitors</Link>
                        </li>
                        <li>
                          <Link href="./registration-form-inr.html">Book a Space</Link>
                        </li>
                        <li>
                          <Link href="./register.html">Register Now</Link>
                        </li>
                        <li>
                          <Link href="#contact">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="qrs">
                    <h3 className="text-white" style={{ fontSize: "28px", color: "#3ea9e0 !important" }}>
                      {" "}
                      #MedHealthPharma Exhibition
                    </h3>
                    <p style={{ color: "#cecece", fontSize: "16px", lineHeight: 1.5, fontWeight: 600 }}>
                      {" "}
                      <span style={{ marginRight: "10px" }}>
                        <i className="fa-solid fa-map-pin"></i>
                      </span>{" "}
                      Hall 1, 2 & 3, Penang Waterfront Convention Centre (Pwcc)
                    </p>
                    <p style={{ color: "#cecece", fontSize: "14px", lineHeight: 1.5, fontWeight: 300 }}>
                      For any query, please contact:
                    </p>
                    <Link href="./exhibitor.html" className="default-btn default-btn--secondary move-bottom">
                      <span>
                        Express Interest <i className="fa-solid fa-arrow-down"></i>
                      </span>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <p style={{ color: "#cecece", fontSize: "13px", lineHeight: 1.5, fontWeight: 300 }}>
                Medhealth pharma, a leading technology research and media organisation, has established a robust global
                presence since 2003, expanding across India, Malaysia, Sri Lanka, Bangladesh, the UK, the Middle East,
                and beyond. Driven by a vision to explore new frontiers in tech-led innovation for a better world, Elets
                pioneers impactful knowledge-sharing platforms, including global conferences, webinars, and
                research-driven publications. Bringing together the finest policymakers and industry leaders, Elets
                creates impactful synergies to drive a future-ready world.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <section className="copyright">
        <div className="footer_copyright">
          <p>Copyright © 2025 medhealth pharma| All Rights Reserved</p>
        </div>
      </section>
    </div>
  )
}
