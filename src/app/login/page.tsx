import { isAuthenticated } from "@/app/action";
import { UserLogin } from "@/components/UserLogin";
import { UserLogout } from "@/components/UserLogout";

export default async function LoginPage() {
	const isLoggedIn: boolean = await isAuthenticated();
	return <>{isLoggedIn ? <UserLogout /> : <UserLogin />}</>;
}
