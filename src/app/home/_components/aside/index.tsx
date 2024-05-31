import Logo from "@/components/logo";
import { AsideHomeComponent, AsideHomeContainer, AsideHomeItem, AsideHomeLogo, AsideHomeNav, AsideHomeUser, AsideHomeUserContainer } from "./components";
import GroupLink from "./group-link";
import { DropMenu } from "@/components/home/drop-menu";

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
                            <AsideHomeUserContainer>
                                <AsideHomeUser >
                                    <DropMenu />
                                </AsideHomeUser>
                            </AsideHomeUserContainer>
                        </AsideHomeItem>
                    </AsideHomeNav>
                </AsideHomeItem>
            </AsideHomeContainer>
        </AsideHomeComponent>
    );
}
 
export default AsideHome;