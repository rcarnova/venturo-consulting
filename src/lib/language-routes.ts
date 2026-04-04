const routeMap: Record<string, string> = {
  "/": "/en",
  "/le-sfide": "/en/challenges",
  "/casi-studio": "/en/case-studies",
  "/casi-studio/randstad": "/en/case-studies/randstad",
  "/casi-studio/randstad-professionals": "/en/case-studies/randstad-professionals",
  "/casi-studio/ricehouse": "/en/case-studies/ricehouse",
  "/casi-studio/lely": "/en/case-studies/lely",
  "/casi-studio/cve": "/en/case-studies/cve",
  "/casi-studio/findomestic": "/en/case-studies/findomestic",
  "/casi-studio/ufficio-pio": "/en/case-studies/ufficio-pio",
  "/casi-studio/eupromotions": "/en/case-studies/eupromotions",
  "/chi-siamo": "/en/about",
  "/magazine": "/magazine",
  "/lumen": "/en/lumen",
  "/principi": "/en/principles",
  "/privacy": "/en/privacy",
  "/analisi-evp": "/en/evp-analysis",
};

// Build reverse map (skip identity mappings)
const reverseMap: Record<string, string> = {};
for (const [it, en] of Object.entries(routeMap)) {
  if (it !== en) {
    reverseMap[en] = it;
  }
}

export function getItRoute(currentPath: string): string {
  return reverseMap[currentPath] || "/";
}

export function getEnRoute(currentPath: string): string {
  return routeMap[currentPath] || "/en";
}
