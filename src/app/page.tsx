"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplitAvatars from '@/components/sections/hero/HeroSplitAvatars';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardSeventeen from '@/components/sections/feature/FeatureCardSeventeen';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Leaf, Flame, Truck } from "lucide-react";

export default function CoffeePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="mediumSizeExtraLargeSpacing"
      background="noiseGradient"
      cardStyle="outline-light"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="outline"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795674693-xfcn6hr5.jpg"
          logoAlt="Coffee Brand Logo"
          brandName="Brew Haven"
          button={{
            text: "Shop Now",
            href: "shop"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Sip the Best Coffee, Anytime, Anywhere"
          description="Ethically sourced, expertly roasted, and delivered to your door—because every cup should be extraordinary"
          tag="Premium Coffee"
          tagIcon={Coffee}
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795682439-lo76tlnp.jpg",
              alt: "Coffee enthusiast 1"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795683248-bjx9fp7a.jpg",
              alt: "Coffee enthusiast 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795684184-r5p0ckkk.jpg",
              alt: "Coffee enthusiast 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795685190-8v7hcegb.jpg",
              alt: "Coffee enthusiast 4"
            }
          ]}
          avatarText="Join 5,000+ coffee lovers enjoying exceptional brews daily"
          buttons={[
            {
              text: "Shop Now",
              href: "shop"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795675598-tikjun02.jpg"
          imageAlt="Premium coffee being poured"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <MediaAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795678763-v9vx6str.jpg"
          imageAlt="Ethical coffee farming"
          buttons={[
            {
              text: "Our Story",
              href: "#"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="features" data-section="features">
        <FeatureCardSeventeen
          title="Why Choose Brew Haven"
          description="We're committed to quality, sustainability, and exceptional taste in every cup"
          features={[
            {
              id: "1",
              icon: Leaf,
              text: "Ethically Sourced"
            },
            {
              id: "2",
              icon: Flame,
              text: "Expertly Roasted"
            },
            {
              id: "3",
              icon: Truck,
              text: "Fast Delivery"
            }
          ]}
          animationType="slide-up"
          variant="card"
          useUncappedRounding={false}
          useSplitLayout={true}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardSix
          title="Featured Bestsellers"
          description="Discover our most loved coffee selections, handpicked for quality and flavor"
          products={[
            {
              id: "1",
              name: "Ethiopian Highlands",
              price: "$18",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795676472-zm8czj4d.jpg",
              imageAlt: "Ethiopian Highlands coffee"
            },
            {
              id: "2",
              name: "Colombian Origins",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795677211-cx14tzwy.jpg",
              imageAlt: "Colombian Origins coffee"
            },
            {
              id: "3",
              name: "Brazilian Reserve",
              price: "$20",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795678023-ixzrdvbi.jpg",
              imageAlt: "Brazilian Reserve coffee"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Coffee Lovers Say"
          description="Real experiences from our community of passionate coffee enthusiasts"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Coffee Enthusiast",
              testimonial: "The quality is exceptional. Every morning starts with anticipation for the next cup. This is my go-to for specialty coffee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795682439-lo76tlnp.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Office Manager",
              testimonial: "We switched our office to Brew Haven subscription and couldn't be happier. Our team absolutely loves these beans.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795683248-bjx9fp7a.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Home Brewer",
              testimonial: "Finally found a brand that takes ethics seriously without compromising on taste. Been a loyal customer for 8 months now.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795684184-r5p0ckkk.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Park",
              role: "Coffee Roaster",
              testimonial: "The consistency and freshness of the roast is remarkable. I recommend Brew Haven to anyone serious about coffee quality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795685190-8v7hcegb.jpg",
              imageAlt: "David Park"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee, shipping, and subscriptions"
          faqs={[
            {
              id: "1",
              title: "How often should I receive my subscription?",
              content: "You can customize your delivery frequency to weekly, bi-weekly, or monthly based on your consumption. Adjust anytime through your account dashboard."
            },
            {
              id: "2",
              title: "What makes your coffee ethically sourced?",
              content: "We work directly with farmers in origin countries, ensuring fair wages, sustainable farming practices, and transparent supply chains. Every bag includes information about its specific farm."
            },
            {
              id: "3",
              title: "How long does shipping take?",
              content: "Standard shipping takes 3-5 business days. Expedited shipping is available for 1-2 business days. Your subscription always includes free standard shipping."
            },
            {
              id: "4",
              title: "Can I cancel my subscription anytime?",
              content: "Absolutely. You can pause or cancel your subscription anytime without penalties. We want you to love your coffee—no commitments required."
            },
            {
              id: "5",
              title: "What grind options are available?",
              content: "We offer whole bean, espresso grind, drip grind, and French press grind. Select your preference during checkout or in your subscription settings."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to experience exceptional coffee? Join our community and get 15% off your first order."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Get 15% Off",
              href: "#"
            },
            {
              text: "Subscribe Now",
              href: "#"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "All Coffee",
                  href: "shop"
                },
                {
                  label: "Subscriptions",
                  href: "subscriptions"
                },
                {
                  label: "Gift Sets",
                  href: "gifts"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Brewing Guides",
                  href: "brewing"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "privacy"
                },
                {
                  label: "Terms and Conditions",
                  href: "terms"
                }
              ]
            }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765795674693-xfcn6hr5.jpg"
          logoText="Brew Haven"
          copyrightText="© 2025 Brew Haven Coffee. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}