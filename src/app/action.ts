"use server";

import { createAuction } from "@/lib/auctions.service";
import { loginUser, registerUser } from "@/lib/auth.service";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect, unauthorized } from "next/navigation";

const AUTH_COOKIE = "darkbay_token";

export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const authData = await loginUser({ username, password });

  if (authData.statusCode === 401 || !authData.access_token) {
    unauthorized();
  }

  const cookieStore = await cookies();

  cookieStore.set(AUTH_COOKIE, authData.access_token, {
    httpOnly: true,
    //secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  //revalidatePath("/auctions");
  redirect("/auctions");
}

export async function registerAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log("regusterUser", username, password);

  const authData = await registerUser({ username, password });

  if (authData.statusCode) {
    throw new Error(authData.message);
  }

  redirect("/login");
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.delete(AUTH_COOKIE);

  redirect("/");
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();

  const token = cookieStore.get(AUTH_COOKIE)?.value;

  return token ? true : false;
}

export async function createAuctionAction(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const startingPrice = Number(formData.get("startingPrice")) as number;

  const auctionData = await createAuction({
    title,
    description,
    startingPrice,
  });

  if (auctionData.statusCode) {
    throw new Error(auctionData.message);
  }
  revalidatePath("/auctions");
  redirect(`/auctions/${auctionData.id}`);
}
