import { logoutAction } from "@/app/action";
import { Button } from "./ui/button";

export function UserLogout() {
	return (
		<>
			<form action={logoutAction}>
				<Button type="submit">Logout</Button>
			</form>
		</>
	);
}
