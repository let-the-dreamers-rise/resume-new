"use client";

import Link from "next/link";
import { CheckCircle2, Zap } from "lucide-react";
import { DetailFrame } from "@/components/portfolio/detail-frame";
import { telemetryRows } from "@/lib/portfolio-data";

export function TelemetryLogScreen() {
  return (
    <DetailFrame
      filename="integration-tests.spec"
      size="ALL PASSED"
      footer={
        <div className="border-t border-[color:var(--app-border)] bg-[#0A0B0E] p-3">
          <Link href="/" className="block w-full rounded bg-[var(--app-primary)] py-2.5 text-center text-xs font-bold text-black hover:bg-[var(--app-primary)]/90">
            Close Test Console
          </Link>
        </div>
      }
    >
      <div className="space-y-2 text-[11px] leading-relaxed">
        <div className="italic text-[var(--app-text-muted)]">Initializing Ashwin's Portfolio Terminal Environment...</div>
        <div className="text-[var(--app-success)]">System Version: v2.0.4-stable | Node: Active | Status: Ready for Review</div>
        <div className="my-3 border-t border-[color:var(--app-border)] pt-3" />
        <div className="flex items-center gap-2 text-[var(--app-warning)]"><Zap className="h-3.5 w-3.5" aria-hidden />Starting Automated Integration Tests...</div>
        <div className="text-[var(--app-text-secondary)]">Executing test suite: 'ashwin-dev-portfolio-spec.ts'...</div>
        {telemetryRows.map(([name, value, status]) => (
          <div key={name} className="flex items-start gap-2 text-[var(--app-success)]">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
            <span>RUNNING: {name} check... PASSED ({value}; {status})</span>
          </div>
        ))}
        <div className="my-3 border-t border-[color:var(--app-border)] pt-3" />
        <div className="rounded border border-[color:var(--app-success)]/30 bg-[#141B18] p-3 text-xs text-[var(--app-success)]">
          ALL INTEGRITY TESTS PASSED. Ashwin is verified for high-impact software engineering and design-heavy product work.
        </div>
      </div>
    </DetailFrame>
  );
}
