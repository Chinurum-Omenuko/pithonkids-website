import About from "@/components/page/about/About";
import OurMethods from "@/components/page/about/OurMethod";
import OurPeople from "@/components/page/about/OurPeople";
import Qualifications from "@/components/page/about/Qualifications";
import WhoAreWe from "@/components/page/about/WhoAreWe";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function AboutPage() {
    return(
        <>
            <WhoAreWe />
            <OurPeople />
            <Qualifications />
            <OurMethods />
        </>
    )
}