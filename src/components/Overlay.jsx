import { Scroll, useScroll } from "@react-three/drei";



const Section = (props) => {
    return (
        <section className="h-screen flex flex-col justify-center p-10">
            <div className="w-1/2 flex items-center justify-center">
                <div className="max-w-sm w-full ">
                    <div className=" bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-lg px-8 py-12">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
};




export const Overlay = () => {
    return (
        <Scroll html>
            <Section>
            <h1 className="text-white text-2xl"> Hey! I'm Mack. I'm a web developer, designer and world traveller. </h1> 
            </Section>



            <Section>
            <h1 className="text-white text-2xl"> Section 2</h1> 
            </Section>


            
            <Section>
            <h1 className="text-white text-2xl"> Section 3</h1> 
            </Section>
            
            </Scroll>
    )
}