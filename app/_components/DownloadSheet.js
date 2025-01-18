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
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

export function DownloadSheet({ open, onOpenChange }) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="border-none">
				<SheetHeader>
					<SheetTitle className="text-xl text-gradientVia">
						Downloads
					</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right text-lg">Certificates</Label>
					</div>
					<div className=" flex flex-col items-start gap-5">
						{/* <Label className="text-right">CV</Label> */}
						<div className="flex justify-between items-center ">
							<DownloadHoverCard
								text="The Ultimate React Course"
								desc="- React, Next.js, Redux & More by Jonas Schmedtmann"
								date="November 2024"
							/>
							<Link href="">
								<DownloadIcon className="size-4" />
							</Link>
						</div>
						<div className="flex justify-between items-center ">
							{/* <Label className="text-right">CV</Label> */}
							<DownloadHoverCard
								text="Chainlink - Blockchain Fundamentals"
								desc="Blockchain, Hashing, Merkle tree, DEX, NFT - Chainlink"
								date="November 2024"
							/>
							<Link href="">
								<DownloadIcon className="size-4" />
							</Link>
						</div>
						<div className="flex justify-between items-center ">
							{/* <Label className="text-right">CV</Label> */}
							<DownloadHoverCard
								text="Modern React with Redux"
								desc="Master React and Redux, React Router, TailwindCSS, Context, and Hooks! by Stephen Grider"
								date="June 2023"
							/>
							<Link href="">
								<DownloadIcon className="size-4" />
							</Link>
						</div>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
