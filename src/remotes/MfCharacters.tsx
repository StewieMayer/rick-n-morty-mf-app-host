import { lazy, Suspense } from "react";

const RemoteCharactersApp = lazy(() =>
  import("mf-characters/MfCharacters").then((module) => ({
    default: module.default,
  }))
);

const MfCharacters = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RemoteCharactersApp />
    </Suspense>
  );
};

export default MfCharacters;
