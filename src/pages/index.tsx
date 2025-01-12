import Navbar from '@/components/Layout/Navbar'
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'
import FeaturesSlider from '@/components/featuresslider'
import Footer from '@/components/Layout/Footer'
import TrustBadges from '@/components/trustbadges'
import FAQ from '@/components/faq'
import Why from '@/components/why'
import TieredSystem from '@/components/tieredsystem'
import About from '@/components/about'
import Free from '@/components/free'
import ClassContent from '@/components/classcontent'
import Articles from '@/components/articles'
import Calls from '@/components/calls'
import Contents from '@/components/contents'
import { Element } from 'react-scroll'
import Meta from '@/components/Layout/Meta'
import StudentTests from '@/components/studenttests'
import WistiaVideo from '@/components/wistia-embed'

export default function Home() {
	return (
		<main
			style={{
				background:
					'linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)',
			}}
		>
			* * <Meta />
			<Navbar />
			<Hero />
			<div className="w-[90%] mx-auto max-w-4xl">
				<WistiaVideo />
			</div>
			<FeaturesSlider />
			/*
			<Element name="testimonials">
				<Testimonials />
			</Element>
			<TrustBadges />
			<About />
			<Element name="omos">
				<Articles />
			</Element>
			<Calls />
			<Contents />
			<Element name="content">
				<ClassContent />
			</Element>
			<Why />
			<FAQ />
			<Footer />
		</main>
	)
}
