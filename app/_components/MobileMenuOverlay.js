import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "./Logo";
import * as motion from "motion/react-client";

export default function MobileMenuOverlay({ onClose }) {
	return (
		<motion.div
			className="fixed inset-0 z-50 bg-black bg-opacity-95"
			initial={{ x: 100 }}
			animate={{ x: 0 }}
			transition={{ duration: 0.3, ease: "linear" }}
		>
			{/* <FocusLock> */}
			{/* Focus lock to trap focus in also to stop scrolling (could use react-focus-on), issue: it doesn't have react 19 support yet.. Update later */}
			<div className="relative  h-full w-full flex flex-col gap-24">
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
					<Logo />

					<button
						aria-label="Close Menu"
						className="size-12 mr-2"
						onClick={onClose}
					>
						<XMarkIcon className="size-12" />
					</button>
				</div>

				<ul className="flex flex-col justify-start items-center flex-grow gap-24">
					<li>
						<Link href={"/"} className={`hover:text-hover text-lg py-2`}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href={"/#projects"}
							className={`hover:text-hover text-lg py-2`}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link href={"/#skills"} className={`hover:text-hover text-lg py-2`}>
							Skills
						</Link>
					</li>
					<li>
						<Link
							href={"/#contact"}
							className={`hover:text-hover text-lg py-2`}
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			{/* </FocusLock> */}
		</motion.div>
	);
}
