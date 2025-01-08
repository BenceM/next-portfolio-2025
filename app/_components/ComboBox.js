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

const frameworks = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
	{
		value: "sveltekit1",
		label: "SvelteKit1",
	},
	{
		value: "nuxt.js1",
		label: "Nuxt.js1",
	},
	{
		value: "remix1",
		label: "Remix1",
	},
	{
		value: "astro1",
		label: "Astro1",
	},
];

export function ComboBox() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="relative flex items-center justify-center w-[200px]  hover:shadow-xl after:h-[110%] after:w-[102%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:-z-10 after:rounded-md "
				>
					<div className="w-full flex justify-between">
						{value
							? frameworks.find((framework) => framework.value === value)?.label
							: "Select framework..."}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</div>
				</Button>
			</PopoverTrigger>

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
									onSelect={(currentValue) => {
										setValue(currentValue === value ? "" : currentValue);
										setOpen(false);
									}}
									className="data-[selected=true]:bg-bgHover border-t border-sky-800/20 first:border-t-0"
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											value === framework.value ? "opacity-100" : "opacity-0",
										)}
									/>
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
