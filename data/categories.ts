export type CategoryInfo = {
  title: string;
  description: string;
  scientific_profile: string;
  system_note: string;
};

export const CATEGORY_DESCRIPTIONS: Record<string, CategoryInfo> = {
  "alkali": {
    "title": "Alkali Metals",
    "description": "Derived from the Arabic 'al-qali' (plant ashes), as early chemists extracted potassium carbonate from wood ash.\n These Group 1 metals are defined by a lone 'extroverted' valence electron ($ns^1$) that they are eager to lose. This makes them so reactive they must be stored in oil to prevent them from literally exploding upon contact with air or water.",
    "scientific_profile": "Standard state: Solid (Metallic); Configuration: [Noble Gas] ns¹",
    "system_note": "IUPAC Group 1 / s-block"
  },
  "alkaline-earth": {
    "title": "Alkaline Earth Metals",
    "description": "Named 'alkaline' for their ability to form basic solutions and 'earth' because their oxides (like lime) were historically thought to be infusible elements that could withstand extreme heat.\n With two valence electrons ($ns^2$), they are slightly more 'socially stable' than alkali metals but remain vital for structural integrity in nature, from the calcium in your bones to the magnesium in chlorophyll.",
    "scientific_profile": "Standard state: Solid; Configuration: [Noble Gas] ns²; Primary Ions: 2+",
    "system_note": "IUPAC Group 2 / s-block"
  },
  "transition": {
    "title": "Transition Metals",
    "description": "These elements represent the 'transition' as the periodic table fills its d-orbitals. Because their inner electronic shells are incomplete, they can shift between multiple oxidation states—essentially 'changing hats' to participate in different chemical reactions. This versatility makes them the premier catalysts for industrial manufacturing and the structural backbone of modern engineering.",
    "scientific_profile": "Blocks: 3-12; Properties: Metallic, Paramagnetic; Valency: Variable",
    "system_note": "d-block / Groups 3-12"
  },
  "post-transition": {
    "title": "Post-Transition Metals",
    "description": "Located 'post' (after) the transition zone, these metals have completely filled d-shells, which makes them softer and more brittle. They sit on the fence between true metals and nonmetals, exhibiting higher electronegativity and lower melting points, serving as a bridge toward the more covalent-heavy elements of the p-block.",
    "scientific_profile": "Characteristics: Covalent-Metallic hybrid behavior; Electronegativity: Moderate",
    "system_note": "p-block / Metallic"
  },
  "metalloid": {
    "title": "Metalloids",
    "description": "Literally 'metal-like,' these are the chemical world’s chameleons. Sitting on the 'staircase' of the periodic table, they possess a split personality: they look like metals but often behave like nonmetals. Their unique ability to conduct electricity only under specific conditions (semi-conductivity) is the fundamental reason your computer and smartphone exist.",
    "scientific_profile": "Behavior: Amphoteric; Conductivity: Temperature-dependent; Structure: Covalent Network",
    "system_note": "The 'Staircase' elements"
  },
  "reactive-nonmetal": {
    "title": "Reactive Nonmetals",
    "description": "Unlike the aloof noble gases, these elements have high electron affinity and 'greedily' seek to complete their valence shells. They are the essential 'glue' of biology, forming the strong covalent bonds that hold together DNA, proteins, and the very atmosphere we breathe.",
    "scientific_profile": "States: Gas/Solid; Configuration: High electron affinity; Bonding: Covalent",
    "system_note": "Organic Essentials"
  },
  "noble-gas": {
    "title": "Noble Gases",
    "description": "Named for their 'noble' lack of reactivity, a reference to noble metals like gold that do not tarnish. Because their electron shells are perfectly full, they are chemically 'self-sufficient' and rarely interact with other elements, existing as solitary, monatomic gases.",
    "scientific_profile": "Group: 18; Stability: Maximum; Standard State: Monatomic Gas",
    "system_note": "Inert / Group 18"
  },
  "lanthanide": {
    "title": "Lanthanides",
    "description": "Derived from the Greek 'lanthanein' (to lie hidden), reflecting how difficult they were to distinguish and isolate from one another in the 19th century. Known as 'Rare Earths,' their unique 4f-orbital electrons grant them powerful magnetic and luminescent properties, making them indispensable for green energy and high-tech optics.",
    "scientific_profile": "Block: 4f; Properties: Highly magnetic, Silver-white luster; Reactivity: High",
    "system_note": "f-block / Period 6"
  },
  "actinide": {
    "title": "Actinides",
    "description": "Named after the first element in the group, Actinium, from the Greek 'aktis' (ray), denoting their inherent radioactivity. These are heavy, unstable elements where the 5f-orbitals are being filled. While some occur naturally, many are synthetic, powering everything from smoke detectors to deep-space probes.",
    "scientific_profile": "Block: 5f; Property: All isotopes radioactive; Origin: Natural & Synthetic",
    "system_note": "f-block / Period 7"
  },
  "unknown": {
    "title": "Transactinides / Unknown",
    "description": "These are the 'frontier' elements located beyond ($trans$) the actinides. They do not exist naturally on Earth and must be synthesized atom-by-atom in massive particle accelerators. Because they decay in fractions of a second, their chemical descriptions are often based on complex mathematical predictions rather than physical observation.",
    "scientific_profile": "Stability: Extremely Unstable; Origin: Synthetic; Data: Predicted",
    "system_note": "Superheavy / Research only"
  }
};