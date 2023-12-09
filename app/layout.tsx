import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
const lexend_Deca = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TypeMentor",
  description:
    "Welcome to TypeMentor, your ultimate destination to enhance your typing skills and speed. Our platform is dedicated to helping individuals of all levels master the art of fast and efficient typing. Enjoy interactive lessons, personalized learning paths, real-time feedback, exciting challenges, and a supportive community. Whether you're a student, a professional, or someone simply looking to enhance their typing skills, TypeMentor is the go-to platform for unlocking your full typing potential. Start your journey to faster, more efficient typing today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend_Deca.className} bg-skin-base h-screen`}>
        <Container>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
