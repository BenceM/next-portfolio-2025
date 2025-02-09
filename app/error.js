"use client";

function Error({ error, reset }) {
	return (
		<main className="flex justify-center items-center flex-col mt-44 gap-6">
			<h1 className="text-3xl font-semibold">Something went wrong!</h1>
			<p className="text-lg">{error.message}</p>
			<button
				className="inline-block bg-gradientMain px-6 py-3 text-lg text-foreground"
				onClick={reset}
			>
				Try again
			</button>
		</main>
	);
}

export default Error;
