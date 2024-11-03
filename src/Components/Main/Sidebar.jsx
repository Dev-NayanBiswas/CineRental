import trending from "../../assets/icons/trending.svg";
import newRe from "../../assets/icons/newRelease.svg";
import coming from "../../assets/icons/commingSoon.svg";
import fav from "../../assets/icons/favourite.svg";
import watchLater from "../../assets/icons/watchLater.svg";
function Sidebar() {
  return (
    <>
        <aside>
				<ul className="space-y-2">
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
							<img src={trending} width="24" height="24" alt="" />
							<span>Trending</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={newRe} width="24" height="24" alt="" />
							<span>New Releases</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={coming} width="24" height="24" alt="" />
							<span>Coming Soon</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={fav} width="24" height="24" alt="" />
							<span>Favourites</span>
						</a>
					</li>
					<li>
						<a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
							<img src={watchLater} width="24" height="24" alt="" />
							<span>Watch Later</span>
						</a>
					</li>
				</ul>
			</aside>
    </>
  )
}

export default Sidebar