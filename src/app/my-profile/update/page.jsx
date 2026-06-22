"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button, Form } from "@heroui/react";

const UpdateProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    await authClient.updateUser({
      name,
      image,
    });
    e.target.name.value = "";
    e.target.image.value = "";
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="rounded-3xl border bg-white shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-8">Update Profile</h1>

        {/* Preview */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative w-20 h-20">
            <Image
              src={user?.image || "/avatar.png"}
              alt="preview"
              fill
              className="rounded-full object-cover border"
            />
          </div>

          <div>
            <p className="text-sm text-zinc-500">Preview</p>
            <p className="font-semibold">{user?.name}</p>
          </div>
        </div>

        {/* Inputs */}
        <Form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="text-sm text-zinc-600">Name</label>
            <input
              type="text"
              name="name"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your new name"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-600">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter new image URL"
            />
          </div>
          {/* Button */}
          <Button
            size="lg"
            radius="lg"
            type="submit"
            className="w-full mt-4 h-14 bg-black text-white font-semibold transition-all duration-300
  hover:scale-[1.02]
  hover:bg-zinc-800
  hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]
  active:scale-[0.98]"
          >
            Update Information
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfile;
