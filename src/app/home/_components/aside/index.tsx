import Logo from "@/components/logo";
import { AsideHomeComponent, AsideHomeContainer, AsideHomeItem, AsideHomeItems, AsideHomeLink, AsideHomeLogo, AsideHomeNav, AsideHomeUser } from "./components";
import GroupLink from "./group-link";

const AsideHome = () => {
    return (
        <AsideHomeComponent>
            <AsideHomeContainer>
                <AsideHomeItem>
                    <AsideHomeNav>
                        <AsideHomeItem>
                            <AsideHomeLogo>
                                <Logo />
                            </AsideHomeLogo>
                        </AsideHomeItem>
                        
                        <GroupLink />

                        <AsideHomeItem>
                            <AsideHomeUser>
                                User
                            </AsideHomeUser>
                        </AsideHomeItem>
                    </AsideHomeNav>
                </AsideHomeItem>
            </AsideHomeContainer>
        </AsideHomeComponent>
    );
}
 
export default AsideHome;