import Image from "next/image";
import { Button } from "./ui/button";



const GoogleAuth = ({ text }) => {
    return (
        <Button className="gap-2" variant={"outline"}>
            <Image src={"/images/google.webp"} width={24} height={24} alt="Google" />
            <span>
                {text}
            </span>
        </Button>
    );
}
 
export default GoogleAuth;