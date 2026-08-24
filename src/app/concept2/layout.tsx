import type { ReactNode } from "react";

import { ConceptSwitcher } from "@/components/concept-switcher";

export default function Concept2Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ConceptSwitcher />
    </>
  );
}
