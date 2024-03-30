import {
  AngleRightIcon
} from "./chunk-LZIOIB2I.js";
import {
  AngleDownIcon
} from "./chunk-34Q4ZCRJ.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-IBZAP5DU.js";
import {
  Ripple,
  RippleModule
} from "./chunk-2Y5ES4M2.js";
import {
  DomHandler
} from "./chunk-EK2YCWCT.js";
import "./chunk-EL2IZZMK.js";
import {
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-JUETL6ZC.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-QAGIWMVC.js";
import "./chunk-5KHAIC5S.js";
import "./chunk-NIFQRFRS.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-S6LCCLL4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  effect,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-J2DL6UUS.js";
import "./chunk-WSA2QMXP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-QMAMURKP.js";

// node_modules/primeng/fesm2022/primeng-megamenu.mjs
var _c0 = ["menubar"];
function MegaMenuSub_ul_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r2.getItemProp(ctx_r2.submenu, "style"));
    ɵɵproperty("ngClass", ctx_r2.getSubmenuHeaderClass(ctx_r2.submenu));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getItemLabel(ctx_r2.submenu));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 8);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r6.getItemProp(processedItem_r4, "style"));
    ɵɵproperty("ngClass", ctx_r6.getSeparatorItemClass(processedItem_r4));
    ɵɵattribute("id", ctx_r6.getItemId(processedItem_r4))("data-pc-section", "separator");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r15.getItemProp(processedItem_r4, "icon"))("ngStyle", ctx_r15.getItemProp(processedItem_r4, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r16.getItemLabel(processedItem_r4), " ");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r17.getItemLabel(processedItem_r4), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r19.getItemProp(processedItem_r4, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r19.getItemProp(processedItem_r4, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 3, "AngleDownIcon", 26)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 3, "AngleRightIcon", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r25.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r25.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r20.megaMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r20.megaMenu.submenuIconTemplate);
  }
}
var _c1 = (a1) => ({
  "p-menuitem-link": true,
  "p-disabled": a1
});
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 17)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 18)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 19, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 20)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r18 = ɵɵreference(4);
    const processedItem_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("target", ctx_r13.getItemProp(processedItem_r4, "target"))("ngClass", ɵɵpureFunction1(12, _c1, ctx_r13.getItemProp(processedItem_r4, "disabled")));
    ɵɵattribute("href", ctx_r13.getItemProp(processedItem_r4, "url"), ɵɵsanitizeUrl)("aria-hidden", true)("data-automationid", ctx_r13.getItemProp(processedItem_r4, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r4, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r4, "escape"))("ngIfElse", _r18);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r4, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r13.isItemGroup(processedItem_r4));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r31.getItemProp(processedItem_r4, "icon"))("ngStyle", ctx_r31.getItemProp(processedItem_r4, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r32.getItemLabel(processedItem_r4));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r33 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r33.getItemLabel(processedItem_r4), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(4).$implicit;
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r35.getItemProp(processedItem_r4, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r35.getItemProp(processedItem_r4, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 3, "AngleDownIcon", 26)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 3, "AngleRightIcon", 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r41 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r41.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r41.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 12)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r36.megaMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r36.megaMenu.submenuIconTemplate);
  }
}
var _c2 = () => ({
  exact: false
});
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 28);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 17)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template, 2, 1, "span", 18)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 29, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 20)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r34 = ɵɵreference(4);
    const processedItem_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r14.getItemProp(processedItem_r4, "routerLink"))("queryParams", ctx_r14.getItemProp(processedItem_r4, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r14.getItemProp(processedItem_r4, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c2))("target", ctx_r14.getItemProp(processedItem_r4, "target"))("ngClass", ɵɵpureFunction1(22, _c1, ctx_r14.getItemProp(processedItem_r4, "disabled")))("fragment", ctx_r14.getItemProp(processedItem_r4, "fragment"))("queryParamsHandling", ctx_r14.getItemProp(processedItem_r4, "queryParamsHandling"))("preserveFragment", ctx_r14.getItemProp(processedItem_r4, "preserveFragment"))("skipLocationChange", ctx_r14.getItemProp(processedItem_r4, "skipLocationChange"))("replaceUrl", ctx_r14.getItemProp(processedItem_r4, "replaceUrl"))("state", ctx_r14.getItemProp(processedItem_r4, "state"));
    ɵɵattribute("data-automationid", ctx_r14.getItemProp(processedItem_r4, "automationId"))("tabindex", -1)("aria-hidden", true)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r14.getItemProp(processedItem_r4, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r14.getItemProp(processedItem_r4, "escape"))("ngIfElse", _r34);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r14.getItemProp(processedItem_r4, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r14.isItemGroup(processedItem_r4));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template, 7, 14, "a", 14)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template, 7, 24, "a", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r10.getItemProp(processedItem_r4, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r10.getItemProp(processedItem_r4, "routerLink"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c3 = (a0) => ({
  $implicit: a0
});
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template, 1, 0, null, 30);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, processedItem_r4.item));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-megaMenuSub", 36);
    ɵɵlistener("itemClick", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r56);
      const ctx_r55 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r55.itemClick.emit($event));
    })("itemMouseEnter", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r56);
      const ctx_r57 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r57.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r54 = ctx.$implicit;
    const ctx_r53 = ɵɵnextContext(6);
    ɵɵproperty("id", ctx_r53.getSubListId(submenu_r54))("submenu", submenu_r54)("items", submenu_r54.items)("itemTemplate", ctx_r53.itemTemplate)("menuId", ctx_r53.menuId)("focusedItemId", ctx_r53.focusedItemId)("level", ctx_r53.level + 1)("root", false);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template, 1, 8, "p-megaMenuSub", 35);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const col_r52 = ctx.$implicit;
    const processedItem_r4 = ɵɵnextContext(3).$implicit;
    const ctx_r51 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r51.getColumnClass(processedItem_r4));
    ɵɵadvance();
    ɵɵproperty("ngForOf", col_r52);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31)(1, "div", 32);
    ɵɵtemplate(2, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template, 2, 2, "div", 33);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const processedItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "grid");
    ɵɵadvance();
    ɵɵproperty("ngForOf", processedItem_r4.items);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9, 10)(2, "div", 11);
    ɵɵlistener("click", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r62);
      const processedItem_r4 = ɵɵnextContext().$implicit;
      const ctx_r60 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r60.onItemClick($event, processedItem_r4));
    })("mouseenter", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r62);
      const processedItem_r4 = ɵɵnextContext().$implicit;
      const ctx_r63 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r63.onItemMouseEnter({
        $event,
        processedItem: processedItem_r4
      }));
    });
    ɵɵtemplate(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template, 3, 2, "ng-container", 12)(4, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template, 2, 4, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵtemplate(5, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template, 3, 3, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r65 = ɵɵnextContext();
    const processedItem_r4 = ctx_r65.$implicit;
    const index_r5 = ctx_r65.index;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r7.getItemProp(processedItem_r4, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r7.getItemProp(processedItem_r4, "style"))("ngClass", ctx_r7.getItemClass(processedItem_r4))("tooltipOptions", ctx_r7.getItemProp(processedItem_r4, "tooltipOptions"));
    ɵɵattribute("id", ctx_r7.getItemId(processedItem_r4))("data-pc-section", "menuitem")("data-p-highlight", ctx_r7.isItemActive(processedItem_r4))("data-p-focused", ctx_r7.isItemFocused(processedItem_r4))("data-p-disabled", ctx_r7.isItemDisabled(processedItem_r4))("aria-label", ctx_r7.getItemLabel(processedItem_r4))("aria-disabled", ctx_r7.isItemDisabled(processedItem_r4) || void 0)("aria-haspopup", ctx_r7.isItemGroup(processedItem_r4) && !ctx_r7.getItemProp(processedItem_r4, "to") ? "menu" : void 0)("aria-expanded", ctx_r7.isItemGroup(processedItem_r4) ? ctx_r7.isItemActive(processedItem_r4) : void 0)("aria-level", ctx_r7.level + 1)("aria-setsize", ctx_r7.getAriaSetSize())("aria-posinset", ctx_r7.getAriaPosInset(index_r5));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r7.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.isItemVisible(processedItem_r4) && ctx_r7.isItemGroup(processedItem_r4));
  }
}
function MegaMenuSub_ul_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_0_Template, 1, 5, "li", 6)(1, MegaMenuSub_ul_0_ng_template_3_li_1_Template, 6, 21, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r4 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r3.isItemVisible(processedItem_r4) && ctx_r3.getItemProp(processedItem_r4, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isItemVisible(processedItem_r4) && !ctx_r3.getItemProp(processedItem_r4, "separator"));
  }
}
var _c4 = (a0, a1) => ({
  "p-megamenu-root-list": a0,
  "p-submenu-list p-megamenu-submenu": a1
});
function MegaMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 1, 2);
    ɵɵlistener("keydown", function MegaMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r67);
      const ctx_r66 = ɵɵnextContext();
      return ɵɵresetView(ctx_r66.menuKeydown.emit($event));
    })("focus", function MegaMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r67);
      const ctx_r68 = ɵɵnextContext();
      return ɵɵresetView(ctx_r68.menuFocus.emit($event));
    })("blur", function MegaMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r67);
      const ctx_r69 = ɵɵnextContext();
      return ɵɵresetView(ctx_r69.menuBlur.emit($event));
    });
    ɵɵtemplate(2, MegaMenuSub_ul_0_li_2_Template, 2, 4, "li", 3)(3, MegaMenuSub_ul_0_ng_template_3_Template, 2, 2, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c4, ctx_r0.root, !ctx_r0.root))("tabindex", ctx_r0.tabindex);
    ɵɵattribute("role", ctx_r0.root ? "menubar" : "menu")("id", ctx_r0.id)("aria-orientation", ctx_r0.orientation)("aria-activedescendant", ctx_r0.focusedItemId)("data-pc-section", ctx_r0.root ? "root" : "submenu");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.submenu);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
var _c5 = ["menubutton"];
var _c6 = ["rootmenu"];
function MegaMenu_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, MegaMenu_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function MegaMenu_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, MegaMenu_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.endTemplate);
  }
}
function MegaMenu_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _c7 = (a1, a2) => ({
  "p-megamenu p-component": true,
  "p-megamenu-horizontal": a1,
  "p-megamenu-vertical": a2
});
var _c8 = ["*"];
var MegaMenuSub = class _MegaMenuSub {
  el;
  megaMenu;
  id;
  items;
  itemTemplate;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  disabled = false;
  orientation;
  activeItem;
  submenu;
  tabindex = 0;
  root = false;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  menubarViewChild;
  constructor(el, megaMenu) {
    this.el = el;
    this.megaMenu = megaMenu;
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getSubListId(processedItem) {
    return `${this.getItemId(processedItem)}_list`;
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem": true,
      "p-menuitem-active p-highlight": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem-separator": true
    });
  }
  getColumnClass(processedItem) {
    let length = this.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    switch (length) {
      case 2:
        columnClass = "p-megamenu-col-6";
        break;
      case 3:
        columnClass = "p-megamenu-col-4";
        break;
      case 4:
        columnClass = "p-megamenu-col-3";
        break;
      case 6:
        columnClass = "p-megamenu-col-2";
        break;
      default:
        columnClass = "p-megamenu-col-12";
        break;
    }
    return columnClass;
  }
  getSubmenuHeaderClass(processedItem) {
    return __spreadValues({
      "p-megamenu-submenu-header p-submenu-header": true,
      "p-disabled": this.isItemDisabled(processedItem)
    }, this.getItemProp(processedItem, "class"));
  }
  isSubmenuVisible(submenu) {
    if (this.submenu && !this.root) {
      return this.isItemVisible(submenu);
    } else {
      return true;
    }
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    return ObjectUtils.isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
  static ɵfac = function MegaMenuSub_Factory(t) {
    return new (t || _MegaMenuSub)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(forwardRef(() => MegaMenu)));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenuSub,
    selectors: [["p-megaMenuSub"]],
    viewQuery: function MegaMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubarViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: "level",
      focusedItemId: "focusedItemId",
      disabled: "disabled",
      orientation: "orientation",
      activeItem: "activeItem",
      submenu: "submenu",
      tabindex: "tabindex",
      root: "root"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], [3, "ngClass", "tabindex", "keydown", "focus", "blur"], ["menubar", ""], ["role", "presentation", 3, "ngClass", "style", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", 3, "ngClass"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["listItem", ""], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], ["class", "p-megamenu-panel", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-megamenu-panel"], [1, "p-megamenu-grid"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter", 4, "ngFor", "ngForOf"], [3, "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter"]],
    template: function MegaMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, MegaMenuSub_ul_0_Template, 4, 12, "ul", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isSubmenuVisible(ctx.submenu));
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleDownIcon, AngleRightIcon, _MegaMenuSub],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuSub, [{
    type: Component,
    args: [{
      selector: "p-megaMenuSub",
      template: `
        <ul
            *ngIf="isSubmenuVisible(submenu)"
            #menubar
            [ngClass]="{ 'p-megamenu-root-list': root, 'p-submenu-list p-megamenu-submenu': !root }"
            [attr.role]="root ? 'menubar' : 'menu'"
            [attr.id]="id"
            [attr.aria-orientation]="orientation"
            [tabindex]="tabindex"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="root ? 'root' : 'submenu'"
            (keydown)="menuKeydown.emit($event)"
            (focus)="menuFocus.emit($event)"
            (blur)="menuBlur.emit($event)"
        >
            <li *ngIf="submenu" [ngClass]="getSubmenuHeaderClass(submenu)" [style]="getItemProp(submenu, 'style')" role="presentation">{{ getItemLabel(submenu) }}</li>
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [attr.id]="getItemId(processedItem)"
                    [style]="getItemProp(processedItem, 'style')"
                    [ngClass]="getSeparatorItemClass(processedItem)"
                    role="separator"
                    [attr.data-pc-section]="'separator'"
                ></li>
                <li
                    #listItem
                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                    role="menuitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.data-pc-section]="'menuitem'"
                    [attr.data-p-highlight]="isItemActive(processedItem)"
                    [attr.data-p-focused]="isItemFocused(processedItem)"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [attr.aria-label]="getItemLabel(processedItem)"
                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getItemClass(processedItem)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    pTooltip
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div class="p-menuitem-content" [attr.data-pc-section]="'content'" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({$event, processedItem})">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                [attr.aria-hidden]="true"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.data-pc-section]="'action'"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [attr.tabindex]="-1"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-menuitem-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="'label'">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                                </ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'horizontal'" [attr.aria-hidden]="true" />
                                        <AngleRightIcon [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.tabindex]="-1"
                                [attr.aria-hidden]="true"
                                [attr.data-pc-section]="'action'"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                pRipple
                            >
                                <span
                                    class="p-menuitem-icon"
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                ></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(processedItem, 'escape'); else htmlRouteLabel">{{ getItemLabel(processedItem) }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'horizontal'" [attr.aria-hidden]="true" />
                                        <AngleRightIcon [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)" class="p-megamenu-panel" [attr.data-pc-section]="'panel'">
                        <div class="p-megamenu-grid" [attr.data-pc-section]="'grid'">
                            <div *ngFor="let col of processedItem.items" [ngClass]="getColumnClass(processedItem)">
                                <p-megaMenuSub
                                    *ngFor="let submenu of col"
                                    [id]="getSubListId(submenu)"
                                    [submenu]="submenu"
                                    [items]="submenu.items"
                                    [itemTemplate]="itemTemplate"
                                    [menuId]="menuId"
                                    [focusedItemId]="focusedItemId"
                                    [level]="level + 1"
                                    [root]="false"
                                    (itemClick)="itemClick.emit($event)"
                                    (itemMouseEnter)="onItemMouseEnter($event)"
                                >
                                </p-megaMenuSub>
                            </div>
                        </div>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: MegaMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => MegaMenu)]
    }]
  }], {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    focusedItemId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    submenu: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    menubarViewChild: [{
      type: ViewChild,
      args: ["menubar", {
        static: true
      }]
    }]
  });
})();
var MegaMenu = class _MegaMenu {
  document;
  platformId;
  el;
  renderer;
  config;
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Defines the orientation.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  templates;
  menubutton;
  rootmenu;
  startTemplate;
  endTemplate;
  menuIconTemplate;
  submenuIconTemplate;
  itemTemplate;
  outsideClickListener;
  resizeListener;
  dirty = false;
  focused = false;
  activeItem = signal(null);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  });
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  get visibleItems() {
    const processedItem = ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem() : null;
    return processedItem && processedItem.key === this.focusedItemInfo().parentKey ? processedItem.items.reduce((items, col) => {
      col.forEach((submenu) => {
        submenu.items.forEach((a) => {
          items.push(a);
        });
      });
      return items;
    }, []) : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem?.item && focusedItem.item?.id ? focusedItem.item.id : ObjectUtils.isNotEmpty(focusedItem.key) ? `${this.id}_${focusedItem.key}` : null;
  }
  constructor(document, platformId, el, renderer, config, cd) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.cd = cd;
    effect(() => {
      const activeItem = this.activeItem();
      if (ObjectUtils.isNotEmpty(activeItem)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this.startTemplate = item.template;
          break;
        case "end":
          this.endTemplate = item.template;
          break;
        case "menuicon":
          this.menuIconTemplate = item.template;
          break;
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "", columnIndex) {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + (columnIndex !== void 0 ? columnIndex + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey,
        columnIndex: columnIndex !== void 0 ? columnIndex : parent.columnIndex !== void 0 ? parent.columnIndex : index
      };
      newItem["items"] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  onItemClick(event) {
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        parentKey,
        item
      } = processedItem;
      this.activeItem.set(null);
      this.focusedItemInfo.set({
        index,
        key,
        parentKey,
        item
      });
      this.dirty = !root;
      DomHandler.focus(this.rootmenu?.menubarViewChild?.nativeElement);
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        const rootProcessedItem = root ? processedItem : this.activeItem();
        this.hide(originalEvent);
        this.changeFocusedItemInfo(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
        DomHandler.focus(this.rootmenu?.menubarViewChild?.nativeElement);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!DomHandler.isTouchDevice()) {
      this.onItemChange(event);
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = DomHandler.findSingle(this.rootmenu?.el.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem))
      return;
    const {
      index,
      key,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    if (grouped) {
      this.activeItem.set(processedItem);
    }
    this.focusedItemInfo.set({
      index,
      key,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && DomHandler.focus(this.rootmenu?.menubarViewChild?.nativeElement);
  }
  hide(event, isFocus) {
    this.activeItem.set(null);
    this.focusedItemInfo.set({
      index: -1,
      key: "",
      parentKey: "",
      item: null
    });
    isFocus && DomHandler.focus(this.rootmenu?.menubarViewChild?.nativeElement);
    this.dirty = false;
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1) {
      const index = this.findFirstFocusedItemIndex();
      const processedItem = this.findVisibleItem(index);
      this.focusedItemInfo.set({
        index,
        key: processedItem.key,
        parentKey: processedItem.parentKey,
        item: processedItem.item
      });
    }
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem().key === processedItem.key : false;
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemInfo(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  changeFocusedItemInfo(event, index) {
    const processedItem = this.findVisibleItem(index);
    if (ObjectUtils.isNotEmpty(processedItem)) {
      const {
        key,
        parentKey,
        item
      } = processedItem;
      this.focusedItemInfo.set({
        index,
        key: key ? key : "",
        parentKey,
        item
      });
    }
    this.scrollInView();
  }
  onArrowDownKey(event) {
    if (this.orientation === "horizontal") {
      if (ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === this.focusedItemInfo().key) {
        const {
          key,
          item
        } = this.activeItem();
        this.focusedItemInfo.set({
          index: -1,
          key: "",
          parentKey: key,
          item
        });
      } else {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          const {
            parentKey,
            key,
            item
          } = processedItem;
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            key,
            parentKey,
            item
          });
          this.searchValue = "";
        }
      }
    }
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemInfo(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "vertical") {
        if (ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === processedItem.key) {
          this.focusedItemInfo.set({
            index: -1,
            key: "",
            parentKey: this.activeItem().key,
            item: processedItem.item
          });
        } else {
          const processedItem2 = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped2 = this.isProccessedItemGroup(processedItem2);
          if (grouped2) {
            this.onItemChange({
              originalEvent: event,
              processedItem: processedItem2
            });
            this.focusedItemInfo.set({
              index: -1,
              key: processedItem2.key,
              parentKey: processedItem2.parentKey,
              item: processedItem2.item
            });
            this.searchValue = "";
          }
        }
      }
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
    } else {
      const columnIndex = processedItem.columnIndex + 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.orientation === "horizontal") {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (!grouped && ObjectUtils.isNotEmpty(this.activeItem)) {
          if (this.focusedItemInfo().index === 0) {
            this.focusedItemInfo.set({
              index: this.activeItem().index,
              key: this.activeItem().key,
              parentKey: this.activeItem().parentKey,
              item: processedItem.item
            });
            this.activeItem.set(null);
          } else {
            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
          }
        }
      }
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "horizontal") {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      }
    } else {
      if (this.orientation === "vertical" && ObjectUtils.isNotEmpty(this.activeItem())) {
        if (processedItem.columnIndex === 0) {
          this.focusedItemInfo.set({
            index: this.activeItem().index,
            key: this.activeItem().key,
            parentKey: this.activeItem().parentKey,
            item: processedItem.item
          });
          this.activeItem.set(null);
        }
      }
      const columnIndex = processedItem.columnIndex - 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemInfo(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemInfo(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    if (ObjectUtils.isNotEmpty(this.activeItem())) {
      this.focusedItemInfo.set({
        index: this.activeItem().index,
        key: this.activeItem().key,
        item: this.activeItem().item
      });
      this.activeItem.set(null);
    }
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = DomHandler.findSingle(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
    }
    event.preventDefault();
  }
  findVisibleItem(index) {
    return ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide(event, true);
        });
      }
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.rootmenu?.el.nativeElement !== event.target && !this.rootmenu?.el.nativeElement.contains(event.target);
          if (isOutsideContainer) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
  }
  static ɵfac = function MegaMenu_Factory(t) {
    return new (t || _MegaMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenu,
    selectors: [["p-megaMenu"]],
    contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MegaMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubutton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      orientation: "orientation",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: "disabled",
      tabindex: "tabindex"
    },
    ngContentSelectors: _c8,
    decls: 7,
    vars: 26,
    consts: [[3, "ngClass", "ngStyle"], ["class", "p-megamenu-start", 4, "ngIf"], [3, "itemTemplate", "items", "menuId", "root", "orientation", "ariaLabel", "disabled", "tabindex", "activeItem", "level", "ariaLabelledBy", "focusedItemId", "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter"], ["rootmenu", ""], ["class", "p-megamenu-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-megamenu-start"], [4, "ngTemplateOutlet"], [1, "p-megamenu-end"]],
    template: function MegaMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MegaMenu_div_1_Template, 2, 1, "div", 1);
        ɵɵelementStart(2, "p-megaMenuSub", 2, 3);
        ɵɵlistener("itemClick", function MegaMenu_Template_p_megaMenuSub_itemClick_2_listener($event) {
          return ctx.onItemClick($event);
        })("menuFocus", function MegaMenu_Template_p_megaMenuSub_menuFocus_2_listener($event) {
          return ctx.onMenuFocus($event);
        })("menuBlur", function MegaMenu_Template_p_megaMenuSub_menuBlur_2_listener($event) {
          return ctx.onMenuBlur($event);
        })("menuKeydown", function MegaMenu_Template_p_megaMenuSub_menuKeydown_2_listener($event) {
          return ctx.onKeyDown($event);
        })("itemMouseEnter", function MegaMenu_Template_p_megaMenuSub_itemMouseEnter_2_listener($event) {
          return ctx.onItemMouseEnter($event);
        });
        ɵɵelementEnd();
        ɵɵtemplate(4, MegaMenu_div_4_Template, 2, 1, "div", 4)(5, MegaMenu_ng_template_5_Template, 2, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const _r4 = ɵɵreference(6);
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction2(23, _c7, ctx.orientation == "horizontal", ctx.orientation == "vertical"))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-section", "root")("data-pc-name", "megamenu")("id", ctx.id);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.startTemplate);
        ɵɵadvance();
        ɵɵproperty("itemTemplate", ctx.itemTemplate)("items", ctx.processedItems)("menuId", ctx.id)("root", true)("orientation", ctx.orientation)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("activeItem", ctx.activeItem())("level", 0)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0);
        ɵɵattribute("id", ctx.id + "_list");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.endTemplate)("ngIfElse", _r4);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, MegaMenuSub],
    styles: ["@layer primeng{.p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-horizontal{align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenu, [{
    type: Component,
    args: [{
      selector: "p-megaMenu",
      template: `
        <div
            [ngClass]="{ 'p-megamenu p-component': true, 'p-megamenu-horizontal': orientation == 'horizontal', 'p-megamenu-vertical': orientation == 'vertical' }"
            [class]="styleClass"
            [ngStyle]="style"
            [attr.data-pc-section]="'root'"
            [attr.data-pc-name]="'megamenu'"
            [attr.id]="id"
        >
            <div class="p-megamenu-start" *ngIf="startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate"></ng-container>
            </div>
            <p-megaMenuSub
                #rootmenu
                [itemTemplate]="itemTemplate"
                [items]="processedItems"
                [attr.id]="id + '_list'"
                [menuId]="id"
                [root]="true"
                [orientation]="orientation"
                [ariaLabel]="ariaLabel"
                [disabled]="disabled"
                [tabindex]="!disabled ? tabindex : -1"
                [activeItem]="activeItem()"
                [level]="0"
                [ariaLabelledBy]="ariaLabelledBy"
                [focusedItemId]="focused ? focusedItemId : undefined"
                (itemClick)="onItemClick($event)"
                (menuFocus)="onMenuFocus($event)"
                (menuBlur)="onMenuBlur($event)"
                (menuKeydown)="onKeyDown($event)"
                (itemMouseEnter)="onItemMouseEnter($event)"
            ></p-megaMenuSub>
            <div class="p-megamenu-end" *ngIf="endTemplate; else legacy">
                <ng-container *ngTemplateOutlet="endTemplate"></ng-container>
            </div>
            <ng-template #legacy>
                <div class="p-megamenu-end">
                    <ng-content></ng-content>
                </div>
            </ng-template>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-horizontal{align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: PrimeNGConfig
  }, {
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    menubutton: [{
      type: ViewChild,
      args: ["menubutton"]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }]
  });
})();
var MegaMenuModule = class _MegaMenuModule {
  static ɵfac = function MegaMenuModule_Factory(t) {
    return new (t || _MegaMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MegaMenuModule,
    declarations: [MegaMenu, MegaMenuSub],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon],
    exports: [MegaMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon],
      exports: [MegaMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [MegaMenu, MegaMenuSub]
    }]
  }], null, null);
})();
export {
  MegaMenu,
  MegaMenuModule,
  MegaMenuSub
};
//# sourceMappingURL=primeng_megamenu.js.map
