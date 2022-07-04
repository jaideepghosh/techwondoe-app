import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

require("./bootstrap");

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`), // eslint-disable-line global-require, import/no-dynamic-require
    setup({ el, App, props }) {
        /* eslint-disable react/jsx-props-no-spreading */
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
