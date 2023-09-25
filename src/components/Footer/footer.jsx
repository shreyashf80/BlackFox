import './footer.css'

const Footer = () => {
  return (
    <div className='footer-conatiner'>
      <div className='footer-menu'>
        <div className="center-logo">
          <img src='./assets/goldfox.png'
            alt="ora-fox" />
        </div>
        <div className="contact-info">
          <div className='info-tabs manage tabular'>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Contact US</li>
            </ul>
          </div>
          <div className='info-tabs our-mission tabular'>
            <ul className='our-vision'>
              <li>Values</li>
              <li>Financials</li>
              <li>Who we are?</li>
              <li>What do we do?</li>
              <li>Our Mission Statement</li>
            </ul>
          </div>
          <div className='info-tabs social-temp'>
            <div className='contact-us'>
              <ul className='social-net'>
                <li className='con-social'>
                  <a href='#'>
                    <img className='sum-mod'
                      src='./assets/twitter.png'
                      width="35px"
                      height="35px"
                      alt='linkme' />
                  </a>
                </li>
                <li className='con-social'>
                  <a href='#'>
                    <img className='sum-mod' src='./assets/linkedin.png'
                      width="35px"
                      height="35px"
                      alt='tweetme' />
                  </a>

                </li>
                <li className='con-social'>
                  <a href='#'>
                    <img className='sum-mod'
                      src='./assets/instagram.png'
                      alt='instasup'
                      width="35px"
                      height="35px"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <form>
              <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <button type="submit">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div className="center-abvcopy">
      </div>
      <div className="center-copy-info">
        <p>&copy;Black Fox.All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;