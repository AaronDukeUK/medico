import "./images.js"

import "../scss/reset.sass";
import "../scss/fonts.sass";

import "../scss/typography.sass";
import "../scss/general.sass";
import "../scss/wishlist.scss";

// Misc

import "../scss/misc/miscNavbar.sass";
import "../scss/misc/miscShopNav.sass";
import "../scss/misc/footer.sass";

import "../scss/misc/FAQ.sass";
import "../scss/misc/contact.sass";
import "../scss/misc/wishlist.sass";
import "../scss/misc/search.sass";

// Account

import "../scss/account/profile.sass";
import "../scss/account/tabs.sass";
import "../scss/account/purchases.sass";
import "../scss/account/recover.sass";

// Home Page

import "../scss/home/homeNavbar.sass";
import "../scss/home/hero.sass";
import "../scss/home/cards.sass";
import "../scss/home/about.sass";
import "../scss/home/podcast.sass";
import "../scss/home/topPicks.sass";
import "../scss/home/instagram.sass";
import "../scss/home/newsletter.sass";

// Sell Page

import "../scss/sell/hero.sass";
import "../scss/sell/how.sass";
import "../scss/sell/icons.sass";
import "../scss/sell/review.sass";
import "../scss/sell/info.sass";

// About Page

import "../scss/about/hero.sass";
import "../scss/about/how.sass";
import "../scss/about/quote.sass";
import "../scss/about/charity.sass";

// Blog Page

import "../scss/blog/hero.sass";
import "../scss/blog/topics.sass";
import "../scss/blog/posts.sass";
import "../scss/blog/article.sass";
import "../scss/blog/more.sass";
import "../scss/blog/comments.sass";

// Product Page

import "../scss/product/listing.sass";
import "../scss/product/moreby.sass";
import "../scss/product/product.sass";

// Podcast Page

import "../scss/podcast/hero.sass";
import "../scss/podcast/topics.sass";
import "../scss/podcast/posts.sass";

// Shop Page

import "../scss/shop/shopHero.sass";
import "../scss/shop/shopCollection.sass";
import "../scss/shop/shopInfoBlock.sass";
import "../scss/shop/shopTopSellers.sass";

// Cart Page

import "../scss/cart/cart.sass";
import "../scss/cart/products.sass";

// Customers Pages

import "../scss/customers/register.sass";
import "../scss/customers/login.sass";
import "../scss/customers/order.sass";

// Collection Pages

import "../scss/collection/collectionHero.sass";
import "../scss/collection/collectionItems.sass";
import "../scss/collection/collectionFilter.sass";

import "../scss/policies/privacy.scss";

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import AOS from "aos";
AOS.init({
  offset: 50
});

import {load} from '@shopify/theme-sections';
import './product.js';

load('product');

