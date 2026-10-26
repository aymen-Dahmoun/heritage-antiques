import armillarySphereImage from '../assets/images/armillary-sphere.jpg'
import astrolabeImage from '../assets/images/astrolabe.jpg'
import astrologicalMedalImage from '../assets/images/astrological-medal.jpg'
import bronzeMortarImage from '../assets/images/bronze-mortar.jpg'
import byzantineRingImage from '../assets/images/byzantine-ring.jpg'
import carvedCofferImage from '../assets/images/carved-coffer.jpg'
import celadonBowlImage from '../assets/images/celadon-bowl.jpg'
import celestialMapImage from '../assets/images/celestial-map.jpg'
import chronometerImage from '../assets/images/chronometer.jpg'
import dollondTelescopeImage from '../assets/images/dollond-telescope.jpg'
import egyptianUshabtiImage from '../assets/images/egyptian-ushabti.jpg'
import greekCoinImage from '../assets/images/greek-coin.jpg'
import illuminatedChoirImage from '../assets/images/illuminated-choir.jpg'
import lacquerBoxImage from '../assets/images/lacquer-box.jpg'
import mantelClockImage from '../assets/images/mantel-clock.jpg'
import manuscriptLeafImage from '../assets/images/manuscript-leaf.jpg'
import mingBowlImage from '../assets/images/ming-bowl.jpg'
import ottomanDaggerImage from '../assets/images/ottoman-dagger.jpg'
import pocketSundialImage from '../assets/images/pocket-sundial.jpg'
import romanGlassImage from '../assets/images/roman-glass.jpg'

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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  {
    id: 'hc-009',
    reference: 'HC 009',
    name: 'Roman Iridescent Glass Unguentarium',
    category: 'Antiquities',
    epoch: '1st–2nd century CE',
    yearCreated: 120,
    price: 2800,
    inventory: 1,
    featured: true,
    maker: 'Roman Levant workshop',
    origin: 'Eastern Mediterranean',
    materials: 'Free-blown pale green glass with silver iridescence',
    dimensions: '14.8 cm height; 5.2 cm rim',
    condition: 'Intact; luminous burial iridescence and patina',
    certificate: 'Thermoluminescence certificate & antiquities passport',
    image: romanGlassImage,
    imageAlt: 'Ancient Roman blown glass vessel with silvery iridescent surface patina',
    summary:
      'A remarkably intact vessel for aromatic oils and scented essences from the Roman Levant.',
    description:
      'Crafted using early blown glass techniques, this elongated tear-shaped unguentarium was intended for perfumed unguents and oils. Centuries of subterranean rest have endowed its surface with an ethereal, opalescent mother-of-pearl patina that catches natural light with prismatic shimmer.',
    provenance:
      'Illustrative provenance: Ex-collection Comte de Vogue, Paris, 1924; German private collection.',
  },
  {
    id: 'hc-010',
    reference: 'HC 010',
    name: 'Florentine High Renaissance Bronze Mortar',
    category: 'Decorative Arts',
    epoch: 'c. 1584',
    yearCreated: 1584,
    price: 7400,
    inventory: 1,
    featured: false,
    maker: 'Attributed to the workshop of Giambologna',
    origin: 'Florence, Grand Duchy of Tuscany',
    materials: 'Cast bronze with dark olive patina',
    dimensions: '16.5 cm diameter, 14 cm height',
    condition: 'Exceptional; sharp cast details, historic surface wear',
    certificate: 'Certificate of attribution and metallurgical report',
    image: bronzeMortarImage,
    imageAlt: 'Renaissance bronze mortar decorated with acanthus bands and relief crests',
    summary:
      'Cast with classical mythological figures, strapwork cartouches, and acanthus friezes.',
    description:
      'Commissioned for an aristocratic Florentine apothecary, this heavy bronze mortar exemplifies late Renaissance bronze casting. The perimeter features medallion busts flanked by sea nymphs and cornucopias, struck with a resonant chime when sounded.',
    provenance:
      'Illustrative provenance: Palazzo Antinori inventory, Florence; acquired by descent 1952.',
  },
  {
    id: 'hc-011',
    reference: 'HC 011',
    name: 'Dollond London Royal Navy Brass Telescope',
    category: 'Scientific Instruments',
    epoch: 'c. 1820',
    yearCreated: 1820,
    price: 4900,
    inventory: 1,
    featured: true,
    maker: 'Peter Dollond (Dollond & Son)',
    origin: 'London, United Kingdom',
    materials: 'Turned mahogany barrel, hand-lacquered brass, achromatic lenses',
    dimensions: '88 cm extended, 28 cm collapsed; 52 mm objective',
    condition: 'Near mint; optical clarity fully intact, smooth draw action',
    certificate: 'Historical optical verification & serial archive transcript',
    image: dollondTelescopeImage,
    imageAlt: 'Georgian mahogany and burnished brass nautical telescope with lens cap',
    summary:
      'A pristine three-draw officer’s spyglass with Dollond’s patented achromatic optics.',
    description:
      'Dollond was optical instrument maker to King George III and the Royal Navy. This telescope retains its original turned mahogany sleeve and hand-engraved signature on the brass draw tube: "Dollond, London, Day or Night". The doublet objective provides distortion-free horizon sighting.',
    provenance:
      'Illustrative provenance: Collection of Vice-Admiral Sir Thomas Fremantle; Admiralty sale 1898.',
  },
  {
    id: 'hc-012',
    reference: 'HC 012',
    name: 'Song Dynasty Longquan Celadon Petal Bowl',
    category: 'Ceramics',
    epoch: 'Southern Song, 12th century',
    yearCreated: 1180,
    price: 16500,
    inventory: 1,
    featured: true,
    maker: 'Longquan Imperial Kilns',
    origin: 'Zhejiang Province, China',
    materials: 'High-fired stoneware with unctuous green glaze',
    dimensions: '16.8 cm diameter, 7.1 cm height',
    condition: 'Museum grade; no restorations, pristine foot rim',
    certificate: 'Oxford Authentication TL test & dealer provenance dossier',
    image: celadonBowlImage,
    imageAlt: 'Southern Song dynasty Longquan celadon bowl with carved lotus petal exterior',
    summary:
      'Carved with exterior lotus petals under a soft, jade-like celadon glaze.',
    description:
      'The Southern Song dynasty brought Longquan celadon to its artistic apex. The exterior is carved with overlapping lotus leaves that produce subtle gradations where the thick, translucent kinuta glaze pools deeper in the recesses, evoking polished green nephrite jade.',
    provenance:
      'Illustrative provenance: Edward T. Chow collection, Geneva; Sotheby’s London sale, 1980.',
  },
  {
    id: 'hc-013',
    reference: 'HC 013',
    name: 'Egyptian Turquoise Faience Ushabti',
    category: 'Antiquities',
    epoch: '26th Dynasty (Saite Period, c. 600 BCE)',
    yearCreated: -600,
    price: 8200,
    inventory: 1,
    featured: true,
    maker: 'Memphite Royal Necropolis Workshops',
    origin: 'Memphis, Ancient Egypt',
    materials: 'Moulded siliceous faience with deep turquoise glaze',
    dimensions: '18.2 cm height; 4.6 cm width',
    condition: 'Superb; intact beard of Osiris and pristine hieroglyphic register',
    certificate: 'Art Loss Register clearance & TL thermoluminescence verification',
    image: egyptianUshabtiImage,
    imageAlt: 'Egyptian turquoise glazed faience funerary shabti figure inscribed with hieroglyphs',
    summary:
      'A funerary servant figure bearing nine registers of Chapter 6 of the Book of the Dead.',
    description:
      'Dating to the Saite renaissance of Egyptian art, this ushabti exhibits the idealized features, tripartite wig, and curved Osirian beard characteristic of royal dignitaries. The hieroglyphic inscription asks the statue to perform agricultural labors in the Field of Reeds on behalf of the deceased nobleman.',
    provenance:
      'Illustrative provenance: Collection of Lord Amherst of Hackney (1835–1909); Sotheby’s London 1921.',
  },
  {
    id: 'hc-014',
    reference: 'HC 014',
    name: 'Byzantine Archangel Gold Signet Ring',
    category: 'Jewelry & Regalia',
    epoch: 'c. 6th–7th century CE',
    yearCreated: 620,
    price: 12400,
    inventory: 1,
    featured: false,
    maker: 'Constantinopolitan Imperial Goldsmith',
    origin: 'Constantinople, Byzantine Empire',
    materials: 'High-karat solid gold (approx. 22k)',
    dimensions: 'Ring size 9.5 US; weight 21.4 grams',
    condition: 'Very fine; minor age-appropriate wear to bezel edge',
    certificate: 'Numismatic & Byzantine Antiquities Guild Certificate',
    image: byzantineRingImage,
    imageAlt: 'Solid gold Byzantine signet ring intaglio-engraved with archangel holding orb and cross',
    summary:
      'Intaglio-engraved with an archangel holding an imperial globus cruciger and staff.',
    description:
      'This heavy gold seal ring belonged to a high-ranking official of the Eastern Roman imperial court. The oval bezel is carved in negative intaglio so that it leaves a crisp wax impression. The shoulders feature delicate niello-inlaid Greek monogrammatic crosses.',
    provenance:
      'Illustrative provenance: Private Swiss collection formed in Basel, 1960s; European art market.',
  },
  {
    id: 'hc-015',
    reference: 'HC 015',
    name: 'Augsburg Ivory & Brass Diptych Pocket Sundial',
    category: 'Scientific Instruments',
    epoch: 'c. 1618',
    yearCreated: 1618,
    price: 11800,
    inventory: 1,
    featured: false,
    maker: 'Leonhart Miller Workshop',
    origin: 'Augsburg, Holy Roman Empire',
    materials: 'Engraved elephant ivory (pre-convention antique), gilt brass, blued steel needle',
    dimensions: '9.4 × 6.8 × 1.8 cm (closed)',
    condition: 'Exceptional; original string gnomon, functioning magnetic compass',
    certificate: 'CITES pre-1947 antique exemption certificate & instrument appraisal',
    image: pocketSundialImage,
    imageAlt: 'Folding ivory diptych sundial with engraved astronomical tables and compass well',
    summary:
      'A portable navigational diptych with multiple solar scales, wind rose, and lunar volvelle.',
    description:
      'Augsburg was Europe’s premier center for precision scientific craft in the early 17th century. This pocket dial includes tables for latitudes across Europe, a vertical and horizontal dial linked by an adjustable string gnomon, and an engraved brass wind rose on the exterior lid.',
    provenance:
      'Illustrative provenance: Ducal collection of Saxe-Coburg; acquired by descent 1938.',
  },
  {
    id: 'hc-016',
    reference: 'HC 016',
    name: 'Flemish Late Gothic Carved Oak Coffer',
    category: 'Furniture & Carvings',
    epoch: 'c. 1490',
    yearCreated: 1490,
    price: 13500,
    inventory: 1,
    featured: false,
    maker: 'Ghent Woodcarvers Guild',
    origin: 'Flanders, Low Countries',
    materials: 'Solid quarter-sawn European oak, hand-forged wrought iron',
    dimensions: '74 cm height, 118 cm width, 54 cm depth',
    condition: 'Superb antique patina; original iron lockplate and side carrying handles',
    certificate: 'Dendrochronological timber analysis & historical report',
    image: carvedCofferImage,
    imageAlt: 'Gothic carved oak trunk with four linenfold front panels and wrought iron lockplate',
    summary:
      'Hand-hewn Flanders oak featuring four carved linenfold panels and pierced Gothic tracery.',
    description:
      'Constructed with mortise-and-tenon joinery and held together with wooden dowels, this dowry chest retains its dark wax patina. The facade is divided into four panels of undulating linenfold drapery, framed by micro-architectural pilasters and surmounted by an intricate wrought-iron hasp.',
    provenance:
      'Illustrative provenance: Chateau de Beloeil collection; private estate, Bruges.',
  },
  {
    id: 'hc-017',
    reference: 'HC 017',
    name: 'Edo Period Gold Maki-e Suzuribako (Writing Box)',
    category: 'Decorative Arts',
    epoch: 'Mid-Edo Period, c. 1760',
    yearCreated: 1760,
    price: 9900,
    inventory: 1,
    featured: true,
    maker: 'Koma School Master',
    origin: 'Kyoto, Japan',
    materials: 'Black urushi lacquer, sprinkled gold dust (takamaki-e), silver water dropper',
    dimensions: '25.2 × 22.8 × 4.9 cm',
    condition: 'Pristine; original inkstone (suzuri) and silver suiteki water dropper',
    certificate: 'Japanese Art Dealers Association guarantee of authenticity',
    image: lacquerBoxImage,
    imageAlt: 'Japanese black urushi lacquer writing box adorned with raised gold cranes and pine',
    summary:
      'Exquisite raised gold lacquer depicting cranes amidst aged pine branches beside a stream.',
    description:
      'Crafted for a samurai scholar or daimyo courtier, this writing box demonstrates the supreme patience of multi-layered urushi lacquering. Inside the fitted tray rests a carved slate inkstone and an engraved silver water dropper shaped like a plum blossom.',
    provenance:
      'Illustrative provenance: Ex-collection Baron von Siebold; Munich private collection.',
  },
  {
    id: 'hc-018',
    reference: 'HC 018',
    name: 'Rudolf II Astrological Silver Medallion',
    category: 'Numismatics',
    epoch: '1598',
    yearCreated: 1598,
    price: 5900,
    inventory: 1,
    featured: false,
    maker: 'Court of Emperor Rudolf II',
    origin: 'Prague, Kingdom of Bohemia',
    materials: 'Struck silver with traces of gilding',
    dimensions: '42 mm diameter; 31.6 g',
    condition: 'Extremely fine; lustrous cabinet toning, crisp relief',
    certificate: 'Historical numismatic archive documentation',
    image: astrologicalMedalImage,
    imageAlt: 'Heavy silver astrological medallion showing the zodiac belt and imperial eagle',
    summary:
      'Struck in the hermetic circle of Prague under the Holy Roman Emperor Rudolf II.',
    description:
      'Known for his passion for alchemy, astrology, and mechanics, Rudolf II assembled the greatest scholars and artists in Prague. This silver commemorative medallion bears the emperor’s portrait in armor on the obverse and a celestial sphere ringed by the twelve zodiac signs on the reverse.',
    provenance:
      'Illustrative provenance: Imperial Cabinet of Medals, Vienna; private collection, Zurich.',
  },
  {
    id: 'hc-019',
    reference: 'HC 019',
    name: 'Venetian Gilt-Brass Armillary Sphere',
    category: 'Scientific Instruments',
    epoch: 'c. 1720',
    yearCreated: 1720,
    price: 18900,
    inventory: 1,
    featured: true,
    maker: 'Workshop of Giovanni Domenico Cassini',
    origin: 'Venice, Republic of Venice',
    materials: 'Engraved fire-gilt brass, turned Italian walnut base',
    dimensions: '44 cm total height; 26 cm sphere diameter',
    condition: 'Museum quality; rings rotate smoothly, clear astrological engraving',
    certificate: 'Scientific instrument provenance and conservation portfolio',
    image: armillarySphereImage,
    imageAlt: 'Gilt brass armillary sphere on turned walnut pedestal showing celestial coordinates',
    summary:
      'A Ptolemaic celestial model composed of interlocking brass graduated coordinate rings.',
    description:
      'Representing the great circle rings of the celestial heavens—the equator, the tropics of Cancer and Capricorn, the polar circles, and the broad diagonal band of the zodiac—this armillary sphere was both a teaching tool for Venetian scholars and an essential instrument of aristocratic libraries.',
    provenance:
      'Illustrative provenance: Palazzo Morosini collection, Venice; private collection, Milan.',
  },
  {
    id: 'hc-020',
    reference: 'HC 020',
    name: 'Florentine Illuminated Antiphonary Leaf on Vellum',
    category: 'Manuscripts',
    epoch: 'c. 1435',
    yearCreated: 1435,
    price: 6600,
    inventory: 1,
    featured: false,
    maker: 'Circle of Fra Angelico',
    origin: 'Florence, Republic of Florence',
    materials: 'Egg tempera, burnished 24k gold leaf, and iron gall ink on calf vellum',
    dimensions: '56.5 × 41.0 cm',
    condition: 'Superb; gold burnish gleams brilliantly, unfaded lapis lazuli blues',
    certificate: 'Manuscript curator verification & conservation report',
    image: illuminatedChoirImage,
    imageAlt: 'Monumental illuminated vellum manuscript page with musical notation and gold initial',
    summary:
      'A monumental choir manuscript page with a magnificent historiated initial and square notation.',
    description:
      'Created for the monastery of San Marco in Florence, this large choir leaf features four-line red staves with black square musical notation. The focal point is a breathtaking historiated initial in burnished gold leaf, inhabited by seraphim and wrapped in curling acanthus foliage painted in pulverized lapis lazuli and vermilion.',
    provenance:
      'Illustrative provenance: Monastero di San Marco, Florence; Private collection, Oxford, 1932.',
  },
]
