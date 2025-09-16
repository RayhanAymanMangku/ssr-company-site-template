import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ScrollButton from "@/components/ui/scroll-button";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Navbar
                logoText="Company"
                telNumber="(0123) 456789"
                email="johndoe@example.com"
            />
            {children}
            <Footer logoText="Company" />
            <ScrollButton />
        </main>
    );
}