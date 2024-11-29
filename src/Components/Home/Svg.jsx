import styled from 'styled-components';
import { ReactComponent as LaptopSVG } from "../../Assets/laptop.svg";
import { ReactComponent as StudentSvg } from "../../Assets/student.svg";
import {ReactComponent as ShopSvg} from "../../Assets/Svg/shopping.svg";
import {ReactComponent as IdSvg} from "../../Assets/Svg/id_card.svg";
import {ReactComponent as HeadSvg} from "../../Assets/Svg/headphones.svg";
import {ReactComponent as CastSvg} from "../../Assets/Svg/cast.svg";
import {ReactComponent as ConnectSvg} from "../../Assets/Svg/connecting.svg";
import {ReactComponent as CurrencySvg} from "../../Assets/Svg/currency.svg";
import {ReactComponent as EgcSvg} from "../../Assets/Svg/ecg.svg";
import {ReactComponent as FlightSvg} from "../../Assets/Svg/flights.svg";
import {ReactComponent as LibrarySvg} from "../../Assets/Svg/library.svg";
import {ReactComponent as LocalSvg} from "../../Assets/Svg/local.svg";
import {ReactComponent as RealSvg} from "../../Assets/Svg/real_es.svg";
import {ReactComponent as SupportSvg} from "../../Assets/Svg/sports.svg";
import {ReactComponent as StoreSvg} from "../../Assets/Svg/store.svg";
import {ReactComponent as SuperSvg} from "../../Assets/Svg/supervisor.svg";
import {ReactComponent as DirectionSvg} from "../../Assets/Svg/direction.svg";
const IconStyle =`
  fill: #34495E;
  transition: fill 0.3s ease, transform 1s ease;
  
  &:hover {
    fill: gray;
    transform: scale(1.1);
  }
`;
const StyledShop = styled(ShopSvg)`${IconStyle}`;
const StyledId = styled(IdSvg)`${IconStyle}`;
const StyleHead = styled(HeadSvg)`${IconStyle}`;
const StyleCast = styled(CastSvg)`${IconStyle}`;
const StyleConnect = styled(ConnectSvg)`${IconStyle}`;
const StyleCurrency = styled(CurrencySvg)`${IconStyle}`;
const StyleEgc = styled(EgcSvg)`${IconStyle}`;
const StyleFlight = styled(FlightSvg)`${IconStyle}`;
const StyleLibrary = styled(LibrarySvg)`${IconStyle}`;
const StyleLocal = styled(LocalSvg)`${IconStyle}`;
const StyleReal = styled(RealSvg)`${IconStyle}`;
const StyleSupport = styled(SupportSvg)`${IconStyle}`;
const StyleStore = styled(StoreSvg)`${IconStyle}`;
const StyleSuper = styled(SuperSvg)`${IconStyle}`;
const StyleDirection = styled(DirectionSvg)`${IconStyle}`;
const Styledcol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .stylep {
    color: BLack;
    font-size: 15px;
  }
  &:hover .stylep{
    color:#C0392B;
    transform: scale(1.1);
    transition :1s ease ;
  }
  &:hover .stylelap{
    fill: gray;
    transform: scale(1.1);
    transition :1s ease ;
  }
`;



function Svg() {
  return (<>
   <container class="row flex flex-wrap ">
    <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 w-full flex flex-col items-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyledShop className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Ecommerce</p></div></Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5 basis-1/2 w-full flex flex-col items-center lg:border-r-gray-950  md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyledId className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">Social Networking</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleCurrency className="w-14 h-full  stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2 ">FinTech</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-gray-950 md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleLibrary className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">On-Demand</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center  border-r border-r-gray-950 lg:border-r-0 md:border-r-0 border-b-gray-950  border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleSupport className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Game & Sports</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-gray-950  md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleFlight className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">Travel & Tourism</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleHead className="w-16 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier ">Music</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-gray-950 md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleConnect className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Aviation</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleReal className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Real Estate</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center  border-b-gray-950  border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleCast className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Education</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center border-r-gray-950 border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleSuper className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">IT Staff Augmentation</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-gray-950  lg:border-r  md:border-r-gray-950  md:border-r  lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleStore className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Retail</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center border-r-gray-950  border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleDirection className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Automotive</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-gray-950 lg:border-r md:border-r-gray-950 md:border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><StyleEgc className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Health</p></div>
     </Styledcol>
     </div>
     <div class="lg:basis-1/5 md:basis-1/5  basis-1/2 flex flex-col items-center lg:border-r-0 md:border-r-0 border-r-gray-950 border-r py-8 md:py-6">
     <Styledcol >
     <div><StyleLocal className="w-14 h-full stylelap"/></div>
     <div><p class="stylep dynapuff-uniquifier pt-2">Logistics</p></div>
     </Styledcol>
     </div>
     
    </container>
  </>);
}

export default Svg;
