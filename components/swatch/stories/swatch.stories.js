import { States } from "./template";

/**
 * A swatch shows a small sample of a fill&emdash;such as a color, gradient, texture, or material&emdash;that is intended to be applied to an object.
 */
export default {
	title: "Swatch",
	component: "Swatch",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["xs", "s", "m", "l",],
			control: "select",
		},
		swatchColor: {
			name: "Color",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "color",
		},
		rounding: {
			name: "Rounding",
			type: { name: "string" },
			table: {
				type: { summary: "string", required: true },
				category: "Component",
			},
			options: ["none", "regular", "full"],
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
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Swatch",
		size: "m",
		isSelected: false,
		isDisabled: false,
		rounding: "regular",
		swatchColor: "rgb(174, 216, 230)"
	},
};

export const Default = States.bind({});
Default.args = {};
