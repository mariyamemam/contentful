import { Banner } from './Banner';
import { BestSeller } from './BestSeller';
import Footer from './Footer';
import { Header } from './Header';
import { NavBar } from './NavBar';

function LocalhostWarning() {
  return (
    <div className="HomePage">
      <NavBar/>
      <Header />
      <Banner/>
      <BestSeller/>
      <Footer/>
    </div>
  );
}

export default LocalhostWarning;
