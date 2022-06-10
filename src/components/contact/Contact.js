"use strict";
exports.__esModule = true;
var React = require("react");
var navigation_1 = require("../../js/navigation");
var Pages_1 = require("../main/Pages");
require("./Contact.scss");
function Contact(props) {
    return (React.createElement("div", { className: "contact-container", style: { height: props.height } },
        React.createElement("div", { className: "contact-title" }, "CONTACT"),
        React.createElement("form", { className: "contact-form", onSubmit: function (event) { event.preventDefault(); console.log("aweawef"); } },
            React.createElement("input", { className: "contact-form-input", id: "input-email", type: "email" }),
            React.createElement("input", { className: "contact-form-input", id: "input-name", type: "text" }),
            React.createElement("textarea", { className: "contact-form-text-area" }),
            React.createElement("input", { className: "contact-form-submit", id: "contact-form-submit", type: "submit", value: "SUBMIT" })),
        React.createElement("footer", { className: "contact-footer" }),
        React.createElement("div", { className: "back-to-top", onClick: function () { return navigation_1.scrollToHeight(parseInt(Pages_1.Pages.HOME.height), true); } })));
}
exports["default"] = Contact;
