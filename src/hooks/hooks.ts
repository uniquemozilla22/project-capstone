/**
 * Create your custom hooks on this folder according to this file .
 */

import { useState } from "react";

const useHooks = () => {
  const [data, setData] = useState<any>({});

  return [data, setData];
};

export default useHooks;
