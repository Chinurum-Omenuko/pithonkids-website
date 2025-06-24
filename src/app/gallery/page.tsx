import BlogSection from "@/components/page/gallery/BlogSection";
import Gallery from "@/components/page/gallery/Gallery";

export default function whatsnew() {
    return(
        <>
            <BlogSection />
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Take a look at us in action</h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                
                </p>
            </div>
            <Gallery />
        </>
    )
}