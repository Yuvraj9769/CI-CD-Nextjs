"use client";

import { useEffect, useState } from "react";
import axiosClient from "@/app/lib/axiosClient";

type DummyUser = {
  id: number;
  name: string;
  email: string;
};

type DummyResponse = {
  status: number;
  message: string;
  data: DummyUser[];
  success: boolean;
};

export default function DummyPage() {
  const [users, setUsers] = useState<DummyUser[]>([]);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchDummyData() {
      try {
        setLoading(true);
        setError(null);

        // baseURL (NEXT_PUBLIC_API_BASE_URL) is unset, so this relative path
        // resolves against the current origin in the browser.
        const response = await axiosClient.get<DummyResponse>(
          "/api/dummy-response"
        );

        if (cancelled) return;

        setUsers(response.data.data);
        setMessage(response.data.message);
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "Failed to fetch dummy data."
        );
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchDummyData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col gap-6 py-24 px-8 bg-white dark:bg-black">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Dummy Data
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Fetched from <code>/api/dummy-response</code> using axios.
          </p>
        </header>

        {loading && (
          <p className="text-zinc-600 dark:text-zinc-400">Loading…</p>
        )}

        {error && !loading && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            {message && (
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {message}
              </p>
            )}
            <ul className="flex flex-col gap-3">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex flex-col rounded-lg border border-black/[.08] px-4 py-3 dark:border-white/[.145]"
                >
                  <span className="font-medium text-black dark:text-zinc-50">
                    {user.name}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {user.email}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
