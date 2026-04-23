
import Image from "next/image";
import { FaCcVisa, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from '../../../assets/images/freshcart-logo.49f1b44d.svg'
import Link  from "next/link";
export default function Footer() {


  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white rounded-lg px-4 py-2 inline-block">
                <Image
                  src={logo}
                  alt="FreshCart Logo"
                  loading="lazy"
                  width={160}
                  height={31}
                  decoding="async"
                  className="h-8 w-auto"
                  style={{ color: "transparent" }}
                />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-3 mb-6">
              <Link href="tel:+18001234567" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <FaPhone size={'1rem'} />
                +1 (800) 123-4567
              </Link>
              <Link href="mailto:support@freshcart.com" className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm">
                <MdEmail size={'1rem'} />
                support@freshcart.com
              </Link>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt size={'1rem'} />
                123 Commerce Street, New York, NY 10001
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Shop</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="text-gray-400 hover:text-green-400">All Products</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-green-400">Categories</Link></li>
              <li><Link href="/brands" className="text-gray-400 hover:text-green-400">Brands</Link></li>
              <li><Link href="/products?category=electronics" className="text-gray-400 hover:text-green-400">Electronics</Link></li>
              <li><Link href="/products?category=mens-fashion" className="text-gray-400 hover:text-green-400">Men's Fashion</Link></li>
              <li><Link href="/products?category=womens-fashion" className="text-gray-400 hover:text-green-400">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/profile" className="text-gray-400 hover:text-green-400">My Account</Link></li>
              <li><Link href="/profile/orders" className="text-gray-400 hover:text-green-400">Order History</Link></li>
              <li><Link href="/wishlist" className="text-gray-400 hover:text-green-400">Wishlist</Link></li>
              <li><Link href="/cart" className="text-gray-400 hover:text-green-400">Shopping Cart</Link></li>
              <li><Link href="/login" className="text-gray-400 hover:text-green-400">Sign In</Link></li>
              <li><Link href="/register" className="text-gray-400 hover:text-green-400">Create Account</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-gray-400 hover:text-green-400">Contact Us</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-green-400">Help Center</Link></li>
              <li><Link href="/shipping" className="text-gray-400 hover:text-green-400">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-400 hover:text-green-400">Returns & Refunds</Link></li>
              <li><Link href="/track-order" className="text-gray-400 hover:text-green-400">Track Order</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-green-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-green-400">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-green-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Visa", "Mastercard", "PayPal"].map((card) => (
              <div key={card} className="flex items-center gap-2 text-gray-500 text-sm">
                <FaCcVisa />
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}