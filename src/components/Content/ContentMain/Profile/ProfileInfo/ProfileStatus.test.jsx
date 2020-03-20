import React from "react";
import { create } from "react-test-renderer";
import PropfileStatusContainer from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should be state", () => {
		const component = create(<PropfileStatusContainer />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe('-----');
	});
});