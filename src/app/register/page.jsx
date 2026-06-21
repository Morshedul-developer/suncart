"use client";

import { useState } from "react";
import { Button, Input, Link } from "@heroui/react";
import { FiUser, FiMail, FiLink, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import "animate.css";

const inputClassNames = {
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
  input: "text-sm placeholder:text-[#ccc]",
};

export default function RegisterPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleRegister = (e) => {
    e.preventDefault();
    // register logic here
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #f5f5ff 50%, #eef4fb 100%)",
      }}
    >
      {/* Card */}
      <div
        className="w-full max-w-105 bg-white rounded-[20px] px-8 py-9 animate__animated animate__fadeInUp animate__faster"
        style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.07)" }}
      >
        {/* Heading */}
        <div className="text-center mb-8 animate__animated animate__fadeInDown animate__faster">
          <h2 className="text-[26px] font-bold text-[#1a1a1a] mb-1">
            Create Account
          </h2>
          <p className="text-sm text-[#888]">
            Join the brightest marketplace today.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-5">

          {/* Name */}
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            placeholder="Enter your full name"
            startContent={<FiUser className="text-lg text-[#ccc]" />}
            classNames={inputClassNames}
          />

          {/* Email */}
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            placeholder="hello@example.com"
            startContent={<FiMail className="text-lg text-[#ccc]" />}
            classNames={inputClassNames}
          />

          {/* Photo URL */}
          <Input
            type="url"
            label="Photo-URL"
            labelPlacement="outside"
            placeholder="https://image-url.com/avatar.jpg"
            startContent={<FiLink className="text-lg text-[#ccc]" />}
            classNames={inputClassNames}
          />

          {/* Password */}
          <Input
            type={isVisible ? "text" : "password"}
            label="Password"
            labelPlacement="outside"
            placeholder="••••••••"
            startContent={<FiLock className="text-lg text-[#ccc]" />}
            endContent={
              <button
                type="button"
                onClick={toggleVisibility}
                className="focus:outline-none"
                aria-label="Toggle password visibility"
              >
                {isVisible ? (
                  <FiEyeOff className="text-lg text-[#ccc]" />
                ) : (
                  <FiEye className="text-lg text-[#ccc]" />
                )}
              </button>
            }
            classNames={inputClassNames}
          />

          {/* Register Button */}
          <Button
            type="submit"
            radius="full"
            className="w-full h-[50px] text-[16px] font-bold mt-1"
            style={{ background: "#F5A623", color: "#3d2000" }}
            endContent={<FiArrowRight className="text-xl" />}
          >
            Register
          </Button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[#e5e5e5]" />
          <span className="text-[13px] text-[#bbb]">OR</span>
          <div className="flex-1 h-px bg-[#e5e5e5]" />
        </div>

        {/* Google Button */}
        <Button
          variant="bordered"
          className="w-full h-12 border-[1.5px] border-[#e0e0e0] bg-white rounded-[10px] text-[15px] font-medium text-[#333]"
          startContent={<FcGoogle className="text-[22px]" />}
        >
          Sign up with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-[#888] mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold" style={{ color: "#F0A500" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}