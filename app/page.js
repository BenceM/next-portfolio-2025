import Main from "./_components/Main";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default async function Page() {
	// console.log("rerender");
	return (
		<main className="flex flex-col mt-2 md:mt-28 gap-36 pb-8 ">
			<Main />
			<Skills />
			<Projects />
		</main>
	);
}
