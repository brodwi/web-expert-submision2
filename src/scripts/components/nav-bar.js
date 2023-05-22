class NavBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="nav-bar">
          <div class="mobile-menu">
            <div class="icon-menu" id="menu"><a href="#">&#9776;</a></div>
            <div class="mobile-logo">Brodwi Restaurant</div>
            <div class="mobile-logo">&nbsp;</div>
          </div>
          <nav id="wrapper" class="mobile-nav">
            <ul class="nav-mobile-list">
              <li class="nav-mobile-item"><a href="/">Home</a></li>
              <li class="nav-mobile-item"><a href="#">Favorite</a></li>
              <li class="nav-mobile-item">
                <a href="https://github.com/brodwi">About Us</a>
              </li>
            </ul>
          </nav>
    
          <nav class="nav">
            <a class="logo" href="">Urban Restaurant</a>
            <ul class="nav-list">
              <li class="nav-item"><a href="/">Home</a></li>
              <li class="nav-item"><a href="#">Explore</a></li>
              <li class="nav-item">
                <a href="https://github.com/brodwi">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
        `;
    }
  }
  customElements.define("nav-bar", NavBar);