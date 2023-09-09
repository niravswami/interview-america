import { Button, Modal } from "flowbite-react";
import React from "react";

export default function FormDetailModal({
	isOpen = false,
	formValues = {},
	onClose = () => {},
}) {
	return (
		<Modal show={isOpen} onClose={onClose}>
			<Modal.Header>Form details</Modal.Header>
			<Modal.Body>
				<div className="space-y-6">
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						<span className="font-semibold mr-1">First Name: </span>{" "}
						<span>{formValues?.firstName}</span>
					</p>
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						<span className="font-semibold mr-1">Last Name: </span>{" "}
						<span>{formValues?.lastName}</span>
					</p>
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						<span className="font-semibold mr-1">city Name: </span>{" "}
						<span>{formValues?.cityName}</span>
					</p>
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						<span className="font-semibold mr-1">State: </span>{" "}
						<span>{formValues?.state}</span>
					</p>
					<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
						<span className="font-semibold mr-1">Postal: </span>{" "}
						<span>{formValues?.postal}</span>
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onClose}>I accept</Button>
				<Button color="gray" onClick={onClose}>
					Decline
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
