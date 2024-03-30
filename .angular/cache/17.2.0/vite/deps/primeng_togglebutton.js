import {
  NG_VALUE_ACCESSOR
} from "./chunk-IUOHNIRL.js";
import {
  Ripple,
  RippleModule
} from "./chunk-2Y5ES4M2.js";
import "./chunk-EK2YCWCT.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-JUETL6ZC.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-S6LCCLL4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  Output,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-J2DL6UUS.js";
import "./chunk-WSA2QMXP.js";
import "./chunk-QMAMURKP.js";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c0 = (a1, a2) => ({
  "p-button-icon": true,
  "p-button-icon-left": a1,
  "p-button-icon-right": a2
});
function ToggleButton_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r3.checked ? ctx_r3.onIcon : ctx_r3.offIcon);
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c0, ctx_r3.iconPos === "left", ctx_r3.iconPos === "right"));
    ɵɵattribute("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_1_span_0_Template, 1, 7, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.onIcon || ctx_r0.offIcon);
  }
}
function ToggleButton_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c1 = (a0) => ({
  $implicit: a0
});
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r1.checked));
  }
}
function ToggleButton_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.checked ? ctx_r2.hasOnLabel ? ctx_r2.onLabel : "" : ctx_r2.hasOffLabel ? ctx_r2.offLabel : "");
  }
}
var _c2 = (a1, a2, a3) => ({
  "p-button p-togglebutton p-component": true,
  "p-button-icon-only": a1,
  "p-highlight": a2,
  "p-disabled": a3
});
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton {
  cd;
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel;
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel;
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  templates;
  iconTemplate;
  checked = false;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  constructor(cd) {
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.iconTemplate = item.template;
          break;
        default:
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  toggle(event) {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  onBlur() {
    this.onModelTouched();
  }
  writeValue(value) {
    this.checked = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  static ɵfac = function ToggleButton_Factory(t) {
    return new (t || _ToggleButton)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      disabled: "disabled",
      style: "style",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: "tabindex",
      iconPos: "iconPos"
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR])],
    decls: 4,
    vars: 16,
    consts: [["role", "switch", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown"], [3, "class", "ngClass"], ["class", "p-button-label", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-button-label"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("click", function ToggleButton_Template_div_click_0_listener($event) {
          return ctx.toggle($event);
        })("keydown", function ToggleButton_Template_div_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        });
        ɵɵtemplate(1, ToggleButton_Conditional_1_Template, 1, 1, "span", 1)(2, ToggleButton_Conditional_2_Template, 1, 4)(3, ToggleButton_span_3_Template, 2, 2, "span", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction3(12, _c2, ctx.onIcon && ctx.offIcon && !ctx.hasOnLabel && !ctx.hasOffLabel, ctx.checked, ctx.disabled))("ngStyle", ctx.style);
        ɵɵattribute("tabindex", ctx.disabled ? null : ctx.tabindex)("aria-checked", ctx.checked)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-name", "togglebutton")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵconditional(1, !ctx.iconTemplate ? 1 : 2);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.onLabel || ctx.offLabel);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple],
    styles: ['@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:focus   .p-button[_ngcontent-%COMP%]{position:relative;z-index:1}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover, .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child), .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child):hover, .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:last-child)   .p-button[_ngcontent-%COMP%]:hover{border-right:0 none}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type)   .p-button[_ngcontent-%COMP%]{border-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:first-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-button-group[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%], .p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type), .p-buttonset[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%]:last-of-type:not(:only-of-type)   .p-button[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}'],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton",
      template: `
        <div
            [ngClass]="{ 'p-button p-togglebutton p-component': true, 'p-button-icon-only': onIcon && offIcon && !hasOnLabel && !hasOffLabel, 'p-highlight': checked, 'p-disabled': disabled }"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="toggle($event)"
            (keydown)="onKeyDown($event)"
            [attr.tabindex]="disabled ? null : tabindex"
            role="switch"
            [attr.aria-checked]="checked"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            pRipple
            [attr.data-pc-name]="'togglebutton'"
            [attr.data-pc-section]="'root'"
        >
            @if(!iconTemplate) {
            <span
                *ngIf="onIcon || offIcon"
                [class]="checked ? this.onIcon : this.offIcon"
                [ngClass]="{ 'p-button-icon': true, 'p-button-icon-left': iconPos === 'left', 'p-button-icon-right': iconPos === 'right' }"
                [attr.data-pc-section]="'icon'"
            ></span>
            } @else {
            <ng-container *ngTemplateOutlet="iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span class="p-button-label" *ngIf="onLabel || offLabel" [attr.data-pc-section]="'label'">{{ checked ? (hasOnLabel ? onLabel : '') : hasOffLabel ? offLabel : '' }}</span>
        </div>
    `,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      },
      styles: ['@layer primeng{.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default;pointer-events:none}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-button-group .p-button{margin:0}.p-button-group .p-button:focus,.p-button-group p-button:focus .p-button,.p-buttonset .p-button:focus,.p-buttonset p-button:focus .p-button{position:relative;z-index:1}.p-button-group .p-button:not(:last-child),.p-button-group .p-button:not(:last-child):hover,.p-button-group p-button:not(:last-child) .p-button,.p-button-group p-button:not(:last-child) .p-button:hover,.p-buttonset .p-button:not(:last-child),.p-buttonset .p-button:not(:last-child):hover,.p-buttonset p-button:not(:last-child) .p-button,.p-buttonset p-button:not(:last-child) .p-button:hover{border-right:0 none}.p-button-group .p-button:not(:first-of-type):not(:last-of-type),.p-button-group p-button:not(:first-of-type):not(:last-of-type) .p-button,.p-buttonset .p-button:not(:first-of-type):not(:last-of-type),.p-buttonset p-button:not(:first-of-type):not(:last-of-type) .p-button{border-radius:0}.p-button-group .p-button:first-of-type:not(:only-of-type),.p-button-group p-button:first-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:first-of-type:not(:only-of-type),.p-buttonset p-button:first-of-type:not(:only-of-type) .p-button{border-top-right-radius:0;border-bottom-right-radius:0}.p-button-group .p-button:last-of-type:not(:only-of-type),.p-button-group p-button:last-of-type:not(:only-of-type) .p-button,.p-buttonset .p-button:last-of-type:not(:only-of-type),.p-buttonset p-button:last-of-type:not(:only-of-type) .p-button{border-top-left-radius:0;border-bottom-left-radius:0}p-button[iconpos=right] spinnericon{order:1}}\n']
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
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
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    iconPos: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static ɵfac = function ToggleButtonModule_Factory(t) {
    return new (t || _ToggleButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToggleButtonModule,
    declarations: [ToggleButton],
    imports: [CommonModule, RippleModule, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RippleModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule],
      exports: [ToggleButton, SharedModule],
      declarations: [ToggleButton]
    }]
  }], null, null);
})();
export {
  TOGGLEBUTTON_VALUE_ACCESSOR,
  ToggleButton,
  ToggleButtonModule
};
//# sourceMappingURL=primeng_togglebutton.js.map
