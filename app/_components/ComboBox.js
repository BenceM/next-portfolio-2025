"use client";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import ProjectFilterPills from "./ProjectFilterPills";

export function ComboBox({ selectedValues, handleSelect, frameworks }) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					aria-label="Technology filter button for the projects"
					className="relative flex items-center justify-center w-[200px]  hover:shadow-xl after:h-[110%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:-z-10 after:rounded-md "
				>
					<div className="w-full flex justify-between">
						{selectedValues.length > 0
							? "Select more..."
							: // ? frameworks.find((framework) => framework.value === value)?.label
							  "Select framework..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</div>
				</Button>
			</PopoverTrigger>
			<div className="flex flex-row gap-2">
				{selectedValues.length > 0 &&
					selectedValues.map((value) => {
						const { label } = frameworks.find(
							(framework) => framework.value === value,
						);
						return (
							<ProjectFilterPills
								key={value}
								value={value}
								label={label}
								handleSelect={handleSelect}
							/>
						);
					})}
			</div>
			<PopoverContent className="w-[200px] p-0 bg-background border-none relative flex items-center justify-center after:h-[101%] after:w-[101%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:-z-10 after:rounded-md ">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandList className="max-h-[200px] overflow-y-auto scrollbar-thumb-only">
						<CommandEmpty>No framework found.</CommandEmpty>
						<CommandGroup className="border-none">
							{frameworks.map((framework) => (
								<CommandItem
									key={framework.value}
									value={framework.value}
									onSelect={handleSelect}
									className="hover:bg-bgHover border-t border-sky-800/20 first:border-t-0"
								>
									<div
										className={cn(
											"mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
											selectedValues.includes(framework.value)
												? "bg-primary text-primary-foreground"
												: "opacity-50",
										)}
									>
										<Check
											className={cn(
												"h-4 w-4",
												selectedValues.includes(framework.value)
													? "opacity-100"
													: "opacity-0",
											)}
										/>
									</div>
									{framework.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
