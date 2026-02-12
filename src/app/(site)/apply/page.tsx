import { Suspense } from "react";
import ApplyPage from "../../../screens/ApplyPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ApplyPage />
    </Suspense>
  );
}
