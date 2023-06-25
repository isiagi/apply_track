import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center w-full">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/" />
    </div>
  );
}
