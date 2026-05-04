export interface Template {
  id: string;
  name: string;
  description: string;
  language: string;
  author: string;
  stars: number;
  downloads: number;
  tags: string[];
}

const REGISTRY_URL = "https://raw.githubusercontent.com/stillsystems/nexus-registry/main/templates.json";

export async function getTemplates(): Promise<Template[]> {
  try {
    const res = await fetch(REGISTRY_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Failed to fetch registry");
    const data = await res.json();
    
    // For now, if registry is empty, return defaults
    if (data.length === 0) return MOCK_TEMPLATES;
    
    return data;
  } catch (err) {
    console.error("Registry fetch failed, falling back to mocks", err);
    return MOCK_TEMPLATES;
  }
}

export const MOCK_TEMPLATES: Template[] = [
  {
    id: "nexus-template-python",
    name: "Python CLI Pro",
    description: "Standardized starting point for Python CLI tools with Ruff, Pytest, and Pydantic.",
    language: "Python",
    author: "Still Systems",
    stars: 128,
    downloads: 1420,
    tags: ["cli", "professional", "linted"]
  },
  {
    id: "nexus-template-go",
    name: "Go Microservice",
    description: "High-performance microservice template with gRPC and clean architecture.",
    language: "Go",
    author: "Still Systems",
    stars: 256,
    downloads: 3840,
    tags: ["microservice", "grpc", "performance"]
  }
];
