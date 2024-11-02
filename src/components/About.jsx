import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import "../App.css"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className="my-10 text-center text-4xl">About Me</h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial = {{opacity:0, x:-100}}
                    transition = {{duration:1}}
                    className="flex items-center justify-center">
                        <img className = "size-8/12 rounded-xl" src={aboutImg} alt="about" />
                    </motion.div>
                </div>
                <motion.div
                whileInView = {{opacity:1, x:0}}
                initial = {{opacity:0, x:100}}
                transition = {{duration:1}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className=" font-light mb-4 max-w-xl sm:pt-4">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
    </div>
  )
}

export default About