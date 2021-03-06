define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.$blockTemplateDefault = render$3;
  _exports.$extensionsTemplateDefault = render$4;
  _exports.$logsTemplateDefault = render$5;
  _exports.$stepStateTemplateDefault = render$6;
  _exports.$summaryTemplateDefault = render$7;
  _exports.insertNodeIntoTemplate = insertNodeIntoTemplate;
  _exports.property$1 = _exports.property = property;
  _exports.query$1 = _exports.query = query;
  _exports.queryAll$1 = _exports.queryAll = queryAll;
  _exports.removeNodesFromTemplate = removeNodesFromTemplate;
  _exports.templateFactory$1 = _exports.templateFactory = templateFactory;
  _exports.nothing = _exports.notEqual$1 = _exports.notEqual = _exports.nodeMarker = _exports.noChange$1 = _exports.noChange = _exports.markerRegex = _exports.marker = _exports.lastAttributeNameRegex = _exports.isTemplatePartActive$1 = _exports.isTemplatePartActive = _exports.isPrimitive$1 = _exports.isPrimitive = _exports.isIterable$1 = _exports.isIterable = _exports.isDirective$1 = _exports.isDirective = _exports.isCEPolyfill = _exports.html$2 = _exports.html$1 = _exports.html = _exports.eventOptions$1 = _exports.eventOptions = _exports.directive$1 = _exports.directive = _exports.defaultTemplateProcessor$1 = _exports.defaultTemplateProcessor = _exports.defaultConverter$1 = _exports.defaultConverter = _exports.customElement$1 = _exports.customElement = _exports.css$1 = _exports.css = _exports.createMarker$1 = _exports.createMarker = _exports.boundAttributeSuffix = _exports.UpdatingElement$1 = _exports.UpdatingElement = _exports.TemplateResult$3 = _exports.TemplateResult$2 = _exports.TemplateResult$1 = _exports.TemplateResult = _exports.TemplateInstance$1 = _exports.TemplateInstance = _exports.Template$1 = _exports.Template = _exports.SVGTemplateResult$2 = _exports.SVGTemplateResult$1 = _exports.SVGTemplateResult = _exports.PropertyPart$1 = _exports.PropertyPart = _exports.PropertyCommitter$1 = _exports.PropertyCommitter = _exports.NodePart$1 = _exports.NodePart = _exports.LitElement = _exports.EventPart$1 = _exports.EventPart = _exports.DefaultTemplateProcessor$1 = _exports.DefaultTemplateProcessor = _exports.CSSResult$1 = _exports.CSSResult = _exports.BooleanAttributePart$1 = _exports.BooleanAttributePart = _exports.AttributePart$1 = _exports.AttributePart = _exports.AttributeCommitter$1 = _exports.AttributeCommitter = _exports.$updatingElement = _exports.$templateResult = _exports.$templateInstance = _exports.$templateFactory = _exports.$template = _exports.$summaryTemplate = _exports.$stepStateTemplate = _exports.$shadyRender = _exports.$sendMessageDefault = _exports.$sendMessage = _exports.$render = _exports.$parts = _exports.$part = _exports.$modifyTemplate = _exports.$logsTemplate = _exports.$litHtml = _exports.$litElement = _exports.$globalStyleDefault = _exports.$globalStyle = _exports.$extensionsTemplate = _exports.$dom = _exports.$disableExtensionsDefault = _exports.$disableExtensions = _exports.$directive = _exports.$defaultTemplateProcessor = _exports.$decorators = _exports.$cssTag = _exports.$blockTemplate = _exports.$animateBodyScrollTopDefault = _exports.$animateBodyScrollTop = _exports.$DiagnosticsCoreDefault = _exports.$DiagnosticsCore = void 0;
  _exports.unsafeCSS$1 = _exports.unsafeCSS = _exports.templateCaches$1 = _exports.templateCaches = _exports.svg$2 = _exports.svg$1 = _exports.svg = _exports.supportsAdoptingStyleSheets$1 = _exports.supportsAdoptingStyleSheets = _exports.reparentNodes$1 = _exports.reparentNodes = _exports.render$1 = _exports.render$2 = _exports.render = _exports.removeNodes$1 = _exports.removeNodes = _exports.parts$1 = _exports.parts = _exports.nothing$1 = void 0;

  function _templateObject25_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Success\">\n      No errors were found.<br/>\n      Browsec should function normally.\n    </div>\n    <div class=\"Warning\">\n      There are errors found during Health Check.<br/>\n      You can send Health Check logs to Browsec support to help diagnose this issues.\n    </div>\n    <div class=\"Error\">\n      There are errors found during Health Check.<br/>\n      You can send Health Check logs to Browsec support to help diagnose this issues.\n    </div>"]);

    _templateObject25_029645c0226711eaa20e13a597e0dbb8 = function _templateObject25_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject24_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"Fixable ", "\">\n      Health Check has found issues which can be fixed.\n    </div>"]);

    _templateObject24_029645c0226711eaa20e13a597e0dbb8 = function _templateObject24_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject23_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  :host{\n    display: block;\n    font-size: 16px;\n  }\n\n  .Success,\n  .Warning,\n  .Error{\n    display: none;\n    text-align: center;\n  }\n\n  .Success::before,\n  .Warning::before,\n  .Error::before{\n    content: '';\n    display: block;\n    background: url( '/images/diagnostics.svg#success' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    /*background: url('/images/diagnostics/state_icons_big.png') 0 0 no-repeat;*/\n    width: 60px;\n    overflow:hidden;font-size:0;text-indent:-9999px;\n    height:0;\n    padding-top:60px;\n    margin: 0 auto;\n    border-bottom: 20px solid transparent;\n    text-align: left;\n  }\n  .Warning::before{\n    background-image: url( '/images/diagnostics.svg#warning' );\n  }\n  .Error::before{\n    background-image: url( '/images/diagnostics.svg#failed' );\n  }\n\n  .Success{\n    color: #3b9946;\n  }\n  .Warning{\n    color: #d8ad00;\n  }\n  .Error{\n    color: #c0392b;\n  }\n\n  :host(.success) .Success{\n    display: block;\n  }\n  :host(.warning) .Warning{\n    display: block;\n  }\n  :host(.error) .Error{\n    display: block;\n  }\n  </style>\n\n  ", ""]);

    _templateObject23_029645c0226711eaa20e13a597e0dbb8 = function _templateObject23_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject22_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  :host{\n    display: block;\n    width: 140px;\n  }\n\n  .Text{\n    display:inline-table;\n    vertical-align:top;\n    width: 100px;\n    height: 30px;\n    text-align: right;\n    font-size: 12px;\n  }\n  :host(.skip) .Text{\n    color: #999999;\n  }\n  :host(.progress) .Text{\n    color: #1c2f4f;\n  }\n  :host(.success) .Text{\n    color: #3b983f;\n  }\n  :host(.warning) .Text{\n    color: #d8ae04;\n  }\n  :host(.error) .Text{\n    color: #c0362b;\n  }\n  .Text > .In{\n    display: table-cell;\n    vertical-align: middle;\n    padding-right: 17px;\n  }\n\n  .Icon{\n    display:inline-block;\n    vertical-align:top;\n    width: 30px;\n    padding-top:30px;\n    overflow:hidden;font-size:0;text-indent:-9999px;\n    height:0;\n    background: url( '/images/diagnostics.svg#not_started' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n  }\n  :host(.skip) .Icon{\n    background-image: url( '/images/diagnostics.svg#skipped' );\n  }\n  :host(.progress) .Icon{\n    background-image: url( '/images/diagnostics.svg#waiting' );\n  }\n  :host(.success) .Icon{\n    background-image: url( '/images/diagnostics.svg#success' );\n  }\n  :host(.warning) .Icon{\n    background-image: url( '/images/diagnostics.svg#warning' );\n  }\n  :host(.error) .Icon{\n    background-image: url( '/images/diagnostics.svg#failed' );\n  }\n  </style><!--\n\n--><div class=\"Text\"><div class=\"In\">", " ", "</div></div><!--\n--><div class=\"Icon\">&nbsp;</div>"]);

    _templateObject22_029645c0226711eaa20e13a597e0dbb8 = function _templateObject22_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject21_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <div class=\"Textarea\">\n    <textarea\n      name=\"logs\"\n      rows=\"8\"\n      cols=\"80\"\n      .value=\"", "\"\n      readonly=\"readonly\"\n      spellcheck=\"false\"></textarea>\n  </div>\n  <div class=\"Button\"><input type=\"button\" value=\"Copy to Clipboard\" @click=\"", "\"/></div>"]);

    _templateObject21_029645c0226711eaa20e13a597e0dbb8 = function _templateObject21_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject20_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  :host{\n    display: block;\n  }\n\n  .Show{\n    font-size: 14px;\n    color: #1c304e;\n    text-align: center;\n    padding-bottom: 20px;\n  }\n  .Show > .In{\n    position: relative;\n    display:inline-block;vertical-align:top;\n    padding: 0 24px;\n  }\n  .Show > .In::after{\n    content: '';\n    display: block;\n    background: url( '/images/diagnostics.svg#document' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    width: 14px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    padding-top:18px;\n    position: absolute;\n    top: calc(50% - 9px);\n    left: 0;\n  }\n  .Show > .In > .In{\n    display: inline;\n    border-bottom: 1px dashed #8d97a6;\n    cursor: pointer;\n  }\n  .Show > .In > .In:hover{\n    border-bottom-color: transparent;\n  }\n\n  .Textarea textarea{\n    display: block;\n    box-sizing: border-box;\n    background: #f7f7f7;\n    border: 1px solid #cccccc;\n    border-radius: 3px;\n    font-family: 'Courier New', Courier, monospace;\n    font-size: 12px;\n    padding: 18px;\n    overflow: auto;\n    height: 370px;\n    resize: vertical;\n    color: #666;\n  }\n\n  .Button{\n    padding-top: 30px;\n    text-align: center;\n  }\n  .Button input[type=\"button\"]{\n    display:inline-block;\n    vertical-align:top;\n    border: 0;\n    background: #1c304e;\n    color: #fff;\n    height: 40px;\n    padding: 0 22px;\n    font-size: 16px;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n  </style>\n\n  <div class=\"Show\"><div class=\"In\"><div class=\"In\" @click=\"", "\">\n    ", " Health Check Logs\n  </div></div></div>\n\n  ", ""]);

    _templateObject20_029645c0226711eaa20e13a597e0dbb8 = function _templateObject20_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject19_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n        <img\n          src=\"", "\"\n          width=\"38\"\n          height=\"38\"\n          alt=\"\"\n          @click=\"", "\"/>"]);

    _templateObject19_029645c0226711eaa20e13a597e0dbb8 = function _templateObject19_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject18_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <tr>\n      <td>\n        <input\n          type=\"checkbox\"\n          id=\"", "\"\n          ?checked=\"", "\"\n          @click=\"", "\" />\n      </td>\n      <td>\n        ", "\n      </td>\n      <td><span class=\"Name\" @click=\"", "\">", "</span></td>\n    </tr>"]);

    _templateObject18_029645c0226711eaa20e13a597e0dbb8 = function _templateObject18_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject17_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n  }\n\n  input[type=\"checkbox\"]{\n    display: block;\n    width: 15px;\n    height: 15px;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: url( '/images/diagnostics/checkbox.svg#unchecked' ) 0 0 no-repeat;\n    background-size: 100% 100%;\n    border: 0;\n  }\n  input[type=\"checkbox\"]:checked{\n    background-image: url( '/images/diagnostics/checkbox.svg#checked' );\n  }\n\n  .List > table{\n    border-collapse: collapse;\n    font-size: 14px;\n  }\n  .List > table > tbody > tr > td ~ td{\n    padding-left: 12px;\n  }\n  .List > table > tbody > tr ~ tr > td{\n    padding-top: 10px;\n  }\n\n  .List img,\n  .Name{\n    cursor: default;\n  }\n\n  .Disable{\n    padding-top: 15px;\n  }\n  .Disable input{\n    padding: 0 32px;\n    height: 36px;\n    font-size: 16px;\n    background: #3b9945;\n    border-radius: 4px;\n    cursor: pointer;\n    border: 0;\n    color: #fff;\n  }\n  </style>\n\n  <div class=\"List\"><table><tbody>\n  ", "\n  </tbody></table></div>\n  <div class=\"Disable\"><!--\n --><input type=\"button\" value=\"Disable\" @click=\"", "\"/><!--\n--></div>"]);

    _templateObject17_029645c0226711eaa20e13a597e0dbb8 = function _templateObject17_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject16_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"FinalActionButton\"><!--\n   --><input type=\"button\" value=\"Fix it\" @click=\"", "\" /><!--\n  --></div>"]);

    _templateObject16_029645c0226711eaa20e13a597e0dbb8 = function _templateObject16_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject15_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"FinalActionButton\"><!--\n   --><input type=\"button\" value=\"Close page\" @click=\"", "\" /><!--\n  --></div>"]);

    _templateObject15_029645c0226711eaa20e13a597e0dbb8 = function _templateObject15_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject14_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <c-summary\n      .fixable=\"", "\"\n      .state=\"", "\"></c-summary>\n    ", "\n    <c-logs></c-logs>"]);

    _templateObject14_029645c0226711eaa20e13a597e0dbb8 = function _templateObject14_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject13_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">\n        Check HTTPS Internet connection with Browsec\n      </div>\n    </div>"]);

    _templateObject13_029645c0226711eaa20e13a597e0dbb8 = function _templateObject13_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject12_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">\n        Check HTTP Internet connection with Browsec\n      </div>\n    </div>"]);

    _templateObject12_029645c0226711eaa20e13a597e0dbb8 = function _templateObject12_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject11_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">Check Browsec API</div>\n    </div>"]);

    _templateObject11_029645c0226711eaa20e13a597e0dbb8 = function _templateObject11_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject10_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">\n        Check HTTPS Internet connection\n      </div>\n    </div>"]);

    _templateObject10_029645c0226711eaa20e13a597e0dbb8 = function _templateObject10_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject9_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">\n        Check HTTP Internet connection\n      </div>\n    </div>"]);

    _templateObject9_029645c0226711eaa20e13a597e0dbb8 = function _templateObject9_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject8_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <div class=\"Extensions\"><div class=\"In\">\n        <div class=\"Extensions_Text\">\n          We have detected other extensions which can conflict with Browsec.\n          Consider disabling these extensions if Browsec doesn't work properly.\n        </div>\n        <c-extensions\n          extensions=\"", "\"\n          @extensions-update=\"", "\"></c-extensions>\n        <div class=\"Extensions_Later\">\n          You can enable these extensions later in browser settings.\n        </div>\n      </div></div>"]);

    _templateObject8_029645c0226711eaa20e13a597e0dbb8 = function _templateObject8_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject7_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">Check conflicts with other extensions</div>\n    ", "\n    </div>"]);

    _templateObject7_029645c0226711eaa20e13a597e0dbb8 = function _templateObject7_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject6_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n      <div class=\"Extensions\"><div class=\"In\">\n        <div class=\"Extensions_Text\">\n          We have detected other extensions which block proxy settings.\n          Disable these extensions to use Browsec.\n        </div>\n        <c-extensions\n          .extensions=\"", "\"\n          @extensions-update=\"", "\"></c-extensions>\n        <div class=\"Extensions_Later\">\n          You can enable these extensions later in browser settings.\n        </div>\n      </div></div>"]);

    _templateObject6_029645c0226711eaa20e13a597e0dbb8 = function _templateObject6_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject5_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"E ", "\">\n      <step-state\n        .state=\"", "\"\n        .completion=\"", "\"></step-state>\n      <div class=\"Steps_Name\">Check proxy settings</div>\n    ", "\n    </div>"]);

    _templateObject5_029645c0226711eaa20e13a597e0dbb8 = function _templateObject5_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject4_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"MainStatus_Button\"><!--\n   --><input type=\"button\" value=\"Try again\" @click=\"", "\" /><!--\n --></div>"]);

    _templateObject4_029645c0226711eaa20e13a597e0dbb8 = function _templateObject4_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject3_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"MainStatus_Running\">Running...</div>"]);

    _templateObject3_029645c0226711eaa20e13a597e0dbb8 = function _templateObject3_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject2_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n    <div class=\"MainStatus_Button\"><!--\n   --><input type=\"button\" value=\"Start\" @click=\"", "\"/><!--\n --></div>"]);

    _templateObject2_029645c0226711eaa20e13a597e0dbb8 = function _templateObject2_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  function _templateObject_029645c0226711eaa20e13a597e0dbb8() {
    var data = babelHelpers.taggedTemplateLiteral(["\n  <style>\n  ", "\n  :host{\n    display: block;\n    font-size: 14px;\n  }\n\n  input[type=\"button\"]{\n    padding: 0px 70px;\n    border: 0;\n    font-size: 18px;\n    height: 48px;\n    color: #fff;\n    background: #3b9945;\n    border-radius: 4px;\n    cursor: pointer;\n  }\n\n  .MainStatus{\n    padding-top: 30px;\n    text-align: center;\n  }\n  .MainStatus_Running,\n  .MainStatus_Complete{\n    display:inline-block;\n    vertical-align:top;\n    padding: 0px 70px;\n    font-size: 18px;\n    line-height: 48px;\n    background: #e9eaee;\n    border-radius: 4px;\n  }\n\n  .Steps{\n    margin-top: 55px;\n    border: 1px solid #a8afb5;\n    padding: 40px 30px 40px 20px;\n    border-radius: 3px;\n  }\n  .Steps > .E{\n    position: relative;\n  }\n  .Steps > .E::after{\n    content:' ';clear:both;display:block;width:0;height:0;overflow:hidden;font-size:0;\n  }\n  .Steps > .E ~ .E{\n    border-top: 16px solid transparent;\n  }\n  .Steps > .E ~ .E::before{\n    content: '';\n    display: block;\n    background: #e6e6e6;\n    position: absolute;\n    top: -16px;\n    left: 114px;\n    width: 2px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;padding-top:16px;\n  }\n  .Steps step-state{\n    float: left;\n  }\n  .Steps_Name{\n    font-size: 16px;\n    color: #4c4c4c;\n    overflow: hidden;\n    padding: 5px 0 0 25px;\n    line-height: 1.3;\n  }\n\n  .Extensions{\n    padding: 16px 0 0 114px;\n    clear: both;\n    position: relative;\n  }\n  .Extensions::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 114px;\n    width: 2px;\n    padding-top:16px;\n    overflow:hidden;font-size:0;text-indent:-9999px;height:0;\n    background: #e6e6e6;\n  }\n  .Extensions > .In{\n    border-left: 2px solid #e6e6e6;\n    background: #f7f7f7;\n    padding: 27px 40px;\n    border-radius: 0 4px 4px 0;\n  }\n  .Extensions_Text{\n    padding-bottom: 15px;\n  }\n  .Extensions_Later{\n    font-size: 12px;\n    color: #808080;\n    padding-top: 10px;\n  }\n\n  c-summary{\n    padding-top: 55px;\n  }\n\n  .FinalActionButton{\n    text-align: center;\n    padding-top: 35px;\n  }\n  .FinalActionButton input[type=\"button\"]{\n    display:inline-block;\n    vertical-align:top;\n    border: 0;\n    cursor: pointer;\n    padding: 0 65px;\n    height: 48px;\n    color: #fff;\n    background: #3b9946;\n    border-radius: 4px;\n    font-size: 18px;\n  }\n\n  c-logs{\n    padding-top: 50px;\n  }\n  </style>\n\n  <div class=\"MainStatus\">\n  ", "\n\n  ", "\n\n  ", "\n  </div>\n\n  <div class=\"Steps\">\n  ", "\n\n  ", "\n\n  ", "\n\n    ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  </div>\n\n  ", ""]);

    _templateObject_029645c0226711eaa20e13a597e0dbb8 = function _templateObject_029645c0226711eaa20e13a597e0dbb8() {
      return data;
    };

    return data;
  }

  /**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
  var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
  _exports.supportsAdoptingStyleSheets$1 = _exports.supportsAdoptingStyleSheets = supportsAdoptingStyleSheets;
  var constructionToken = Symbol();

  var CSSResult =
  /*#__PURE__*/
  function () {
    function CSSResult(cssText, safeToken) {
      babelHelpers.classCallCheck(this, CSSResult);

      if (safeToken !== constructionToken) {
        throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
      }

      this.cssText = cssText;
    } // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.


    babelHelpers.createClass(CSSResult, [{
      key: "toString",
      value: function toString() {
        return this.cssText;
      }
    }, {
      key: "styleSheet",
      get: function get() {
        if (this._styleSheet === undefined) {
          // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
          // is constructable.
          if (supportsAdoptingStyleSheets) {
            this._styleSheet = new CSSStyleSheet();

            this._styleSheet.replaceSync(this.cssText);
          } else {
            this._styleSheet = null;
          }
        }

        return this._styleSheet;
      }
    }]);
    return CSSResult;
  }();
  /**
   * Wrap a value for interpolation in a css tagged template literal.
   *
   * This is unsafe because untrusted CSS text can be used to phone home
   * or exfiltrate data to an attacker controlled site. Take care to only use
   * this with trusted input.
   */


  _exports.CSSResult$1 = _exports.CSSResult = CSSResult;

  var unsafeCSS = function unsafeCSS(value) {
    return new CSSResult(String(value), constructionToken);
  };

  _exports.unsafeCSS$1 = _exports.unsafeCSS = unsafeCSS;

  var textFromCSSResult = function textFromCSSResult(value) {
    if (babelHelpers.instanceof(value, CSSResult)) {
      return value.cssText;
    } else if (typeof value === 'number') {
      return value;
    } else {
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    }
  };
  /**
   * Template tag which which can be used with LitElement's `style` property to
   * set element styles. For security reasons, only literal string values may be
   * used. To incorporate non-literal values `unsafeCSS` may be used inside a
   * template string part.
   */


  var css = function css(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    var cssText = values.reduce(function (acc, v, idx) {
      return acc + textFromCSSResult(v) + strings[idx + 1];
    }, strings[0]);
    return new CSSResult(cssText, constructionToken);
  };

  _exports.css$1 = _exports.css = css;
  var cssTag = {
    supportsAdoptingStyleSheets: supportsAdoptingStyleSheets,
    CSSResult: CSSResult,
    unsafeCSS: unsafeCSS,
    css: css
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  _exports.$cssTag = cssTag;

  var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
    window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any

    return clazz;
  };

  var standardCustomElement = function standardCustomElement(tagName, descriptor) {
    var kind = descriptor.kind,
        elements = descriptor.elements;
    return {
      kind: kind,
      elements: elements,
      // This callback is called once the class is otherwise fully defined
      finisher: function finisher(clazz) {
        window.customElements.define(tagName, clazz);
      }
    };
  };
  /**
   * Class decorator factory that defines the decorated class as a custom element.
   *
   * @param tagName the name of the custom element to define
   */


  var customElement = function customElement(tagName) {
    return function (classOrDescriptor) {
      return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
    };
  };

  _exports.customElement$1 = _exports.customElement = customElement;

  var standardProperty = function standardProperty(options, element) {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
      return Object.assign({}, element, {
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      });
    } else {
      // createProperty() takes care of defining the property, but we still
      // must return some kind of descriptor, so return a descriptor for an
      // unused prototype field. The finisher calls createProperty().
      return {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {},
        // When @babel/plugin-proposal-decorators implements initializers,
        // do this instead of the initializer below. See:
        // https://github.com/babel/babel/issues/9260 extras: [
        //   {
        //     kind: 'initializer',
        //     placement: 'own',
        //     initializer: descriptor.initializer,
        //   }
        // ],
        initializer: function initializer() {
          if (typeof element.initializer === 'function') {
            this[element.key] = element.initializer.call(this);
          }
        },
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      };
    }
  };

  var legacyProperty = function legacyProperty(options, proto, name) {
    proto.constructor.createProperty(name, options);
  };
  /**
   * A property decorator which creates a LitElement property which reflects a
   * corresponding attribute value. A `PropertyDeclaration` may optionally be
   * supplied to configure property features.
   *
   * @ExportDecoratedItems
   */


  function property(options) {
    // tslint:disable-next-line:no-any decorator
    return function (protoOrDescriptor, name) {
      return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
    };
  }
  /**
   * A property decorator that converts a class property into a getter that
   * executes a querySelector on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */


  function query(selector) {
    return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name) {
      var descriptor = {
        get: function get() {
          return this.renderRoot.querySelector(selector);
        },
        enumerable: true,
        configurable: true
      };
      return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
  }
  /**
   * A property decorator that converts a class property into a getter
   * that executes a querySelectorAll on the element's renderRoot.
   *
   * @ExportDecoratedItems
   */


  function queryAll(selector) {
    return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name) {
      var descriptor = {
        get: function get() {
          return this.renderRoot.querySelectorAll(selector);
        },
        enumerable: true,
        configurable: true
      };
      return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
  }

  var legacyQuery = function legacyQuery(descriptor, proto, name) {
    Object.defineProperty(proto, name, descriptor);
  };

  var standardQuery = function standardQuery(descriptor, element) {
    return {
      kind: 'method',
      placement: 'prototype',
      key: element.key,
      descriptor: descriptor
    };
  };

  var standardEventOptions = function standardEventOptions(options, element) {
    return Object.assign({}, element, {
      finisher: function finisher(clazz) {
        Object.assign(clazz.prototype[element.key], options);
      }
    });
  };

  var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
  function legacyEventOptions(options, proto, name) {
    Object.assign(proto[name], options);
  };
  /**
   * Adds event listener options to a method used as an event listener in a
   * lit-html template.
   *
   * @param options An object that specifis event listener options as accepted by
   * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
   *
   * Current browsers support the `capture`, `passive`, and `once` options. See:
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
   *
   * @example
   *
   *     class MyElement {
   *
   *       clicked = false;
   *
   *       render() {
   *         return html`<div @click=${this._onClick}`><button></button></div>`;
   *       }
   *
   *       @eventOptions({capture: true})
   *       _onClick(e) {
   *         this.clicked = true;
   *       }
   *     }
   */


  var eventOptions = function eventOptions(options) {
    return (// Return value typed as any to prevent TypeScript from complaining that
      // standard decorator function signature does not match TypeScript decorator
      // signature
      // TODO(kschaaf): unclear why it was only failing on this decorator and not
      // the others
      function (protoOrDescriptor, name) {
        return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
      }
    );
  };

  _exports.eventOptions$1 = _exports.eventOptions = eventOptions;
  var decorators = {
    customElement: customElement,
    property: property,
    query: query,
    queryAll: queryAll,
    eventOptions: eventOptions
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  _exports.$decorators = decorators;

  var _a;
  /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
   * replaced at compile time by the munged name for object[property]. We cannot
   * alias this function, so we have to use a small shim that has the same
   * behavior when not compiling.
   */


  window.JSCompiler_renameProperty = function (prop, _obj) {
    return prop;
  };

  var defaultConverter = {
    toAttribute: function toAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value ? '' : null;

        case Object:
        case Array:
          // if the value is `null` or `undefined` pass this through
          // to allow removing/no change behavior.
          return value == null ? value : JSON.stringify(value);
      }

      return value;
    },
    fromAttribute: function fromAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value !== null;

        case Number:
          return value === null ? null : Number(value);

        case Object:
        case Array:
          return JSON.parse(value);
      }

      return value;
    }
  };
  /**
   * Change function that returns true if `value` is different from `oldValue`.
   * This method is used as the default for a property's `hasChanged` function.
   */

  _exports.defaultConverter$1 = _exports.defaultConverter = defaultConverter;

  var notEqual = function notEqual(value, old) {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
  };

  _exports.notEqual$1 = _exports.notEqual = notEqual;
  var defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
  };
  var microtaskPromise = Promise.resolve(true);
  var STATE_HAS_UPDATED = 1;
  var STATE_UPDATE_REQUESTED = 1 << 2;
  var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
  var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
  var STATE_HAS_CONNECTED = 1 << 5;
  /**
   * The Closure JS Compiler doesn't currently have good support for static
   * property semantics where "this" is dynamic (e.g.
   * https://github.com/google/closure-compiler/issues/3177 and others) so we use
   * this hack to bypass any rewriting by the compiler.
   */

  var finalized = 'finalized';
  /**
   * Base element class which manages element properties and attributes. When
   * properties change, the `update` method is asynchronously called. This method
   * should be supplied by subclassers to render updates as desired.
   */

  var UpdatingElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    babelHelpers.inherits(UpdatingElement, _HTMLElement);

    function UpdatingElement() {
      var _this;

      babelHelpers.classCallCheck(this, UpdatingElement);
      _this = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(UpdatingElement).call(this));
      _this._updateState = 0;
      _this._instanceProperties = undefined;
      _this._updatePromise = microtaskPromise;
      _this._hasConnectedResolver = undefined;
      /**
       * Map with keys for any properties that have changed since the last
       * update cycle with previous values.
       */

      _this._changedProperties = new Map();
      /**
       * Map with keys of properties that should be reflected when updated.
       */

      _this._reflectingProperties = undefined;

      _this.initialize();

      return _this;
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */


    babelHelpers.createClass(UpdatingElement, [{
      key: "initialize",

      /**
       * Performs element initialization. By default captures any pre-set values for
       * registered properties.
       */
      value: function initialize() {
        this._saveInstanceProperties(); // ensures first update will be caught by an early access of
        // `updateComplete`


        this._requestUpdate();
      }
      /**
       * Fixes any properties set on the instance before upgrade time.
       * Otherwise these would shadow the accessor and break these properties.
       * The properties are stored in a Map which is played back after the
       * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
       * (<=41), properties created for native platform properties like (`id` or
       * `name`) may not have default values set in the element constructor. On
       * these browsers native properties appear on instances and therefore their
       * default value will overwrite any element default (e.g. if the element sets
       * this.id = 'id' in the constructor, the 'id' will become '' since this is
       * the native platform default).
       */

    }, {
      key: "_saveInstanceProperties",
      value: function _saveInstanceProperties() {
        var _this2 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor._classProperties.forEach(function (_v, p) {
          if (_this2.hasOwnProperty(p)) {
            var value = _this2[p];
            delete _this2[p];

            if (!_this2._instanceProperties) {
              _this2._instanceProperties = new Map();
            }

            _this2._instanceProperties.set(p, value);
          }
        });
      }
      /**
       * Applies previously saved instance properties.
       */

    }, {
      key: "_applyInstanceProperties",
      value: function _applyInstanceProperties() {
        var _this3 = this;

        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach(function (v, p) {
          return _this3[p] = v;
        });

        this._instanceProperties = undefined;
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete
        // before connection and if one is pending connection the
        // `_hasConnectionResolver` will exist. If so, resolve it to complete the
        // update, otherwise requestUpdate.

        if (this._hasConnectedResolver) {
          this._hasConnectedResolver();

          this._hasConnectedResolver = undefined;
        }
      }
      /**
       * Allows for `super.disconnectedCallback()` in extensions while
       * reserving the possibility of making non-breaking feature additions
       * when disconnecting at some point in the future.
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {}
      /**
       * Synchronizes property values when attributes change.
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, old, value) {
        if (old !== value) {
          this._attributeToProperty(name, value);
        }
      }
    }, {
      key: "_propertyToAttribute",
      value: function _propertyToAttribute(name, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
        var ctor = this.constructor;

        var attr = ctor._attributeNameForProperty(name, options);

        if (attr !== undefined) {
          var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


          if (attrValue === undefined) {
            return;
          } // Track if the property is being reflected to avoid
          // setting the property again via `attributeChangedCallback`. Note:
          // 1. this takes advantage of the fact that the callback is synchronous.
          // 2. will behave incorrectly if multiple attributes are in the reaction
          // stack at time of calling. However, since we process attributes
          // in `update` this should not be possible (or an extreme corner case
          // that we'd like to discover).
          // mark state reflecting


          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

          if (attrValue == null) {
            this.removeAttribute(attr);
          } else {
            this.setAttribute(attr, attrValue);
          } // mark state not reflecting


          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
      }
    }, {
      key: "_attributeToProperty",
      value: function _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
          return;
        }

        var ctor = this.constructor;

        var propName = ctor._attributeToPropertyMap.get(name);

        if (propName !== undefined) {
          var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

          this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
          this[propName] = // tslint:disable-next-line:no-any
          ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

          this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
      }
      /**
       * This private version of `requestUpdate` does not access or return the
       * `updateComplete` promise. This promise can be overridden and is therefore
       * not free to access.
       */

    }, {
      key: "_requestUpdate",
      value: function _requestUpdate(name, oldValue) {
        var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

        if (name !== undefined) {
          var ctor = this.constructor;
          var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

          if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
            if (!this._changedProperties.has(name)) {
              this._changedProperties.set(name, oldValue);
            } // Add to reflecting properties set.
            // Note, it's important that every change has a chance to add the
            // property to `_reflectingProperties`. This ensures setting
            // attribute + property reflects correctly.


            if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
              if (this._reflectingProperties === undefined) {
                this._reflectingProperties = new Map();
              }

              this._reflectingProperties.set(name, options);
            }
          } else {
            // Abort the request if the property should not be considered changed.
            shouldRequestUpdate = false;
          }
        }

        if (!this._hasRequestedUpdate && shouldRequestUpdate) {
          this._enqueueUpdate();
        }
      }
      /**
       * Requests an update which is processed asynchronously. This should
       * be called when an element should update based on some state not triggered
       * by setting a property. In this case, pass no arguments. It should also be
       * called when manually implementing a property setter. In this case, pass the
       * property `name` and `oldValue` to ensure that any configured property
       * options are honored. Returns the `updateComplete` Promise which is resolved
       * when the update completes.
       *
       * @param name {PropertyKey} (optional) name of requesting property
       * @param oldValue {any} (optional) old value of requesting property
       * @returns {Promise} A Promise that is resolved when the update completes.
       */

    }, {
      key: "requestUpdate",
      value: function requestUpdate(name, oldValue) {
        this._requestUpdate(name, oldValue);

        return this.updateComplete;
      }
      /**
       * Sets up the element to asynchronously update.
       */

    }, {
      key: "_enqueueUpdate",
      value: function () {
        var _enqueueUpdate2 = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this4 = this;

          var resolve, reject, previousUpdatePromise, result;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Mark state updating...
                  this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                  previousUpdatePromise = this._updatePromise;
                  this._updatePromise = new Promise(function (res, rej) {
                    resolve = res;
                    reject = rej;
                  });
                  _context.prev = 3;
                  _context.next = 6;
                  return previousUpdatePromise;

                case 6:
                  _context.next = 10;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](3);

                case 10:
                  if (this._hasConnected) {
                    _context.next = 13;
                    break;
                  }

                  _context.next = 13;
                  return new Promise(function (res) {
                    return _this4._hasConnectedResolver = res;
                  });

                case 13:
                  _context.prev = 13;
                  result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                  // enable coordinating updates with a scheduler. Note, the result is
                  // checked to avoid delaying an additional microtask unless we need to.

                  if (!(result != null)) {
                    _context.next = 18;
                    break;
                  }

                  _context.next = 18;
                  return result;

                case 18:
                  _context.next = 23;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t1 = _context["catch"](13);
                  reject(_context.t1);

                case 23:
                  resolve(!this._hasRequestedUpdate);

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 8], [13, 20]]);
        }));

        function _enqueueUpdate() {
          return _enqueueUpdate2.apply(this, arguments);
        }

        return _enqueueUpdate;
      }()
    }, {
      key: "performUpdate",

      /**
       * Performs an element update. Note, if an exception is thrown during the
       * update, `firstUpdated` and `updated` will not be called.
       *
       * You can override this method to change the timing of updates. If this
       * method is overridden, `super.performUpdate()` must be called.
       *
       * For instance, to schedule updates to occur just before the next frame:
       *
       * ```
       * protected async performUpdate(): Promise<unknown> {
       *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
       *   super.performUpdate();
       * }
       * ```
       */
      value: function performUpdate() {
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) {
          this._applyInstanceProperties();
        }

        var shouldUpdate = false;
        var changedProperties = this._changedProperties;

        try {
          shouldUpdate = this.shouldUpdate(changedProperties);

          if (shouldUpdate) {
            this.update(changedProperties);
          }
        } catch (e) {
          // Prevent `firstUpdated` and `updated` from running when there's an
          // update exception.
          shouldUpdate = false;
          throw e;
        } finally {
          // Ensure element can accept additional updates after an exception.
          this._markUpdated();
        }

        if (shouldUpdate) {
          if (!(this._updateState & STATE_HAS_UPDATED)) {
            this._updateState = this._updateState | STATE_HAS_UPDATED;
            this.firstUpdated(changedProperties);
          }

          this.updated(changedProperties);
        }
      }
    }, {
      key: "_markUpdated",
      value: function _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
      }
      /**
       * Returns a Promise that resolves when the element has completed updating.
       * The Promise value is a boolean that is `true` if the element completed the
       * update without triggering another update. The Promise result is `false` if
       * a property was set inside `updated()`. If the Promise is rejected, an
       * exception was thrown during the update.
       *
       * To await additional asynchronous work, override the `_getUpdateComplete`
       * method. For example, it is sometimes useful to await a rendered element
       * before fulfilling this Promise. To do this, first await
       * `super._getUpdateComplete()`, then any subsequent state.
       *
       * @returns {Promise} The Promise returns a boolean that indicates if the
       * update resolved without triggering another update.
       */

    }, {
      key: "_getUpdateComplete",

      /**
       * Override point for the `updateComplete` promise.
       *
       * It is not safe to override the `updateComplete` getter directly due to a
       * limitation in TypeScript which means it is not possible to call a
       * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
       * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
       * This method should be overridden instead. For example:
       *
       *   class MyElement extends LitElement {
       *     async _getUpdateComplete() {
       *       await super._getUpdateComplete();
       *       await this._myChild.updateComplete;
       *     }
       *   }
       */
      value: function _getUpdateComplete() {
        return this._updatePromise;
      }
      /**
       * Controls whether or not `update` should be called when the element requests
       * an update. By default, this method always returns `true`, but this can be
       * customized to control when to update.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "shouldUpdate",
      value: function shouldUpdate(_changedProperties) {
        return true;
      }
      /**
       * Updates the element. This method reflects property values to attributes.
       * It can be overridden to render and keep updated element DOM.
       * Setting properties inside this method will *not* trigger
       * another update.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "update",
      value: function update(_changedProperties) {
        var _this5 = this;

        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
          // Use forEach so this works even if for/of loops are compiled to for
          // loops expecting arrays
          this._reflectingProperties.forEach(function (v, k) {
            return _this5._propertyToAttribute(k, _this5[k], v);
          });

          this._reflectingProperties = undefined;
        }
      }
      /**
       * Invoked whenever the element is updated. Implement to perform
       * post-updating tasks via DOM APIs, for example, focusing an element.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "updated",
      value: function updated(_changedProperties) {}
      /**
       * Invoked when the element is first updated. Implement to perform one time
       * work on the element after update.
       *
       * Setting properties inside this method will trigger the element to update
       * again after this update cycle completes.
       *
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "firstUpdated",
      value: function firstUpdated(_changedProperties) {}
    }, {
      key: "_hasConnected",
      get: function get() {
        return this._updateState & STATE_HAS_CONNECTED;
      }
    }, {
      key: "_hasRequestedUpdate",
      get: function get() {
        return this._updateState & STATE_UPDATE_REQUESTED;
      }
    }, {
      key: "hasUpdated",
      get: function get() {
        return this._updateState & STATE_HAS_UPDATED;
      }
    }, {
      key: "updateComplete",
      get: function get() {
        return this._getUpdateComplete();
      }
    }], [{
      key: "_ensureClassProperties",

      /**
       * Ensures the private `_classProperties` property metadata is created.
       * In addition to `finalize` this is also called in `createProperty` to
       * ensure the `@property` decorator can add property metadata.
       */

      /** @nocollapse */
      value: function _ensureClassProperties() {
        var _this6 = this;

        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
          this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

          var superProperties = Object.getPrototypeOf(this)._classProperties;

          if (superProperties !== undefined) {
            superProperties.forEach(function (v, k) {
              return _this6._classProperties.set(k, v);
            });
          }
        }
      }
      /**
       * Creates a property accessor on the element prototype if one does not exist.
       * The property setter calls the property's `hasChanged` property option
       * or uses a strict identity check to determine whether or not to request
       * an update.
       * @nocollapse
       */

    }, {
      key: "createProperty",
      value: function createProperty(name) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();

        this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it


        if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
          return;
        }

        var key = babelHelpers.typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
        Object.defineProperty(this.prototype, name, {
          // tslint:disable-next-line:no-any no symbol in index
          get: function get() {
            return this[key];
          },
          set: function set(value) {
            var oldValue = this[name];
            this[key] = value;

            this._requestUpdate(name, oldValue);
          },
          configurable: true,
          enumerable: true
        });
      }
      /**
       * Creates property accessors for registered properties and ensures
       * any superclasses are also finalized.
       * @nocollapse
       */

    }, {
      key: "finalize",
      value: function finalize() {
        // finalize any superclasses
        var superCtor = Object.getPrototypeOf(this);

        if (!superCtor.hasOwnProperty(finalized)) {
          superCtor.finalize();
        }

        this[finalized] = true;

        this._ensureClassProperties(); // initialize Map populated in observedAttributes


        this._attributeToPropertyMap = new Map(); // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.

        if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
          var props = this.properties; // support symbols in properties (IE11 does not support this)

          var propKeys = [].concat(babelHelpers.toConsumableArray(Object.getOwnPropertyNames(props)), babelHelpers.toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var p = _step.value;
              // note, use of `any` is due to TypeSript lack of support for symbol in
              // index types
              // tslint:disable-next-line:no-any no symbol in index
              this.createProperty(p, props[p]);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }
      /**
       * Returns the property name for the given attribute `name`.
       * @nocollapse
       */

    }, {
      key: "_attributeNameForProperty",
      value: function _attributeNameForProperty(name, options) {
        var attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
      }
      /**
       * Returns true if a property should request an update.
       * Called when a property value is set and uses the `hasChanged`
       * option for the property if present or a strict identity check.
       * @nocollapse
       */

    }, {
      key: "_valueHasChanged",
      value: function _valueHasChanged(value, old) {
        var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
        return hasChanged(value, old);
      }
      /**
       * Returns the property value for the given attribute value.
       * Called via the `attributeChangedCallback` and uses the property's
       * `converter` or `converter.fromAttribute` property option.
       * @nocollapse
       */

    }, {
      key: "_propertyValueFromAttribute",
      value: function _propertyValueFromAttribute(value, options) {
        var type = options.type;
        var converter = options.converter || defaultConverter;
        var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
      }
      /**
       * Returns the attribute value for the given property value. If this
       * returns undefined, the property will *not* be reflected to an attribute.
       * If this returns null, the attribute will be removed, otherwise the
       * attribute will be set to the value.
       * This uses the property's `reflect` and `type.toAttribute` property options.
       * @nocollapse
       */

    }, {
      key: "_propertyValueToAttribute",
      value: function _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) {
          return;
        }

        var type = options.type;
        var converter = options.converter;
        var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
      }
    }, {
      key: "observedAttributes",
      get: function get() {
        var _this7 = this;

        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays

        this._classProperties.forEach(function (v, p) {
          var attr = _this7._attributeNameForProperty(p, v);

          if (attr !== undefined) {
            _this7._attributeToPropertyMap.set(attr, p);

            attributes.push(attr);
          }
        });

        return attributes;
      }
    }]);
    return UpdatingElement;
  }(babelHelpers.wrapNativeSuper(HTMLElement));

  _exports.UpdatingElement$1 = _exports.UpdatingElement = UpdatingElement;
  _a = finalized;
  /**
   * Marks class as having finished creating properties.
   */

  UpdatingElement[_a] = true;
  var updatingElement = {
    defaultConverter: defaultConverter,
    notEqual: notEqual,
    UpdatingElement: UpdatingElement
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  _exports.$updatingElement = updatingElement;
  var directives = new WeakMap();
  /**
   * Brands a function as a directive factory function so that lit-html will call
   * the function during template rendering, rather than passing as a value.
   *
   * A _directive_ is a function that takes a Part as an argument. It has the
   * signature: `(part: Part) => void`.
   *
   * A directive _factory_ is a function that takes arguments for data and
   * configuration and returns a directive. Users of directive usually refer to
   * the directive factory as the directive. For example, "The repeat directive".
   *
   * Usually a template author will invoke a directive factory in their template
   * with relevant arguments, which will then return a directive function.
   *
   * Here's an example of using the `repeat()` directive factory that takes an
   * array and a function to render an item:
   *
   * ```js
   * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
   * ```
   *
   * When `repeat` is invoked, it returns a directive function that closes over
   * `items` and the template function. When the outer template is rendered, the
   * return directive function is called with the Part for the expression.
   * `repeat` then performs it's custom logic to render multiple items.
   *
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object.
   *
   * @example
   *
   * import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   *   if (part.value !== v) {
   *     part.setValue(v)
   *   }
   * });
   */

  var directive = function directive(f) {
    return function () {
      var d = f.apply(void 0, arguments);
      directives.set(d, true);
      return d;
    };
  };

  _exports.directive$1 = _exports.directive = directive;

  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };

  _exports.isDirective$1 = _exports.isDirective = isDirective;
  var directive$1 = {
    directive: directive,
    isDirective: isDirective
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * True if the custom elements polyfill is in use.
   */

  _exports.$directive = directive$1;
  var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
          * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
          * into another container (could be the same container), before `before`. If
          * `before` is null, it appends the nodes to the container.
          */

  _exports.isCEPolyfill = isCEPolyfill;

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.insertBefore(start, before);
      start = n;
    }
  };
  /**
   * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
   * `container`.
   */


  _exports.reparentNodes$1 = _exports.reparentNodes = reparentNodes;

  var removeNodes = function removeNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    while (start !== end) {
      var n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  _exports.removeNodes$1 = _exports.removeNodes = removeNodes;
  var dom = {
    isCEPolyfill: isCEPolyfill,
    reparentNodes: reparentNodes,
    removeNodes: removeNodes
  };
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */

  _exports.$dom = dom;
  var noChange = {};
  /**
          * A sentinel value that signals a NodePart to fully clear its content.
          */

  _exports.noChange$1 = _exports.noChange = noChange;
  var nothing = {};
  _exports.nothing$1 = _exports.nothing = nothing;
  var part = {
    noChange: noChange,
    nothing: nothing
  };
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */

  _exports.$part = part;
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
          * An expression marker used text-positions, multi-binding attributes, and
          * attributes with markup-like text values.
          */

  _exports.marker = marker;
  var nodeMarker = "<!--".concat(marker, "-->");
  _exports.nodeMarker = nodeMarker;
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
          * Suffix appended to all bound attribute names.
          */

  _exports.markerRegex = markerRegex;
  var boundAttributeSuffix = '$lit$';
  /**
          * An updateable Template that tracks the location of dynamic parts.
          */

  _exports.boundAttributeSuffix = boundAttributeSuffix;

  var Template = function Template(result, element) {
    babelHelpers.classCallCheck(this, Template);
    this.parts = [];
    this.element = element;
    var nodesToRemove = [];
    var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    var walker = document.createTreeWalker(element.content, 133
    /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
    , null, false); // Keeps track of the last index associated with a part. We try to delete
    // unnecessary nodes, but we never want to associate two different parts
    // to the same index. They must have a constant node between.

    var lastPartIndex = 0;
    var index = -1;
    var partIndex = 0;
    var strings = result.strings,
        length = result.values.length;

    while (partIndex < length) {
      var node = walker.nextNode();

      if (node === null) {
        // We've exhausted the content inside a nested template element.
        // Because we still have parts (the outer for-loop), we know:
        // - There is a template in the stack
        // - The walker will find a nextNode outside the template
        walker.currentNode = stack.pop();
        continue;
      }

      index++;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes;
            var _length = attributes.length; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondence between part index and attribute index.

            var count = 0;

            for (var i = 0; i < _length; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }

            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = strings[partIndex]; // Find the attribute name

              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.

              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              var statics = attributeValue.split(markerRegex);
              this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: statics
              });
              partIndex += statics.length - 1;
            }
          }

          if (node.tagName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var data = node.data;

          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;

            var _strings = data.split(markerRegex);

            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts

            for (var _i = 0; _i < lastIndex; _i++) {
              var insert = void 0;
              var s = _strings[_i];

              if (s === '') {
                insert = createMarker();
              } else {
                var match = lastAttributeNameRegex.exec(s);

                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }

                insert = document.createTextNode(s);
              }

              parent.insertBefore(insert, node);
              this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.


            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found


            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part

            if (node.previousSibling === null || index === lastPartIndex) {
              index++;

              _parent.insertBefore(createMarker(), node);
            }

            lastPartIndex = index;
            this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.

            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }

            partIndex++;
          } else {
            var _i2 = -1;

            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              this.parts.push({
                type: 'node',
                index: -1
              });
              partIndex++;
            }
          }
        }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
      var n = _nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  };

  _exports.Template$1 = _exports.Template = Template;

  var endsWith = function endsWith(str, suffix) {
    var index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };

  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  }; // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.


  _exports.isTemplatePartActive$1 = _exports.isTemplatePartActive = isTemplatePartActive;

  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
          * This regex extracts the attribute name preceding an attribute-position
          * expression. It does this by matching the syntax allowed for attributes
          * against the string literal directly preceding the expression, assuming that
          * the expression is in an attribute-value position.
          *
          * See attributes in the HTML spec:
          * https://www.w3.org/TR/html5/syntax.html#elements-attributes
          *
          * " \x09\x0a\x0c\x0d" are HTML space characters:
          * https://www.w3.org/TR/html5/infrastructure.html#space-characters
          *
          * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
          * space character except " ".
          *
          * So an attribute is:
          *  * The name: any character except a control character, space character, ('),
          *    ("), ">", "=", or "/"
          *  * Followed by zero or more space characters
          *  * Followed by "="
          *  * Followed by zero or more space characters
          *  * Followed by:
          *    * Any character except space, ('), ("), "<", ">", "=", (`), or
          *    * (") then any non-("), or
          *    * (') then any non-(')
          */


  _exports.createMarker$1 = _exports.createMarker = createMarker;
  var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  _exports.lastAttributeNameRegex = lastAttributeNameRegex;
  var template = {
    marker: marker,
    nodeMarker: nodeMarker,
    markerRegex: markerRegex,
    boundAttributeSuffix: boundAttributeSuffix,
    Template: Template,
    isTemplatePartActive: isTemplatePartActive,
    createMarker: createMarker,
    lastAttributeNameRegex: lastAttributeNameRegex
  };
  _exports.$template = template;

  var TemplateInstance =
  /*#__PURE__*/
  function () {
    function TemplateInstance(template, processor, options) {
      babelHelpers.classCallCheck(this, TemplateInstance);
      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }

    babelHelpers.createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var i = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _part = _step2.value;

            if (_part !== undefined) {
              _part.setValue(values[i]);
            }

            i++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.__parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _part2 = _step3.value;

            if (_part2 !== undefined) {
              _part2.commit();
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        var stack = [];
        var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

        var walker = document.createTreeWalker(fragment, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false);
        var partIndex = 0;
        var nodeIndex = 0;
        var part;
        var node = walker.nextNode(); // Loop through all the nodes and parts of a template

        while (partIndex < parts.length) {
          part = parts[partIndex];

          if (!isTemplatePartActive(part)) {
            this.__parts.push(undefined);

            partIndex++;
            continue;
          } // Progress the tree walker until we find our next part's node.
          // Note that multiple parts may share the same node (attribute parts
          // on a single element), so this loop may not run at all.


          while (nodeIndex < part.index) {
            nodeIndex++;

            if (node.nodeName === 'TEMPLATE') {
              stack.push(node);
              walker.currentNode = node.content;
            }

            if ((node = walker.nextNode()) === null) {
              // We've exhausted the content inside a nested template element.
              // Because we still have parts (the outer for-loop), we know:
              // - There is a template in the stack
              // - The walker will find a nextNode outside the template
              walker.currentNode = stack.pop();
              node = walker.nextNode();
            }
          } // We've arrived at our part's node.


          if (part.type === 'node') {
            var _part3 = this.processor.handleTextExpression(this.options);

            _part3.insertAfterNode(node.previousSibling);

            this.__parts.push(_part3);
          } else {
            var _this$__parts;

            (_this$__parts = this.__parts).push.apply(_this$__parts, babelHelpers.toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
          }

          partIndex++;
        }

        if (isCEPolyfill) {
          document.adoptNode(fragment);
          customElements.upgrade(fragment);
        }

        return fragment;
      }
    }]);
    return TemplateInstance;
  }();

  _exports.TemplateInstance$1 = _exports.TemplateInstance = TemplateInstance;
  var templateInstance = {
    TemplateInstance: TemplateInstance
  };
  _exports.$templateInstance = templateInstance;
  var commentMarker = " ".concat(marker, " ");
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */

  var TemplateResult =
  /*#__PURE__*/
  function () {
    function TemplateResult(strings, values, type, processor) {
      babelHelpers.classCallCheck(this, TemplateResult);
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */


    babelHelpers.createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isCommentBinding = false;

        for (var i = 0; i < l; i++) {
          var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
          // into the template source before it's parsed by the browser's HTML
          // parser. The marker type is based on whether the expression is in an
          // attribute, text, or comment poisition.
          //   * For node-position bindings we insert a comment with the marker
          //     sentinel as its text content, like <!--{{lit-guid}}-->.
          //   * For attribute bindings we insert just the marker sentinel for the
          //     first binding, so that we support unquoted attribute bindings.
          //     Subsequent bindings can use a comment marker because multi-binding
          //     attributes must be quoted.
          //   * For comment bindings we insert just the marker sentinel so we don't
          //     close the comment.
          //
          // The following code scans the template source, but is *not* an HTML
          // parser. We don't need to track the tree structure of the HTML, only
          // whether a binding is inside a comment, and if not, if it appears to be
          // the first binding in an attribute.

          var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
          // comment close. Because <-- can appear in an attribute value there can
          // be false positives.

          isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceeding the
          // expression. This can match "name=value" like structures in text,
          // comments, and attribute values, so there can be false-positives.

          var attributeMatch = lastAttributeNameRegex.exec(s);

          if (attributeMatch === null) {
            // We're only in this branch if we don't have a attribute-like
            // preceeding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : nodeMarker);
          } else {
            // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
          }
        }

        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
      }
    }]);
    return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the `<svg>` tag so that
   * clones only container the original fragment.
   */


  _exports.TemplateResult$3 = _exports.TemplateResult$2 = _exports.TemplateResult$1 = _exports.TemplateResult = TemplateResult;

  var SVGTemplateResult =
  /*#__PURE__*/
  function (_TemplateResult) {
    babelHelpers.inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
      babelHelpers.classCallCheck(this, SVGTemplateResult);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(SVGTemplateResult).apply(this, arguments));
    }

    babelHelpers.createClass(SVGTemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        return "<svg>".concat(babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = babelHelpers.get(babelHelpers.getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);
        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
      }
    }]);
    return SVGTemplateResult;
  }(TemplateResult);

  _exports.SVGTemplateResult$2 = _exports.SVGTemplateResult$1 = _exports.SVGTemplateResult = SVGTemplateResult;
  var templateResult = {
    TemplateResult: TemplateResult,
    SVGTemplateResult: SVGTemplateResult
  };
  _exports.$templateResult = templateResult;

  var isPrimitive = function isPrimitive(value) {
    return value === null || !(babelHelpers.typeof(value) === 'object' || typeof value === 'function');
  };

  _exports.isPrimitive$1 = _exports.isPrimitive = isPrimitive;

  var isIterable = function isIterable(value) {
    return Array.isArray(value) || // tslint:disable-next-line:no-any
    !!(value && value[Symbol.iterator]);
  };
  /**
   * Writes attribute values to the DOM for a group of AttributeParts bound to a
   * single attibute. The value is only set once even if there are multiple parts
   * for an attribute.
   */


  _exports.isIterable$1 = _exports.isIterable = isIterable;

  var AttributeCommitter =
  /*#__PURE__*/
  function () {
    function AttributeCommitter(element, name, strings) {
      babelHelpers.classCallCheck(this, AttributeCommitter);
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];

      for (var i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */


    babelHelpers.createClass(AttributeCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new AttributePart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var _part4 = this.parts[i];

          if (_part4 !== undefined) {
            var v = _part4.value;

            if (isPrimitive(v) || !isIterable(v)) {
              text += typeof v === 'string' ? v : String(v);
            } else {
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = v[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var t = _step4.value;
                  text += typeof t === 'string' ? t : String(t);
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }
          }
        }

        text += strings[l];
        return text;
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false;
          this.element.setAttribute(this.name, this._getValue());
        }
      }
    }]);
    return AttributeCommitter;
  }();
  /**
   * A Part that controls all or part of an attribute value.
   */


  _exports.AttributeCommitter$1 = _exports.AttributeCommitter = AttributeCommitter;

  var AttributePart =
  /*#__PURE__*/
  function () {
    function AttributePart(committer) {
      babelHelpers.classCallCheck(this, AttributePart);
      this.value = undefined;
      this.committer = committer;
    }

    babelHelpers.createClass(AttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
          this.value = value; // If the value is a not a directive, dirty the committer so that it'll
          // call setAttribute. If the value is a directive, it'll dirty the
          // committer if it calls setValue().

          if (!isDirective(value)) {
            this.committer.dirty = true;
          }
        }
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.value)) {
          var _directive = this.value;
          this.value = noChange;

          _directive(this);
        }

        if (this.value === noChange) {
          return;
        }

        this.committer.commit();
      }
    }]);
    return AttributePart;
  }();
  /**
   * A Part that controls a location within a Node tree. Like a Range, NodePart
   * has start and end locations and can set and update the Nodes between those
   * locations.
   *
   * NodeParts support several value types: primitives, Nodes, TemplateResults,
   * as well as arrays and iterables of those types.
   */


  _exports.AttributePart$1 = _exports.AttributePart = AttributePart;

  var NodePart =
  /*#__PURE__*/
  function () {
    function NodePart(options) {
      babelHelpers.classCallCheck(this, NodePart);
      this.value = undefined;
      this.__pendingValue = undefined;
      this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */


    babelHelpers.createClass(NodePart, [{
      key: "appendInto",
      value: function appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
      }
      /**
       * Inserts this part after the `ref` node (between `ref` and `ref`'s next
       * sibling). Both `ref` and its next sibling must be static, unchanging nodes
       * such as those that appear in a literal section of a template.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterNode",
      value: function insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
      }
      /**
       * Appends this part into a parent part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "appendIntoPart",
      value: function appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());

        part.__insert(this.endNode = createMarker());
      }
      /**
       * Inserts this part after the `ref` part.
       *
       * This part must be empty, as its contents are not automatically moved.
       */

    }, {
      key: "insertAfterPart",
      value: function insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());

        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
      }
    }, {
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var _directive2 = this.__pendingValue;
          this.__pendingValue = noChange;

          _directive2(this);
        }

        var value = this.__pendingValue;

        if (value === noChange) {
          return;
        }

        if (isPrimitive(value)) {
          if (value !== this.value) {
            this.__commitText(value);
          }
        } else if (babelHelpers.instanceof(value, TemplateResult)) {
          this.__commitTemplateResult(value);
        } else if (babelHelpers.instanceof(value, Node)) {
          this.__commitNode(value);
        } else if (isIterable(value)) {
          this.__commitIterable(value);
        } else if (value === nothing) {
          this.value = nothing;
          this.clear();
        } else {
          // Fallback, will render the string representation
          this.__commitText(value);
        }
      }
    }, {
      key: "__insert",
      value: function __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "__commitNode",
      value: function __commitNode(value) {
        if (this.value === value) {
          return;
        }

        this.clear();

        this.__insert(value);

        this.value = value;
      }
    }, {
      key: "__commitText",
      value: function __commitText(value) {
        var node = this.startNode.nextSibling;
        value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.

        var valueAsString = typeof value === 'string' ? value : String(value);

        if (node === this.endNode.previousSibling && node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
          } else {
          this.__commitNode(document.createTextNode(valueAsString));
        }

        this.value = value;
      }
    }, {
      key: "__commitTemplateResult",
      value: function __commitTemplateResult(value) {
        var template = this.options.templateFactory(value);

        if (babelHelpers.instanceof(this.value, TemplateInstance) && this.value.template === template) {
          this.value.update(value.values);
        } else {
          // Make sure we propagate the template processor from the TemplateResult
          // so that we use its syntax extension, etc. The template factory comes
          // from the render function options so that it can control template
          // caching and preprocessing.
          var instance = new TemplateInstance(template, value.processor, this.options);

          var fragment = instance._clone();

          instance.update(value.values);

          this.__commitNode(fragment);

          this.value = instance;
        }
      }
    }, {
      key: "__commitIterable",
      value: function __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
          this.value = [];
          this.clear();
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this.value;
        var partIndex = 0;
        var itemPart;
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = value[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var item = _step5.value;
            // Try to reuse an existing part
            itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              itemPart = new NodePart(this.options);
              itemParts.push(itemPart);

              if (partIndex === 0) {
                itemPart.appendIntoPart(this);
              } else {
                itemPart.insertAfterPart(itemParts[partIndex - 1]);
              }
            }

            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        if (partIndex < itemParts.length) {
          // Truncate the parts array so _value reflects the current state
          itemParts.length = partIndex;
          this.clear(itemPart && itemPart.endNode);
        }
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);
    return NodePart;
  }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */


  _exports.NodePart$1 = _exports.NodePart = NodePart;

  var BooleanAttributePart =
  /*#__PURE__*/
  function () {
    function BooleanAttributePart(element, name, strings) {
      babelHelpers.classCallCheck(this, BooleanAttributePart);
      this.value = undefined;
      this.__pendingValue = undefined;

      if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
        throw new Error('Boolean attributes can only contain a single expression');
      }

      this.element = element;
      this.name = name;
      this.strings = strings;
    }

    babelHelpers.createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var _directive3 = this.__pendingValue;
          this.__pendingValue = noChange;

          _directive3(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var value = !!this.__pendingValue;

        if (this.value !== value) {
          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }

          this.value = value;
        }

        this.__pendingValue = noChange;
      }
    }]);
    return BooleanAttributePart;
  }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */


  _exports.BooleanAttributePart$1 = _exports.BooleanAttributePart = BooleanAttributePart;

  var PropertyCommitter =
  /*#__PURE__*/
  function (_AttributeCommitter) {
    babelHelpers.inherits(PropertyCommitter, _AttributeCommitter);

    function PropertyCommitter(element, name, strings) {
      var _this8;

      babelHelpers.classCallCheck(this, PropertyCommitter);
      _this8 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
      _this8.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
      return _this8;
    }

    babelHelpers.createClass(PropertyCommitter, [{
      key: "_createPart",
      value: function _createPart() {
        return new PropertyPart(this);
      }
    }, {
      key: "_getValue",
      value: function _getValue() {
        if (this.single) {
          return this.parts[0].value;
        }

        return babelHelpers.get(babelHelpers.getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
      }
    }, {
      key: "commit",
      value: function commit() {
        if (this.dirty) {
          this.dirty = false; // tslint:disable-next-line:no-any

          this.element[this.name] = this._getValue();
        }
      }
    }]);
    return PropertyCommitter;
  }(AttributeCommitter);

  _exports.PropertyCommitter$1 = _exports.PropertyCommitter = PropertyCommitter;

  var PropertyPart =
  /*#__PURE__*/
  function (_AttributePart) {
    babelHelpers.inherits(PropertyPart, _AttributePart);

    function PropertyPart() {
      babelHelpers.classCallCheck(this, PropertyPart);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(PropertyPart).apply(this, arguments));
    }

    return PropertyPart;
  }(AttributePart); // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the thrid
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.


  _exports.PropertyPart$1 = _exports.PropertyPart = PropertyPart;
  var eventOptionsSupported = false;

  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // tslint:disable-next-line:no-any

    window.addEventListener('test', options, options); // tslint:disable-next-line:no-any

    window.removeEventListener('test', options, options);
  } catch (_e) {}

  var EventPart =
  /*#__PURE__*/
  function () {
    function EventPart(element, eventName, eventContext) {
      var _this9 = this;

      babelHelpers.classCallCheck(this, EventPart);
      this.value = undefined;
      this.__pendingValue = undefined;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;

      this.__boundHandleEvent = function (e) {
        return _this9.handleEvent(e);
      };
    }

    babelHelpers.createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        this.__pendingValue = value;
      }
    }, {
      key: "commit",
      value: function commit() {
        while (isDirective(this.__pendingValue)) {
          var _directive4 = this.__pendingValue;
          this.__pendingValue = noChange;

          _directive4(this);
        }

        if (this.__pendingValue === noChange) {
          return;
        }

        var newListener = this.__pendingValue;
        var oldListener = this.value;
        var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

        if (shouldRemoveListener) {
          this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        if (shouldAddListener) {
          this.__options = getOptions(newListener);
          this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }

        this.value = newListener;
        this.__pendingValue = noChange;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this.value === 'function') {
          this.value.call(this.eventContext || this.element, event);
        } else {
          this.value.handleEvent(event);
        }
      }
    }]);
    return EventPart;
  }(); // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.


  _exports.EventPart$1 = _exports.EventPart = EventPart;

  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };

  var parts = {
    isPrimitive: isPrimitive,
    isIterable: isIterable,
    AttributeCommitter: AttributeCommitter,
    AttributePart: AttributePart,
    NodePart: NodePart,
    BooleanAttributePart: BooleanAttributePart,
    PropertyCommitter: PropertyCommitter,
    PropertyPart: PropertyPart,
    EventPart: EventPart
  };
  _exports.$parts = parts;

  var DefaultTemplateProcessor =
  /*#__PURE__*/
  function () {
    function DefaultTemplateProcessor() {
      babelHelpers.classCallCheck(this, DefaultTemplateProcessor);
    }

    babelHelpers.createClass(DefaultTemplateProcessor, [{
      key: "handleAttributeExpressions",

      /**
       * Create parts for an attribute-position binding, given the event, attribute
       * name, and string literals.
       *
       * @param element The element containing the binding
       * @param name  The attribute name
       * @param strings The string literals. There are always at least two strings,
       *   event for fully-controlled bindings with a single expression.
       */
      value: function handleAttributeExpressions(element, name, strings, options) {
        var prefix = name[0];

        if (prefix === '.') {
          var _committer = new PropertyCommitter(element, name.slice(1), strings);

          return _committer.parts;
        }

        if (prefix === '@') {
          return [new EventPart(element, name.slice(1), options.eventContext)];
        }

        if (prefix === '?') {
          return [new BooleanAttributePart(element, name.slice(1), strings)];
        }

        var committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
      }
      /**
       * Create parts for a text-position binding.
       * @param templateFactory
       */

    }, {
      key: "handleTextExpression",
      value: function handleTextExpression(options) {
        return new NodePart(options);
      }
    }]);
    return DefaultTemplateProcessor;
  }();

  _exports.DefaultTemplateProcessor$1 = _exports.DefaultTemplateProcessor = DefaultTemplateProcessor;
  var defaultTemplateProcessor = new DefaultTemplateProcessor();
  _exports.defaultTemplateProcessor$1 = _exports.defaultTemplateProcessor = defaultTemplateProcessor;
  var defaultTemplateProcessor$1 = {
    DefaultTemplateProcessor: DefaultTemplateProcessor,
    defaultTemplateProcessor: defaultTemplateProcessor
  };
  _exports.$defaultTemplateProcessor = defaultTemplateProcessor$1;

  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    } // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content


    var key = result.strings.join(marker); // Check if we already have a Template for this key

    template = templateCache.keyString.get(key);

    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

      templateCache.keyString.set(key, template);
    } // Cache all future queries for this TemplateStringsArray


    templateCache.stringsArray.set(result.strings, template);
    return template;
  }

  var templateCaches = new Map();
  _exports.templateCaches$1 = _exports.templateCaches = templateCaches;
  var templateFactory$1 = {
    templateFactory: templateFactory,
    templateCaches: templateCaches
  };
  _exports.$templateFactory = templateFactory$1;
  var parts$1 = new WeakMap();
  /**
        * Renders a template result or other value to a container.
        *
        * To update a container with new values, reevaluate the template literal and
        * call `render` with the new result.
        *
        * @param result Any value renderable by NodePart - typically a TemplateResult
        *     created by evaluating a template tag like `html` or `svg`.
        * @param container A DOM parent to render to. The entire contents are either
        *     replaced, or efficiently updated if the same result type was previous
        *     rendered there.
        * @param options RenderOptions for the entire render tree rendered to this
        *     container. Render options must *not* change between renders to the same
        *     container, as those changes will not effect previously rendered DOM.
        */

  _exports.parts$1 = _exports.parts = parts$1;

  var render = function render(result, container, options) {
    var part = parts$1.get(container);

    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts$1.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }

    part.setValue(result);
    part.commit();
  };

  _exports.render$2 = _exports.render = render;
  var render$1 = {
    parts: parts$1,
    render: render
  }; // This line will be used in regexes to search for lit-html usage.
  // TODO(justinfagnani): inject version number at build time

  _exports.$render = render$1;
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */

  var html = function html(strings) {
    for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      values[_key2 - 1] = arguments[_key2];
    }

    return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
  };
  /**
          * Interprets a template literal as an SVG template that can efficiently
          * render to and update a container.
          */


  _exports.html$2 = _exports.html$1 = _exports.html = html;

  var svg = function svg(strings) {
    for (var _len3 = arguments.length, values = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      values[_key3 - 1] = arguments[_key3];
    }

    return new SVGTemplateResult(strings, values, 'svg', defaultTemplateProcessor);
  };

  _exports.svg$2 = _exports.svg$1 = _exports.svg = svg;
  var litHtml = {
    html: html,
    svg: svg,
    DefaultTemplateProcessor: DefaultTemplateProcessor,
    defaultTemplateProcessor: defaultTemplateProcessor,
    directive: directive,
    isDirective: isDirective,
    removeNodes: removeNodes,
    reparentNodes: reparentNodes,
    noChange: noChange,
    nothing: nothing,
    AttributeCommitter: AttributeCommitter,
    AttributePart: AttributePart,
    BooleanAttributePart: BooleanAttributePart,
    EventPart: EventPart,
    isIterable: isIterable,
    isPrimitive: isPrimitive,
    NodePart: NodePart,
    PropertyCommitter: PropertyCommitter,
    PropertyPart: PropertyPart,
    parts: parts$1,
    render: render,
    templateCaches: templateCaches,
    templateFactory: templateFactory,
    TemplateInstance: TemplateInstance,
    SVGTemplateResult: SVGTemplateResult,
    TemplateResult: TemplateResult,
    createMarker: createMarker,
    isTemplatePartActive: isTemplatePartActive,
    Template: Template
  };
  _exports.$litHtml = litHtml;
  var walkerNodeFilter = 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  ;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1,
   * removed 4 nodes)
   */

  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var part = parts[partIndex];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;

    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode; // End removal if stepped past the removing node

      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      } // A node to remove was found in the template


      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node); // Track node we're removing

        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      } // When removing, increment count by which to adjust subsequent part indices


      if (currentRemovingNode !== null) {
        removeCount++;
      }

      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        part = parts[partIndex];
      }
    }

    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }

  var countNodes = function countNodes(node) {
    var count = node.nodeType === 11
    /* Node.DOCUMENT_FRAGMENT_NODE */
    ? 0 : 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

    while (walker.nextNode()) {
      count++;
    }

    return count;
  };

  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var i = startIndex + 1; i < parts.length; i++) {
      var _part5 = parts[i];

      if (isTemplatePartActive(_part5)) {
        return i;
      }
    }

    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */


  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts; // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.

    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }

    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;

    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;

      if (walkerNode === refNode) {
        insertCount = countNodes(node);
        refNode.parentNode.insertBefore(node, refNode);
      }

      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }

          return;
        }

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }

  var modifyTemplate = {
    removeNodesFromTemplate: removeNodesFromTemplate,
    insertNodeIntoTemplate: insertNodeIntoTemplate
  };
  _exports.$modifyTemplate = modifyTemplate;

  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };

  var compatibleShadyCSSVersion = true;

  if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
  } else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
    compatibleShadyCSSVersion = false;
  }
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */


  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);
      var templateCache = templateCaches.get(cacheKey);

      if (templateCache === undefined) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
      }

      var template = templateCache.stringsArray.get(result.strings);

      if (template !== undefined) {
        return template;
      }

      var key = result.strings.join(marker);
      template = templateCache.keyString.get(key);

      if (template === undefined) {
        var element = result.getTemplateElement();

        if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }

        template = new Template(result, element);
        templateCache.keyString.set(key, template);
      }

      templateCache.stringsArray.set(result.strings, template);
      return template;
    };
  };

  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */

  var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

      if (templates !== undefined) {
        templates.keyString.forEach(function (template) {
          var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

          var styles = new Set();
          Array.from(content.querySelectorAll('style')).forEach(function (s) {
            styles.add(s);
          });
          removeNodesFromTemplate(template, styles);
        });
      }
    });
  };

  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered
   * output.
   */

  var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
    shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.

    var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

    var styles = renderedDOM.querySelectorAll('style');
    var length = styles.length; // If there are no styles, skip unnecessary work

    if (length === 0) {
      // Ensure prepareTemplateStyles is called to support adding
      // styles via `prepareAdoptedCssText` since that requires that
      // `prepareTemplateStyles` is called.
      //
      // ShadyCSS will only update styles containing @apply in the template
      // given to `prepareTemplateStyles`. If no lit Template was given,
      // ShadyCSS will not be able to update uses of @apply in any relevant
      // template. However, this is not a problem because we only create the
      // template for the purpose of supporting `prepareAdoptedCssText`,
      // which doesn't support @apply at all.
      window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
      return;
    }

    var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.

    for (var i = 0; i < length; i++) {
      var _style = styles[i];

      _style.parentNode.removeChild(_style);

      condensedStyle.textContent += _style.textContent;
    } // Remove styles from nested templates in this scope.


    removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
    // `template`.

    var content = templateElement.content;

    if (!!template) {
      insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
    } else {
      content.insertBefore(condensedStyle, content.firstChild);
    } // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).


    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    var style = content.querySelector('style');

    if (window.ShadyCSS.nativeShadow && style !== null) {
      // When in native Shadow DOM, ensure the style created by ShadyCSS is
      // included in initially rendered output (`renderedDOM`).
      renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
    } else if (!!template) {
      // When no style is left in the template, parts will be broken as a
      // result. To fix this, we put back the style node ShadyCSS removed
      // and then tell lit to remove that node from the template.
      // There can be no style in the template in 2 cases (1) when Shady DOM
      // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
      // is in use ShadyCSS removes the style if it contains no content.
      // NOTE, ShadyCSS creates its own style so we can safely add/remove
      // `condensedStyle` here.
      content.insertBefore(condensedStyle, content.firstChild);
      var removes = new Set();
      removes.add(condensedStyle);
      removeNodesFromTemplate(template, removes);
    }
  };
  /**
   * Extension to the standard `render` method which supports rendering
   * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
   * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
   * or when the webcomponentsjs
   * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
   *
   * Adds a `scopeName` option which is used to scope element DOM and stylesheets
   * when native ShadowDOM is unavailable. The `scopeName` will be added to
   * the class attribute of all rendered DOM. In addition, any style elements will
   * be automatically re-written with this `scopeName` selector and moved out
   * of the rendered DOM and into the document `<head>`.
   *
   * It is common to use this render method in conjunction with a custom element
   * which renders a shadowRoot. When this is done, typically the element's
   * `localName` should be used as the `scopeName`.
   *
   * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
   * custom properties (needed only on older browsers like IE11) and a shim for
   * a deprecated feature called `@apply` that supports applying a set of css
   * custom properties to a given location.
   *
   * Usage considerations:
   *
   * * Part values in `<style>` elements are only applied the first time a given
   * `scopeName` renders. Subsequent changes to parts in style elements will have
   * no effect. Because of this, parts in style elements should only be used for
   * values that will never change, for example parts that set scope-wide theme
   * values or parts which render shared style elements.
   *
   * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
   * custom element's `constructor` is not supported. Instead rendering should
   * either done asynchronously, for example at microtask timing (for example
   * `Promise.resolve()`), or be deferred until the first time the element's
   * `connectedCallback` runs.
   *
   * Usage considerations when using shimmed custom properties or `@apply`:
   *
   * * Whenever any dynamic changes are made which affect
   * css custom properties, `ShadyCSS.styleElement(element)` must be called
   * to update the element. There are two cases when this is needed:
   * (1) the element is connected to a new parent, (2) a class is added to the
   * element that causes it to match different custom properties.
   * To address the first case when rendering a custom element, `styleElement`
   * should be called in the element's `connectedCallback`.
   *
   * * Shimmed custom properties may only be defined either for an entire
   * shadowRoot (for example, in a `:host` rule) or via a rule that directly
   * matches an element with a shadowRoot. In other words, instead of flowing from
   * parent to child as do native css custom properties, shimmed custom properties
   * flow only from shadowRoots to nested shadowRoots.
   *
   * * When using `@apply` mixing css shorthand property names with
   * non-shorthand names (for example `border` and `border-width`) is not
   * supported.
   */


  var render$2 = function render$2(result, container, options) {
    if (!options || babelHelpers.typeof(options) !== 'object' || !options.scopeName) {
      throw new Error('The `scopeName` option is required.');
    }

    var scopeName = options.scopeName;
    var hasRendered = parts$1.has(container);
    var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
    /* Node.DOCUMENT_FRAGMENT_NODE */
    && !!container.host; // Handle first render to a scope specially...

    var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.

    var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render(result, renderContainer, Object.assign({
      templateFactory: shadyTemplateFactory(scopeName)
    }, options)); // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.

    if (firstScopeRender) {
      var _part6 = parts$1.get(renderContainer);

      parts$1.delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
      // that should apply to `renderContainer` even if the rendered value is
      // not a TemplateInstance. However, it will only insert scoped styles
      // into the document if `prepareTemplateStyles` has already been called
      // for the given scope name.

      var _template = babelHelpers.instanceof(_part6.value, TemplateInstance) ? _part6.value.template : undefined;

      prepareTemplateStyles(scopeName, renderContainer, _template);
      removeNodes(container, container.firstChild);
      container.appendChild(renderContainer);
      parts$1.set(container, _part6);
    } // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.


    if (!hasRendered && needsScoping) {
      window.ShadyCSS.styleElement(container.host);
    }
  };

  _exports.render$1 = render$2;
  var shadyRender = {
    render: render$2,
    html: html,
    svg: svg,
    TemplateResult: TemplateResult
  }; // IMPORTANT: do not change the property name or the assignment expression.
  // This line will be used in regexes to search for LitElement usage.
  // TODO(justinfagnani): inject version number at build time

  _exports.$shadyRender = shadyRender;
  (window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.2.1');
  /**
   * Minimal implementation of Array.prototype.flat
   * @param arr the array to flatten
   * @param result the accumlated result
   */

  function arrayFlat(styles) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    for (var i = 0, _length2 = styles.length; i < _length2; i++) {
      var value = styles[i];

      if (Array.isArray(value)) {
        arrayFlat(value, result);
      } else {
        result.push(value);
      }
    }

    return result;
  }
  /** Deeply flattens styles array. Uses native flat if available. */


  var flattenStyles = function flattenStyles(styles) {
    return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
  };

  var LitElement =
  /*#__PURE__*/
  function (_UpdatingElement) {
    babelHelpers.inherits(LitElement, _UpdatingElement);

    function LitElement() {
      babelHelpers.classCallCheck(this, LitElement);
      return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(LitElement).apply(this, arguments));
    }

    babelHelpers.createClass(LitElement, [{
      key: "initialize",

      /**
       * Performs element initialization. By default this calls `createRenderRoot`
       * to create the element `renderRoot` node and captures any pre-set values for
       * registered properties.
       */
      value: function initialize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "initialize", this).call(this);
        this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.

        if (window.ShadowRoot && babelHelpers.instanceof(this.renderRoot, window.ShadowRoot)) {
          this.adoptStyles();
        }
      }
      /**
       * Returns the node into which the element should render and by default
       * creates and returns an open shadowRoot. Implement to customize where the
       * element's DOM is rendered. For example, to render into the element's
       * childNodes, return `this`.
       * @returns {Element|DocumentFragment} Returns a node into which to render.
       */

    }, {
      key: "createRenderRoot",
      value: function createRenderRoot() {
        return this.attachShadow({
          mode: 'open'
        });
      }
      /**
       * Applies styling to the element shadowRoot using the `static get styles`
       * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
       * available and will fallback otherwise. When Shadow DOM is polyfilled,
       * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
       * is available but `adoptedStyleSheets` is not, styles are appended to the
       * end of the `shadowRoot` to [mimic spec
       * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
       */

    }, {
      key: "adoptStyles",
      value: function adoptStyles() {
        var styles = this.constructor._styles;

        if (styles.length === 0) {
          return;
        } // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it.
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering


        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
          window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
            return s.cssText;
          }), this.localName);
        } else if (supportsAdoptingStyleSheets) {
          this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
            return s.styleSheet;
          });
        } else {
          // This must be done after rendering so the actual style insertion is done
          // in `update`.
          this._needsShimAdoptedStyleSheets = true;
        }
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
        // connected after first update.

        if (this.hasUpdated && window.ShadyCSS !== undefined) {
          window.ShadyCSS.styleElement(this);
        }
      }
      /**
       * Updates the element. This method reflects property values to attributes
       * and calls `render` to render DOM via lit-html. Setting properties inside
       * this method will *not* trigger another update.
       * * @param _changedProperties Map of changed properties with old values
       */

    }, {
      key: "update",
      value: function update(changedProperties) {
        var _this10 = this;

        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);
        var templateResult = this.render();

        if (babelHelpers.instanceof(templateResult, TemplateResult)) {
          this.constructor.render(templateResult, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
          });
        } // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.


        if (this._needsShimAdoptedStyleSheets) {
          this._needsShimAdoptedStyleSheets = false;

          this.constructor._styles.forEach(function (s) {
            var style = document.createElement('style');
            style.textContent = s.cssText;

            _this10.renderRoot.appendChild(style);
          });
        }
      }
      /**
       * Invoked on each update to perform rendering tasks. This method must return
       * a lit-html TemplateResult. Setting properties inside this method will *not*
       * trigger the element to update.
       */

    }, {
      key: "render",
      value: function render() {}
    }], [{
      key: "finalize",

      /** @nocollapse */
      value: function finalize() {
        // The Closure JS Compiler does not always preserve the correct "this"
        // when calling static super methods (b/137460243), so explicitly bind.
        babelHelpers.get(babelHelpers.getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
        // is built from user provided `styles` or is inherited from the superclass.

        this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
      }
      /** @nocollapse */

    }, {
      key: "_getUniqueStyles",
      value: function _getUniqueStyles() {
        // Take care not to call `this.styles` multiple times since this generates
        // new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        var userStyles = this.styles;
        var styles = [];

        if (Array.isArray(userStyles)) {
          var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
          // occur especially when composing via subclassing, de-duplicate styles
          // preserving the last item in the list. The last item is kept to
          // try to preserve cascade order with the assumption that it's most
          // important that last added styles override previous styles.

          var styleSet = flatStyles.reduceRight(function (set, s) {
            set.add(s); // on IE set.add does not return the set.

            return set;
          }, new Set()); // Array.from does not work on Set in IE

          styleSet.forEach(function (v) {
            return styles.unshift(v);
          });
        } else if (userStyles) {
          styles.push(userStyles);
        }

        return styles;
      }
    }]);
    return LitElement;
  }(UpdatingElement);
  /**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   *
   * Note this property name is a string to prevent breaking Closure JS Compiler
   * optimizations. See updating-element.ts for more information.
   */


  _exports.LitElement = LitElement;
  LitElement['finalized'] = true;
  /**
   * Render method used to render the lit-html TemplateResult to the element's
   * DOM.
   * @param {TemplateResult} Template to render.
   * @param {Element|DocumentFragment} Node into which to render.
   * @param {String} Element name.
   * @nocollapse
   */

  LitElement.render = render$2;
  var litElement = {
    LitElement: LitElement,
    defaultConverter: defaultConverter,
    notEqual: notEqual,
    UpdatingElement: UpdatingElement,
    customElement: customElement,
    property: property,
    query: query,
    queryAll: queryAll,
    eventOptions: eventOptions,
    html: html,
    svg: svg,
    TemplateResult: TemplateResult,
    SVGTemplateResult: SVGTemplateResult,
    supportsAdoptingStyleSheets: supportsAdoptingStyleSheets,
    CSSResult: CSSResult,
    unsafeCSS: unsafeCSS,
    css: css
  }; // @flow

  /** @function */

  _exports.$litElement = litElement;

  var animateBodyScrollTop = function animateBodyScrollTop(goalScroll
  /*: integer*/
  , duration
  /*: integer*/
  )
  /*: Promise<void>*/
  {
    var startStamp = performance.now();
    var currentScrollTop = window.pageYOffset;
    return new Promise(function (resolve) {
      var loop = function loop() {
        var delta = performance.now() - startStamp;

        if (delta > duration) {
          resolve();
          return;
        }

        window.scrollTo(0, currentScrollTop + (goalScroll - currentScrollTop) * delta / duration);
        requestAnimationFrame(loop);
      };

      requestAnimationFrame(loop);
    });
  };

  _exports.$animateBodyScrollTopDefault = animateBodyScrollTop;
  var animateBodyScrollTop$1 = {
    'default': animateBodyScrollTop
  }; // @flow

  /** @function */

  _exports.$animateBodyScrollTop = animateBodyScrollTop$1;

  var sendMessage = function sendMessage()
  /*: Array<any>*/

  /*: Promise<any>*/
  {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (typeof browser !== 'undefined') {
      return browser.runtime.sendMessage.apply(browser.runtime, args);
    }

    return new Promise(function (resolve, reject) {
      /** @function */
      var callback = function callback(response
      /*: any*/
      ) {
        if (chrome.runtime.lastError) reject(chrome.runtime.lastError);else resolve(response);
      };

      args.push(callback);
      chrome.runtime.sendMessage.apply(chrome.runtime, args);
    });
  };

  _exports.$sendMessageDefault = sendMessage;
  var sendMessage$1 = {
    'default': sendMessage
  }; // @flow

  _exports.$sendMessage = sendMessage$1;

  var _browser = typeof browser !== 'undefined' ? browser : chrome;

  var port = _browser.runtime.connect({
    'name': 'diagnostics'
  });

  var listeners
  /*: Array<Function>*/
  = [];
  port.onMessage.addListener(function (newState) {
    listeners.forEach(function (callback) {
      callback(newState);
    });
  });
  /** @method */

  var getState =
  /*#__PURE__*/
  function () {
    var _ref = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var output;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return sendMessage({
                'type': 'Diagnostics.getState'
              });

            case 2:
              output = _context2.sent;

              if (output) {
                _context2.next = 5;
                break;
              }

              throw new Error('Connection with background failed');

            case 5:
              return _context2.abrupt("return", output);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getState() {
      return _ref.apply(this, arguments);
    };
  }();
  /** @method */


  var getSteps =
  /*#__PURE__*/
  function () {
    var _ref2 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var output;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return sendMessage({
                'type': 'Diagnostics.getSteps'
              });

            case 2:
              output = _context3.sent;

              if (output) {
                _context3.next = 5;
                break;
              }

              throw new Error('Connection with background failed');

            case 5:
              return _context3.abrupt("return", output);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getSteps() {
      return _ref2.apply(this, arguments);
    };
  }();
  /** @method */


  var start = function start(extensions
  /*: Array<ExtensionInfo> | void*/
  ) {
    return sendMessage({
      'type': 'Diagnostics.start',
      extensions: extensions
    });
  };
  /** @method */


  var terminate = function terminate() {
    return (
      /*: Promise<void>*/
      sendMessage({
        'type': 'Diagnostics.terminate'
      })
    );
  };
  /** @method */


  var addListener = function addListener(listener
  /*: Function*/
  )
  /*: void*/
  {
    listeners.push(listener);
  };
  /** @method */


  var removeListener = function removeListener(listener
  /*: Function*/
  )
  /*: void*/
  {
    listeners = listeners.filter(function (item) {
      return item !== listener;
    });
  };

  var DiagnosticsCore = {
    addListener: addListener,
    getState: getState,
    getSteps: getSteps,
    removeListener: removeListener,
    start: start,
    terminate: terminate
  };
  _exports.$DiagnosticsCoreDefault = DiagnosticsCore;
  var DiagnosticsCore$1 = {
    'default': DiagnosticsCore
  }; // @flow

  /** @function */

  _exports.$DiagnosticsCore = DiagnosticsCore$1;

  var permissionRequest =
  /*#__PURE__*/
  function () {
    var _ref3 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(typeof browser !== 'undefined')) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", true);

            case 2:
              return _context4.abrupt("return", new Promise(function (resolve) {
                chrome.permissions.request({
                  'permissions': ['management']
                }, resolve);
              }));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function permissionRequest() {
      return _ref3.apply(this, arguments);
    };
  }();
  /** @function */


  var _disableExtensions =
  /*#__PURE__*/
  function () {
    var _ref4 = babelHelpers.asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(extensions
    /*: Array<string>*/
    ) {
      var allowed;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return permissionRequest();

            case 2:
              allowed = _context5.sent;

              if (allowed) {
                _context5.next = 5;
                break;
              }

              throw new Error('Not enough permissions');

            case 5:
              _context5.next = 7;
              return Promise.all(extensions.map(function (id) {
                return new Promise(function (resolve) {
                  chrome.management.setEnabled(id, false, resolve);
                });
              }));

            case 7:
              return _context5.abrupt("return", new Promise(function (resolve) {
                chrome.management.getAll(resolve);
              }));

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function disableExtensions(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  _exports.$disableExtensionsDefault = _disableExtensions;
  var disableExtensions$1 = {
    'default': _disableExtensions
  }; // @flow

  _exports.$disableExtensions = disableExtensions$1;
  var globalStyle = "\np, ul, ol, td, th{\n  padding: 0;\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nul, ol{\n  list-style: none;\n}\n";
  _exports.$globalStyleDefault = globalStyle;
  var globalStyle$1 = {
    'default': globalStyle
  }; // @flow

  _exports.$globalStyle = globalStyle$1;

  var extensionsVisibleForSection = function extensionsVisibleForSection(state
  /*: Array<DiagnosticsStepState>*/
  , visible
  /*: boolean*/
  , section
  /*: string*/
  )
  /*: boolean*/
  {
    if (!visible) return false;
    var proxyApiStepState = state.find(function (_ref5) {
      var name = _ref5.name;
      return name === 'proxyApi';
    });
    if (!proxyApiStepState) return false; // Flow crap
    // If proxy contol state error -> show only for 'proxyApi'

    var proxyApiBroken
    /*: boolean*/
    = proxyApiStepState.state === 'error';
    return proxyApiBroken === (section === 'proxyApi');
  };
  /** @function */


  var stepClass = function stepClass(stepStates
  /*: Array<DiagnosticsStepState>*/
  , stepName
  /*: string*/
  )
  /*: string*/
  {
    var stepState = stepStates.find(function (_ref6) {
      var name = _ref6.name;
      return name === stepName;
    });
    if (!stepState) return '';

    switch (stepState.state) {
      case 'not started':
        return '';

      case 'in process':
        return 'progress';

      case 'success':
        return 'success';

      case 'partial':
        return 'partial';

      case 'error':
        return 'error';

      default:
        return '';
    }
  };
  /** @function */


  var stepCompletion = function stepCompletion(state
  /*: Array<DiagnosticsStepState>*/
  , stepName
  /*: string*/
  )
  /*: string*/
  {
    var stepState
    /*: DiagnosticsStepState | void*/
    = state.find(function (_ref7) {
      var name = _ref7.name;
      return name === stepName;
    });
    if (!stepState) return '';
    /** @type {(Object|undefined)} */

    var requests = stepState.requests;
    if (!requests) return '';
    var success = requests.success,
        total = requests.total;
    if (!success || success === total) return '';
    return success + '/' + total;
  };
  /** @function */


  var stepState = function stepState(state
  /*: Array<DiagnosticsStepState>*/
  , stepName
  /*: string*/
  )
  /*: string*/
  {
    var step = state.find(function (_ref8) {
      var name = _ref8.name;
      return name === stepName;
    });
    if (!step) throw new Error("Step ".concat(stepName, " not found!"));
    return step.state;
  };
  /** @method */


  function render$3(_ref9) {
    var _this11 = this;

    var possibleSteps = _ref9.possibleSteps;
    return html(_templateObject_029645c0226711eaa20e13a597e0dbb8(), globalStyle, function () {
      if (!_this11.noStepsStarted) return '';
      return html(_templateObject2_029645c0226711eaa20e13a597e0dbb8(), _this11.startDiagnostics);
    }(), function () {
      if (!_this11.runningSteps) return '';
      return html(_templateObject3_029645c0226711eaa20e13a597e0dbb8());
    }(), function () {
      if (!_this11.allStepsComplete) return '';
      return html(_templateObject4_029645c0226711eaa20e13a597e0dbb8(), _this11.startDiagnostics);
    }(), function () {
      if (!possibleSteps.includes('proxyApi')) return '';
      return html(_templateObject5_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'proxyApi'), stepState(_this11.state, 'proxyApi'), stepCompletion(_this11.state, 'proxyApi'), function () {
        if (!extensionsVisibleForSection(_this11.state, _this11.extensionsVisible, 'proxyApi')) return '';
        return html(_templateObject6_029645c0226711eaa20e13a597e0dbb8(), _this11.extensions, _this11.extensionsUpdate);
      }());
    }(), function () {
      if (!possibleSteps.includes('noProxyExtensions')) return '';
      return html(_templateObject7_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'noProxyExtensions'), stepState(_this11.state, 'noProxyExtensions'), stepCompletion(_this11.state, 'noProxyExtensions'), function () {
        if (!extensionsVisibleForSection(_this11.state, _this11.extensionsVisible, 'noProxyExtensions')) return '';
        return html(_templateObject8_029645c0226711eaa20e13a597e0dbb8(), _this11.extensions, _this11.extensionsUpdate);
      }());
    }(), function () {
      if (!possibleSteps.includes('httpConnection')) return '';
      return html(_templateObject9_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'httpConnection'), stepState(_this11.state, 'httpConnection'), stepCompletion(_this11.state, 'httpConnection'));
    }(), function () {
      if (!possibleSteps.includes('httpsConnection')) return '';
      return html(_templateObject10_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'httpsConnection'), stepState(_this11.state, 'httpsConnection'), stepCompletion(_this11.state, 'httpsConnection'));
    }(), function () {
      if (!possibleSteps.includes('browsecApi')) return '';
      return html(_templateObject11_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'browsecApi'), stepState(_this11.state, 'browsecApi'), stepCompletion(_this11.state, 'browsecApi'));
    }(), function () {
      if (!possibleSteps.includes('httpProxyConnection')) return '';
      return html(_templateObject12_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'httpProxyConnection'), stepState(_this11.state, 'httpProxyConnection'), stepCompletion(_this11.state, 'httpProxyConnection'));
    }(), function () {
      if (!possibleSteps.includes('httpsProxyConnection')) return '';
      return html(_templateObject13_029645c0226711eaa20e13a597e0dbb8(), stepClass(_this11.state, 'httpsProxyConnection'), stepState(_this11.state, 'httpsProxyConnection'), stepCompletion(_this11.state, 'httpsProxyConnection'));
    }(), function () {
      // <template id="AllStepsComplete" is="dom-if" if="[[allStepsComplete]]">
      if (!_this11.allStepsComplete) return '';
      return html(_templateObject14_029645c0226711eaa20e13a597e0dbb8(), _this11.extensionsVisible, _this11.state, function () {
        if (!_this11.extensionsVisible) {
          return html(_templateObject15_029645c0226711eaa20e13a597e0dbb8(), _this11.closePage);
        }

        return html(_templateObject16_029645c0226711eaa20e13a597e0dbb8(), _this11.fixExtensions);
      }());
    }());
  }

  ;
  var blockTemplate = {
    'default': render$3
  }; // @flow

  _exports.$blockTemplate = blockTemplate;

  function render$4() {
    var _this12 = this;

    return html(_templateObject17_029645c0226711eaa20e13a597e0dbb8(), globalStyle, this.views.map(function (item, index) {
      return html(_templateObject18_029645c0226711eaa20e13a597e0dbb8(), item.id, item.checked, _this12.clickCheckbox(index), function () {
        if (!item.icon) return '';
        return html(_templateObject19_029645c0226711eaa20e13a597e0dbb8(), item.icon, _this12.clickCheckbox(index));
      }(), _this12.clickCheckbox(index), item.name);
    }), this.disableExtensions);
  }

  ;
  var extensionsTemplate = {
    'default': render$4
  }; // @flow

  _exports.$extensionsTemplate = extensionsTemplate;

  (function () {
    var _browser = typeof browser !== 'undefined' ? browser : chrome;

    var backgroundPage = _browser.extension.getBackgroundPage();

    if (!backgroundPage) return;
    var Diagnostics = backgroundPage.Diagnostics;

    var Extensions =
    /*#__PURE__*/
    function (_LitElement) {
      babelHelpers.inherits(Extensions, _LitElement);
      babelHelpers.createClass(Extensions, [{
        key: "render",
        value: function render() {
          return render$4.call(this);
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            // States of steps (natural order)
            'extensions': {
              'type': Array
            },
            'views': {
              'type': Array
            }
          };
        }
      }]);

      function Extensions() {
        var _this13;

        babelHelpers.classCallCheck(this, Extensions);
        _this13 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Extensions).call(this));
        _this13.extensions = [];
        _this13.views = [];
        return _this13;
      } // Observers

      /** @method */


      babelHelpers.createClass(Extensions, [{
        key: "updated",
        value: function updated(changes) {
          if (changes.has('extensions')) {
            var views = this.views ? this.views.slice() : [];
            this.views = this.extensions.map(function (extension) {
              extension = Object.assign({}, extension);
              var oldData = views.find(function (_ref10) {
                var id = _ref10.id;
                return id === extension.id;
              });
              extension.checked = oldData && typeof oldData.checked === 'boolean' ? oldData.checked : true;
              return extension;
            });
          }
        } // Methods

        /** @method */

      }, {
        key: "clickCheckbox",
        value: function clickCheckbox(index) {
          var _this14 = this;

          return function (_ref11) {
            var target = _ref11.target;
            var view = Object.assign({}, _this14.views[index]);

            var views = _this14.views.slice();

            view.checked = !view.checked;
            views[index] = view;
            _this14.views = views; // Render here
          };
        }
        /** @method */

      }, {
        key: "disableExtensions",
        value: function () {
          var _disableExtensions2 = babelHelpers.asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var extensions;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (this.views.filter(function (_ref12) {
                      var checked = _ref12.checked;
                      return checked;
                    }).length) {
                      _context6.next = 2;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 2:
                    _context6.next = 4;
                    return _disableExtensions(this.views.reduce(function (carry, _ref13) {
                      var id = _ref13.id,
                          checked = _ref13.checked;
                      if (checked) carry.push(id);
                      return carry;
                    }, []));

                  case 4:
                    extensions
                    /*: Array<ExtensionInfo> */
                    = _context6.sent;
                    this.extensions = [];
                    this.dispatchEvent(new CustomEvent('extensions-update', {
                      'detail': this.extensions
                    })); // Recheck all again

                    _context6.next = 9;
                    return DiagnosticsCore.terminate();

                  case 9:
                    Diagnostics.start(extensions);

                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function disableExtensions() {
            return _disableExtensions2.apply(this, arguments);
          }

          return disableExtensions;
        }()
      }]);
      return Extensions;
    }(LitElement);

    ;
    customElements.define('c-extensions', Extensions);
  })(); // @flow


  function render$5() {
    var _this15 = this;

    return html(_templateObject20_029645c0226711eaa20e13a597e0dbb8(), this.toggleLog, this.visible ? 'Hide' : 'Show', function () {
      if (!_this15.visible) return ''; // <template id="textareaBlock" is="dom-if" if="[[visible]]">

      return html(_templateObject21_029645c0226711eaa20e13a597e0dbb8(), _this15.text, _this15.copy);
    }());
  }

  ;
  var logsTemplate = {
    'default': render$5
  }; // @flow

  _exports.$logsTemplate = logsTemplate;

  var Logs =
  /*#__PURE__*/
  function (_LitElement2) {
    babelHelpers.inherits(Logs, _LitElement2);
    babelHelpers.createClass(Logs, [{
      key: "render",
      value: function render() {
        return render$5.call(this);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'visible': {
            // Is log visible?
            'type': Boolean
          },
          'logLoaded': {
            'type': Boolean
          },
          'text': {
            'type': String
          }
        };
      } // Lifecycle

    }]);

    function Logs() {
      var _this16;

      babelHelpers.classCallCheck(this, Logs);
      _this16 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Logs).call(this));
      _this16.logLoaded = false;
      _this16.text = '';
      _this16.visible = false;
      return _this16;
    } // Methods

    /** @method */


    babelHelpers.createClass(Logs, [{
      key: "toggleLog",
      value: function () {
        var _toggleLog = babelHelpers.asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee8() {
          var _this17 = this;

          var slideDown, promise, scrollHeight, offsetHeight;
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  slideDown
                  /*: boolean*/
                  = !this.visible;
                  promise
                  /*: Promise<any>*/
                  = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!_this17.logLoaded) {
                              _context7.next = 3;
                              break;
                            }

                            _this17.visible = !_this17.visible;
                            return _context7.abrupt("return");

                          case 3:
                            _this17.logLoaded = true;
                            _context7.next = 6;
                            return sendMessage({
                              'type': 'Diagnostics.getLog'
                            });

                          case 6:
                            _this17.text = _context7.sent;
                            _this17.visible = !_this17.visible;

                          case 8:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }))();

                  if (slideDown) {
                    _context8.next = 4;
                    break;
                  }

                  return _context8.abrupt("return");

                case 4:
                  _context8.next = 6;
                  return promise;

                case 6:
                  _context8.next = 8;
                  return this.requestUpdate();

                case 8:
                  // Re-render
                  scrollHeight
                  /*: integer*/
                  = document.body ? document.body.scrollHeight : 0;
                  offsetHeight
                  /*: integer*/
                  = document.body ? document.body.offsetHeight : 0;

                  if (!(scrollHeight <= offsetHeight)) {
                    _context8.next = 12;
                    break;
                  }

                  return _context8.abrupt("return");

                case 12:
                  _context8.next = 14;
                  return new Promise(function (resolve) {
                    setTimeout(resolve, 200);
                  });

                case 14:
                  animateBodyScrollTop(scrollHeight - offsetHeight, 750);

                case 15:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function toggleLog() {
          return _toggleLog.apply(this, arguments);
        }

        return toggleLog;
      }()
      /** @method */

    }, {
      key: "copy",
      value: function copy() {
        var textarea
        /*: HTMLTextAreaElement*/
        = this.shadowRoot.querySelector('textarea[name="logs"]');
        textarea.select();
        document.execCommand('copy');
        textarea.setSelectionRange(0, 0);
        textarea.blur();
      }
    }]);
    return Logs;
  }(LitElement);

  ;
  customElements.define('c-logs', Logs); // @flow

  var text = function text(state
  /*: string*/
  )
  /*: string*/
  {
    switch (state) {
      case 'skip':
        return 'Skipped';

      case 'in process':
        return 'Running';

      case 'success':
        return 'Completed';

      case 'warning':
        return 'Warning';

      case 'error':
        return 'Failed';

      default:
        return '';
    }
  };
  /** @method */


  function render$6() {
    return html(_templateObject22_029645c0226711eaa20e13a597e0dbb8(), text(this.state), this.completion);
  }

  ;
  var stepStateTemplate = {
    'default': render$6
  }; // @flow

  _exports.$stepStateTemplate = stepStateTemplate;

  var StepState =
  /*#__PURE__*/
  function (_LitElement3) {
    babelHelpers.inherits(StepState, _LitElement3);
    babelHelpers.createClass(StepState, [{
      key: "render",
      value: function render() {
        return render$6.call(this);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'completion': {
            'type': String
          },
          'state': {
            'type': String
          }
        };
      } // Lifecycle

    }]);

    function StepState() {
      var _this18;

      babelHelpers.classCallCheck(this, StepState);
      _this18 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(StepState).call(this));
      _this18.completion = '';
      _this18.state = 'not started';
      return _this18;
    }
    /** @method */


    babelHelpers.createClass(StepState, [{
      key: "updated",
      value: function updated(changes) {
        var _this19 = this;

        if (changes.has('state')) {
          var newClass
          /*: string*/
          = function () {
            switch (_this19.state) {
              case 'skip':
                return 'skip';

              case 'in process':
                return 'progress';

              case 'success':
                return 'success';

              case 'warning':
                return 'warning';

              case 'error':
                return 'error';

              default:
                return '';
            }
          }();

          ['skip', 'progress', 'success', 'warning', 'error'].forEach(function (className) {
            _this19.classList.remove(className);
          });
          if (newClass) this.classList.add(newClass);
        }
      }
    }]);
    return StepState;
  }(LitElement);

  ;
  customElements.define('step-state', StepState); // @flow

  var _
  /*: Lodash*/
  = window._;
  /** @method */

  function render$7() {
    var _this20 = this;

    return html(_templateObject23_029645c0226711eaa20e13a597e0dbb8(), function () {
      if (_this20.fixable) {
        return html(_templateObject24_029645c0226711eaa20e13a597e0dbb8(), _.upperFirst(_this20.ownState));
      }

      return html(_templateObject25_029645c0226711eaa20e13a597e0dbb8());
    }());
  }

  ;
  var summaryTemplate = {
    'default': render$7
  }; // @flow

  _exports.$summaryTemplate = summaryTemplate;

  var Summary =
  /*#__PURE__*/
  function (_LitElement4) {
    babelHelpers.inherits(Summary, _LitElement4);
    babelHelpers.createClass(Summary, [{
      key: "render",
      value: function render() {
        return render$7.call(this);
      }
    }], [{
      key: "properties",
      get: function get() {
        return {
          'fixable': {
            'type': Boolean
          },
          'ownState': {
            'type': String
          },
          'state': {
            'type': Array
          }
        };
      } // Lifecycle

    }]);

    function Summary() {
      var _this21;

      babelHelpers.classCallCheck(this, Summary);
      _this21 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(Summary).call(this));
      _this21.fixable = null;
      _this21.ownState = '';
      _this21.state = [];
      return _this21;
    }
    /** @method */


    babelHelpers.createClass(Summary, [{
      key: "updated",
      value: function updated(changes) {
        if (changes.has('ownState')) {
          var state = this.ownState;
          var oldState = changes.get('ownState');
          if (oldState) this.classList.remove(oldState);
          if (state) this.classList.add(state);
        }

        if (changes.has('state')) {
          var data
          /*: Array<string>*/
          = this.state.map(function (_ref15) {
            var state = _ref15.state;
            return state;
          });

          var newState
          /*: string*/
          = function () {
            var condition
            /*: boolean*/
            = data.some(function (state) {
              return !['error', 'warning', 'success', 'skip'].includes(state);
            });
            if (condition) return '';
            if (data.some(function (state) {
              return state === 'error';
            })) return 'error';
            if (data.some(function (state) {
              return state === 'warning';
            })) return 'warning';
            return 'success';
          }();

          if (this.ownState !== newState) this.ownState = newState;
        }
      }
    }]);
    return Summary;
  }(LitElement);

  ;
  customElements.define('c-summary', Summary); // @flow

  var _$1
  /*: Lodash*/
  = window._;
  babelHelpers.asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee14() {
    var possibleSteps, initialDiagnosticsState, MainBlock;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return DiagnosticsCore.getSteps();

          case 2:
            possibleSteps
            /*: Array<string>*/
            = _context14.sent;
            _context14.next = 5;
            return DiagnosticsCore.getState();

          case 5:
            initialDiagnosticsState
            /*: Array<DiagnosticsStepState>*/
            = _context14.sent;

            MainBlock =
            /*#__PURE__*/
            function (_LitElement5) {
              babelHelpers.inherits(MainBlock, _LitElement5);
              babelHelpers.createClass(MainBlock, [{
                key: "render",
                value: function render() {
                  return render$3.call(this, {
                    possibleSteps: possibleSteps
                  });
                } // Properties

              }, {
                key: "extensionsVisible",
                get: function get() {
                  return Boolean(this.extensions.length);
                }
              }], [{
                key: "properties",
                get: function get() {
                  return {
                    // States of steps (natural order)
                    'noStepsStarted': {
                      'type': Boolean
                    },
                    'runningSteps': {
                      'type': Boolean
                    },
                    'allStepsComplete': {
                      'type': Boolean,
                      'observer': 'observeAllStepsComplete'
                    },
                    'extensions': {
                      'type': Array
                      /** @type {Array<Extension>} */

                    },
                    'extensionsVisible': {
                      'type': Boolean
                    },
                    // List of states of each step
                    'state': {
                      'type': Array
                    }
                  };
                } // Lifecycle

              }]);

              function MainBlock() {
                var _this22;

                babelHelpers.classCallCheck(this, MainBlock);
                _this22 = babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(MainBlock).call(this));
                _this22.allStepsComplete = initialDiagnosticsState.every(function (_ref17) {
                  var state = _ref17.state;
                  return !['not started', 'in process'].includes(state);
                });
                _this22.extensions = [];
                _this22.noStepsStarted = initialDiagnosticsState.every(function (_ref18) {
                  var state = _ref18.state;
                  return state === 'not started';
                });
                _this22.runningSteps = initialDiagnosticsState.some(function (_ref19) {
                  var state = _ref19.state;
                  return ['not started', 'in process'].includes(state);
                }) && _$1.uniq(initialDiagnosticsState.map(function (_ref20) {
                  var state = _ref20.state;
                  return state;
                })).length > 1;
                _this22.state = initialDiagnosticsState;
                return _this22;
              }
              /** @method */


              babelHelpers.createClass(MainBlock, [{
                key: "disconnectedCallback",
                value: function () {
                  var _disconnectedCallback = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee9() {
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            babelHelpers.get(babelHelpers.getPrototypeOf(MainBlock.prototype), "disconnectedCallback", this).call(this);
                            _context9.next = 3;
                            return DiagnosticsCore.terminate();

                          case 3:
                            DiagnosticsCore.removeListener(this.listener);

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, this);
                  }));

                  function disconnectedCallback() {
                    return _disconnectedCallback.apply(this, arguments);
                  }

                  return disconnectedCallback;
                }()
                /** @method */

              }, {
                key: "firstUpdated",
                value: function () {
                  var _firstUpdated = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee10() {
                    var _this23 = this;

                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            babelHelpers.get(babelHelpers.getPrototypeOf(MainBlock.prototype), "firstUpdated", this).call(this);
                            this.listener = DiagnosticsCore.addListener(function (state
                            /*: Array<DiagnosticsStepState>*/
                            ) {
                              state = _$1.cloneDeep(state);
                              _this23.state = state
                              /*: Array<DiagnosticsStepState>*/
                              ;
                              /** @type {Array<Object>} */

                              _this23.extensions = function () {
                                var blocks
                                /*: Array<Array<Extension>>*/
                                = ['proxyApi', 'noProxyExtensions'].reduce(function (carry, blockName) {
                                  var stepState = state.find(function (_ref21) {
                                    var name = _ref21.name;
                                    return name === blockName;
                                  });
                                  if (!stepState || !stepState.extensions) return carry;
                                  carry.push(stepState.extensions);
                                  return carry;
                                }, []);
                                return blocks.find(function (list) {
                                  return list.length;
                                }) || [];
                              }();

                              _this23.noStepsStarted = state.every(function (_ref22) {
                                var state = _ref22.state;
                                return state === 'not started';
                              });
                              _this23.runningSteps = state.some(function (_ref23) {
                                var state = _ref23.state;
                                return ['not started', 'in process'].includes(state);
                              }) && _$1.uniq(state.map(function (_ref24) {
                                var state = _ref24.state;
                                return state;
                              })).length > 1;
                              _this23.allStepsComplete = state.every(function (_ref25) {
                                var state = _ref25.state;
                                return !['not started', 'in process'].includes(state);
                              });
                            });

                          case 2:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, this);
                  }));

                  function firstUpdated() {
                    return _firstUpdated.apply(this, arguments);
                  }

                  return firstUpdated;
                }()
                /** @method */

              }, {
                key: "updated",
                value: function () {
                  var _updated = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee11(changes) {
                    var newState, oldState, element, scrollHeight, offsetHeight;
                    return regeneratorRuntime.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            if (!changes.has('allStepsComplete')) {
                              _context11.next = 15;
                              break;
                            }

                            newState = this.allStepsComplete;
                            oldState = changes.get('allStepsComplete');

                            if (!(!newState || oldState)) {
                              _context11.next = 5;
                              break;
                            }

                            return _context11.abrupt("return");

                          case 5:
                            _context11.next = 7;
                            return this.requestUpdate();

                          case 7:
                            element
                            /*: HTMLElement | null*/
                            = this.shadowRoot.querySelector('c-summary');

                            if (element) {
                              _context11.next = 10;
                              break;
                            }

                            return _context11.abrupt("return");

                          case 10:
                            scrollHeight
                            /*: integer*/
                            = document.body ? document.body.scrollHeight : 0;
                            offsetHeight
                            /*: integer*/
                            = document.body ? document.body.offsetHeight : 0;

                            if (!(scrollHeight <= offsetHeight)) {
                              _context11.next = 14;
                              break;
                            }

                            return _context11.abrupt("return");

                          case 14:
                            animateBodyScrollTop(scrollHeight - offsetHeight, 750);

                          case 15:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));

                  function updated(_x2) {
                    return _updated.apply(this, arguments);
                  }

                  return updated;
                }() // Methods

                /** @method */

              }, {
                key: "closePage",
                value: function closePage()
                /*: void*/
                {
                  window.close();
                  sendMessage({
                    'type': 'Diagnostics.close'
                  });
                }
                /** @method */

              }, {
                key: "extensionsUpdate",
                value: function extensionsUpdate(_ref26) {
                  var extensions = _ref26['detail'];
                  this.extensions = extensions;
                }
                /** @method */

              }, {
                key: "fixExtensions",
                value: function () {
                  var _fixExtensions = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee12() {
                    var extensions;
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _context12.next = 2;
                            return _disableExtensions(this.extensions.map(function (_ref27) {
                              var id = _ref27.id;
                              return id;
                            }));

                          case 2:
                            extensions
                            /*: Array<ExtensionInfo>*/
                            = _context12.sent;
                            this.extensions = []; // Recheck all again

                            _context12.next = 6;
                            return DiagnosticsCore.terminate();

                          case 6:
                            DiagnosticsCore.start(extensions);

                          case 7:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12, this);
                  }));

                  function fixExtensions() {
                    return _fixExtensions.apply(this, arguments);
                  }

                  return fixExtensions;
                }()
                /** @method */

              }, {
                key: "startDiagnostics",
                value: function () {
                  var _startDiagnostics = babelHelpers.asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee13() {
                    var allowed, extensions;
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return function () {
                              if (typeof browser !== 'undefined') return true;
                              return new Promise(function (resolve) {
                                chrome.permissions.request({
                                  'permissions': ['management']
                                }, resolve);
                              });
                            }();

                          case 2:
                            allowed
                            /*: boolean*/
                            = _context13.sent;

                            if (allowed) {
                              _context13.next = 5;
                              break;
                            }

                            return _context13.abrupt("return");

                          case 5:
                            _context13.next = 7;
                            return function () {
                              if (typeof browser !== 'undefined') return;
                              return new Promise(function (resolve) {
                                return chrome.management.getAll(resolve);
                              });
                            }();

                          case 7:
                            extensions
                            /*: Array<ExtensionInfo> | void*/
                            = _context13.sent;
                            _context13.next = 10;
                            return DiagnosticsCore.terminate();

                          case 10:
                            DiagnosticsCore.start(extensions);

                          case 11:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  function startDiagnostics() {
                    return _startDiagnostics.apply(this, arguments);
                  }

                  return startDiagnostics;
                }()
              }]);
              return MainBlock;
            }(LitElement);

            ;
            customElements.define('main-block', MainBlock);

          case 9:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }))();
});