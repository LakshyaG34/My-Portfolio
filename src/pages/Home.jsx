import Hero7 from '@/components/Home/Hero7'
import Hero5 from '../components/Home/Heo5'
import Hero1 from '../components/Home/Hero1'
import Hero2 from '../components/Home/Hero2'
import Hero3 from '../components/Home/Hero3'
import Hero4 from '../components/Home/Hero4'
import Hero6 from '../components/Home/Hero6'

const Home = () =>{
    return(
        <div className='pt-10 md:pt-18'>
            <Hero1/>
            <Hero5/>
            <Hero6/>
            <Hero2/>
            <Hero7/>
            <Hero3/>
            <Hero4/>
        </div>
    )
}

export default Home