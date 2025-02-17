// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/padungsilpa_website/PlasmicGlobalContextsProvider";
import { LocaleContext } from "../components/plasmic/padungsilpa_website/PlasmicGlobalVariant__Locale";
import { Plasmicผู้บริหาร } from "../components/plasmic/padungsilpa_website/Plasmic\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23";
import { useRouter } from "next/router";

function ผู้บริหาร() {
  // Use Plasmicผู้บริหาร to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmicผู้บริหาร are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmicผู้บริหาร is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).

  return (
    <LocaleContext.Provider value={undefined}>
      <GlobalContextsProvider>
        <PageParamsProvider__
          route={useRouter()?.pathname}
          params={useRouter()?.query}
          query={useRouter()?.query}
        >
          <Plasmicผู้บริหาร />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </LocaleContext.Provider>
  );
}

export default ผู้บริหาร;
