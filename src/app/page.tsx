import ModeToggle from "@/components/ModeToggle";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function page() {
  return (
    <div>
      <h1>Welcome to the Socially App!</h1>
    </div>
  );
}

export default page;
