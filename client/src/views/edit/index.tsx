"use client";

import { EDIT_SCHEMA } from "@/assets/data";
import { Details, Socials } from "@/components";
import { signUp } from "@/utils/app.mjs";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useFormik } from "formik";
import { useEffect } from "react";

import "./index.scss";

interface FormValues {
	account: string;
	bio: string;
	discord: string;
	name: string;
	occupation: string;
	telegram: string;
	username: string;
	xDotCom: string;
	youtube: string;
}

export const FormField = ({ activeTab }: { activeTab: string }) => {
	const { address, isConnected } = useWeb3ModalAccount();

	const initialValues = {
		account: activeTab,
		bio: "",
		discord: "",
		name: "",
		occupation: "",
		telegram: "",
		username: "",
		xDotCom: "",
		website: "",
		youtube: "",
	};

	const {
		errors,
		values,
		touched,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
	} = useFormik({
		validationSchema: EDIT_SCHEMA, // Form validation schema
		initialValues, // Initial form values
		onSubmit: async (values) => {
			try {
				await signUp(values, address);
				console.log(values);
				
			} catch (error) {
				console.log(error);
			}
		},
	});

	console.log({ address, isConnected });

	useEffect(() => {
		setFieldValue("account", activeTab);
	}, [activeTab]);

	return (
		<form
			autoComplete="off"
			onSubmit={handleSubmit}
			className="form"
		>
			{/* User details form section */}
			<Details
				errors={errors}
				touched={touched}
				formData={values}
				activeTab={activeTab}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* User socials form section */}
			<Socials
				errors={errors}
				touched={touched}
				formData={values}
				handleBlur={handleBlur}
				setFieldValue={setFieldValue}
				handleFormChange={handleChange}
			/>

			{/* Form submission button */}
			<div className="form__button">
				<button
					type="submit"
					className="form__button-wrapper"
				>
					<span className="form__button-label">Save</span>
				</button>
			</div>
		</form>
	);
};
