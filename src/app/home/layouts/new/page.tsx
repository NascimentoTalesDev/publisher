import Back from "@/components/home/back";
import TitleH2 from "../../_components/title-h2";
import Layout from "./_components";

const NewLayoutPage = () => {
    
    return (
        <div>
            <div className="flex items-center gap-3 mb-3">
                <Back />
                <TitleH2>Crie aqui o layout do seu criativo</TitleH2>
            </div>
            <Layout />
        </div>
    );
}
 
export default NewLayoutPage;