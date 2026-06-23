"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import NoUser from "@/components/ui/NoUser";

const MyProfile = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {!user ? (
        <NoUser />
      ) : (
        <div className="rounded-3xl border border-zinc-200 bg-white shadow-xl p-8">
          <h1 className="text-3xl font-bold text-zinc-900 mb-8">My Profile</h1>

          {/* Profile Card */}
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative w-28 h-28">
              <Image
                src={user?.image || "/avatar.png"}
                alt="profile"
                fill
                className="rounded-full object-cover border-4 border-zinc-100 shadow-md"
              />
            </div>

            {/* Info */}
            <div className="space-y-2 text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-zinc-900">
                {user?.name}
              </h2>

              <p className="text-zinc-600">{user?.email}</p>

              <div className="inline-block mt-2 px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                Active Account
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="mt-10 flex justify-end">
            <Link
              href="/my-profile/update"
              className="px-6 py-3 rounded-2xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
            >
              Update Information
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
