export default function FilterButton({
	filter,
	handleFilter,
	activeFilter,
	children,
}) {
	return (
		<button
			className={`px-3 py-1 xl:px-6 xl:py-3 transition-all ease-in-out duration-300 bg-background relative flex items-center justify-center hover:bg-bgHover hover:shadow-xl rounded-full after:h-[107%] after:w-[104%] after:absolute after:bg-gradient-to-br after:from-sky-800 after:to-teal-800 after:rounded-full after:-z-10 ${
				filter === activeFilter
					? "bg-gradient-to-br from-sky-800  to-teal-800 "
					: ""
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}
