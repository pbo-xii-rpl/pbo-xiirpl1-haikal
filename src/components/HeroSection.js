import button from "./button";
import navbar from "./navbar";

function HeroSection() {
    return(
        <div className="bg-indigo-600 h-[550px]">
            <div className="container mx-auto">
                <navbar />
                <div className="">
                
                     <div className=" text-center mt-16 space-y-4">
                     <h1 className="text-white text-center text-3xl font font-mono w-6/12 font-semibold"> Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                     <p> sejak 13 tahun saya memulai programing. sejak 3 tahun memulai UI designer </p>
                     <Button/>
             </div>
           </div>    
        </div>
    );
}

export default HeroSection;