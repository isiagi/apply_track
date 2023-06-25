import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center w-full">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
