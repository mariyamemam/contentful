import { Banner } from './Banner';
import { BestSeller } from './BestSeller';
import Footer from './Footer';
import { NavBar } from './NavBar';
import { Header } from './header';

function LocalhostWarning() {
  return (
    <div className="HomePage">
      <NavBar/>
      <Header/>
      <Banner/>
      <BestSeller/>
      <Footer/>
    </div>
  );
}

export default LocalhostWarning;
