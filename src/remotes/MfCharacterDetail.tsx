import Loader from "@/components/Loader";
import { lazy, Suspense } from "react";

const RemoteCharactersDetailApp = lazy(() =>
  import("mfCharacterDetail/MfCharacterDetail").then((module) => ({
    default: module.default,
  }))
);

const MfCharactersDetail: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RemoteCharactersDetailApp />
    </Suspense>
  );
};
