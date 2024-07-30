import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verify = req.cookies.get("loginSusses");
  let url = req.url;
  const listPrivateRoute = ["/admin"];

  if (!verify && url.includes(listPrivateRoute)) {
    return NextResponse.redirect("http://localhost:9999/");
  }

  if (verify && url === "http://localhost:9999/") {
    return NextResponse.redirect("http://localhost:9999/admin");
  }
}
