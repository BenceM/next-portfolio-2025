// import { XMarkIcon } from "@heroicons/react/24/solid";
// import Link from "next/link";
import Logo from "./Logo";
// import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { DownloadHoverCard } from "./DownloadHoverCard";
import Link from "next/link";
import { ThemeSwitchButton } from "./ThemeSwitchButton";

export function MobileMenuOverlay({ open, onOpenChange }) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="border-none">
				<div className="flex items-center justify-between">
					<SheetHeader>
						<SheetTitle className="text-4xl">MB</SheetTitle>
					</SheetHeader>
					<SheetFooter>
						<SheetClose asChild />
					</SheetFooter>
				</div>

				<ul className="flex flex-col h-fit justify-evenly items-center flex-grow gap-12 pt-16">
					<li className=" w-full text-center">
						<Link
							href={"#/"}
							onClick={() => onOpenChange(false)}
							className={`hover:text-hover text-lg py-2`}
						>
							Home
						</Link>
					</li>
					<li className=" w-full text-center">
						<Link
							href={"/#skills"}
							onClick={() => onOpenChange(false)}
							className={`hover:text-hover text-lg py-2`}
						>
							Skills
						</Link>
					</li>
					<li className=" w-full text-center">
						<Link
							href={"/#projects"}
							onClick={() => onOpenChange(false)}
							className={`hover:text-hover text-lg py-2`}
						>
							Projects
						</Link>
					</li>
					<li className=" w-full text-center">
						<Link
							href={"/#contact"}
							onClick={() => onOpenChange(false)}
							className={`hover:text-hover text-lg py-2`}
						>
							Contact
						</Link>
					</li>
					<li className=" w-full text-center">
						<ThemeSwitchButton />
					</li>
				</ul>
			</SheetContent>
		</Sheet>
	);
}

// export default function MobileMenuOverlay({ onClose }) {
// 	return (
// 		<motion.div
// 			className="fixed inset-0 z-50 bg-black bg-opacity-95"
// 			initial={{ x: 100 }}
// 			animate={{ x: 0 }}
// 			transition={{ duration: 0.3, ease: "linear" }}
// 		>
// 			{/* <FocusLock> */}
// 			{/* Focus lock to trap focus in also to stop scrolling (could use react-focus-on), issue: it doesn't have react 19 support yet.. Update later */}
// 			<div className="relative  h-full w-full flex flex-col gap-24">
// 				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
// 					<Logo />

// 					<button
// 						aria-label="Close Menu"
// 						className="size-12 mr-2"
// 						onClick={onClose}
// 					>
// 						<XMarkIcon className="size-12" />
// 					</button>
// 				</div>

// 				<ul className="flex flex-col justify-start items-center flex-grow gap-24">
// 					<li>
// 						<Link href={"/"} className={`hover:text-hover text-lg py-2`}>
// 							Home
// 						</Link>
// 					</li>
// 					<li>
// 						<Link
// 							href={"/#projects"}
// 							className={`hover:text-hover text-lg py-2`}
// 						>
// 							Projects
// 						</Link>
// 					</li>
// 					<li>
// 						<Link href={"/#skills"} className={`hover:text-hover text-lg py-2`}>
// 							Skills
// 						</Link>
// 					</li>
// 					<li>
// 						<Link
// 							href={"/#contact"}
// 							className={`hover:text-hover text-lg py-2`}
// 						>
// 							Contact
// 						</Link>
// 					</li>
// 				</ul>
// 			</div>
// 			{/* </FocusLock> */}
// 		</motion.div>
// 	);
// }
