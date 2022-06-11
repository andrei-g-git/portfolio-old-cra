"use strict";
exports.__esModule = true;
var React = require("react");
var navigation_1 = require("../../js/navigation");
var Pages_1 = require("../main/Pages");
require("./Contact.scss");
function Contact(props) {
    return (React.createElement("div", { className: "contact-container", style: { height: props.height, maxHeight: props.height } },
        React.createElement("div", { className: "contact-title" }, "CONTACT"),
        React.createElement("form", { className: "contact-form", method: "post", action: "https://forms.un-static.com/forms/1120de76e2c5b4d51a64958b1a5c0ca95d39267c" },
            React.createElement("input", { className: "contact-form-input", id: "input-name", type: "text", name: "name", placeholder: "Subject" }),
            React.createElement("input", { className: "contact-form-input", id: "input-email", type: "email", name: "email", placeholder: "Your Email" }),
            React.createElement("textarea", { className: "contact-form-text-area", name: "message" }),
            React.createElement("input", { className: "contact-form-submit", id: "contact-form-submit", type: "submit", value: "SUBMIT" })),
        React.createElement("footer", { className: "contact-footer" }),
        React.createElement("div", { className: "back-to-top", onClick: function () { return navigation_1.scrollToHeight(parseInt(Pages_1.Pages.HOME.height), true); } })));
}
exports["default"] = Contact;
