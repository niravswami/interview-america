export const isOnlyDigit = (value) => /^\d+$/.test(value);

export const isOnlyAlphaChar = (value) => /^[a-zA-Z\s]+$/.test(value);

export const formValidation = (formValues) => {
	// first name and last name only 100 chrs and only alpha
	// city name only max 50 and alphas
	// postal code only 6 and nums

	// check for required filed
	let errorObj = {};
	let isValid = true;
	Object.keys(formValues).forEach((key) => {
		let value = formValues[key] ? formValues[key].trim() : "";
		if (value === "") {
			isValid = false;
			errorObj[key] = `this field is required`;
		} else if (["firstName", "lastName"].includes(key)) {
			if (formValues[key].length > 100) {
				isValid = false;
				errorObj[key] = `allow only 100 charaters`;
			} else if (!isOnlyAlphaChar(formValues[key])) {
				isValid = false;
				errorObj[key] = `allow only alpha values`;
			}
		} else if (key === "cityName") {
			if (formValues[key].length > 50) {
				isValid = false;
				errorObj[key] = `allow only 50 charaters`;
			} else if (!isOnlyAlphaChar(formValues[key])) {
				isValid = false;
				errorObj[key] = `allow only alpha values`;
			}
		} else if (key === "postal") {
			if (formValues[key].length > 6) {
				isValid = false;
				errorObj[key] = `allow only 6 charaters`;
			} else if (!isOnlyDigit(formValues[key])) {
				isValid = false;
				errorObj[key] = `allow only digits`;
			}
		}
	});

	return { isValid, errorObj };
};
