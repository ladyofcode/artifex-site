export function getTeamString(s: string): { gameTitle: string, slug: string, members: string[] } {
  const parts = s.split("|");
  if (parts.length === 0) throw new Error("Invalid input");
  const title = parts[0].trim();
  let members: string[] = [];
  if (parts[1].trim().length > 0) {
    const names = parts[1].split(",");
    members = names.map(name => name.trim());
  }
  return { gameTitle: title, slug: title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s/g, "_"), members: members };
}