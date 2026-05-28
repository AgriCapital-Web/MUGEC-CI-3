export type AuthorizedArea = "membre" | "admin" | "miprojet";

export function isSafePath(path: unknown): path is string {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//") && !path.includes("://");
}

export function areaToDashboardPath(area: AuthorizedArea | null | undefined): string {
  if (area === "miprojet") return "/admin/miprojet";
  if (area === "admin") return "/admin";
  return "/membre";
}

export function normalizeDashboardPath(path: unknown): string {
  return isSafePath(path) ? path : "/membre";
}