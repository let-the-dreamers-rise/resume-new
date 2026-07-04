import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerPortfolioTools } from "./tools";

export function buildMcpServer(userId: string): McpServer {
  const server = new McpServer({
    name: "ashwin-goyal-portfolio",
    version: "1.0.0",
  });

  registerPortfolioTools(server, userId);

  return server;
}
