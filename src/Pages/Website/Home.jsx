import Curve from "../../Assets/Curve-white.svg"
import Tick from "../../Assets/Tick/Tick.png"
import Pk from "../../Assets/pk.png"
import Button from '@mui/material/Button';
function Home (){
    const today = new Date();

    // Format date as needed
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return(<>
    <container className="bg-white">
        <div className="py-16">
            <h1 className="text-5xl font-bold pacifico-regular text-center ">Create Your Software Solutions <span className="text-purple font-bold">–</span> Seamlessly.</h1>
            <h2 className="text-5xl font-bold text-charcoal pacifico-regular  text-center pt-4">Smarter, Faster, Better</h2>
            <div className='flex gap-4 my-12 items-center justify-center'>
            <div className='mt-3'><Button variant="contained" disableElevation  className='!bg-purple text-white h-12 dynapuff-uniquifier hover:!bg-grey hover:text-black' ><p className='dynapuff-uniquifier'>
            Get Started - Free </p>
            </Button></div>
            <div className='mt-3'><Button variant="contained" disableElevation  className='!bg-charcoal  text-white h-10 ' ><p className='dynapuff-uniquifier'>
            Book a Live Demo </p>
            </Button></div>
            </div>
        </div>
    </container>
    <section className="!bg-grey h-18 pb-20" >
        <div className="relative z-10"><img src={Curve} alt="src" className="w-screen" /></div>
        <div className="relative z-20 -mt-0 lg:-mt-50 sm:-mt-20 " >
        <div className='flex items-center justify-center'><Button variant="contained" disableElevation  className='!bg-white !text-black h-8 !rounded-full ' >
        <img src={Pk} alt="pk" className="rounded-full h-4" />
            <p className='dynapuff-uniquifier flex px-4 text-sm'>
            AR Company <span>-</span> Lahore, Pakistan</p>
            <p className="text-xs">{formattedDate}</p>
            <p className="px-2 text-xs">Register</p>
            <img src={Tick} alt="Tick" className="w-8"/>
            </Button></div>
        </div>
    </section>
    </>)
}
export default Home