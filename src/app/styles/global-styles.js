import { createGlobalStyle } from "styled-components";
// import { StyleConstants } from "./StyleConstants";

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
 

 :root {
  --blue: #65E4A3;;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #dc3545;
  --orange: #fd7e14;
  --yellow: #ffc107;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #6c757d;
  --gray-dark: #343a40;
  --primary: #007bff;
  --secondary: #6c757d;
  --success: #28a745;
  --info: #17a2b8;
  --warning: #ffc107;
  --danger: #dc3545;
  --light: #f8f9fa;
  --dark: #343a40;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

@import url(https://fonts.googleapis.com/css?family=Rajdhani:400,600,700);
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700);
@import url(https://fonts.googleapis.com/css2?family=Cabin&display=swap);
body {
  color: #797979;
  font-family: 'Cabin', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.667;
  padding: 0;
  margin: 0;
}
* {
  padding: 0;
  margin: 0;
}

p{
  font-family: 'Open Sans';
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
button {
  cursor: pointer;
}
button:focus {
  outline: 0;
  box-shadow: none;
}
h1,
h2,
h3,
h4,
h5, p{
  font-family: 'Cabin', sans-serif;
  font-style: normal;
}

.paragraph{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #777777;
}
h1,
.h1 {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
}
@media (min-width: 600px) {
  h1,
  .h1 {
    font-size: 50px;
  }
}
h2,
.h2 {
  font-size: 28px;
  font-weight: 700;
}
@media (min-width: 1000px) {
  h2,
  .h2 {
    font-size: 36px;
  }
}
h3,
.h3 {
  font-size: 20px;
  font-weight: 600;
}
@media (min-width: 1000px) {
  h3,
  .h3 {
    font-size: 22px;
  }
}
.pb-85px {
  padding-bottom: 45px;
}
@media (min-width: 1000px) {
  .pb-85px {
    padding-bottom: 85px;
  }
}
.section-margin {
  margin: 60px 0;
}
@media (min-width: 1000px) {
  .section-margin {
    margin: 100px 0;
  }
}
@media (min-width: 1200px) {
  .section-margin {
    margin: 135px 0;
  }
}
.section-margin--medium {
  margin: 40px 0;
}
@media (min-width: 800px) {
  .section-margin--medium {
    margin: 80px 0;
  }
}
@media (min-width: 1200px) {
  .section-margin--medium {
    margin: 120px 0;
  }
}
.section-padding {
  padding: 60px 0;
}
@media (min-width: 1000px) {
  .section-padding {
    padding: 100px 0;
  }
}
@media (min-width: 1200px) {
  .section-padding {
    padding: 135px 0;
  }
}
.section-padding--small {
  padding: 60px 0;
}
@media (min-width: 1000px) {
  .section-padding--small {
    padding: 100px 0;
  }
}
.bg-magnolia {
  width: 100%;
  height: 600px;
  background: #0A2640;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6rem;
}
.bg-magnolia-2 {
  width: 100%;
  height: 600px;
  background: #0A2640;
}
.bg-magnolia-3{
  width: 100%;
  height: fit-content;
  background: #0A2640;
}

.subcribe-area{
  background: #0A2640;
  height: 400px;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  border-radius: 4px;
  padding: 0;
  
}

.subcribe-text-wrapper{
  z-index: 150;
  width: 80%;
  height: 30%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  margin-top: 70px;
  flex-direction: column;
}
.subcribe-text-wrapper h3{
  font-size: 44px;
  line-height: 60px;
  color: #FFFFFF;
  text-align: center;
  padding-left: 3rem;
}

.illustration{
 float: right;
  background: #1C3D5B;
  height: 60%;
  width:70%;
  border-bottom-left-radius: 100%;
  border-top-right-radius: inherit;
  z-index: 100;
}

.header-subtitle{
  font-style: normal;
  font-weight: 400;
   font-size: 48px;

}
.headers-title{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
}

.magnolia-area{
  max-width: 80%;
  margin: auto;
  color: #ffffff;
  height: 60%;

}
.margin-auto{
  margin: auto;
  width: 80%;
}
.magnolia-area-2{
  max-width: 60%;
  margin: auto;
  height: fit-content

}

.flex{
  display: flex;
  justify-content: space-around;
}
.flex-2{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
}
.flexbox{
  display: flex;
  justify-content: space-between;
  align-items: center;
 
}

.mission-text{
  width: 50%;
  margin-top: 2rem;
  
}

#footer-wrapper{
  width: 70%;
  display: flex;
}

.mission-text p {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #F1F1F1;
}

.bold-text{
  font-weight: 400;
  font-size: 40px;
  line-height: 72px;

}

.section-team{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.text-grey{
  color: #F1F1F1;
}

.small-container{
  max-width: 400px;
}

#magnolia-para{
  color: #F1F1F1 !important;
}

.email-input{
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  margin-right: 2rem;
  padding: 1rem;
  
}

.submit-btn{
  background: #65E4A3;
  border: 2px solid #65E4A3;
  border-radius: 56px;
  color: #000;
}

.sans-font{
  font-family: 'Open Sans';
  font-style: normal;
}

.subcription_form{
  width: 100% !important;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

}

.header_area {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.4s, all 0.3s linear;
}
.header_area .navbar-right {
  min-width: 200px;
  text-align: right;
}
@media (max-width: 991px) {
  .header_area .navbar-right {
    margin: 20px 0;
  }
}
.header_area .navbar-brand {
  margin-right: 30px;
}
.header_area .menu_nav {
  width: 100%;
}

.header_area .navbar {
  background: #65E4A3;
  padding: 0.5rem 0;
  border: 0;
  border-radius: 0;
  width: 100%;
  height: fit-content;
}
@media (min-width: 991px) {
  .header_area .navbar {
    padding: 20px 0;
  }
}

.brand-name {
  color: var(--white);
  font-size: 1.5rem;
}

.header_area .navbar .nav .nav-item {
  margin-right: 30px;
}
.header_area .navbar .nav .nav-item .nav-link {
  font-family: 'Open Sans';
  color:  #0A2640;
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
  display: inline-block;
}
.header_area .navbar .nav .nav-item .dropdown_nav-link{
  font-family: 'Open Sans';
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  display: inline-block;
}


.header_area .navbar .nav .nav-item .nav-link:after {
  display: none;
}
.header_area .navbar .nav .nav-item:hover .nav-link,
.header_area .navbar .nav .nav-item.active .nav-link {
  color: #fff;
  opacity: 0.75;
}
.header_area .navbar .nav .nav-item.submenu {
  position: relative;
}
.header_area .navbar .nav .nav-item.submenu ul {
  border: none;
  padding: 0;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  background: #fff;
}
@media (min-width: 992px) {
  .header_area .navbar .nav .nav-item.submenu ul {
    position: absolute;
    top: 120%;
    left: 0;
    min-width: 200px;
    text-align: left;
    opacity: 0;
    transition: all 300ms ease-in;
    visibility: hidden;
    display: block;
    border: none;
    padding: 0;
    border-radius: 0;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.4);
  }
}
.header_area .navbar .nav .nav-item.submenu ul:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #eee transparent transparent transparent;
  position: absolute;
  right: 24px;
  top: 45px;
  z-index: 3;
  opacity: 0;
  transition: all 400ms linear;
}
.header_area .navbar .nav .nav-item.submenu ul .nav-item {
  display: block;
  float: none;
  margin-right: 0;
  border-bottom: 1px solid #ededed;
  margin-left: 0;
  transition: all 0.4s linear;
}
.header_area .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
  line-height: 45px;
  color: #21146a !important;
  padding: 0 30px;
  transition: all 150ms linear;
  display: block;
  margin-right: 0;
}
.header_area .navbar .nav .nav-item.submenu ul .nav-item:last-child {
  border-bottom: none;
}
.header_area .navbar .nav .nav-item.submenu ul .nav-item:hover .nav-link {
  background-color: #21146a;
  color: #fff !important;
}
@media (min-width: 992px) {
  .header_area .navbar .nav .nav-item.submenu:hover ul {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
}
.header_area .navbar .nav .nav-item.submenu:hover ul .nav-item {
  margin-top: 0;
}
.header_area .navbar .nav .nav-item:last-child {
  margin-right: 0;
}
.header_area .navbar .search {
  font-size: 12px;
  line-height: 60px;
  display: inline-block;
  margin-left: 80px;
}
.header_area .navbar .search i {
  font-weight: 600;
}
.header_area.navbar_fixed .main_menu {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  background: #412fb3;
  z-index: 99;
  transform: translateY(70px);
  transition: transform 500ms ease, background 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}
.header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
  line-height: 20px;
}
@media (max-width: 1619px) {
  .header_area .navbar .search {
    margin-left: 40px;
  }
}
@media (max-width: 1199px) {
  .header_area .navbar .nav .nav-item {
    margin-right: 28px;
  }
}
@media (max-width: 991px) {
  .navbar-toggler {
    border: none;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    margin-top: 27px;
    margin-bottom: 23px;
  }
  .header_area .navbar {
    background: #412fb3;
  }
  .navbar-toggler[aria-expanded="false"] span:nth-child(2) {
    opacity: 1;
  }
  .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }
  .navbar-toggler[aria-expanded="true"] span:first-child {
    transform: rotate(-45deg);
    position: relative;
    top: 7.5px;
  }
  .navbar-toggler[aria-expanded="true"] span:last-child {
    transform: rotate(45deg);
    bottom: 6px;
    position: relative;
  }
  .navbar-toggler span {
    display: block;
    width: 25px;
    height: 3px;
    background: #fff;
    margin: auto;
    margin-bottom: 4px;
    transition: all 400ms linear;
    cursor: pointer;
  }
  .navbar .container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .nav {
    padding: 0 0;
  }
  .header_area + section,
  .header_area + row,
  .header_area + div {
    margin-top: 117px;
  }
  .header_area .navbar .nav .nav-item .nav-link {
    line-height: 30px;
    margin-right: 0;
    display: block;
    border-bottom: 1px solid #ededed33;
    border-radius: 0;
  }
  .header_area .navbar .search {
    margin-left: 0;
  }
  .header_area .navbar-collapse {
    max-height: 340px;
    overflow-y: scroll;
  }
  .header_area .navbar .nav .nav-item.submenu ul .nav-item .nav-link {
    padding: 0 15px;
  }
  .header_area .navbar .nav .nav-item {
    margin-right: 0;
  }
  .header_area + section,
  .header_area + row,
  .header_area + div {
    margin-top: 41px;
  }
  .header_area.navbar_fixed .main_menu .navbar .nav .nav-item .nav-link {
    line-height: 40px;
  }
  .categories_post img {
    width: 100%;
  }
  .categories_post {
    max-width: 360px;
    margin: 0 auto;
  }
  .blog_categorie_area .col-lg-4 {
    margin-top: 30px;
  }
  .blog_area {
    padding-bottom: 80px;
  }
  .single-post-area .blog_right_sidebar {
    margin-top: 30px;
  }
}
@media (max-width: 767px) {
  .blog_info.text-right {
    text-align: left !important;
    margin-bottom: 10px;
  }
  .footer-bottom {
    text-align: center;
  }
  .footer-bottom .footer-social {
    text-align: center;
    margin-top: 15px;
  }
}
@media (max-width: 575px) {
  .header_area + section,
  .header_area + row,
  .header_area + div {
    margin-top: 51px;
  }
  .blog_details h2 {
    font-size: 20px;
    line-height: 30px;
  }
  .footer-area {
    padding: 70px 0;
  }
}
@media (max-width: 480px) {
  .header_area .navbar-collapse {
    max-height: 250px;
  }
  .comments-area .thumb {
    margin-right: 10px;
  }
}
.hero-banner {
  position: relative;
  background: #65E4A3;
  background-size: cover;
  padding: 60px 0 60px 0;
  z-index: 1;
  height: 40vh;
}

#about__img{
  padding: 2rem;
}

.about__img-inner{
  /* max-width: 350px; */
  /* max-height: 250px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 600px) {
  .hero-banner {
    padding: 100px 0 120px 0;
  }
}
@media (min-width: 991px) {
  .hero-banner {
    padding: 175px 0 160px 0;
  }
}
@media (min-width: 1200px) {
  .hero-banner {
    padding: 200px 0 275px 0;
  }
}
.hero-banner__header {
  position: relative;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #000000;
}

.about__portfolio{
  text-align: left;
  padding: 10px;
}

.hero-banner__content h1 {
  color: #fff;
  margin-bottom: 22px;
}

.hero-banner__content{
  width: 90%;
  margin: auto;
  display: flex;
  padding-left: 4rem;

}
.hero-banner__content p {
  color: #0A2640;
  margin-bottom: 45px;
}
.hero-banner::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  z-index: -1;
}
.hero-banner--sm {
  padding: 0;
  height: 300px;
}
.hero-banner--sm::after {
  height: 100%;
}
@media (min-width: 1000px) {
  .hero-banner--sm {
    height: 500px;
  }
}
.hero-banner--sm__content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  text-align: center;
}
@media (min-width: 600px) {
  .hero-banner--sm__content {
    margin-top: 40px;
  }
}
.hero-banner--sm__content > * {
  color: #fff;
}
.hero-banner--sm__content h3 {
  font-size: 27px;
  margin-bottom: 0;
}
.hero-banner--sm__content h1 {
  margin-bottom: 10px;
}
.hero-banner--sm__content h4 {
  font-size: 18px;
}
.banner-breadcrumb {
  display: inline-block;
}
.banner-breadcrumb .breadcrumb {
  background: transparent;
  padding: 0;
}
.banner-breadcrumb .breadcrumb-item {
  padding: 0.1rem;
}
.banner-breadcrumb .breadcrumb-item a {
  text-transform: capitalize;
  color: #fff;
}
.banner-breadcrumb .breadcrumb-item + .breadcrumb-item::before {
  color: #fff;
  padding-left: 0.2rem;
  padding-right: 0.4rem;
}
.banner-breadcrumb .breadcrumb-item.active {
  color: #fff;
}
.section-intro {
  max-width: 630px;
  margin-right: auto;
  margin-left: auto;
}
.section-intro__title {
  color: #3a414e;
  margin-bottom: 10px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
}
.section-intro__subtitle {
  font-family: 'Cabin', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #0A2640;
}
.card-feature {
  padding: 30px 35px;
  border: 0;
  border-radius: 0;
  background: transparent;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.card-feature__icon {
  margin-bottom: 12px;
}
.card-feature__icon i,
.card-feature__icon span {
  font-size: 30px;
  color: #21146a;
}
.card-feature__title {
  font-family: 'Cabin', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4rem;
  line-height: 29px;
  color: #0A2640;
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-feature__subtitle {
  margin-bottom: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;  
  color: #0A2640;
}
.card-feature:hover {
  background: #fff;
  box-shadow: 0 10px 20px 0 rgba(33, 20, 106, 0.1);
}
.about__content h2 {
  margin-bottom: 20px;
}
.about__content p {
  margin-bottom: 38px;
}

.offer-single {
  margin-bottom: 30px;
}
@media (min-width: 991px) {
  .offer-single {
    margin-bottom: 50px;
  }
}
.offer-single__content {
  border: 0;
  border-radius: 0;
  background: #faf9ff;
  padding: 30px 23px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.offer-single__content h4 {
  font-size: 22px;
  font-weight: 600;
}
.offer-single__content p {
  margin-bottom: 0;
}
.offer-single__content:hover {
  background: #fff;
  box-shadow: 0 10px 20px 0 rgba(33, 20, 106, 0.1);
}
.offer-single__icon {
  display: inline-block;
  margin-bottom: 15px;
}
.offer-single__icon i,
.offer-single__icon span {
  font-size: 30px;
  color: #21146a;
}

@media (min-width: 991px) {
  .offer-single-wrapper .offer-single:nth-child(even) {
    position: relative;
    top: 40px;
  }
}
@media (min-width: 1200px) {
  .solution__img {
    position: relative;
    left: -60px;
  }
  .solution__content {
    padding-left: 30px;
    padding-right: 45px;
  }
}
.solution__content h2 {
  margin-bottom: 20px;
}
.solution__content p {
  margin-bottom: 30px;
}
.card-pricing {
  background: #faf9ff;
  border-radius: 3px;
  border: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.card-pricing:hover {
  background: #fff;
  box-shadow: 0 20px 25.5px 4.5px rgba(33, 20, 106, 0.1);
}
.card-pricing:hover .button {
  background: #21146a;
  color: #fff;
}
.card-pricing__header {
  border-bottom: 1px solid #ebebeb;
  padding: 40px 7px;
}
.card-pricing__header h4 {
  font-size: 27px;
  font-weight: 700;
  margin-bottom: 5px;
}
.card-pricing__header p {
  margin-bottom: 27px;
}
.card-pricing__price {
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  margin: 0;
}
@media (min-width: 991px) {
  .card-pricing__price {
    font-size: 60px;
  }
}
.card-pricing__price span {
  font-size: 40px;
  vertical-align: middle;
  position: relative;
  bottom: 5px;
}
.card-pricing__list {
  padding: 30px 8px 25px 8px;
  border-bottom: 1px solid #ebebeb;
}
.card-pricing__list li {
  margin-bottom: 12px;
}
.card-pricing__list li:last-child {
  margin-bottom: 0;
}
.card-pricing__list li i,
.card-pricing__list li span {
  font-size: 13px;
  margin-right: 10px;
}
.card-pricing__list li.unvalid i,
.card-pricing__list li.unvalid span {
  color: #f81c1c;
  font-size: 12px;
}
.card-pricing__footer {
  padding: 45px 0;
}
.testimonial {
  max-width: 970px;
  margin-right: auto;
  margin-left: auto;
}
.testimonial__img {
  width: 120px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 30px;
  z-index: 5;
}
.testimonial__content {
  background: #fff;
  padding: 50px 10px 35px 10px;
  position: relative;
}
@media (min-width: 1000px) {
  .testimonial__content {
    padding: 50px 20px 35px 20px;
  }
}
.testimonial__content h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 0;
}
.testimonial__content p {
  font-size: 14px;
}
.testimonial__i {
  font-size: 15px !important;
  font-style: italic;
  margin-bottom: 0;
}
.clients_logo_area .clients_slider .item {
  text-align: center;
}
.clients_logo_area .clients_slider .item img {
  width: auto;
  text-align: center;
  display: block;
  margin: auto;
  line-height: 70px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.2;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.clients_logo_area .clients_slider .item:hover img {
  opacity: 1;
  -webkit-filter: grayscale(0%);
  -moz-filter: grayscale(0%);
  -o-filter: grayscale(0%);
  -ms-filter: grayscale(0%);
  filter: grayscale(0%);
}
.blog_categorie_area {
  padding-top: 30px;
  padding-bottom: 30px;
}
@media (min-width: 900px) {
  .blog_categorie_area {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
@media (min-width: 1100px) {
  .blog_categorie_area {
    padding-top: 120px;
    padding-bottom: 120px;
  }
}
.categories_post {
  position: relative;
  text-align: center;
  cursor: pointer;
}
.categories_post img {
  max-width: 100%;
}
.categories_post .categories_details {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgba(34, 34, 34, 0.75);
  color: #fff;
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories_post .categories_details h5 {
  margin-bottom: 0;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #fff;
  position: relative;
}
.categories_post .categories_details p {
  font-weight: 300;
  font-size: 14px;
  line-height: 26px;
  margin-bottom: 0;
}
.categories_post .categories_details .border_line {
  margin: 10px 0;
  background: #fff;
  width: 100%;
  height: 1px;
}
.categories_post:hover .categories_details {
  background: rgba(56, 74, 235, 0.85);
}
.blog_item {
  margin-bottom: 40px;
}
.blog_info {
  padding-top: 30px;
}
.blog_info .post_tag {
  padding-bottom: 20px;
}
.blog_info .post_tag a {
  color: #3a414e;
  font-size: 14px;
}
.blog_info .post_tag a.active {
  color: #21146a;
}
.blog_info .blog_meta li a {
  color: #777;
  vertical-align: middle;
  padding-bottom: 10px;
  display: inline-block;
  font-size: 14px;
}
.blog_info .blog_meta li a i {
  color: #3a414e;
  font-size: 16px;
  font-weight: 600;
  padding-left: 15px;
  line-height: 20px;
  vertical-align: middle;
}
.blog_info .blog_meta li a:hover {
  color: #21146a;
}
.blog_post img {
  max-width: 100%;
}
.blog_details {
  padding-top: 20px;
}
.blog_details h2 {
  font-size: 24px;
  line-height: 36px;
  color: #3a414e;
  font-weight: 600;
  transition: all 0.3s linear;
}
.blog_details h2:hover {
  color: #21146a;
}
.blog_details p {
  margin-bottom: 26px;
}
.blog_right_sidebar {
  border: 1px solid #eee;
  background: #fafaff;
  padding: 30px;
}
.blog_right_sidebar .widget_title {
  font-size: 18px;
  line-height: 25px;
  background: #21146a;
  text-align: center;
  color: #fff;
  padding: 8px 0;
  margin-bottom: 30px;
}
.blog_right_sidebar .search_widget .input-group .form-control {
  font-size: 14px;
  line-height: 29px;
  border: 0;
  width: 100%;
  font-weight: 300;
  color: #fff;
  padding-left: 20px;
  border-radius: 45px;
  z-index: 0;
  background: #21146a;
}
.blog_right_sidebar .search_widget .input-group .form-control.placeholder {
  color: #fff;
}
.blog_right_sidebar .search_widget .input-group .form-control:-moz-placeholder {
  color: #fff;
}
.blog_right_sidebar
  .search_widget
  .input-group
  .form-control::-moz-placeholder {
  color: #fff;
}
.blog_right_sidebar
  .search_widget
  .input-group
  .form-control::-webkit-input-placeholder {
  color: #fff;
}
.blog_right_sidebar .search_widget .input-group .form-control:focus {
  box-shadow: none;
}
.blog_right_sidebar .search_widget .input-group .btn-default {
  position: absolute;
  right: 20px;
  background: transparent;
  border: 0;
  box-shadow: none;
  font-size: 14px;
  color: #fff;
  padding: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.blog_right_sidebar .author_widget {
  text-align: center;
}
.blog_right_sidebar .author_widget h4 {
  font-size: 18px;
  line-height: 20px;
  color: #3a414e;
  margin-bottom: 5px;
  margin-top: 30px;
}
.blog_right_sidebar .author_widget p {
  margin-bottom: 0;
}
.blog_right_sidebar .author_widget .social_icon {
  padding: 7px 0 15px;
}
.blog_right_sidebar .author_widget .social_icon a {
  font-size: 14px;
  color: #3a414e;
  transition: all 0.2s linear;
}
.blog_right_sidebar .author_widget .social_icon a + a {
  margin-left: 20px;
}
.blog_right_sidebar .author_widget .social_icon a:hover {
  color: #21146a;
}
.blog_right_sidebar .popular_post_widget .post_item .media-body {
  justify-content: center;
  align-self: center;
  padding-left: 20px;
}
.blog_right_sidebar .popular_post_widget .post_item .media-body h3 {
  font-size: 14px;
  line-height: 20px;
  color: #3a414e;
  margin-bottom: 4px;
  transition: all 0.3s linear;
}
.blog_right_sidebar .popular_post_widget .post_item .media-body h3:hover {
  color: #21146a;
}
.blog_right_sidebar .popular_post_widget .post_item .media-body p {
  font-size: 12px;
  line-height: 21px;
  margin-bottom: 0;
}
.blog_right_sidebar .popular_post_widget .post_item + .post_item {
  margin-top: 20px;
}
.blog_right_sidebar .post_category_widget .cat-list li {
  border-bottom: 2px dotted #eee;
  transition: all 0.3s ease 0s;
  padding-bottom: 12px;
}
.blog_right_sidebar .post_category_widget .cat-list li a {
  font-size: 14px;
  line-height: 20px;
  color: #777;
}
.blog_right_sidebar .post_category_widget .cat-list li a p {
  margin-bottom: 0;
}
.blog_right_sidebar .post_category_widget .cat-list li + li {
  padding-top: 15px;
}
.blog_right_sidebar .post_category_widget .cat-list li:hover {
  border-color: #21146a;
}
.blog_right_sidebar .post_category_widget .cat-list li:hover a {
  color: #21146a;
}
.blog_right_sidebar .newsletter_widget {
  text-align: center;
}
.blog_right_sidebar .newsletter_widget .form-group {
  margin-bottom: 8px;
}
.blog_right_sidebar .newsletter_widget .input-group-prepend {
  margin-right: -1px;
}
.blog_right_sidebar .newsletter_widget .input-group-text {
  background: #fff;
  border-radius: 0;
  vertical-align: top;
  font-size: 12px;
  line-height: 36px;
  padding: 0 0 0 15px;
  border: 1px solid #eee;
  border-right: 0;
}
.blog_right_sidebar .newsletter_widget .input-group-text i {
  color: #ccc;
}
.blog_right_sidebar .newsletter_widget .form-control {
  font-size: 12px;
  line-height: 24px;
  color: #ccc;
  border: 1px solid #eee;
  border-left: 0;
  border-radius: 0;
}
.blog_right_sidebar .newsletter_widget .form-control.placeholder {
  color: #ccc;
}
.blog_right_sidebar .newsletter_widget .form-control:-moz-placeholder {
  color: #ccc;
}
.blog_right_sidebar .newsletter_widget .form-control::-moz-placeholder {
  color: #ccc;
}
.blog_right_sidebar
  .newsletter_widget
  .form-control::-webkit-input-placeholder {
  color: #ccc;
}
.blog_right_sidebar .newsletter_widget .form-control:focus {
  outline: none;
  box-shadow: none;
}
.blog_right_sidebar .newsletter_widget .bbtns {
  background: #21146a;
  color: #fff;
  font-size: 12px;
  line-height: 38px;
  display: inline-block;
  font-weight: 500;
  padding: 0 24px 0 24px;
  border-radius: 0;
}
.blog_right_sidebar .newsletter_widget .text-bottom {
  font-size: 12px;
}
.blog_right_sidebar .tag_cloud_widget ul li {
  display: inline-block;
}
.blog_right_sidebar .tag_cloud_widget ul li a {
  display: inline-block;
  border: 1px solid #eee;
  background: #fff;
  padding: 0 13px;
  margin-bottom: 8px;
  transition: all 0.3s ease 0s;
  color: #3a414e;
  font-size: 12px;
}
.blog_right_sidebar .tag_cloud_widget ul li a:hover {
  background: #21146a;
  color: #fff;
}
.blog_right_sidebar .br {
  width: 100%;
  height: 1px;
  background: #eee;
  margin: 30px 0;
}
.blog-pagination {
  padding-top: 25px;
  padding-bottom: 95px;
}
.blog-pagination .page-link {
  border-radius: 0;
}
.blog-pagination .page-item {
  border: none;
}
.page-link {
  background: transparent;
  font-weight: 400;
}
.blog-pagination .page-item.active .page-link {
  background-color: #21146a;
  border-color: transparent;
  color: #fff;
}
.blog-pagination .page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #8a8a8a;
  border: none;
}
.blog-pagination .page-link .lnr {
  font-weight: 600;
}
.blog-pagination .page-item:last-child .page-link,
.blog-pagination .page-item:first-child .page-link {
  border-radius: 0;
}
.blog-pagination .page-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #21146a;
  border-color: #eee;
}
.single-post-area .social-links {
  padding-top: 10px;
}
.single-post-area .social-links li {
  display: inline-block;
  margin-bottom: 10px;
}
.single-post-area .social-links li a {
  color: #ccc;
  padding: 7px;
  font-size: 14px;
  transition: all 0.2s linear;
}
.single-post-area .social-links li a:hover {
  color: #3a414e;
}
.single-post-area .blog_details {
  padding-top: 26px;
}
.single-post-area .blog_details p {
  margin-bottom: 10px;
}
.single-post-area .quotes {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 24px 35px 24px 30px;
  background-color: #fff;
  box-shadow: -20.84px 21.58px 30px 0 rgba(176, 176, 176, 0.1);
  font-size: 14px;
  line-height: 24px;
  color: #777;
  font-style: italic;
}
.single-post-area .arrow {
  position: absolute;
}
.single-post-area .arrow .lnr {
  font-size: 20px;
  font-weight: 600;
}
.single-post-area .navigation-area {
  border-top: 1px solid #eee;
  padding-top: 30px;
  margin-top: 60px;
}
.single-post-area .navigation-area p {
  margin-bottom: 0;
}
.single-post-area .navigation-area h4 {
  font-size: 18px;
  line-height: 25px;
  color: #3a414e;
}
.single-post-area .navigation-area .nav-left {
  text-align: left;
}
.single-post-area .navigation-area .nav-left .thumb {
  margin-right: 20px;
  background: #000;
}
.single-post-area .navigation-area .nav-left .thumb img {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.single-post-area .navigation-area .nav-left .lnr {
  margin-left: 20px;
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.single-post-area .navigation-area .nav-left:hover .lnr {
  opacity: 1;
}
.single-post-area .navigation-area .nav-left:hover .thumb img {
  opacity: 0.5;
}
@media (max-width: 767px) {
  .single-post-area .navigation-area .nav-left {
    margin-bottom: 30px;
  }
}
.single-post-area .navigation-area .nav-right {
  text-align: right;
}
.single-post-area .navigation-area .nav-right .thumb {
  margin-left: 20px;
  background: #000;
}
.single-post-area .navigation-area .nav-right .thumb img {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.single-post-area .navigation-area .nav-right .lnr {
  margin-right: 20px;
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.single-post-area .navigation-area .nav-right:hover .lnr {
  opacity: 1;
}
.single-post-area .navigation-area .nav-right:hover .thumb img {
  opacity: 0.5;
}
.comments-area {
  background: #fafaff;
  border: 1px solid #eee;
  padding: 50px 30px;
  margin-top: 50px;
}
@media (max-width: 414px) {
  .comments-area {
    padding: 50px 8px;
  }
}
.comments-area h4 {
  text-align: center;
  margin-bottom: 50px;
  color: #3a414e;
  font-size: 18px;
}
.comments-area h5 {
  font-size: 16px;
  margin-bottom: 0;
}
.comments-area a {
  color: #3a414e;
}
.comments-area .comment-list {
  padding-bottom: 48px;
}
.comments-area .comment-list:last-child {
  padding-bottom: 0;
}
.comments-area .comment-list.left-padding {
  padding-left: 25px;
}
@media (max-width: 413px) {
  .comments-area .comment-list .single-comment h5 {
    font-size: 12px;
  }
  .comments-area .comment-list .single-comment .date {
    font-size: 11px;
  }
  .comments-area .comment-list .single-comment .comment {
    font-size: 10px;
  }
}
.comments-area .thumb {
  margin-right: 20px;
}
.comments-area .date {
  font-size: 13px;
  color: #ccc;
  margin-bottom: 13px;
}
.comments-area .comment {
  color: #777;
  margin-bottom: 0;
}
.comments-area .btn-reply {
  background-color: #fff;
  color: #3a414e;
  padding: 5px 18px;
  font-size: 12px;
  display: block;
  font-weight: 400;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.comments-area .btn-reply:hover {
  background-color: #21146a;
  color: #fff;
  font-weight: 700;
}
.comment-form {
  background: #fafaff;
  text-align: center;
  border: 1px solid #eee;
  padding: 47px 30px 43px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.comment-form .form-group {
  margin-bottom: 20px;
}
.comment-form h4 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 22px;
  color: #3a414e;
}
.comment-form .name {
  padding-left: 0;
}
@media (max-width: 767px) {
  .comment-form .name {
    padding-right: 0;
    margin-bottom: 1rem;
  }
}
.comment-form .email {
  padding-right: 0;
}
@media (max-width: 991px) {
  .comment-form .email {
    padding-left: 0;
  }
}
.comment-form .form-control {
  padding: 8px 20px;
  background: #fff;
  border: none;
  border-radius: 0;
  width: 100%;
  font-size: 14px;
  color: #777;
  border: 1px solid transparent;
}
.comment-form .form-control:focus {
  box-shadow: none;
  border: 1px solid #eee;
}
.comment-form .form-control::placeholder {
  color: #777;
}
.comment-form textarea.form-control {
  height: 140px;
  resize: none;
}
.comment-form ::-webkit-input-placeholder {
  font-size: 13px;
  color: #777;
}
.comment-form ::-moz-placeholder {
  font-size: 13px;
  color: #777;
}
.comment-form :-ms-input-placeholder {
  font-size: 13px;
  color: #777;
}
.comment-form :-moz-placeholder {
  font-size: 13px;
  color: #777;
}
.contact-info__icon {
  margin-right: 20px;
}
.contact-info__icon i,
.contact-info__icon span {
  color: #21146a;
  font-size: 20px;
}
.contact-info .media-body h3 {
  font-size: 16px;
  margin-bottom: 0;
}
.contact-info .media-body h3 a {
  color: #3a414e;
}
.contact-info .media-body p {
  color: #999;
}
.form-contact .form-group {
  margin-bottom: 10px;
}
.form-contact .form-control {
  border-radius: 0;
  height: 40px;
  padding-left: 18px;
  border-color: transparent;
  background: rgba(130, 139, 178, 0.1);
}
.form-contact .form-control:focus {
  outline: 0;
  box-shadow: none;
}
.form-contact .form-control::placeholder {
  font-size: 14px;
  color: #999;
}
.form-contact .different-control {
  height: 100% !important;
}
.button {
  display: inline-block;
  border: 1px solid transparent;
  text-transform: capitalize;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 30px;
  background-color: #fff;
  color: #21146a;
  color: #3a414e;
  transition: all 0.4s ease;
}
.button i,
.button span {
  margin-left: 5px;
}
@media (min-width: 900px) {
  .button {
    padding: 12px 45px;
  }
}
.button:hover {
  background-color: transparent;
  border-color:  #0A2640;
  color: #002;
}
.button-header {
  padding: 10px 30px;
  background: #65E4A3;
  border: 2px solid #0A2640;
  width: 150px;

}
.button.bg:hover {
  border-color: #fff;
  color: #fff;
}
.button-light {
  background-color: transparent;
  border-color: #21146a;
}
.button-light:hover {
  background-color: #21146a;
  color: #fff;
}
.button-blog {
  border: 1px solid #21146a;
  border-radius: 4px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
  color: #222;
  padding: 7px 30px;
}
.button-blog:hover {
  background-color: #21146a;
  color: #fff;
}
.button-postComment {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #21146a;
  color: #fff;
  border-radius: 4px;
  padding: 14px 45px;
}
.button-contactForm {
  font-size: 15px;
  background-color: #21146a;
  color: #fff;
  padding: 12px 36px;
}
.button-contactForm:hover {
  border-color: #21146a;
  color: #21146a;
}
.footer-area {
  padding: 120px 0 120px;
  /* background: #0e1424; */
}
@media (max-width: 991px) {
  .footer-area {
    padding: 60px 0;
  }
  .footer-area .single-footer-widget {
    margin-bottom: 30px;
  }
}
.footer-area .single-footer-widget p {
  color: #7b838a;
}
.footer-area .single-footer-widget h4 {
  color: #fff;
  font-size: 22px;
  margin-bottom: 25px;
  font-weight: 600;
}
@media (max-width: 1024px) {
  .footer-area .single-footer-widget h4 {
    font-size: 18px;
  }
}
@media (max-width: 991px) {
  .footer-area .single-footer-widget h4 {
    margin-bottom: 15px;
  }
}
.footer-area .single-footer-widget ul li {
  margin-bottom: 10px;
}
.footer-area .single-footer-widget ul li a {
  color: #797979;
}
.footer-area .single-footer-widget .form-wrap {
  margin-top: 25px;
}
.footer-area .single-footer-widget input {
  height: 48px;
  border: none;
  width: 67% !important;
  font-weight: 400;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding-left: 20px;
  border-radius: 0;
  font-size: 14px;
  padding: 10px;
}
.footer-area .single-footer-widget input:focus {
  outline: none;
  box-shadow: none;
}
.footer-area .single-footer-widget input.placeholder {
  padding-left: 10px;
  color: #797979;
}
.footer-area .single-footer-widget input:-moz-placeholder {
  padding-left: 10px;
  color: #797979;
}
.footer-area .single-footer-widget input::-moz-placeholder {
  padding-left: 10px;
  color: #797979;
}
.footer-area .single-footer-widget input::-webkit-input-placeholder {
  padding-left: 10px;
  color: #797979;
}
.footer-area .single-footer-widget .click-btn {
  font-family: "Roboto", sans-serif;
  color: #3a414e;
  border-radius: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 8px 20px;
  border: 0;
  font-size: 14px;
  background: #fff;
  font-weight: 500;
  text-transform: capitalize;
  position: relative;
  left: 0;
}
.footer-area .single-footer-widget .click-btn:focus {
  outline: none;
  box-shadow: none;
}
@media (max-width: 375px) {
  .footer-area .single-footer-widget .click-btn {
    margin-top: 10px;
  }
}
@media (min-width: 400px) {
  .footer-area .single-footer-widget .click-btn {
    left: -50px;
  }
}
.footer-area .footer-bottom {
  margin-top: 70px;
}
@media (max-width: 991px) {
  .footer-area .footer-bottom {
    margin-top: 20px;
  }
}
.footer-area .footer-bottom p {
  color: #797979;
}
.footer-area .footer-bottom p a {
  color: #fff;
}
.footer-area .footer-bottom .footer-social {
  text-align: center;
}
@media (max-width: 991px) {
  .footer-area .footer-bottom .footer-social {
    text-align: left;
    margin-top: 30px;
  }
}
.footer-area .footer-bottom .footer-social a {
  background: rgba(255, 255, 255, 0.15);
  margin-left: 3px;
  width: 32px;
  color: #fff;
  display: inline-grid;
  text-align: center;
  height: 32px;
  align-content: center;
}
.footer-area .footer-bottom .footer-social a:hover {
  background: #fff;
  color: #21146a;
}
.footer-area .footer-bottom .footer-social a i,
.footer-area .footer-bottom .footer-social a span {
  font-size: 14px;
}


`;
