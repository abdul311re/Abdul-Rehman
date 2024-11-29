import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styled from 'styled-components';
import {ReactComponent as Cloud} from "../../Assets/Svg/Cloudcom.svg";
import {ReactComponent as Mobile} from "../../Assets/Svg/Mobile.svg";
import {ReactComponent as Id }from "../../Assets/Svg/Itsector.svg";
import {ReactComponent as Laptop} from "../../Assets/Svg/Laptop.svg";
import {ReactComponent as Game} from "../../Assets/Svg/Game.svg";
import {ReactComponent as Webdev} from "../../Assets/Svg/webdev.svg";

const IconStyle =`
 fill:#C0392B;
  transition: fill 0.3s ease, transform 1s ease;
`;
const StyledCloud = styled(Cloud)`${IconStyle}`;
const StyledMobile = styled(Mobile)`${IconStyle}`;
const StyledId = styled(Id)`${IconStyle}`;
const StyledLaptop = styled(Laptop)`${IconStyle}`;
const StyledGame = styled(Game)`${IconStyle}`;
const Styledweb = styled(Webdev)`${IconStyle}`;
const Deiv= styled.div`
@media screen and (min-width:1322px){
.splide__pagination {
    display:none;
}
.splide__arrow{
    /* background: white!important; */
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
}
.splide__arrow--prev {
    top: -80px;
    left: 85%;
    width:4%;
}
.splide__arrow--next{
  top: -80px;
  width:4%;
  right:6%;
}
.splide__arrow svg{
    font-size: 15rem;
    fill:#C0392B;
}
}
@media screen and (min-width:768px) and (max-width:1321px){
.splide__pagination {
    display: none;
}
.splide__arrow{
    /* background: white!important; */
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
}
.splide__arrow--prev {
    top: -80px;
    left: 85%;
    width:4%;
}
.splide__arrow--next{
  top: -80px;
  width:4%;
  right:6%;
}
.splide__arrow svg{
    font-size: 15rem;
    fill:#C0392B;
}
}
@media screen and (max-width:767px){
.splide__pagination {
    position: absolute;
    bottom: 13px;
}
.splide__arrow{
    /* background: white!important; */
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
}
.splide__arrow--prev {
    top: 333px;
    left: 30%;
    width:6%;
}
.splide__arrow--next{
  top: 333px;
  width:6%;
  right:30%;
}
.splide__arrow svg{
    font-size: 15rem;
    fill:#C0392B;
}
}

`;
function Services(){
    return(<>
    <container className="">
    <div className="relative lg:pb-36 pb-24 lg:px-32  lg:pt-10 pt-0  group ">
        <div className="absolute z-10 group-hover:pl-4 lg:top-10 top-16 transition-all duration-4s00 ease-in-out hidden lg:block ">
            <h2 className="lg:text-6.3xl  text-3.5xl font-bold text-purple opacity-20 lg:opacity-5 dynapuff-uniquifier ">Essential Services</h2>
        </div>
        <div className="absolute z-20 lg:pt-7 pt-8  pl-2 ">
            <h3 className=" px-4 lg:px-0 text-1.3xl lg:text-3xl dynapuff-uniquifier font-medium text-charcoal opacity-95 ">Essential Services We Deliver</h3>
        </div>
    </div>
    <div className="lg:px-32 px-4">
    <Deiv className="text-center  pt-0 mt-0 mb-12">
      <Splide
        options={{
          type: "loop",
          gap: "2rem",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          arrows: "slider",
          height: "22rem",
          pagination: true, // Enable pagination dot
          breakpoints: {
            2560: { perPage: 4, perMove: 1  },
            1440: { perPage: 3, perMove: 1 },
            1024 :{perPage:2, perMove:1 },
            780: { perPage:1, perMove: 1 },
            480: { perPage: 1, perMove: 1 },
            400: { perPage: 1, perMove: 1 },
            325: { perPage: 1, perMove: 1 },
          },
        }}
        hasSliderWrapper
        hasAutoplayControls
        hasAutoplayProgress
      >
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5  bg-grey px-6 py-8 lg:pb-0">
          <Link to="/seo-digital-marketing" className="text-decoration-none">
              <Styledweb
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal dynapuff-uniquifier  pb-4 pt-2">
                Website Development
              </h3>
              <p className="text-start">Our web development services focus on building responsive, high-performance websites with robust, secure back-end solutions, ensuring exceptional user interaction and seamless operational functionality.</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5 bg-grey px-6 py-6">
          <Link to="/website-development" className="text-decoration-none">
          <StyledMobile
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal 
                dynapuff-uniquifier  pt-2 pb-4">
               Mob APP Development
              </h3>
              <p className="text-start">
              We specialize in crafting high-performance mobile applications that deliver smooth user experiences, strong security measures, and scalable architectures, designed to align with user requirements and drive business growth.</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5 bg-grey px-6 py-6">
          <Link to="/website-development" className="text-decoration-none">
          <StyledLaptop
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal dynapuff-uniquifier  pt-2 pb-4">
                Software Development
              </h3>
              <p className="text-start">We develop tailored software solutions that streamline business operations, incorporating advanced integrations, robust security protocols, and scalable architectures to fuel your growth and engagement.</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5 bg-grey px-6 py-6">
          <Link to="/unity-development" className="text-decoration-none">
          <StyledGame
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal dynapuff-uniquifier pt-2 pb-4">
                Game Development
              </h3>
              <p className="text-start">Our game development proficiency covers everything from initial concept to final deployment. We specialize in creating captivating visuals, seamless gameplay, and high-performance experiences across multiple platforms.</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5 bg-grey px-6 py-6">
          <Link to="/qutation" className="text-decoration-none">
          <StyledId
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal dynapuff-uniquifier  pt-2 pb-4">
              IT Staff Augmentation
              </h3>
              <p className="text-start">Our IT staff augmentation services provide skilled professionals to strengthen your team, offering seamless support and specialized expertise for every project phase, ensuring success and improved efficiency .</p>
          </Link>
        </SplideSlide>
        <SplideSlide className="rounded-t-2xl rounded-b-2xl my-5 bg-grey px-6 py-6">
          <Link to="/qutation" className="text-decoration-none">
          <StyledCloud
              className=" h-16 sm:h-16 lg:h-14 w-auto Ser-svg"
            />
              <h3 className="text-black font-bold text-start mt-auto !text-2xl text-charcoal dynapuff-uniquifier  pt-2 pb-4">
              Cloud Consulting
              </h3>
              <p className="text-start">We provide cloud consulting services to refine your cloud strategy, improve security, and deliver scalable, cost-efficient infrastructure tailored to support your organization’s growth and evolving needs.</p>
          </Link>
        </SplideSlide>
      </Splide>
    </Deiv>
    </div>
</container>
    </>)
}
export default Services ;