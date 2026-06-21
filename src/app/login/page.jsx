"use client";

import { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { IoHomeOutline } from "react-icons/io5";
import "animate.css";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: "linear-gradient(135deg, #fffbf0 0%, #f0f8ff 60%, #e8f4fd 100%)",
      }}
    >
      {/* Dashed outer border wrapper */}
      <div
        className="w-full max-w-105 rounded-[18px] animate__animated animate__fadeIn animate__faster border border-[rgba(253,230,138,0.5)]"
      >
        <div className="bg-white rounded-[18px]">

          {/* Brand Bar */}
          <div
            className="text-center py-5 px-6 animate__animated animate__fadeInUp animate__faster rounded-[18px] rounded-b-none"
            style={{
              background: "linear-gradient(90deg, #f5f0e8 0%, #fdf6e3 100%)",
              borderBottom: "1px solid #f0e0b0",
            }}
          >
            <h1
              className="text-[28px] font-extrabold tracking-tight"
              style={{ color: "#7A5200" }}
            >
              SunCart
            </h1>
          </div>

          {/* Card Body */}
          <div className="px-7 pt-8 pb-6">

            {/* Heading */}
            <div className="text-center mb-7 animate__animated animate__fadeInUp animate__faster">
              <h2 className="text-[24px] font-bold text-[#1a1a1a] mb-2">
                Welcome Back
              </h2>
              <p className="text-sm text-[#888]">
                Soak up the savings. Sign in to your account.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="flex flex-col gap-5 animate__animated animate__fadeInUp animate__delay-1s">

              {/* Email */}
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                placeholder="name@example.com"
                endContent={
                  <FiMail className="text-xl text-[#ccc] mt-[2px]" />
                }
                classNames={{
                  label: "text-[14px] font-semibold text-[#1a1a1a]",
                  inputWrapper: [
                    "border-[1.5px] border-[#F0B429]",
                    "bg-white",
                    "rounded-[10px]",
                    "h-12",
                    "hover:border-[#d4940e]",
                    "focus-within:border-[#d4940e]",
                    "shadow-none",
                  ],
                  input: "text-sm text-[#aaa] placeholder:text-[#ccc]",
                }}
              />

              {/* Password */}
              <Input
                type={isVisible ? "text" : "password"}
                label="Password"
                labelPlacement="outside"
                placeholder="••••••••"
                endContent={
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="focus:outline-none"
                    aria-label="Toggle password visibility"
                  >
                    {isVisible ? (
                      <FiEyeOff className="text-xl text-[#ccc]" />
                    ) : (
                      <FiEye className="text-xl text-[#ccc]" />
                    )}
                  </button>
                }
                startContent={<FiLock className="text-xl text-[#ccc]" />}
                description={
                  <div className="flex justify-end -mt-1">
                    <Link
                      href="#"
                      className="text-[13px] font-medium"
                      style={{ color: "#F0A500" }}
                    >
                      Forgot password?
                    </Link>
                  </div>
                }
                classNames={{
                  label: "text-[14px] font-semibold text-[#1a1a1a]",
                  inputWrapper: [
                    "border-[1.5px] border-[#F0B429]",
                    "bg-white",
                    "rounded-[10px]",
                    "h-12",
                    "hover:border-[#d4940e]",
                    "focus-within:border-[#d4940e]",
                    "shadow-none",
                  ],
                  input: "text-sm text-[#333] placeholder:text-[#ccc]",
                }}
              />

              {/* Login Button */}
              <Button
                type="submit"
                radius="full"
                className="w-full h-[50px] text-[16px] font-bold mt-1"
                style={{
                  background: "#F5A623",
                  color: "#3d2000",
                }}
                endContent={<FiArrowRight className="text-xl" />}
              >
                Login
              </Button>
            </form>

            {/* OR Divider */}
            <div className="flex items-center gap-3 my-5 animate__animated animate__fadeIn animate__delay-1s">
              <div className="flex-1 h-px bg-[#e5e5e5]" />
              <span className="text-[13px] text-[#bbb]">OR</span>
              <div className="flex-1 h-px bg-[#e5e5e5]" />
            </div>

            {/* Google Button */}
            <Button
              variant="bordered"
              className="w-full h-12 border-[1.5px] border-[#e0e0e0] bg-white rounded-[10px] text-[15px] font-medium text-[#333] animate__animated animate__fadeInUp animate__delay-1s"
              startContent={<FcGoogle className="text-[22px]" />}
            >
              Continue with Google
            </Button>

            {/* Register Link */}
            <p className="text-center text-sm text-[#888] mt-6 animate__animated animate__fadeIn animate__delay-1s">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold" style={{ color: "#F0A500" }}>
                Register
              </Link>
            </p>
          </div>

          {/* Return to Home */}
          <div
            className="flex items-center justify-center gap-2 py-4 text-[13px] text-[#999] animate__animated animate__fadeIn"
            style={{ borderTop: "1px solid #f0f0f0" }}
          >
            <IoHomeOutline className="text-base" />
            <Link href="/" className="text-[#999] hover:text-[#666]">
              Return to Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}