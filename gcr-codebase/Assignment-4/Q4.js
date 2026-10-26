"use strict";

class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        const form = document.createElement("form");
        form.id = "dynamicForm";

        this.fields.forEach((field, index) => {
            const label = document.createElement("label");
            label.textContent = field.label;

            const input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.id = `field${index}`;
            input.required = true;

            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
        });

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Submit";
        form.appendChild(button);

        this.container.replaceChildren(form);

        form.addEventListener("submit", event => {
            event.preventDefault();
            const data = this.getFormData();

            document.getElementById("output").textContent =
                JSON.stringify(data, null, 2);

            console.log("Form Data:", data);
        });
    }

    getFormData() {
        const formData = {};

        this.fields.forEach((field, index) => {
            formData[field.name] =
                document.getElementById(`field${index}`).value;
        });

        return formData;
    }
}

const fields = [
    { type: "text", label: "Username: ", name: "username" },
    { type: "email", label: "Email: ", name: "email" },
    { type: "password", label: "Password: ", name: "password" }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();