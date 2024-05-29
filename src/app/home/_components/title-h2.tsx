interface TitleH2Props {
    children: React.ReactNode;
}
const TitleH2 = ({ children }: TitleH2Props ) => {
    return (
        <h2 className="text-base font-bold">{children}</h2>
    );
}
 
export default TitleH2;