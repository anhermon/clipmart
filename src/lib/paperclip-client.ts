// Client for calling the Paperclip control plane API during blueprint installs

const PAPERCLIP_API_URL = process.env.PAPERCLIP_API_URL ?? "http://localhost:3100";

interface PaperclipRequestOptions {
  method: string;
  path: string;
  body?: unknown;
  apiKey: string;
}

async function paperclipFetch<T = unknown>({
  method,
  path,
  body,
  apiKey,
}: PaperclipRequestOptions): Promise<T> {
  const res = await fetch(`${PAPERCLIP_API_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(
      `Paperclip API ${method} ${path} failed (${res.status}): ${text}`
    );
  }

  return res.json() as Promise<T>;
}

export interface CreateAgentPayload {
  name: string;
  role: string;
  title: string;
  icon?: string;
  capabilities?: string;
  adapterType: string;
  adapterConfig?: Record<string, unknown>;
  reportsTo?: string;
  budgetMonthlyCents?: number;
  permissions?: { canCreateAgents?: boolean };
}

export interface CreateProjectPayload {
  name: string;
  description?: string;
  workspace?: {
    cwd?: string;
    repoUrl?: string;
  };
}

interface CreatedAgent {
  id: string;
  name: string;
  role: string;
  urlKey: string;
}

interface CreatedProject {
  id: string;
  name: string;
}

export const paperclipClient = {
  async createAgent(
    companyId: string,
    agent: CreateAgentPayload,
    apiKey: string
  ): Promise<CreatedAgent> {
    return paperclipFetch<CreatedAgent>({
      method: "POST",
      path: `/api/companies/${companyId}/agents`,
      body: agent,
      apiKey,
    });
  },

  async createProject(
    companyId: string,
    project: CreateProjectPayload,
    apiKey: string
  ): Promise<CreatedProject> {
    return paperclipFetch<CreatedProject>({
      method: "POST",
      path: `/api/companies/${companyId}/projects`,
      body: project,
      apiKey,
    });
  },

  async setInstructionsPath(
    agentId: string,
    path: string,
    apiKey: string
  ): Promise<void> {
    await paperclipFetch({
      method: "PATCH",
      path: `/api/agents/${agentId}/instructions-path`,
      body: { path },
      apiKey,
    });
  },

  async getCompany(
    companyId: string,
    apiKey: string
  ): Promise<{ id: string; name: string }> {
    return paperclipFetch({
      method: "GET",
      path: `/api/companies/${companyId}`,
      apiKey,
    });
  },
};
