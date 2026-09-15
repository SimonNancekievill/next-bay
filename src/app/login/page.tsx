import { UserLogin } from "@/components/UserLogin";
import { isAuthenticated } from "../action";
import { UserLogout } from "@/components/UserLogout";

export default async function LoginPage() {
	const isLoggedIn: boolean = await isAuthenticated();
	return <>{isLoggedIn ? <UserLogout /> : <UserLogin />}</>;
}
