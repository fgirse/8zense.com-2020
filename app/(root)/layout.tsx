import Footer from "@/components/share/Footer";
import Header from "@/components/share/Header";
import ScrollToTop from "@/components/BackToTop/ScrollToTop";
import Newsletter from "@/components/share/Newsletter";
import styles from "./styles.module.css";
import Container from '@/components/share/Container';
import { HeadManagerContext } from "next/dist/shared/lib/head-manager-context.shared-runtime";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Container>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
      <Newsletter />
      <Footer />
      </Container>
    </>
  );
}
