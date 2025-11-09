// src/proxy.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

/**
 * Default Clerk middleware for Next.js (proxy.ts)
 * This attaches Clerk auth state to incoming requests so server helpers like currentUser() work.
 */
export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next internals and static files (same pattern recommended in Clerk docs)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
