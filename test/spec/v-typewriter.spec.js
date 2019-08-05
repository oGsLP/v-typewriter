import { shallowMount } from "@vue/test-utils";
import VTypewriter from "@/components/Typewriter.vue";

const fillComponent = {
	name: "fill-component",
	template: "<p>fill</p>"
};
const fillComponents = [
	fillComponent,
	fillComponent,
	fillComponent,
	fillComponent
];

const sleep = function(delay) {
	let start = new Date().getTime();
	while (new Date().getTime() - start < delay) {}
};

describe("v-typewriter", () => {
	it("+ exists v-typewriter", () => {
		expect(VTypewriter).toBeTruthy();
	});
	it("- has default structure and classes", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: fillComponents
			},
			propsData: {
				interval: 15
			}
		});

		await sleep(500);

		expect(wrapper.isVueInstance()).toBeTruthy();
		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
		expect(wrapper.element.style.textAlign).toBe("left");
	});
	it("- test basic props", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: fillComponents
			},
			propsData: {
				delay: 50,
				interval: 5,
				cursor: "__",
				align: "right"
			}
		});

		await sleep(500);

		expect(wrapper.isVueInstance()).toBeTruthy();
		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
		expect(wrapper.element.style.textAlign).toBe("right");
	});
	it("- test rollback", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: fillComponents
			},
			propsData: {
				rollback: true,
				align: "center",
				interval: 12
			}
		});

		await sleep(500);

		expect(wrapper.isVueInstance()).toBeTruthy();
		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
		expect(wrapper.element.style.textAlign).toBe("center");
	});

	it("- test loop", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: fillComponents
			},
			propsData: {
				loop: true,
				interval: 12
			}
		});

		await sleep(500);

		expect(wrapper.isVueInstance()).toBeTruthy();
		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
	});

	it("- test rollback and loop", async () => {
		const wrapper = await shallowMount(VTypewriter, {
			slots: {
				default: fillComponents
			},
			propsData: {
				rollback: true,
				loop: true,
				interval: 11
			}
		});

		await sleep(500);

		expect(wrapper.isVueInstance()).toBeTruthy();
		expect(wrapper.is("div")).toBeTruthy();
		expect(wrapper.classes("v-typewriter")).toBeTruthy();
	});
});
