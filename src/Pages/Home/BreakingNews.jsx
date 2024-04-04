import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex gap-2">
          <button className="btn btn-secondary">Breaking News</button>  
          <Marquee pauseOnHover={true} speed={80}>
          <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          </Link>
          <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          </Link>
          <Link className="mr-12" to="/">
          Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
          </Link>
          </Marquee>
        </div>
    );
};

export default BreakingNews;