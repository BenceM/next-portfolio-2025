import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

export function DownloadSheet({ open, onOpenChange }) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Downloads</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">CV</Label>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label className="text-right">Certificates</Label>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
