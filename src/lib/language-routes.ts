const routeMap: Record<string, string> = {
  "/": "/en",
  "/le-sfide": "/en/challenges",
  "/casi-studio": "/en/case-studies",
  "/casi-studio/randstad": "/en/case-studies/randstad",
  "/casi-studio/ricehouse": "/en/case-studies/ricehouse",
  "/casi-studio/lely": "/en/case-studies/lely",
  "/casi-studio/cve": "/en/case-studies/cve",
  "/casi-studio/findomestic": "/en/case-studies/findomestic",
  "/casi-studio/ufficio-pio": "/en/case-studies/ufficio-pio",
  "/chi-siamo": "/en/about",
  "/magazine": "/en",
  "/lumen": "/en/lumen",
};

// Build reverse map
const reverseMap: Record<string, string> = {};
for (const [it, en] of Object.entries(routeMap)) {
  reverseMap[en] = it;
}

export function getItRoute(currentPath: string): string {
  return reverseMap[currentPath] || "/";
}

export function getEnRoute(currentPath: string): string {
  return routeMap[currentPath] || "/en";
}
