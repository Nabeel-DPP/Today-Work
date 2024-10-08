import React from 'react'
import { Link } from 'react-router-dom'
export const UserActivity = () => {
  return (
    <div class="content-wrapper">
    <div class="content">
<div class="card card-default card-profile">

<div class="card-header-bg" style={{image:"url(assets/img/user/user-bg-01.jpg)"}}></div>

<div class="card-body card-profile-body">

<div class="profile-avata">
<img class="rounded-circle" src="images/user/user-md-01.jpg" alt="Avata Image"/>
<a class="h5 d-block mt-3 mb-2" href="#">Albrecht Straub</a>
<a class="d-block text-color" href="#">albercht@example.com</a>
</div>

<ul class="nav nav-profile-follow">
<li class="nav-item">
  <a class="nav-link" href="#">
    <span class="h5 d-block">1503</span>
    <span class="text-color d-block">Friends</span>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">
    <span class="h5 d-block">2905</span>
    <span class="text-color d-block">Followers</span>
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">
    <span class="h5 d-block">1200</span>
    <span class="text-color d-block">Following</span>
  </a>
</li>

</ul>

<div class="profile-button">
<a class="btn btn-primary btn-pill" href="user-planing-settings.html">Upgrade Plan</a>
</div>

</div>

<div class="card-footer card-profile-footer">
{/* <ul class="nav nav-border-top justify-content-center">
<li class="nav-item">
  <a class="nav-link" href="user-profile.html">Profile</a>
</li>
<li class="nav-item">
  <a class="nav-link active" href="user-activities.html">Activities</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="user-profile-settings.html">Settings</a>
</li>

</ul> */}
 <ul class="nav nav-border-top justify-content-center">
      <li class="nav-item">
        {/* <a class="nav-link active" href="user-profile.html">Profile</a> */}
        <Link class="nav-link " to="/userProfile">Profile</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="user-activities.html">Activities</a> */}
        <Link class="nav-link active" to="/userActivity">Activities</Link>
      </li>
      <li class="nav-item">
        {/* <a class="nav-link" href="user-profile-settings.html">Settings</a> */}
        <Link class="nav-link" to="/userAccount">Settings</Link>
      </li>

    </ul>
</div>

</div>

<div class="row">
<div class="col-xl-9">
<div class="card card-default">
<div class="card-header">
  <h2>Activities</h2>
</div>
<div class="card-body">

  <div class="media media-sm border-bottom pb-6">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-01.jpg" alt="User Image"/>
      </a>
    </div>
    <div class="media-body">
      <div class="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="left-side">
          <a class="title mb-0 d-block" href="user-profile.html">Selena Wagner</a>
          <a class="d-block" href="user-profile.html">Designer</a>
        </div>
        <div class="right-side">
          <time class="small">5 mins ago</time>
        </div>
      </div>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div class="row user-gallery">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-01.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-02.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

  <div class="media media-sm border-bottom">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-02.jpg" alt="User Image"/>
      </a>
    </div>
    <div class="media-body">
      <div class="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="left-side">
          <a class="title mb-0 d-block" href="user-profile.html">Walter Reuter</a>
          <a class="d-block" href="user-profile.html">Designer</a>
        </div>
        <div class="right-side">
          <time class="small">2 hrs ago</time>
        </div>
      </div>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
    </div>
  </div>

  <div class="media media-sm border-bottom pb-6">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-03.jpg" alt="User Image"/>
      </a>
    </div>
    <div class="media-body">
      <div class="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="left-side">
          <a class="title mb-0 d-block" href="user-profile.html">Larissa Gebhard</a>
          <a class="d-block" href="user-profile.html">Cyber Punk</a>
        </div>
        <div class="right-side">
          <time class="small">5 hrs ago</time>
        </div>
      </div>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna  aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div class="row user-gallery">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-03.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

  <div class="media media-sm border-bottom pb-6">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-04.jpg" alt="User Image"/>
      </a>
    </div>
    <div class="media-body">
      <div class="d-flex justify-content-between flex-wrap align-items-center mb-5">
        <div class="left-side">
          <a class="title mb-0 d-block" href="user-profile.html">Albrecht Straub</a>
          <a class="d-block" href="user-profile.html">Photographer</a>
        </div>
        <div class="right-side">
          <time class="small">7 hrs ago</time>
        </div>
      </div>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. ut enim ad minim veniam quis nos trud exercitation ullamco laboris nisi ut aliquip.</p>
      <div class="row user-gallery">
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-04.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-05.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-06.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-07.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-08.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-09.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-10.jpg" alt="Gallery Image"/>
        </div>
        <div class="col-md-6 col-lg-4 col-xl-3">
          <img class="img-fluid mb-6" src="images/gallery/gallery-img-11.jpg" alt="Gallery Image"/>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
</div>
<div class="col-xl-3">
<div class="card card-default">
<div class="card-header">
  <h2>Contacts</h2>
</div>
<div class="card-body">

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-01.jpg" alt="User Image"/>
        <span class="active bg-primary"></span>
      </a>
    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Selena Wagner</span>
        <span class="discribe">Designer</span>
      </a>
    </div>
  </div>

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-02.jpg" alt="User Image"/>
        <span class="active bg-primary"></span>
      </a>
    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Walter Reuter</span>
        <span>Developer</span>
      </a>
    </div>
  </div>

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-03.jpg" alt="User Image"/>
      </a>
    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Larissa Gebhardt</span>
        <span>Cyber Punk</span>
      </a>
    </div>
  </div>

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-04.jpg" alt="User Image"/>
      </a>

    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Albrecht Straub</span>
        <span>Photographer</span>
      </a>
    </div>
  </div>

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-05.jpg" alt="User Image"/>
        <span class="active bg-danger"></span>
      </a>
    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Leopold Ebert</span>
        <span>Fashion Designer</span>
      </a>
    </div>
  </div>

  <div class="media media-sm">
    <div class="media-sm-wrapper">
      <a href="user-profile.html">
        <img src="images/user/user-sm-06.jpg" alt="User Image"/>
        <span class="active bg-primary"></span>
      </a>
    </div>
    <div class="media-body">
      <a href="user-profile.html">
        <span class="title">Selena Wagner</span>
        <span>Photographer</span>
      </a>
    </div>
  </div>

</div>
</div>
</div>
</div>


</div>
    
  </div>
  )
}
