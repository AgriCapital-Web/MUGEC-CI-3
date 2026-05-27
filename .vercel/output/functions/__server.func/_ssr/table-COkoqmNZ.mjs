import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as Avatar, M as MemberAvatarImage, a as AvatarFallback } from "./MemberAvatar-BOXOZN_l.mjs";
import { u as useLocation, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logo, B as Button, c as cn } from "./button-BZr7_CTB.mjs";
import { u as useAuth } from "./router-D_HcibeE.mjs";
import { c as Root2, T as Trigger, P as Portal2, a as Content2, L as Label2, I as Item2, S as Separator2, e as SubTrigger2, d as SubContent2, C as CheckboxItem2, b as ItemIndicator2, R as RadioItem2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { s as supabase } from "./client-CBiMCG7a.mjs";
import { k as ChevronDown, H as House, J as LogOut, N as Menu, l as ChevronRight, j as Check, n as Circle } from "../_libs/lucide-react.mjs";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
function DashboardHeader({
  title,
  nav
}) {
  const { user, signOut } = useAuth();
  const loc = useLocation();
  const [open, setOpen] = reactExports.useState(false);
  const [mounted, setMounted] = reactExports.useState(false);
  const [me, setMe] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setMounted(true);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  reactExports.useEffect(() => {
    let active = true;
    if (!user) {
      setMe(null);
      return;
    }
    supabase.from("members").select("photo_url, nom, prenoms").eq("user_id", user.id).maybeSingle().then(({ data }) => {
      if (active) setMe(data);
    });
    return () => {
      active = false;
    };
  }, [user?.id]);
  const initials = mounted ? ((me?.prenoms?.[0] ?? user?.email?.[0] ?? "?") + (me?.nom?.[0] ?? "")).toUpperCase() : "";
  const isActive = (to) => to ? loc.pathname === to : false;
  const groupActive = (item) => isActive(item.to) || (item.children?.some((c) => loc.pathname === c.to) ?? false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "MUGEC-CI", className: "h-14 w-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Espace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold truncate", children: title })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1", children: nav.map((n) => {
        if (n.children?.length) {
          const active2 = groupActive(n);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: active2 ? "default" : "ghost",
                size: "sm",
                className: "gap-1",
                children: [
                  n.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "start", className: "w-56", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuLabel, { children: n.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
              n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, className: loc.pathname === c.to ? "font-semibold text-primary" : "", children: c.label }) }, c.to))
            ] })
          ] }, n.label);
        }
        const active = isActive(n.to);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            className: `rounded-md px-3 py-2 text-sm font-medium transition ${active ? "bg-primary text-primary-foreground" : "text-foreground/80 hover:bg-secondary hover:text-primary"}`,
            children: n.label
          },
          n.to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "mr-2 h-4 w-4" }),
          " Site public"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-9 w-9 border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MemberAvatarImage, { src: me?.photo_url, alt: "Photo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs", children: initials })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", onClick: () => signOut(), title: "Déconnexion", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-1 h-4 w-4" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Déconnexion" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => setOpen((v) => !v), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-2 flex flex-col", children: [
      nav.map(
        (n) => n.children?.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: n.label }),
          n.children.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: c.to,
              onClick: () => setOpen(false),
              className: `rounded-md px-4 py-2 text-sm hover:bg-secondary ${loc.pathname === c.to ? "text-primary font-medium" : ""}`,
              children: [
                "• ",
                c.label
              ]
            },
            c.to
          ))
        ] }, n.label) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "rounded-md px-3 py-2 text-sm hover:bg-secondary",
            children: n.label
          },
          n.to
        )
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary", children: "← Retour au site public" })
    ] }) })
  ] });
}
const ADMIN_NAV = [
  { to: "/admin", label: "Tableau de bord" },
  { to: "/admin/membres", label: "Membres" },
  {
    label: "Finances",
    children: [
      { to: "/admin/cotisations", label: "Cotisations" },
      { to: "/admin/cotisations", label: "Droits d'adhésion" }
    ]
  },
  { to: "/admin/prestations", label: "Prestations" },
  {
    label: "Communication",
    children: [
      { to: "/admin/notifications", label: "Notifications" }
    ]
  }
];
const MIPROJET_NAV = [
  { to: "/admin/miprojet", label: "Tableau de bord" }
];
const Table = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
export {
  ADMIN_NAV as A,
  DashboardHeader as D,
  MIPROJET_NAV as M,
  Table as T,
  DropdownMenu as a,
  DropdownMenuContent as b,
  DropdownMenuItem as c,
  DropdownMenuLabel as d,
  DropdownMenuSeparator as e,
  DropdownMenuTrigger as f,
  TableBody as g,
  TableCell as h,
  TableHead as i,
  TableHeader as j,
  TableRow as k
};
