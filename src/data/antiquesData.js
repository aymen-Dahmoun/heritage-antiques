import astrolabeImage from '../assets/images/astrolabe.jpg'
import celestialMapImage from '../assets/images/celestial-map.jpg'
import chronometerImage from '../assets/images/chronometer.jpg'
import greekCoinImage from '../assets/images/greek-coin.jpg'
import manuscriptLeafImage from '../assets/images/manuscript-leaf.jpg'
import mantelClockImage from '../assets/images/mantel-clock.jpg'
import mingBowlImage from '../assets/images/ming-bowl.jpg'
import ottomanDaggerImage from '../assets/images/ottoman-dagger.jpg'

export const antiquesData = [
  {
    id: 'hc-001',
    reference: 'HC 001',
    name: 'Harrison H4 Marine Chronometer',
    category: 'Horology',
    epoch: '1759',
    yearCreated: 1759,
    price: 14200,
    inventory: 1,
    maker: 'John Harrison',
    origin: 'London, England',
    materials: 'Gilt brass, steel, and mahogany',
    dimensions: '13.2 cm diameter; 4.1 kg',
    condition: 'Excellent; original movement, conserved',
    certificate: 'Certificate of authenticity and conservation report',
    image: chronometerImage,
    imageAlt:
      'The intricate gilt-brass movement of the Harrison H4 marine chronometer',
    summary:
      'The precision timekeeper that changed how the world measured longitude at sea.',
    description:
      'Completed after decades of experimentation, Harrison’s H4 demonstrated that a portable clock could keep time accurately enough to establish longitude on a voyage. Its pierced gilt-brass movement, jewel-like finish, and compact form mark a turning point in both horology and navigation.',
    provenance:
      'Illustrative provenance: Royal Observatory collections, Greenwich; private collection, London.',
  },
  {
    id: 'hc-002',
    reference: 'HC 002',
    name: 'Athenian Owl Tetradrachm',
    category: 'Numismatics',
    epoch: 'c. 450–400 BCE',
    yearCreated: -450,
    price: 3450,
    inventory: 1,
    maker: 'Athens mint',
    origin: 'Athens, Greece',
    materials: 'Silver',
    dimensions: '24 mm; 17.2 g',
    condition: 'Very fine; light cabinet tone',
    certificate: 'Certificate of authenticity and metallurgical analysis',
    image: greekCoinImage,
    imageAlt:
      'Silver Athenian tetradrachm showing the helmeted head of Athena',
    summary:
      'A hand-struck silver tetradrachm bearing the helmeted Athena, a cornerstone of classical Greek coinage.',
    description:
      'The owl tetradrachm circulated widely across the ancient Mediterranean and became a recognizable symbol of Athenian power and culture. This example retains a strong portrait of Athena, with the owl of wisdom on the reverse.',
    provenance:
      'Illustrative provenance: Athens Agora collection; European private collection, acquired 1968.',
  },
  {
    id: 'hc-003',
    reference: 'HC 003',
    name: 'Persian Brass Astrolabe',
    category: 'Scientific Instruments',
    epoch: '18th century',
    yearCreated: 1750,
    price: 21000,
    inventory: 1,
    maker: 'Persian workshop',
    origin: 'Isfahan, Persia',
    materials: 'Engraved brass',
    dimensions: '21.5 cm diameter',
    condition: 'Fine; complete rete, rule, and plates',
    certificate: 'Certificate of authenticity and provenance dossier',
    image: astrolabeImage,
    imageAlt:
      'A Persian brass astrolabe with engraved astronomical markings against a blue background',
    summary:
      'An engraved astronomical instrument built to model the movement of the heavens.',
    description:
      'Astrolabes served as calculators for time, prayer, and celestial observation. This example displays a carefully cut rete, a graduated limb, and a set of plates, with Persian calligraphy and star pointers worked into the brass.',
    provenance:
      'Illustrative provenance: Whipple Museum reference collection; private collection, Paris.',
  },
  {
    id: 'hc-004',
    reference: 'HC 004',
    name: 'Ming Blue-and-White Floral Bowl',
    category: 'Ceramics',
    epoch: 'Ming dynasty, c. 1420',
    yearCreated: 1420,
    price: 8800,
    inventory: 1,
    maker: 'Jingdezhen kilns',
    origin: 'Jingdezhen, China',
    materials: 'Porcelain with underglaze cobalt blue',
    dimensions: '28.4 cm diameter',
    condition: 'Excellent; minor glaze fritting to the foot',
    certificate: 'Certificate of authenticity and thermoluminescence report',
    image: mingBowlImage,
    imageAlt:
      'A Ming dynasty blue-and-white porcelain bowl decorated with scrolling flowers',
    summary:
      'A Jingdezhen bowl whose cobalt flowers remain remarkably crisp after six centuries.',
    description:
      'The bowl is painted with an all-over lotus and peony scroll, framed by a classic key-fret border. Its clear glaze and deep cobalt palette place it within the finest early Ming production at Jingdezhen.',
    provenance:
      'Illustrative provenance: Honolulu Museum of Art reference collection; private collection, Hong Kong.',
  },
  {
    id: 'hc-005',
    reference: 'HC 005',
    name: 'Belle Époque Gilt-Bronze Mantel Clock',
    category: 'Horology',
    epoch: 'c. 1900',
    yearCreated: 1900,
    price: 6100,
    inventory: 1,
    maker: 'Louis Chalon for E. Colin & Cie.',
    origin: 'Paris, France',
    materials: 'Gilt and silvered bronze, glass',
    dimensions: '58 × 26 × 18 cm',
    condition: 'Excellent; movement serviced and running',
    certificate: 'Certificate of authenticity and service record',
    image: mantelClockImage,
    imageAlt:
      'A tall Art Nouveau gilt-bronze mantel clock with a sculptural female figure',
    summary:
      'A sculptural Parisian mantel clock in the flowing language of Art Nouveau.',
    description:
      'Modelled by Louis Chalon, the clock pairs a silvered allegorical figure with a richly chased gilt-bronze case. The floral geometry and elongated silhouette are characteristic of the most refined Belle Époque work.',
    provenance:
      'Illustrative provenance: Hessisches Landesmuseum reference collection; private collection, Geneva.',
  },
  {
    id: 'hc-006',
    reference: 'HC 006',
    name: 'Illuminated Book of Hours Leaf',
    category: 'Manuscripts',
    epoch: 'c. 1450',
    yearCreated: 1450,
    price: 4750,
    inventory: 1,
    maker: 'Coëtivy Master (attributed)',
    origin: 'Paris, France',
    materials: 'Ink, tempera, and gold leaf on vellum',
    dimensions: '18.4 × 13.1 cm',
    condition: 'Very good; edges trimmed, pigments fresh',
    certificate: 'Certificate of authenticity and condition report',
    image: manuscriptLeafImage,
    imageAlt:
      'An illuminated Book of Hours leaf with floral borders and a small painted roundel',
    summary:
      'A vellum leaf illuminated with gold, floral borders, and a miniature roundel.',
    description:
      'The leaf carries a well-preserved Gothic hand framed by an intricate border of acanthus, fruit, and flowers. A small roundel depicts an angel confronting a devil, a detail that rewards close inspection.',
    provenance:
      'Illustrative provenance: Cleveland Museum of Art reference collection; private library, Brussels.',
  },
  {
    id: 'hc-007',
    reference: 'HC 007',
    name: 'Ottoman Khanjar with Jade Hilt',
    category: 'Arms & Relics',
    epoch: '16th–18th century',
    yearCreated: 1600,
    price: 5300,
    inventory: 1,
    maker: 'Ottoman and Mughal workshops',
    origin: 'Ottoman Empire; Mughal India',
    materials: 'Damascened steel, nephrite jade, rubies, and gold',
    dimensions: '41.5 cm overall',
    condition: 'Fine; original inlay, stable patina',
    certificate: 'Certificate of authenticity and material analysis',
    image: ottomanDaggerImage,
    imageAlt:
      'An Ottoman khanjar dagger with a carved pale jade hilt and gold-damascened blade',
    summary:
      'A ceremonial dagger combining Ottoman steelwork with a carved Mughal jade hilt.',
    description:
      'The curved blade is worked with gold damascening and a central spine of chiselled ornament. The pale nephrite hilt is carved in relief and set with rubies, reflecting the exchange of luxury forms between Ottoman and Mughal courts.',
    provenance:
      'Illustrative provenance: Stibbert Museum reference collection; private collection, Istanbul.',
  },
  {
    id: 'hc-008',
    reference: 'HC 008',
    name: 'Celestial Planisphere, 1687',
    category: 'Cartography',
    epoch: '1687',
    yearCreated: 1687,
    price: 9500,
    inventory: 1,
    maker: 'Francesco Brunacci and Giacomo Giovanni Rossi',
    origin: 'Rome, Italy',
    materials: 'Hand-coloured engraving with gold heightening',
    dimensions: '49 × 58 cm',
    condition: 'Very good; light toning, original plate mark',
    certificate: 'Certificate of authenticity and conservation report',
    image: celestialMapImage,
    imageAlt:
      'A hand-coloured 1687 celestial map showing constellations across two hemispheres',
    summary:
      'A gold-heightened Roman planisphere mapping the constellations of both hemispheres.',
    description:
      'Published in Rome in 1687, the map presents the celestial sphere in two hemispheres surrounded by an elaborate decorative border. The hand colouring and gold heightening give the constellations an unusually sculptural presence.',
    provenance:
      'Illustrative provenance: Private map collection, Rome; acquired by descent in 1912.',
  },
]
