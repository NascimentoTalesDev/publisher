interface TitleH1Props {
    children: React.ReactNode;
}
const TitleH1 = ({ children }: TitleH1Props ) => {
    return (
        <h1 className="text-base font-bold mb-2">{children}</h1>
    );
}
 
export default TitleH1;