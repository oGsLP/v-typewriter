import { shallowMount } from "@vue/test-utils";
import VTypewriter from "@/components/Typewriter.vue";

const fillComponent = {
	name: "fill-component",
	template: "<p>fill</p>"
};

describe("v-typewriter", () => {
	it("+ exists v-typewriter", () => {
		expect(VTypewriter).toBeTruthy();
	});
	it("- has default structure and classes", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: [
					fillComponent,
					fillComponent,
					fillComponent,
					fillComponent
				]
			}
		});

		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
	});
});
