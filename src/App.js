import { Button, Label, Select, TextInput } from "flowbite-react";
import "./App.css";
import { useState } from "react";
import { DEFAULT_FORM_VALUES } from "./constants/formValuesConstant";
import { formValidation } from "./validations/formValidations";
import { STATE_DROPDOWN_OPTIONS } from "./constants/dropdownConstant";
import FormDetailModal from "./components/formDetailModal";

function App() {
	const [formValues, setFormValues] = useState(
		structuredClone(DEFAULT_FORM_VALUES)
	);
	const [formErrors, setFormErrors] = useState(
		structuredClone(DEFAULT_FORM_VALUES)
	);

	const [isFormDetailModalOpen, setIsFormDetailModalOpen] = useState(false);

	const handleOnFormValueChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		if (formErrors[field]) {
			setFormErrors((prev) => {
				return { ...prev, [field]: "" };
			});
		}

		setFormValues((prev) => {
			return { ...prev, [field]: value };
		});
	};

	const onSubmit = () => {
		const { isValid, errorObj } = formValidation(formValues);
		if (!isValid) {
			setFormErrors((prev) => {
				return { ...prev, ...errorObj };
			});
		} else {
			setIsFormDetailModalOpen(true);
		}
	};

	const handleOnFormValueDetailModalClose = () => {
		setIsFormDetailModalOpen(false);
	};

	return (
		<>
			{isFormDetailModalOpen && (
				<FormDetailModal
					isOpen={isFormDetailModalOpen}
					formValues={formValues}
					onClose={handleOnFormValueDetailModalClose}
				/>
			)}
			<section className="w-full flex justify-center items-center mt-5">
				<div className="flex flex-col w-1/4 gap-4">
					<div className="w-full flex flex-col ">
						<div className="mb-2 block">
							<Label htmlFor="firstName" value="First Name" />
						</div>
						<TextInput
							id="firstName"
							name="firstName"
							placeholder="enter first name"
							required
							type="text"
							value={formValues?.firstName}
							onChange={handleOnFormValueChange}
							color={formErrors?.firstName ? "failure" : ""}
							helperText={
								formErrors?.firstName && (
									<span className="font-medium">{formErrors?.firstName}!</span>
								)
							}
							maxLength={100}
						/>
					</div>
					<div className="w-full flex flex-col ">
						<div className="mb-2 block">
							<Label htmlFor="lastName" value="Last Name" />
						</div>
						<TextInput
							id="lastName"
							name="lastName"
							placeholder="enter last name"
							required
							type="text"
							value={formValues?.lastName}
							onChange={handleOnFormValueChange}
							color={formErrors?.lastName ? "failure" : ""}
							helperText={
								formErrors?.lastName && (
									<span className="font-medium">{formErrors?.lastName}!</span>
								)
							}
							maxLength={100}
						/>
					</div>

					<div className="w-full flex flex-col ">
						<div className="mb-2 block">
							<Label htmlFor="city" value="City" />
						</div>
						<TextInput
							id="city"
							name="cityName"
							placeholder="enter city name"
							required
							type="text"
							value={formValues?.cityName}
							onChange={handleOnFormValueChange}
							color={formErrors?.cityName ? "failure" : ""}
							helperText={
								formErrors?.cityName && (
									<span className="font-medium">{formErrors?.cityName}!</span>
								)
							}
							maxLength={50}
						/>
					</div>

					<div className="max-w-md flex flex-col" id="select">
						<div className="mb-2 block">
							<Label htmlFor="states" value="Select your state" />
						</div>
						<Select
							id="states"
							required
							value={formValues?.state}
							onChange={handleOnFormValueChange}
							name="state"
							color={formErrors?.state ? "failure" : ""}
							helperText={
								formErrors?.state && (
									<span className="font-medium">{formErrors?.state}!</span>
								)
							}
						>
							{STATE_DROPDOWN_OPTIONS.map((option) => (
								<option key={option?.key} value={option?.value}>
									{option?.label}
								</option>
							))}
						</Select>
					</div>

					<div className="w-full flex flex-col">
						<div className="mb-2 block">
							<Label htmlFor="postalCode" value="Postal" />
						</div>
						<TextInput
							id="postalCode"
							placeholder="enter postal code"
							required
							type="number"
							value={formValues?.postal}
							onChange={handleOnFormValueChange}
							name="postal"
							color={formErrors?.postal ? "failure" : ""}
							helperText={
								formErrors?.postal && (
									<span className="font-medium">{formErrors?.postal}!</span>
								)
							}
							maxLength={6}
						/>
					</div>
					<Button onClick={onSubmit}>Submit</Button>
				</div>
			</section>
		</>
	);
}

export default App;
