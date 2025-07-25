export const navItems = [
  { text: 'Explore', icon: 'fas fa-home', active: false, route: '/home', tag: 'home' },
  { text: 'Feed', icon: 'fas fa-rss', active: false, route: '/feed', tag: 'home' },
  {
    text: 'My profile',
    icon: 'far fa-user-circle',
    active: false,
    route: '/profile',
    tag: 'welcome',
  },
  {
    text: 'Get Start',
    icon: 'fa fa-bullhorn',
    active: false,
    route: '/get-started',
    tag: 'welcome',
  },
  {
    text: 'Notifications',
    icon: 'far fa-bell',
    active: false,
    badge: '10',
    route: '/notification',
    tag: 'welcome',
  },
  { text: 'Members', icon: 'fas fa-user-friends', active: false, route: '/member', tag: 'welcome' },

  {
    text: 'Discussions',
    icon: 'far fa-comment-dots',
    active: false,
    route: '/discuss',
    tag: 'community',
    color: '#fa6d27',
  },
  { text: 'Events', icon: 'far fa-calendar-alt', active: false, route: '/event', tag: 'community' },
  {
    text: 'Showcase',
    icon: 'fa fa-certificate',
    active: false,
    route: '/showcase',
    tag: 'community',
    color: '#fa6d27',
  },
  {
    text: 'Get Help',
    icon: 'fa fa-question-circle',
    active: false,
    route: '/showcase',
    tag: 'community',
    color: '#fa6d27',
  },

  { text: 'Groups', icon: 'fas fa-users', active: false, route: '/group' },
  { text: 'Wishlist', icon: 'fas fa-magic', active: false, route: '/whishlist' },
  { text: 'Help center', icon: 'far fa-book-open', active: false, route: '/help' },
  { text: 'Resources', icon: 'fas fa-code', active: false, route: '/resources', tag: 'release' },
  { text: 'Roadmap', icon: 'far fa-map', active: false, route: '/roadmap', tag: 'release' },
  {
    text: 'Changelog',
    icon: 'fa fa-address-book',
    active: false,
    route: '/changelog',
    tag: 'release',
  },
]
