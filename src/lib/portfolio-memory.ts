"use client";

import { memory } from "@eazo/sdk";

export function reportPortfolioAction(content: string, type: string, page: string, extra?: Record<string, string>) {
  memory.reportAction({
    content,
    event_type: "memory.reportAction",
    page,
    metadata: {
      action_kind: "domain_event",
      action_type: type,
      subject_id: page,
      count_delta: 1,
      ...extra,
    },
  }).catch(() => {});
}
