import { SecondaryNav } from "@/components";
import { BreakpointCheck, Web3Modal } from "@/hooks";
import "@/styles/main.scss";
import { ReactNode } from "react";

export const metadata = {
	title: "Profile - WagmiClub",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="container">
				<Web3Modal>
					<BreakpointCheck>
						<SecondaryNav />
						<section>{children}</section>
					</BreakpointCheck>
				</Web3Modal>
			</body>
		</html>
	);
}
