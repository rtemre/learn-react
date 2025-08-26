import { useRef } from "react";

function useCustomMemo<T>(callback: () => T, dependencies: unknown[]): T {
  const valueRef = useRef<T>(undefined as unknown as T);
  const depsRef = useRef<unknown[] | undefined>(undefined);

  // Only recompute if dependencies have changed
  if (
    !depsRef.current ||
    !areDependenciesEqual(dependencies, depsRef.current)
  ) {
    valueRef.current = callback();
    depsRef.current = dependencies;
  }

  return valueRef.current!;
}

function areDependenciesEqual(deps1: unknown[], deps2: unknown[]): boolean {
  if (deps1.length !== deps2.length) {
    return false;
  }
  for (let i = 0; i < deps1.length; i++) {
    if (deps1[i] !== deps2[i]) {
      // Shallow comparison
      return false;
    }
  }
  return true;
}

export default useCustomMemo;

// import { useEffect, useRef } from "react";

// // interface ArgsType {
// //     callback: () => void;
// //     deps: [];
// // }

// const areEqual = (prevDeps: [], nextDeps: []) => {
//   if (prevDeps === null) return false;
//   if (prevDeps.length !== nextDeps.length) return false;
//   for (let i = 0; i < prevDeps.length; i++) {
//     if (prevDeps[i] !== nextDeps[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const useCustomMemo = (callback: () => void, deps: any) => {
//   // variable or state  -> cached value
//   const memoizedRef = useRef<{ value?: any; deps?: any[] } | null>({});

//   const memoizedDeps =
//     memoizedRef.current !== null && (memoizedRef.current.deps as []);

//   // Changes in deps
//   if (!memoizedDeps || !areEqual(memoizedDeps, deps)) {
//     memoizedRef.current = {
//       value: callback(),
//       deps,
//     };
//   }

//   // Clean up logic
//   useEffect(() => {
//     return () => {
//       memoizedRef.current = null;
//     };
//   });

//   // return the memoized value
//   console.log(
//     "🚀 ~ useCustomMemo ~ memoizedRef.current.value:",
//     memoizedRef.current.value
//   );
//   return memoizedRef.current !== null && memoizedRef.current.value;
// };

// export default useCustomMemo;
