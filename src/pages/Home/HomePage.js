import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProduct';
import { Faq } from './components/Faq';
import { useTitle } from '../../hooks/useTitle';

export const HomePage = () => {
    useTitle("Access Latest Computer Science e-book");
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Faq />
        </main>
    )
}

