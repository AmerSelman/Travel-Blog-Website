import React from 'react'
import {useTypewriter} from 'react-simple-typewriter'; 
import { textFill } from '../constants';

const Welcome = () => {
    const [text] = useTypewriter({
        words: [textFill[0].wel],
        typeSpeed: 90
    });

    return (
        <div>
            <div className='bg-pinkShell h-[200px] xl:h-[800px] lg:h-[700px] md:h-[600px] sm:h-[400px] ss:h-[300px]'>
                <div className="text-[50px] xl:text-[200px] lg:text-[175px] md:text-[150px] sm:text-[100px] ss:text-[80px] font-poppins text-plumViolet pt-20 pb-64 text-center">
                    <h1>{text}</h1>
                </div>
            </div>
            

            <div className="text-primary w-[70%] m-auto text-[16px] xl:text-[50px] lg:text-[40px] md:text-[34px] sm:text-[22px] ss:text-[18px] font-poppins text-center pt-48 pb-16 xl:pb-48 md:pb-32 sm:pb-20">
                <p1>{textFill[0].text1}</p1>
                <br></br>
                <p1>{textFill[0].text2}</p1>
                <br></br>
                <p1>{textFill[0].text3}</p1>
            </div>
        </div>
    )
}

export default Welcome