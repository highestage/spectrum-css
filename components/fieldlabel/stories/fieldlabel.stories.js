import { Template } from "./template";

/**
 * The field label component is used along with inputs to display a label for that input.
 */
export default {
	title: "Field label",
	component: "FieldLabel",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		alignment: {
			name: "Alignment",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["left", "right"],
			control: "select",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isRequired: {
			name: "Required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-FieldLabel",
		size: "m",
		alignment: "left",
		isDisabled: false,
		isRequired: false,
	},
};

export const Default = Template.bind({});
Default.args = {
	label: "Label",
};

export const RightAligned = Template.bind({});
RightAligned.args = {
	label: "Label",
	alignment: "right",
	customStyles: { width: "72px" },
};

export const Required = Template.bind({});
Required.args = {
	label: "Label example",
	alignment: "left",
	isRequired: true,
	customStyles: { width: "200px" },
};

export const WrappingAndRequired = Template.bind({});
WrappingAndRequired.args = {
	label: "Label example with longer text that will wrap to the next line. And with an asterisk that marks it as required.",
	alignment: "left",
	isRequired: true,
	customStyles: { width: "200px" },
};
