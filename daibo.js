import themes from "daisyui/src/theming/themes";
export default {
  daibo: {
    primary: "#337ac7",
    "primary-content": "#fff",
    secondary: "#7f3af2",
    "secondary-content": "#fff",
    accent: "#e02472",
    "accent-content": "#fff",
    neutral: "#0f0f0f",
    "neutral-content": "#c8c8c8",
    "base-100": "#fff",
    "base-200": "#e0e0e0",
    "base-300": "#adadad",
    "base-content": "#333",
    info: "#5bc0de",
    "info-content": "#fff",
    success: "#5cb85c",
    "success-content": "#fff",
    warning: "#f0ad4e",
    "warning-content": "#fff",
    error: "#d9534f",
    "error-content": "#fff",
    //
    "--rounded-box": "0.25rem",
    "--rounded-btn": "0.25rem",
    "--rounded-badge": "2rem",
    "--animation-btn": "0s",
    "--animation-input": "0.2s",
    "--btn-focus-scale": "0.95",
    "--border-btn": "1px",
    "--tab-border": "1px",
    "--tab-radius": "0.25rem",

    //
    "--input-size-xs": "1rem",
    "--input-size-sm": "1.75rem",
    "--input-size-md": "2.25rem",
    "--input-size-lg": "3rem",

    //
    ".btn": {
      "font-weight": "450",
    },
    ".btn:not(.btn-link,.btn-default,.btn-ghost,.btn-outline)": {
      "background-repeat": "repeat-x",
      "text-shadow": "0 -1px 0 rgba(0,0,0,.2)",
      color: "oklch(var(--pc))",
      "border-color": "oklch(var(--btn-color, var(--b2)) / var(--tw-border-opacity))",
      "background-color": "color-mix( in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--btn-color)) 0,color-mix( in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".btn:hover:not(.btn-link,.btn-default,.btn-ghost,.btn-outline)": {
      "background-color": "color-mix( in oklab, oklch(var(--btn-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black )",
      "background-image": "none",
    },
    ".btn-default": {
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      color: "oklch(var(--bc))",
      "border-color": "oklch(var(--b3))",
      "background-color": "color-mix( in oklab, oklch(var(--btn-color, var(--b1)) / var(--tw-bg-opacity, 1)) 98%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--b1)) 0,oklch(var(--b2)) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".btn-default:hover": {
      "background-color": "color-mix( in oklab, oklch(var(--btn-color, var(--b1)) / var(--tw-bg-opacity, 1)) 90%, black )",
      "background-image": "none",
    },
    ".btn-outline.btn-default": {
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      color: "oklch(var(--bc))",
      "border-color": "oklch(var(--b3))",
      "background-image": "none",
      "background-color": "oklch(var(--btn-color, var(--b1)))",
    },
    ".btn-outline.btn-default:hover": {
      "background-color": "oklch(var(--btn-color, var(--b2)))",
    },
    ".btn-link": {
      "text-decoration": "none",
    },
    ".btn-link:hover": {
      "text-decoration": "underline",
    },
    ".btn,.btn-md": {
      height: "var(--input-size-md)",
      "min-height": "var(--input-size-md)",
    },
    ".btn-xs": {
      height: "calc(var(--input-size-xs)*1.5)",
      "min-height": "calc(var(--input-size-xs)*1.5)",
    },
    ".btn-sm": {
      height: "var(--input-size-sm)",
      "min-height": "var(--input-size-sm)",
    },
    ".btn-lg": {
      height: "var(--input-size-lg)",
      "min-height": "var(--input-size-lg)",
    },
    ".btn-square,.btn-circle": {
      width: "var(--input-size-md)",
      "aspect-ration": "1/1",
    },
    ".btn-square.btn-xs,.btn-circle.btn-xs": {
      width: "calc(var(--input-size-xs)*1.5)",
    },
    ".btn-square.btn-sm,.btn-circle.btn-sm": {
      width: "var(--input-size-sm)",
    },
    ".btn-square.btn-lg,.btn-circle.btn-lg": {
      width: "var(--input-size-lg)",
    },
    ".file-input,.select,.input": {
      padding: "0 0.75rem",
      "font-size": "0.875rem",
      height: "var(--input-size-md)",
      "min-height": "var(--input-size-md)",
    },
    ".file-input,.input": {
      "background-image":
        "linear-gradient(to bottom,color-mix( in oklab, oklch(var(--input-color, var(--b1)) / var(--tw-bg-opacity, 1)) 2.5%, white )  0,color-mix( in oklab, oklch(var(--input-color, var(--bc)) / var(--tw-bg-opacity, 1)) 5%, white ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".file-input.file-input-xs,.select.select-xs,.input.input-xs": {
      padding: "0 0.35rem",
      "font-size": "0.65rem",
      height: "calc(var(--input-size-xs)*1.5)",
      "min-height": "calc(var(--input-size-xs)*1.5)",
    },
    ".file-input.file-input-sm,.select.select-sm,.input.input-sm": {
      padding: "0 0.5rem",
      "font-size": "0.775rem",
      height: "var(--input-size-sm)",
      "min-height": "var(--input-size-sm)",
    },
    ".file-input.file-input-lg,.select.select-lg,.input.input-lg": {
      "font-size": "1rem",
      padding: "0 0.95rem",
      height: "var(--input-size-lg)",
      "min-height": "var(--input-size-lg)",
    },
    ".file-input": {
      "padding-left": "0!important",
    },
    ".toggle": {
      height: "calc(var(--input-size-md)/1.5)",
      width: "calc(var(--input-size-md)*1.25)",
      "--handleoffset": "calc(var(--input-size-md)/1.8)",
      "border-radius": "0.25rem!important",
    },
    ".toggle:checked": {
      position: "relative",
      overflow: "hidden",
      "background-image": "linear-gradient(to bottom,oklch(var(--input-color)) 0,color-mix( in oklab, oklch(var(--input-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
    },
    ".toggle:checked:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "2.5px",
      "margin-left": "calc(var(--handleoffset) + 3px)",
      "pointer-events": "none",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".toggle.toggle-xs": {
      height: "calc(var(--input-size-xs)/1.5)",
      width: "calc(var(--input-size-xs)*1.25)",
      "--handleoffset": "calc(var(--input-size-xs)/2.25)",
    },
    ".toggle.toggle-sm": {
      height: "calc(var(--input-size-sm)/1.5)",
      width: "calc(var(--input-size-sm)*1.25)",
      "--handleoffset": "calc(var(--input-size-sm)/1.9)",
    },
    ".toggle.toggle-lg": {
      height: "calc(var(--input-size-lg)/1.5)",
      width: "calc(var(--input-size-lg)*1.25)",
      "--handleoffset": "calc(var(--input-size-lg)/1.75)",
    },
    ".checkbox,.radio": {
      height: "calc(var(--input-size-md)/1.75)",
      width: "calc(var(--input-size-md)/1.75)",
      "border-radius": "0.25rem!important",
      background: "var(--fallback-bc,oklch(var(--b2)/0.25))",
    },
    ".checkbox:checked": {
      animation: "none",
      border: "0",
      position: "relative",
      overflow: "hidden",
      "background-image": "linear-gradient(to bottom,oklch(var(--input-color)) 0,color-mix( in oklab, oklch(var(--input-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".checkbox:checked:before": {
      animation: "checkmark var(--animation-input, 0.2s) ease-out",
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "1.5px",
      "pointer-events": "none",
      "background-size": "contain",
      "background-repeat": "no-repeat",
      "background-image": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='m5 12l5 5L20 7'/%3E%3C/svg%3E")`,
    },
    ".radio:checked": {
      position: "relative",
      overflow: "hidden",
      "background-image": "linear-gradient(to bottom,oklch(var(--input-color)) 0,color-mix( in oklab, oklch(var(--input-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
    },
    ".radio:checked:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "4px",
      "border-radius": "100%!important",
      "pointer-events": "none",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".radio": {
      "border-radius": "100%!important",
    },
    ".checkbox.checkbox-xs,.radio.radio-xs": {
      height: "calc(var(--input-size-xs)/1.25)",
      width: "calc(var(--input-size-xs)/1.25)",
    },
    ".checkbox.checkbox-sm,.radio.radio-sm": {
      height: "calc(var(--input-size-sm)/1.65)",
      width: "calc(var(--input-size-sm)/1.65)",
    },
    ".checkbox.checkbox-md,.radio.radio-md": {
      height: "calc(var(--input-size-md)/1.75)",
      width: "calc(var(--input-size-md)/1.75)",
    },
    ".checkbox.checkbox-lg,.radio.radio-lg": {
      height: "calc(var(--input-size-lg)/1.5)",
      width: "calc(var(--input-size-lg)/1.5)",
    },
    ".input-bordered:not(.input-primary,.input-secondary,.input-accent,.input-info,.input-success,.input-warning,.input-error)": {
      "border-color": "var(--fallback-bc,oklch(var(--bc)/0.2))",
    },
    ".textarea-bordered:not(.textarea-primary,.textarea-secondary,.textarea-accent,.textarea-info,.textarea-success,.textarea-warning,.textarea-error)": {
      "border-color": "var(--fallback-bc,oklch(var(--bc)/0.2))",
    },
    ".textarea": {
      padding: "0.5rem 0.75rem",
      "font-size": "0.875rem",
      "line-height": "1.25rem",
      "background-image":
        "linear-gradient(to bottom,color-mix( in oklab, oklch(var(--input-color, var(--b1)) / var(--tw-bg-opacity, 1)) 2.5%, white )  0,color-mix( in oklab, oklch(var(--input-color, var(--bc)) / var(--tw-bg-opacity, 1)) 2%, white )  50%,color-mix( in oklab, oklch(var(--input-color, var(--bc)) / var(--tw-bg-opacity, 1)) 5%, white ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".textarea-xs": {
      padding: "0.25rem 0.35rem",
      "font-size": "0.65rem",
      "line-height": "1rem",
    },
    ".textarea-sm": {
      padding: "0.35rem 0.5rem",
      "font-size": "0.775rem",
      "line-height": "1.1rem",
    },
    ".textarea-lg": {
      padding: "0.825rem 0.95rem",
      "font-size": "1rem",
      "line-height": "1.35rem",
    },
    ".input-default,.textarea-default,.select-default,.file-input-default": {
      "border-color": "var(--fallback-bc,oklch(var(--bc)/0.2))",
    },
    ".input:focus,.textarea:focus,.select:focus,.file-input:focus": {
      "outline-width": "0px",
      "outline-offset": "0",
      "border-color": "oklch(var(--input-color, var(--p)))",
      "box-shadow": "inset 0 1px 1px rgba(0,0,0,.075),0 0 4px oklch(var(--input-color, var(--p))/0.5)",
    },
    ".input-primary,.textarea-primary,.select-primary,.file-input-primary,.radio-primary,.checkbox-primary,.toggle-primary": {
      "--input-color": "var(--p)",
    },
    ".input-secondary,.textarea-secondary,.select-secondary,.file-input-secondary,.radio-secondary,.checkbox-secondary,.toggle-secondary": {
      "--input-color": "var(--s)",
    },
    ".input-accent,.textarea-accent,.select-accent,.file-input-accent,.radio-accent,.checkbox-accent,.toggle-accent": {
      "--input-color": "var(--a)",
    },
    ".input-info,.textarea-info,.select-info,.file-input-info,.radio-info,.checkbox-info,.toggle-info": {
      "--input-color": "var(--in)",
    },
    ".input-success,.textarea-success,.select-success,.file-input-success,.radio-success,.checkbox-success,.toggle-success": {
      "--input-color": "var(--su)",
    },
    ".input-warning,.textarea-warning,.select-warning,.file-input-warning,.radio-warning,.checkbox-warning,.toggle-warning": {
      "--input-color": "var(--wa)",
    },
    ".input-error,.textarea-error,.select-error,.file-input-error,.radio-error,.checkbox-error,.toggle-error": {
      "--input-color": "var(--er)",
    },
    ".link:focus-visible": {
      "outline-style": "dashed",
      "outline-width": "1px",
      "outline-offset": "0",
    },
    ".btn:focus-visible,.toggle:focus-visible,.checkbox:focus-visible,.radio:focus-visible": {
      "outline-offset": "2px",
      "outline-width": "2px",
    },
    ".badge": {
      height: "1.5rem",
    },
    ".badge-xs": {
      height: "1rem",
      "font-size": "0.65rem",
    },
    ".badge-sm": {
      height: "1.25rem",
      "font-size": "0.75rem",
    },
    ".badge-lg": {
      height: "1.5rem",
      "font-size": "0.9rem",
    },
    ".badge": {
      "font-weight": "500",
      "font-size": "0.75rem",
      "text-shadow": "0 -1px 0 rgba(0,0,0,.2)",
      color: "oklch(var(--badge-text-color, var(--bc)))",
      "border-color": "color-mix( in oklab, oklch(var(--badge-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black )",
      background: "color-mix( in oklab, oklch(var(--badge-color, var(--b2)) / var(--tw-bg-opacity, 1)) 95%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--badge-color)) 0,color-mix( in oklab, oklch(var(--badge-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".badge-default": {
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      "background-image": "linear-gradient(to bottom,oklch(var(--b1)) 0,oklch(var(--b2)) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
    },
    ".badge-outline": {
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      color: "color-mix( in oklab, oklch(var(--badge-color, var(--bc)) / var(--tw-bg-opacity, 1)) 85%, black )!important",
      "border-color": "color-mix( in oklab, oklch(var(--badge-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black )",
      background: "color-mix( in oklab, oklch(var(--badge-color, var(--b1)) / var(--tw-bg-opacity, 1)) 20%, white )",
    },
    ".badge-outline.badge-default": {
      "background-image": "none",
      "background-color": "oklch(var(--badge-color, var(--b1)))",
    },
    ".badge-primary": {
      "--badge-color": "var(--p)",
      "--badge-text-color": "var(--pc)",
    },
    ".badge-secondary": {
      "--badge-color": "var(--s)",
      "--badge-text-color": "var(--sc)",
    },
    ".badge-accent": {
      "--badge-color": "var(--a)",
      "--badge-text-color": "var(--ac)",
    },
    ".badge-info": {
      "--badge-color": "var(--in)",
      "--badge-text-color": "var(--inc)",
    },
    ".badge-success": {
      "--badge-color": "var(--su)",
      "--badge-text-color": "var(--suc)",
    },
    ".badge-warning": {
      "--badge-color": "var(--wa)",
      "--badge-text-color": "var(--wac)",
    },
    ".badge-error": {
      "--badge-color": "var(--er)",
      "--badge-text-color": "var(--erc)",
    },
    ".progress": {
      height: "1rem",
    },
    ".progress:not(.progress-zebra)::-moz-progress-bar, .progress:not(.progress-zebra)[value]::-webkit-progress-value": {
      "background-image": "linear-gradient(to bottom,oklch(var(--progress-color)) 0,color-mix( in oklab, oklch(var(--progress-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
      "box-shadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
      "border-radius": "0",
    },
    ".progress-primary": {
      "--progress-color": "var(--p)",
    },
    ".progress-secondary": {
      "--progress-color": "var(--s)",
    },
    ".progress-accent": {
      "--progress-color": "var(--a)",
    },
    ".progress-info": {
      "--progress-color": "var(--in)",
    },
    ".progress-success": {
      "--progress-color": "var(--su)",
    },
    ".progress-warning": {
      "--progress-color": "var(--wa)",
    },
    ".progress-error": {
      "--progress-color": "var(--er)",
    },
    ".progress-zebra::-moz-progress-bar, .progress-zebra[value]::-webkit-progress-value": {
      "background-image": "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)",
      "background-repeat": "repeat-x",
      "box-shadow": "inset 0 -1px 0 rgba(0,0,0,.15)",
      "border-radius": "0",
      "background-size": "2.5rem 2.5rem",
    },
    ".alert": {
      "--alert-bg": "var(--fallback-in,oklch(var(--b2)))",
      "--alert-border-color": "var(--fallback-in,oklch(var(--b3)))",
      display: "flex",
      "align-items": "flex-start",
      "text-align": "left",
      border: "1px solid oklch(var(--alert-border-color, var(--b2)))",
      padding: "0.5rem 0.75rem",
      "text-shadow": "0 1px 0 rgba(255,255,255,.2)",
      gap: "1rem 0.5rem",
      "font-size": "0.875rem",
      color: "color-mix( in oklab, oklch(var(--alert-border-color, var(--b2)) / var(--tw-bg-opacity, 1)) 70%, black )",
      "background-image":
        "linear-gradient(to bottom,color-mix( in oklab, oklch(var(--alert-bg, var(--b2)) / var(--tw-bg-opacity, 1)) 30%, white ) 0,color-mix( in oklab, oklch(var(--alert-bg, var(--b2)) / var(--tw-bg-opacity, 1)) 45%, white ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.25),0 1px 2px rgba(0,0,0,.05)",
    },
    ".alert.alert-default": {
      border: "1px solid oklch(var(--b3)/0.5)",
      color: "color-mix( in oklab, oklch(var(--alert-border-color, var(--b2)) / var(--tw-bg-opacity, 1)) 90%, black )",
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      "background-image": "linear-gradient(to bottom,oklch(var(--b1)) 0,oklch(var(--b2)) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.25),0 1px 2px rgba(0,0,0,.05)",
    },
    ".alert .icon": {
      "margin-top": "0.2rem",
    },
    ".alert.alert-info": {
      "--alert-bg": "var(--in)",
      "--alert-border-color": "var(--in)",
    },
    ".alert.alert-success": {
      "--alert-bg": "var(--su)",
      "--alert-border-color": "var(--su)",
    },
    ".alert.alert-warning": {
      "--alert-bg": "var(--wa)",
      "--alert-border-color": "var(--wa)",
    },
    ".alert.alert-error": {
      "--alert-bg": "var(--er)",
      "--alert-border-color": "var(--er)",
    },
    link: {
      "text-decoration": "none",
    },
    "link:hover": {
      "text-decoration": "underline",
    },
    ".dropdown-content": {
      "background-color": "oklch(var(--b1))",
      border: "1px solid oklch(var(--b2))",
      "border-radius": "5px",
      "box-shadow": "0 6px 12px oklch(var(--b3)/0.35)",
      overflow: "hidden",
    },
    ".menu": {
      padding: "0",
    },
    ".menu :where(li:not(.menu-title) > :not(ul, details, .menu-title, .btn)), .menu :where(li:not(.menu-title) > details > summary:not(.menu-title))": {
      "border-radius": "0",
      padding: "6px 1rem",
    },
    ":where(.menu li:not(.menu-title, .disabled) > :not(ul, details, .menu-title)):not(.active, .btn):hover, :where(.menu li:not(.menu-title, .disabled) > details > summary:not(.menu-title)):not(.active, .btn):hover":
      {
        "background-color": "var(--fallback-bc,oklch(var(--bc)/0.1))",
        "background-image":
          "linear-gradient(to bottom,color-mix( in oklab, oklch(var(--b1) / var(--tw-bg-opacity, 1)) 97.5%, black ) 0,color-mix( in oklab, oklch(var(--b1) / var(--tw-bg-opacity, 1)) 92.5%, black ) 100%)",
      },
    ".menu li > :not(ul, .menu-title, details, .btn, .active, .error):active, .menu li > :not(ul, .menu-title, details, .btn).active, .menu li > details > summary:active": {
      color: "oklch(var(--bc))",
      "background-color": "var(--fallback-bc,oklch(var(--bc)/0.1))",
    },
    ".menu .active": {
      color: "oklch(var(--pc))!important",
      "text-shadow": "0 -1px 0 rgba(0,0,0,.2)",
      "background-color": "color-mix( in oklab, oklch(var(--p, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--p)) 0,color-mix( in oklab, oklch(var(--p, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
    },
    ".menu .error": {
      color: "oklch(var(--er))",
    },
    ".menu .error:hover": {
      color: "oklch(var(--erc))",
      "text-shadow": "0 -1px 0 rgba(0,0,0,.2)",
      "background-color": "color-mix( in oklab, oklch(var(--er, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--er)) 0,color-mix( in oklab, oklch(var(--er, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
    },
    ".panel": {
      "background-color": "oklch(var(--b1))",
      border: "1px solid oklch(var(--panel-color, var(--b2)))",
      "border-radius": "5px",
      "box-shadow": "0 1px 2px oklch(var(--b3)/0.25)",
    },
    ".panel-title": {
      "border-radius": "2.5px 2.5px 0 0",
      color: "oklch(var(--panel-color-text))",
      "text-shadow": "0 -1px 0 rgba(0,0,0,.2)",
      "background-color": "color-mix( in oklab, oklch(var(--panel-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black )",
      "background-image": "linear-gradient(to bottom,oklch(var(--panel-color)) 0,color-mix( in oklab, oklch(var(--panel-color, var(--b2)) / var(--tw-bg-opacity, 1)) 85%, black ) 100%)",
      "box-shadow": "inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(0,0,0,.075)",
      "border-bottom": "1px solid oklch(var(--panel-color, var(--b2)) / var(--tw-bg-opacity, 1))",
      padding: "0.5rem 1rem",
    },
    ".panel-default .panel-title": {
      color: "colormix( in oklab, oklch(var(--bc) / var(--tw-text-opacity, 1)) 80%, black )",
      "text-shadow": "0 1px 0 oklch(var(--b1))",
      "background-image":
        "linear-gradient(to bottom,color-mix( in oklab, oklch(var(--panel-color,var(--b1)) / var(--tw-bg-opacity, 1)) 98%, black ) 0,color-mix( in oklab, oklch(var(--panel-color,var(--b1)) / var(--tw-bg-opacity, 1)) 95%, black ) 100%)",
    },
    ".panel-body": {
      padding: "0.75rem 1rem",
    },
    ".panel-default-border": {
      border: "1px solid oklch(var(--b2))",
      "border-top": "1px solid oklch(var(--panel-color, var(--b2)))",
    },
    ".panel-default-border .panel-title": {
      margin: "0 -1px 0 -1px",
    },
    ".panel-primary": {
      "--panel-color": "var(--p)",
      "--panel-color-text": "var(--pc)",
    },
    ".panel-secondary": {
      "--panel-color": "var(--s)",
      "--panel-color-text": "var(--sc)",
    },
    ".panel-accent": {
      "--panel-color": "var(--a)",
      "--panel-color-text": "var(--ac)",
    },
    ".panel-info": {
      "--panel-color": "var(--in)",
      "--panel-color-text": "var(--inc)",
    },
    ".panel-success": {
      "--panel-color": "var(--su)",
      "--panel-color-text": "var(--suc)",
    },
    ".panel-warning": {
      "--panel-color": "var(--wa)",
      "--panel-color-text": "var(--wac)",
    },
    ".panel-error": {
      "--panel-color": "var(--er)",
      "--panel-color-text": "var(--erc)",
    },
    ".table :where(thead, tfoot)": {
      "font-size": ".875rem",
      "font-weight": "400",
      color: "oklch(var(--bc))",
    },
    ".table.table-xs :where(thead, tfoot)": {
      "font-size": ".75rem",
    },
    ".table tr.active, .table tr.active:nth-child(2n), .table-zebra tbody tr:nth-child(2n)": {
      "background-color": "color-mix( in oklab, oklch(var(--b1) / var(--tw-bg-opacity, 1)) 98%, black )",
    },
    ".table-bordered": {
      border: "1px solid oklch(var(--b2))",
    },
    ".table-pin-rows thead tr": {
      "box-shadow": "0px 1px 0px 0px oklch(var(--b2))",
      "border-bottom-width": "0",
    },
    ".table-hover-rows tbody tr:hover": {
      "background-color": "color-mix( in oklab, oklch(var(--b1) / var(--tw-bg-opacity, 1)) 97.5%, black )",
    },
    ".table-zebra.table-hover-rows tbody tr:hover": {
      "background-color": "color-mix( in oklab, oklch(var(--b1) / var(--tw-bg-opacity, 1)) 96.5%, black )",
    },
  },
  daiboDark: {
    ...themes["daibo"],
    primary: "#1e40af",
    "primary-content": "#dbeafe",
    secondary: "#6b21a8",
    "secondary-content": "#f3e8ff",
    accent: "#9d174d",
    "accent-content": "#fce7f3",
    neutral: "#0f0f0f",
    "neutral-content": "#c8c8c8",
    "base-100": "#18181a",
    "base-200": "#222225",
    "base-300": "#38383d",
    "base-content": "#a4a4a6",
    info: "#0369a1",
    "info-content": "#e0f2fe",
    success: "#15903d",
    "success-content": "#dcfce7",
    warning: "#a16207",
    "warning-content": "#fefce8",
    error: "#991b1b",
    "error-content": "#fee2e2",
    //
    "--rounded-box": "0.25rem",
    "--rounded-btn": "0.25rem",
    "--rounded-badge": "2rem",
    "--animation-btn": "0.2s",
    "--animation-input": "0.2s",
    "--btn-focus-scale": "0.95",
    "--border-btn": "1px",
    "--tab-border": "1px",
    "--tab-radius": "0.25rem",
  },
};
