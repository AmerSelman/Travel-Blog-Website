import styles from "../style";
import { places} from "../constants";

const Hero = () => {

  return (
    <section>
      <div className="place-content-center">
        {places.map((nav, index) => (
          <a href="#">
          <div className={`${styles.boxStyle}`}>
            
            <img src={nav.icon} className="w-[100%] h-[100%]"/>
            <div className="text-center text-[20px] font-bold m-2">
              <h1>{nav.title}</h1>
            </div>
            <div className="text-center text-[18px] px-6">
              <p1>{nav.content}</p1>
            </div>
          </div>
          </a>
        ))}
      </div>
    
      
    </section>
  )
}

export default Hero