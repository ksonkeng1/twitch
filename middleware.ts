import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  //publicRoutes: ["/"],
  // Routes that can always be accessed, and have
  // no authentication information
});



export const config = {

  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};