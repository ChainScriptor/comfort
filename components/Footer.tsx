import { categoriesData, quickLinksData } from "@/constants";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

const Footer = () => {
    return (
        <footer>

            <Container className="bg-white border-t" >
                <FooterTop />
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Logo>Comfort</Logo>
                        <p className="text-gray-600 text-sm">Discover a wide range of high quality  products, from top tier cookware to fresh ingredients, designed to elevate every culinary experience.
                            Streamline your operations with ease order online today and let excellence begin in your kitchen!</p>
                        <SocialMedia className="text-darkColor/60 flex " iconClassName="border-darkColor/60 hover:border-darkColor hover:text-darkColor"
                            tooltipClassName="bg-darkColor text-white" />
                    </div>

                    <div>
                        <h3 className="font-semibold text-darkColor mb-4">Quick Links</h3>
                        <div className="flex flex-col gap-3">
                            {quickLinksData?.map((item) => (
                                <Link key={item?.title} href={item?.href} className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect">{item?.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-darkColor mb-4">Categories</h3>
                        <div className="flex flex-col gap-3">
                            {categoriesData?.map((item) => (
                                <Link key={item?.title} href={`/category${item?.href}`} className="text-gray-600 hover:text-darkColor text-sm font-medium hoverEffect">{item?.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-darkColor mb-4">Newsletter</h3>
                        <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter to receive updates and exclusive offers.</p>
                        <form className="space-y-3">
                            <input type="email" placeholder="Enter your email address" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" />
                            <button type="submit" className="w-full bg-darkColor text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
export default Footer