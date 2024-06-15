// UI Components
import { Link as RouterLink } from 'react-router-dom';

// Images
import article1 from '../../assets/images/news/blog_img_01.jpg';
import article2 from '../../assets/images/news/blog_img_02.jpg';
import article3 from '../../assets/images/news/blog_img_03.jpg';

// ---------------

function Blog() {
  /**
   * Returning window to (0 position) when going to single blog page
   */
  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div
      id="content"
      className="site-content center-relative single single-post"
      style={{ marginTop: '100px', marginBottom: '120px' }}
    >
      <div className="blog-holder block center-relative">
        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article1} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Optimizing Agricultural Operations with Leelavati Automation's Advanced Sensor Technology
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Agriculture</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single">
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article2} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Enhancing Efficiency Across Industries with Leelavati Automation's Advanced Sensor Technology
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Conveyors</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Mobile Equipment Operations with Leelavati Automation's Advanced Sensor Technology
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Mobile Equipments</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Leelavati Automation: Revolutionizing Energy Management in Corporate Parks
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Buildings and corporate parks</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Leelavati Automation: Pioneering the Future of Plastic Machinery Manufacturing
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">Plastic and rubber</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>

        <article className="relative blog-item-holder center-relative has-post-thumbnail">
          <div className="blog-item-wrapper">
            <div className="post-thumbnail">
              <RouterLink to="/single" onClick={handleClick}>
                <div className="post-thumbnail-image">
                  <img src={article3} alt="" />
                </div>
              </RouterLink>
            </div>
            <div className="entry-holder">
              <h2 className="entry-title">
                <RouterLink to="/single" onClick={handleClick}>
                  Leelavati Automation: Comprehensive Solutions for HVAC Systems
                </RouterLink>
              </h2>
              <div className="entry-info">
                <div className="entry-info-left">
                  <div className="cat-links">
                    <ul>
                      <li>
                        <a href="#">HVAC</a>
                      </li>
                    </ul>
                  </div>
                  <div className="entry-date published">June 10, 2024</div>
                </div>
                <div className="excerpt">
                  <p>
                    Bearable only through love hydrogen atoms bits of moving
                    fluff culture shores of the cosmic ocean paroxysm of global
                    death rich in heavy atoms with pretty stories …
                  </p>
                </div>
              </div>
              <RouterLink className="button" to="/single" onClick={handleClick}>
                READ MORE
              </RouterLink>
            </div>
            <div className="clear"></div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Blog;
