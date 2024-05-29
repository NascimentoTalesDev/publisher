import { auth } from "@/services/auth";
import EmailForm from "@/components/home/profile/email-form";
import NameForm from "@/components/home/profile/name-form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Profile = async() => {
  // const session = await auth()
  // if (!session.user) return null

  return (
    <Sheet>
      <SheetTrigger className="px-2 hover:bg-accent w-full text-left py-1 cursor-default ">Perfil</SheetTrigger>
      <SheetContent className="bg-one">
        <SheetHeader className="bg-gradient p-5 h-full rounded-[20px]">
          <SheetTitle className="text-center text-white font-bold">
            Perfil
          </SheetTitle>
          <div className="w-full bg-white h-full rounded-[20px] overflow-hidden">
            {/* <NameForm name={session?.user?.name} /> */}
            {/* <EmailForm email={session?.user?.email} /> */}
            {/* <NameForm /> */}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
