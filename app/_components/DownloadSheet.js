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

export function DownloadSheet({ open, onOpenChange }) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="border-none">
				<SheetHeader>
					<SheetTitle>Downloads</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="">
						<Label className="text-right">My resume</Label>
					</div>
					<div className="">
						<Button variant="link">Bence-Meszaros-CV.pdf</Button>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Certificates</Label>
					</div>
					<div className="">
						{/* <Label className="text-right">CV</Label> */}
						<DownloadHoverCard
							text="The Ultimate React Course"
							desc="- React, Next.js, Redux & More by Jonas Schmedtmann"
							date="November 2024"
						/>
					</div>
					<div className="">
						{/* <Label className="text-right">CV</Label> */}
						<DownloadHoverCard
							text="Chainlink - Blockchain Fundamentals"
							desc="Blockchain, Hashing, Merkle tree, DEX, NFT - Chainlink"
							date="November 2024"
						/>
					</div>
					<div className="">
						{/* <Label className="text-right">CV</Label> */}
						<DownloadHoverCard
							text="Modern React with Redux"
							desc="Master React and Redux, React Router, TailwindCSS, Context, and Hooks! by Stephen Grider"
							date="June 2023"
						/>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
