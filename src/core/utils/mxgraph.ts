// src/mxgraph.ts
import factory from "mxgraph";

declare global {
  interface Window {
    mxBasePath: string;
    mxLoadResources: boolean;
    mxForceIncludes: boolean;
    mxLoadStylesheets: boolean;
    mxResourceExtension: string;
  }
}

window.mxBasePath = "static";
window.mxLoadResources = true;
window.mxForceIncludes = false;
window.mxLoadStylesheets = true;
window.mxResourceExtension = ".txt";

const mx = factory({
  // not working see https://github.com/jgraph/mxgraph/issues/479
  mxBasePath: "static/js",
});
export default mx;

for (const item of Object.keys(mx)) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window[item] = mx[item];
}
