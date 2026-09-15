import { logoutUser } from "@/app/action";
import { Button } from "./ui/button";

export function UserLogout() {
	return (
		<>
			<form action={logoutUser}>
				<Button type="submit">Logout</Button>
			</form>
		</>
	);
}
