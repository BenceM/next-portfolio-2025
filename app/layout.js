import { Toaster } from "@/components/ui/toaster";
import Header from "./_components/Header";
import "./_styles/globals.css";
import { ThemeProvider } from "./_components/ThemeContext";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
	title: "Bence's Portfolio",
	description:
		"Bence Meszaros portfolio page, here you will find all the project's I've worked on and can be presented. And you will find all the neat information tid bits you need about me and my work",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body className="w-full">
				{/* don't forget to change tailwind config  also change logic in bubblemap*/}
				<ThemeProvider defaultTheme="system" storageKey="theme">
					<Header />

					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
