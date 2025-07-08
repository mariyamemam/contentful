import { Banner } from './Banner';
import { BestSeller } from './BestSeller';
import Footer from './Footer';
import { Header } from './Header';
import { HiddenContent } from './HiddenComponent';
import { NavBar } from './NavBar';

function LocalhostWarning() {
  return (
    <div className="HomePage">
      <NavBar/>
      <Header />
      <Banner/>
      <HiddenContent />
      <BestSeller/>
      <Footer/>
    </div>
  );
}

export default LocalhostWarning;
