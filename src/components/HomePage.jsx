import Accessories from './Accesseries';
import { Banner } from './Banner';
import { BestSeller } from './BestSeller';
import Footer from './Footer';
import { Header } from './Header';
import { HiddenContent } from './HiddenComponent';
import MotorCycle from './MotorCycle';
import { NavBar } from './NavBar';
import Shopping from './Shopping';

function LocalhostWarning() {
  return (
    <div className="HomePage">
      <NavBar/>
      <Header />
      <Banner/>
      <HiddenContent />
      <MotorCycle />
      <Shopping />
      <Accessories />
      <BestSeller/>
      <Footer/>
    </div>
  );
}

export default LocalhostWarning;
