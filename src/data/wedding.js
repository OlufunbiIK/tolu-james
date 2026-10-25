// ─────────────────────────────────────────────────────────────
//  Everything a couple's site says lives in this one file.
//  For a new client: change the text below, swap the photos in
//  src/assets/img, and the whole site updates.
//  All names, addresses, numbers and times here are SAMPLE data.
// ─────────────────────────────────────────────────────────────

export const wedding = {
  couple: {
    first: 'Tolu',
    second: 'James',
    full: 'Tolulope Adebayo and James Okoye',
    monogram: 'T&J',
    hashtag: '#ToluAndJames2026',
  },

  dates: {
    // The countdown runs to this moment (Lagos time, UTC+1).
    countdownTo: '2026-12-12T11:00:00+01:00',
    countdownLabel: 'Until we say yes',
    long: ['Saturday 12 and Sunday 13', 'December 2026'],
    short: '12 & 13 December 2026',
    city: 'Lagos, Nigeria',
  },

  nav: [
    { href: '#story', label: 'Story' },
    { href: '#weekend', label: 'Weekend' },
    { href: '#dress', label: 'Dress code' },
    { href: '#travel', label: 'Travel' },
    { href: '#faq', label: 'FAQ' },
  ],

  story: {
    photoCaption: 'Tolu & James, Abuja 2026',
    paragraphs: [
      "We met in 2019 at a friend's housewarming in Abuja. Tolu was arguing about the best jollof in Nigeria. James was brave enough to disagree. We have been laughing at each other's opinions ever since.",
      "In March, James travelled to Ibadan to meet Tolu's parents, properly and with his own father beside him. Her mother says she has not stopped smiling since. Now we are bringing both families together, and we would be honoured to have you with us.",
    ],
    quote: 'He asked my father before he asked me, and my father said yes before I did.',
  },

  welcome: {
    greeting: 'Ẹ káàbọ̀',
    line: 'Aso-oke is woven in narrow strips, then sewn together. Two families, one cloth.',
  },

  events: [
    {
      day: '12',
      weekday: 'Saturday',
      month: 'December',
      title: 'Traditional Engagement',
      venue: 'Ìdẹra Garden, 14 Palmgrove Close, Lekki Phase 1, Lagos',
      timeline: [
        ['10:30', 'Guests arrive and are seated. Welcome drinks and live music.'],
        ['11:00', 'Opening prayer and welcome by the Alága ìjókòó and Alága ìdúró (our MCs).'],
        ['11:30', 'Introduction of both families.'],
        ['12:15', 'Reading and acceptance of the engagement list.'],
        ['12:45', "The groom's family prostrates. Prayers by the elders."],
        ['1:15', "Bride's entrance, face covered, then unveiled."],
        ['2:00', 'Lunch, dancing and the spraying of the couple.'],
      ],
    },
    {
      day: '13',
      weekday: 'Sunday',
      month: 'December',
      title: 'White Wedding',
      venue: 'The Chapel of Grace, Victoria Island, then The Grand Pavilion, Lekki',
      timeline: [
        ['9:30', 'Guests seated at the chapel.'],
        ['10:00', "Ceremony begins with the bride's processional."],
        ['11:30', 'Vows, rings and signing of the register.'],
        ['12:30', 'Photographs on the chapel lawn.'],
        ['2:00', 'Reception opens at The Grand Pavilion.'],
        ['3:00', "The couple's entrance, first dance and toasts."],
        ['4:30', 'Cake cutting, lunch and dancing into the evening.'],
      ],
    },
  ],

  dress: {
    intro:
      'Aso-ebi will be shared for both days. If you are sewing your own, these cloths show the colours we love. Gele is welcome. The taller, the better.',
    note: 'Aso-ebi orders close on 1 November.',
    looks: [
      {
        day: 'Saturday',
        title: 'Forest & Gold',
        text: 'Women: aso-oke or adire iro and buba in greens and golds. Men: agbada or kaftan in forest green, ochre or cream.',
        swatches: [
          { key: 'oliveAdire', label: 'Olive adire' },
          { key: 'ochreAdire', label: 'Ochre adire' },
          { key: 'sanyan', label: 'Sanyan aso-oke' },
        ],
      },
      {
        day: 'Sunday',
        title: 'Ivory & Coral',
        text: 'Soft ivory, cream and lace with coral red accents. Please leave pure white to the bride.',
        swatches: [
          { key: 'ivoryLace', label: 'Ivory lace' },
          { key: 'creamLace', label: 'Cream lace' },
          { key: 'coralAdire', label: 'Coral adire' },
        ],
      },
    ],
  },

  // The map and the venue list are driven by this array.
  // `mapQuery` is what Google Maps searches for. The sample venues are
  // fictional, so they point at the neighbourhood. For a real wedding, paste
  // the venue's exact name and address, e.g. 'Eko Hotel & Suites, Victoria Island, Lagos'.
  venues: [
    {
      id: 'engagement',
      name: 'Ìdẹra Garden',
      address: '14 Palmgrove Close, Lekki Phase 1, Lagos',
      when: 'Saturday · Engagement',
      mapQuery: 'Lekki Phase 1, Lagos, Nigeria',
    },
    {
      id: 'chapel',
      name: 'The Chapel of Grace',
      address: '22 Ozumba Mbadiwe Avenue, Victoria Island, Lagos',
      when: 'Sunday · Ceremony',
      mapQuery: 'Ozumba Mbadiwe Avenue, Victoria Island, Lagos, Nigeria',
    },
    {
      id: 'reception',
      name: 'The Grand Pavilion',
      address: 'Plot 7, Admiralty Way, Lekki Phase 1, Lagos',
      when: 'Sunday · Reception',
      mapQuery: 'Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
    },
  ],

  travel: [
    {
      title: 'Getting here',
      paragraphs: [
        'Fly into Murtala Muhammed International Airport (LOS). The drive to Lekki takes 1.5 to 2.5 hours depending on traffic.',
        'Airport pickup is available from 9 to 12 December. Add your flight details in the RSVP and our hosts will meet you at arrivals with a Tolu & James board.',
        'Shuttles run between the hotels and every venue.',
      ],
    },
    {
      title: 'Where to stay',
      hotels: [
        { name: 'The Ankara Suites, Lekki', note: 'Ten minutes from the engagement venue.' },
        { name: 'Rowan Court Hotel, Victoria Island', note: 'Walking distance to the chapel.' },
      ],
      footer: 'Quote code TOLUJAMES26 for the group rate. Book before 20 November.',
    },
  ],

  live: {
    title: "Can't be there? Join us from anywhere.",
    text: 'The Sunday ceremony starts at 10:00 in Lagos and will be livestreamed. The link is emailed to every guest 24 hours before.',
    zones: [
      ['10:00', 'Lagos'],
      ['09:00', 'London'],
      ['11:00', 'Johannesburg'],
      ['13:00', 'Dubai'],
      ['04:00', 'Toronto & New York'],
    ],
  },

  people: [
    ['Ifeoluwa Balogun', 'Maid of honour'],
    ['Chidi Eze', 'Best man'],
    ['Kemi Adebayo', 'Sister of the bride'],
    ['Emeka Okoye', 'Brother of the groom'],
    ['Bisi Coker', 'Chief bridesmaid'],
    ['Dayo Lawal', 'Chief groomsman'],
  ],

  rsvp: {
    deadline: '15 November 2026',
    coordinator: 'Mrs. Folake Adewale',
    phone: '+234 800 000 0000',
    maxGuests: 6,
  },

  asoebi: {
    intro:
      'Want to match the family? Aso-ebi is available for both days. Order by the yard or sewn-ready, and we will get it to you wherever you are.',
    deadline: '1 November 2026',
    options: [
      {
        day: 'Saturday · Engagement',
        title: 'Forest & Gold',
        fabric: 'Olive adire with sanyan aso-oke trim',
        prices: [
          ['Women: iro, buba and gele', '₦38,000'],
          ['Men: agbada or kaftan cloth', '₦32,000'],
        ],
      },
      {
        day: 'Sunday · Ceremony',
        title: 'Ivory & Coral',
        fabric: 'Ivory lace with coral adire accents',
        prices: [
          ['Women: lace and gele', '₦28,000'],
          ['Men: lace kaftan cloth', '₦24,000'],
        ],
      },
    ],
    steps: [
      { title: 'Message us', text: 'Send your name, the day or days you need, and your size on WhatsApp to our aso-ebi coordinator.' },
      { title: 'Pay and confirm', text: 'Pay into the aso-ebi account below and send us the receipt. Your order is held once we confirm it.' },
      { title: 'Receive your cloth', text: 'Collect in Lagos, get it by courier within Nigeria, or have it shipped abroad (allow two to three weeks).' },
    ],
    contact: {
      name: 'Aunty Bisi Coker',
      role: 'Aso-ebi coordinator',
      whatsapp: '2348000000001',
      display: '+234 800 000 0001',
      email: 'asoebi@toluandjames.example',
      message: 'Hello, I would like to order aso-ebi for Tolu & James. Name: , Day(s): , Size: ',
      bank: { label: 'Aso-ebi account', value: '0000 000 000', foot: 'Bank name here · Tolu & James Aso-ebi' },
      pickup: 'Pickup in Lekki, Lagos. Delivery within Nigeria and shipping abroad are charged at cost.',
    },
  },
  gifts: {
    intro:
      'If you wish to give something, we would be grateful for a contribution toward our first home. Choose whichever way is easiest for you.',
    options: [
      { title: 'Naira transfer', line: 'Tolu & James Wedding Fund', value: '0000 000 000', foot: 'Bank name here', copy: true },
      { title: 'From abroad', line: 'Send via Wise or PayPal to', value: 'gifts@toluandjames.example', small: true, copy: true },
      { title: 'Home registry', line: 'Browse the things we would love for our new home.', value: 'toluandjames.example/registry', small: true },
    ],
  },

  faq: [
    ['Can I bring a plus one or my children?', 'We have reserved seats for the guests named on your invitation. If your invitation says "and family", children are warmly welcome. Please add them in your RSVP so we can seat everyone.'],
    ['Where can I get the aso-ebi?', 'Our aso-ebi coordinator, Aunty Bisi Coker, handles orders on WhatsApp at +234 800 000 0001. See the Aso-ebi section above for prices and how to pay. Orders close on 1 November, and fabric can be posted to the UK and US for an added fee.'],
    ['Will the ceremony be livestreamed?', 'Yes. The Sunday ceremony is livestreamed for family abroad. The link is emailed 24 hours before. See the times for your city in the Watch live section above.'],
    ['Is there parking and transport?', 'There is parking at all three venues and valet at The Grand Pavilion. Shuttles run between the partner hotels and every venue, so you can leave the driving to us.'],
    ['Can I take photographs during the ceremony?', 'Please keep phones away during the Sunday ceremony. Our photographer will share every picture with guests afterwards. Use #ToluAndJames2026 for everything you post.'],
    ['What should the men wear?', 'Saturday: agbada or kaftan in forest green, ochre or cream. Sunday: a suit or a traditional outfit in soft neutral colours.'],
  ],

  designer: 'Eventlybuilt',
}
