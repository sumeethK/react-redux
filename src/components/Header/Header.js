import React from 'react';

import './styles.css';

const Header = () => <div class="bg-dark text-secondary px-4 py-5 text-center">
<div class="py-5">
  <h1 class="display-5 fw-bold text-white">What the Splash!</h1>
  <div class="col-lg-6 mx-auto">
    <p class="fs-5 mb-4">Amazing app to render images dynamically using React Saga libray</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Hello</button>
      <button type="button" class="btn btn-outline-light btn-lg px-4">React-Saga</button>
    </div>
  </div>
</div>
</div>;

export default Header;
