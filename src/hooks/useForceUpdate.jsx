import { useState } from "react";

function useForceUpdate() {
  console.log("forceUpdate");
  const [update, setUpdate] = useState(0);
  return () => setUpdate((update) => update + 1);
}

export default useForceUpdate;
