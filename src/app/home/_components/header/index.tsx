import { HeaderHomeComponent, HeaderHomeContainer, HeaderHomeItem, HeaderHomeItems, HeaderHomeLink, HeaderHomeNav } from "./components";
import GroupLink from "./group-link";

const HeaderHome = () => {
    return (
        <HeaderHomeComponent>
            <HeaderHomeContainer>
                <HeaderHomeItem>
                    <HeaderHomeNav>
                        <GroupLink />
                    </HeaderHomeNav>
                </HeaderHomeItem>
            </HeaderHomeContainer>
        </HeaderHomeComponent>
    );
}
 
export default HeaderHome;