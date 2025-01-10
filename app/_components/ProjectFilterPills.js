import { XMarkIcon } from "@heroicons/react/24/solid";

export default function ProjectFilterPills({ value, handleSelect, label }) {
	return (
		<button
			className={`px-6 py-1 transition-all ease-in-out duration-300 bg-background relative flex items-center justify-center hover:bg-bgHover hover:shadow-xl rounded-full after:h-[108%] after:w-[103%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:rounded-full after:-z-10 group `}
			onClick={() => handleSelect(value)}
		>
			<p className="group-hover:opacity-0 duration-100 ">{label}</p>
			<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-imageBg">
				<div className="font-bold ">
					<XMarkIcon className="w-6 h-6 text-white" />
				</div>
			</div>
		</button>
	);
}
