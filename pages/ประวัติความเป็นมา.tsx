// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/padungsilpa_website/PlasmicGlobalContextsProvider";
import { LocaleContext } from "../components/plasmic/padungsilpa_website/PlasmicGlobalVariant__Locale";
import { Plasmicประวัติความเป็นมา } from "../components/plasmic/padungsilpa_website/Plasmic\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E21\u0E32";
import { useRouter } from "next/router";

function ประวัติความเป็นมา() {
  // Use Plasmicประวัติความเป็นมา to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmicประวัติความเป็นมา are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, Plasmicประวัติความเป็นมา is wrapped by your project's global
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
          <Plasmicประวัติความเป็นมา />
        </PageParamsProvider__>
      </GlobalContextsProvider>
    </LocaleContext.Provider>
  );
}

export default ประวัติความเป็นมา;
