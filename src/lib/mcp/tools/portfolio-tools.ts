import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { projects, skillGroups, telemetryRows } from "@/lib/portfolio-data";

const profile = {
  name: "Ashwin Goyal",
  location: "Navi Mumbai, India",
  email: "letthedreamersrise@gmail.com",
  phone: "+91 8097251640",
  education: "B.Tech Computer Science and Engineering, VIT Bhopal, 2024-2028",
  gpa: "8.94 / 10.0",
  target: "Microsoft Software Engineering Internship",
  summary:
    "Computer Science undergraduate with 1+ years of Java, C++ and TypeScript experience, 60+ shipped systems, strong DSA/API/testing/CI-CD fundamentals, and graphic design taste.",
};

function text(data: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] };
}

export function registerPortfolioTools(server: McpServer, _userId: string) {
  server.tool("get_portfolio_profile", "Return Ashwin Goyal's recruiter-safe profile summary and contact details.", {}, async () => text(profile));

  server.tool(
    "list_featured_projects",
    "List featured systems with timeline, tags, and key engineering evidence.",
    { tag: z.string().optional().describe("Optional case-insensitive tag filter") },
    async ({ tag }) => {
      const normalized = tag?.toLowerCase();
      const filtered = normalized ? projects.filter((project) => project.tag.toLowerCase().includes(normalized)) : projects;
      return text(filtered);
    },
  );

  server.tool("get_skill_matrix", "Return Ashwin's grouped engineering and graphic design skills.", {}, async () => text(skillGroups));

  server.tool("get_delivery_telemetry", "Return delivery signals such as shipped systems, tests, hackathons, and privacy controls.", {}, async () => text(telemetryRows));

  server.tool(
    "draft_recruiter_intro",
    "Draft a concise recruiter introduction tailored to a role or company.",
    { role: z.string().default("Software Engineering Internship"), company: z.string().default("the hiring team") },
    async ({ role, company }) =>
      text({
        subject: `Ashwin Goyal for ${role}`,
        body: `Ashwin Goyal is a VIT Bhopal CSE undergraduate with CGPA 8.94/10, 60+ shipped systems, strong Java/C++/TypeScript foundations, and a portfolio that demonstrates both backend engineering depth and graphic design judgment. He is a strong fit for ${role} at ${company}.`,
      }),
  );
}
