import { UserLogin } from "@/components/UserLogin";
import { UserLogout } from "@/components/UserLogout";

import { isAuthenticated } from "../action";

export default async function LoginPage() {
	const isLoggedIn: boolean = await isAuthenticated();
	return <>{isLoggedIn ? <UserLogout /> : <UserLogin />}</>;
}
