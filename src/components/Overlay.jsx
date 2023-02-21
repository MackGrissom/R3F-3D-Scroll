import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";


const Section = (props) => {
    return (
        <section className="h-screen flex flex-col justify-center p-10">
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full ">
                    <div className=" bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};




export const Overlay = () => {

    const scroll = useScroll();
    const [opacityFirstSection, setOpacityFirstSection] = useState(1);
    const [opacitySecondSection, setOpacitySecondSection] = useState(1);
    const [opacityLastSection, setOpacityLastSection] = useState(1);
  
    useFrame(() => {
      setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
      setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
      setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
    });

    return (
        <Scroll html>
            <div className="w-screen">
            <Section opacity={opacityFirstSection}>
                <h1 className="text-2xl"> Hey! I'm Mack.</h1>

                <p className="text-[#3c37c5]">Web Developer 💻 <br/> Designer 🎨 <br/>
                World Traveller 🌎</p>
               

               
                <p className="animate-bounce  mt-6 text-xl">Scroll Down  ↓</p>

            </Section>


            <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
           My Tech Skills
          </h1>
          
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Tailwind</li>
            <li>ReactThreeFiber</li>
            <li>HTML / CSS / JS</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>Ruby / Rails</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">Keep Scrolling! ↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Contact Me🤙 
          </h1>
          <p className="text-white">
            Availble For Freelance or Fulltime Remote Positions
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:404-606-3147">404-606-3147</a>
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
          📧 <a href="mailto: mack@mackgrissom.io" >mack@mackgrissom.io </a>
          </p>
        </Section>
            </div>
        </Scroll>
    )
}