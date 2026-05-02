"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect, useState } from "react";

export function PHProvider({ children }: { children: React.ReactNode }) {
  const [client, setClient] = useState<typeof posthog | null>(null);

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      capture_exceptions: true,
      session_recording: {
        maskAllInputs: false,
      },
    });
    setClient(posthog);
  }, []);

  if (!client) {
    return <>{children}</>;
  }

  return <PostHogProvider client={client}>{children}</PostHogProvider>;
}