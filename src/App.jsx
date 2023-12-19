import styles from './style'
import { Footer, Hero, Navbar, Welcome } from './components'

const App = () => {
  return (
    <div>

      
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className="bg-pinkShell w-full overflow-hidden">
        <div className={`${styles.padding} ${styles.flexCenter}`}>
          <Welcome />
        </div>
        
      </div>
      
      <div className="bg-pinkShell w-full overflow-hidden">
        <div className={`${styles.padding} ${styles.flexCenter}`}>
          <Hero />
        </div>
        
      </div>
      <div>
        <Footer />
      </div>

           
    </div>
  )
}

export default App