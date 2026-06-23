import Link from "next/link";
import { Button } from "@heroui/react";

const NoUser = () => {
    <div className="min-h-[70vh] flex items-center justify-center px-4">
  <div className="w-full max-w-lg rounded-3xl border border-zinc-200 bg-white p-10 text-center shadow-xl">
    
    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100">
      <span className="text-4xl">👤</span>
    </div>

    <h1 className="mt-6 text-3xl font-bold text-zinc-900">
      You're Not Logged In
    </h1>

    <p className="mt-3 text-zinc-500 leading-7">
      Sign in to access your profile, manage your account information,
      and enjoy a personalized shopping experience.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <Button
        as={Link}
        href="/login"
        size="lg"
        radius="lg"
        className="flex-1 bg-black text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        Login
      </Button>

      <Button
        as={Link}
        href="/register"
        size="lg"
        radius="lg"
        variant="bordered"
        className="flex-1 font-semibold transition-all duration-300 hover:scale-[1.02]"
      >
        Create Account
      </Button>
    </div>
  </div>
</div>
}
export default NoUser;