// Every visible word on the page lives here. House style: British spelling, no dashes or
// hyphens anywhere in visible text.

export const NAV = [
  { label: 'Demo', href: '#demo' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO = {
  eyebrow: 'Free Shopify theme for jewellery',
  title: 'The Shopify theme made for jewellery brands.',
  text: 'Flaire is a free theme with finish swatches, an engraving studio, size guides and predictive search built in. Install it today and add credit features when you need them.',
  facts: ['Free to install', 'Fully responsive', 'Customise in the theme editor'],
};

export const SHOWCASE = {
  eyebrow: 'Live demo',
  title: 'A storefront built to sell fine jewellery.',
  text: 'Real pages from the Flaire demo store. Open it in your browser and shop it like a customer would.',
  pages: [
    {
      id: 'home',
      label: 'Home',
      url: 'yourstore.com',
      desktop: { src: '/screens/hero-d.webp', w: 1920, h: 1190, alt: 'Flaire home page with a gemstone ring banner' },
      phone: { src: '/screens/hero-m.webp', w: 780, h: 1655, alt: 'Flaire home page on a phone' },
    },
    {
      id: 'collection',
      label: 'Collection',
      url: 'yourstore.com/collections/rings',
      desktop: { src: '/screens/collection-view.webp', w: 1920, h: 2007, alt: 'Flaire collection page with filters and a product grid' },
      phone: { src: '/screens/collection-m.webp', w: 780, h: 2200, alt: 'Flaire collection page on a phone' },
    },
    {
      id: 'product',
      label: 'Product',
      url: 'yourstore.com/products/cascade',
      desktop: { src: '/screens/product.webp', w: 1920, h: 1680, alt: 'Flaire product page with gallery, finish swatches, ring sizes and engraving' },
      phone: { src: '/screens/product-m.webp', w: 780, h: 2000, alt: 'Flaire product page on a phone' },
    },
  ],
};

export const SIGNATURE = {
  eyebrow: 'Built in',
  title: 'Details jewellery shoppers look for.',
  text: 'Every feature here is part of the free theme. Type an engraving below to see one at work.',
  finishes: [
    { id: 'yellow-gold', label: 'Yellow Gold', color: '#d4af6a' },
    { id: 'rose-gold', label: 'Rose Gold', color: '#deaa9b' },
    { id: 'white-gold', label: 'White Gold', color: '#d8dae0' },
    { id: 'platinum', label: 'Platinum', color: '#b8bcc4' },
  ],
  sizes: [
    { label: '5', soldOut: false },
    { label: '5.5', soldOut: false },
    { label: '6', soldOut: true },
    { label: '6.5', soldOut: false },
    { label: '7', soldOut: false },
  ],
  swatches: {
    title: 'Finish swatches',
    text: 'Round swatches with built in metal colours and ring sizes on the product page. The photo changes with the finish, and sold out sizes are struck through.',
    hint: 'Choose a finish',
  },
  engraving: {
    title: 'Engraving studio',
    text: 'Shoppers type a few words and see them engraved on the piece before they buy, with a character limit you set.',
    sample: 'Always, M.',
    max: 16,
    label: 'Your engraving',
  },
};

export const EXPLORER = {
  eyebrow: 'On every page',
  title: 'Everything a shopper needs, without leaving the page.',
  text: 'Drawers open over the page, so shoppers keep their place and keep shopping.',
  items: [
    {
      id: 'size',
      title: 'Size guide',
      text: 'A drawer with Rings, Bracelets and Necklaces tabs and a size conversion table, opened from the product page, quick view and the menu.',
      img: { src: '/screens/f-d-size-guide.webp', alt: 'Flaire size guide drawer open over a product page' },
    },
    {
      id: 'search',
      title: 'Predictive search',
      text: 'Matching products, collections, journal articles and pages appear as you type, with popular searches before the first letter.',
      img: { src: '/screens/f-d-search.webp', alt: 'Flaire predictive search showing results for the word ring' },
    },
    {
      id: 'bag',
      title: 'Bag drawer',
      text: 'Recommendations, a gift wrap note and a discount code field in one place, with undo when a piece is removed.',
      img: { src: '/screens/f-d-bag.webp', alt: 'Flaire bag drawer with a product, recommendations and check out' },
    },
    {
      id: 'quick',
      title: 'Quick view and quick add',
      text: 'Add to Bag from a product card, or open Quick view to choose a finish and size without leaving the collection.',
      img: { src: '/screens/f-d-quick-view.webp', alt: 'Flaire collection grid with the quick view drawer open' },
    },
    {
      id: 'filters',
      title: 'Filters and sorting',
      text: 'Finish, stone, price and availability filters with sorting, and a filter and sort drawer on phones.',
      img: { src: '/screens/f-d-filters.webp', alt: 'Flaire collection filters and sorting' },
    },
  ],
};

export const LAYOUTS = {
  eyebrow: 'Layouts',
  title: 'Layouts that keep shoppers moving.',
  text: 'Sections and drawers from the home page to the bag. Switch them on in the Shopify theme editor, no code needed.',
  items: [
    { id: 'slideshow', label: 'Hero slideshow' },
    { id: 'tile', label: 'Hero tile' },
    { id: 'forms', label: 'Shop by form' },
    { id: 'split', label: 'Featured product' },
    { id: 'materials', label: 'Materials guide' },
    { id: 'mega', label: 'Mega menu' },
    { id: 'search', label: 'Predictive search' },
    { id: 'story', label: 'Story tile in the grid' },
    { id: 'filters', label: 'Filters and sorting' },
    { id: 'quick', label: 'Quick view' },
    { id: 'gallery', label: 'Gallery with thumbnails' },
    { id: 'sticky', label: 'Sticky buy bar' },
    { id: 'size', label: 'Size guide drawer' },
    { id: 'drawer', label: 'Bag drawer' },
    { id: 'sheet', label: 'Variant sheet on phones' },
  ],
};

export const MOBILE = {
  eyebrow: 'Phones first',
  title: 'A storefront that feels native on phones.',
  text: 'Flaire is designed for the small screen first, so shoppers can browse, choose and buy comfortably.',
  points: [
    'Sticky buy bar with price',
    'Variant options in a bottom sheet',
    'Mobile menu and predictive search',
    'Touch sized controls throughout',
  ],
  screens: [
    { src: '/screens/hero-m.webp', w: 780, h: 1655, alt: 'Flaire home page on a phone' },
    { src: '/screens/collection-m.webp', w: 780, h: 2200, alt: 'Flaire collection page on a phone' },
    { src: '/screens/product-m.webp', w: 780, h: 2000, alt: 'Flaire product page on a phone' },
  ],
};

export const EVERYTHING = {
  eyebrow: 'Full feature list',
  title: 'Everything in Flaire.',
  text: 'Organised the way you shop for a theme. Features marked Credits run on credits; everything else is free.',
  groups: [
    {
      name: 'Cart and checkout',
      items: ['Bag drawer or page', 'Faster checkout', 'Local pickup', 'Country and currency', { name: 'Shared Bag', credits: true }],
    },
    {
      name: 'Marketing and conversion',
      items: [
        { name: 'Back in Stock Alerts', credits: true },
        { name: 'Gift Reminders', credits: true },
        { name: 'Virtual Try On', credits: true },
        'Reviews',
        'Recommendations',
        'Storytelling sections',
        'Search ready',
        'Custom Liquid and app blocks',
      ],
    },
    {
      name: 'Merchandising',
      items: ['Finish swatches', 'Engraving', 'Size guide', 'Size and scale', 'Materials, plainly', 'Rich product media', 'Gifting', 'Made yours'],
    },
    {
      name: 'Product discovery',
      items: ['Quick view and quick add', 'Filters and sorting', 'Predictive search', { name: 'Photo Search', credits: true }, 'Mega menu and announcements', 'Accessible'],
    },
    {
      name: 'Customer accounts and sign in',
      items: ['Accounts and pages'],
    },
  ],
};

export const CREDITS = {
  eyebrow: 'Add when you need it',
  title: 'Five features that run on credits.',
  text: 'Switch each one on per store from the theme editor. Credits are only used when shoppers use the feature.',
  items: [
    {
      id: 'shared',
      name: 'Shared Bag',
      text: 'Shoppers share a live bag with a link. Changes on one device show on the other within seconds.',
      cost: 1,
      unit: 'per shared cart created',
    },
    {
      id: 'photo',
      name: 'Photo Search',
      text: 'A camera button in search. Shoppers take or choose a photo and see similar pieces from your catalogue.',
      cost: 3,
      unit: 'per successful photo search',
    },
    {
      id: 'restock',
      name: 'Back in Stock Alerts',
      text: 'On a sold out size or finish, shoppers leave their email and hear from you when it returns.',
      cost: 1,
      unit: 'per reminder signup',
    },
    {
      id: 'gift',
      name: 'Gift Reminders',
      text: 'Shoppers save an occasion, with the piece if they like, and get an email before the date.',
      cost: 1,
      unit: 'per reminder accepted for delivery',
    },
    {
      id: 'tryon',
      name: 'Virtual Try On',
      text: 'Shoppers add a photo and see an AI preview of the chosen piece on them, then add it to the bag.',
      cost: 20,
      unit: 'per completed try on',
    },
  ],
};

export const PRICING = {
  eyebrow: 'Pricing',
  title: 'The theme is free. Five features use credits.',
  text: 'You never pay to install or use Flaire. Every store starts with welcome credits, and paid plans add more each month.',
  plans: [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      credits: 200,
      creditsLine: '200 welcome credits, one time, valid for 60 days',
      text: 'The whole theme, plus a starter pack of credits to try the credit features.',
    },
    {
      id: 'starter',
      name: 'Starter',
      price: 50,
      credits: 5000,
      creditsLine: '5,000 credits a month',
      text: 'For stores putting the credit features in front of shoppers.',
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 150,
      credits: 20000,
      creditsLine: '20,000 credits a month',
      text: 'For busy stores with steady photo search and sharing traffic.',
    },
  ],
  includes: ['The full Flaire theme', 'All five credit features', 'Credits to use them'],
  coverTitle: 'What the credits cover',
  coverNote: 'Approximate uses a month if all credits go to that one feature.',
  billing: 'Paid plans are billed monthly in US dollars through PayPal and managed in your Untamed account.',
};

export const FAQ = {
  eyebrow: 'FAQ',
  title: 'Questions, answered.',
  items: [
    {
      q: 'Is Flaire free to install?',
      a: 'Yes. The Flaire theme is free to install and use. Installing it never requires a paid plan.',
    },
    {
      q: 'Do I need a paid plan to use Flaire?',
      a: 'No. Every theme feature works on the Free plan. A paid plan only adds monthly credits for the five credit features, which are metered by use.',
    },
    {
      q: 'Which features are included for free?',
      a: 'Everything in the theme itself: finish swatches, engraving, size guides, filters, search, the bag, gifting, sections and more.',
    },
    {
      q: 'Which features use credits?',
      a: 'Five features run on our platform and use credits: Shared Bag, Photo Search, Back in Stock Alerts, Gift Reminders and Virtual Try On. Each is switched on per store. The Free plan includes 200 one time welcome credits to try them; paid plans add monthly credits.',
    },
    {
      q: 'Can I customise the theme?',
      a: 'Yes. Every page is built from sections and blocks you can add, reorder and hide in the Shopify theme editor. You can change colour schemes, fonts, spacing and padding.',
    },
    {
      q: 'Can I try it before I install?',
      a: 'Yes. Open the live demo store and shop it like a customer would: choose finishes and sizes, type an engraving, open the bag and search.',
    },
    {
      q: 'How do I install Flaire?',
      a: 'Choose Install for free, sign in with your email address (we send you a six digit code), then enter your store website address. We find your Shopify store automatically and send a private download link for the theme ZIP, valid for five minutes. Upload it to Shopify as an unpublished theme, review it in the theme editor and publish when you are ready.',
    },
  ],
  more: 'Something else?',
  moreLink: 'Contact support',
};

export const CLOSING = {
  title: 'Launch your store with Flaire.',
  text: 'Free to install. Add credit features when you are ready.',
};

export const FOOTER = {
  tagline: 'A free Shopify theme for jewellery, fashion and beauty brands.',
  note: 'All screens are captured from the Flaire theme demo store.',
};
