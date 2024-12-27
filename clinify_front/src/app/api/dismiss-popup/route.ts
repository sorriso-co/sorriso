import { NextResponse } from "next/server";

export async function POST() {
  try {
    const headers = new Headers();
    headers.append(
      "Set-Cookie",
      "popupDismissed=true; Path=/; Max-Age=2592000; HttpOnly; Secure"
    );

    return NextResponse.json(
      { message: "Popup dismissed successfully." },
      { headers }
    );
  } catch (error) {
    console.error("Failed to dismiss popup:", error);
    return NextResponse.json(
      { message: "Failed to dismiss popup." },
      { status: 500 }
    );
  }
}
