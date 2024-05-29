import { auth } from "@/services/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarUser = async () => {
  const session = await auth();
  
  // if (!session?.user) return null
 
    return (
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback>
          US
          {/* {session?.user?.name[0][0] || undefined} */}
          {/* {session?.user?.name[1][0].toUpperCase()} */}
        </AvatarFallback>
      </Avatar>
    );
};

export default AvatarUser;
