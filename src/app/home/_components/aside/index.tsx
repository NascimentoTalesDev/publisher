import Logo from "@/components/logo";
import { AsideHomeComponent, AsideHomeContainer, AsideHomeItem, AsideHomeItems, AsideHomeLink, AsideHomeLogo, AsideHomeNav, AsideHomeUser, AsideHomeUserContainer } from "./components";
import GroupLink from "./group-link";
import Profile from "../profile";
import AvatarUser from "@/components/home/avatar";
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