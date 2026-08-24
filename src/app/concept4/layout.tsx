import type { ReactNode } from "react";

import { ConceptSwitcher } from "@/components/concept-switcher";

export default function Concept4Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ConceptSwitcher />
    </>
  );
}
