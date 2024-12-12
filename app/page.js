import Main from "./_components/Main";
import Skills from "./_components/Skills";

export default async function Page() {
	return (
		<main className="flex flex-col min-h-screen mt-2 md:mt-28 gap-20">
			<Main />
			<Skills />
		</main>
	);
}
