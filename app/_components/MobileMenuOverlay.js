import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Logo from "./Logo";

export default function MobileMenuOverlay({ onClose }) {
	return (
		<div className="fixed inset-0 z-50 bg-black bg-opacity-40">
			<div className="relative  h-full w-full flex flex-col">
				<div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
					<Logo />

					<button className="size-12 mr-2" onClick={onClose}>
						<XMarkIcon className="size-12" />
					</button>
				</div>

				<ul className="flex flex-col justify-center items-center flex-grow">
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
		</div>
	);
}
