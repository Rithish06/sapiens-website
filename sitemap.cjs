const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const blogSlugs = require('./blogSlug.json');
const hostname = 'https://www.sapiensclinic.com/';

const staticRoutes = [
  '/',
  '/contact',
  '/career',
  '/blog',

  // Dr. Darshan
  '/dr-darshan',
  '/dr-darshan/carpal-tunnel-syndrome',
  '/dr-darshan/stiffness-of-joints-of-the-hand',
  '/dr-darshan/infections-of-the-hand',
  '/dr-darshan/de-quervains-tenosynovitis',
  '/dr-darshan/swellings-lumps-and-bumps-of-the-hand',
  '/dr-darshan/kienbocks-disease-avascular-necrosis-of-lunate',
  '/dr-darshan/scaphoid-fractures',
  '/dr-darshan/scaphoid-non-unions',
  '/dr-darshan/scapholunate-ligament-injury',
  '/dr-darshan/radius-fracture',
  '/dr-darshan/tfcc-triangular-fibrocartilage-complex-injury',
  '/dr-darshan/tendon-transfers-for-hand',
  '/dr-darshan/wrist-arthroscopy',
  '/dr-darshan/cubital-tunnel-syndrome',
  '/dr-darshan/cerebral-palsy',
  '/dr-darshan/tumors-of-hand',
  '/dr-darshan/post-burns-contracture',
  '/dr-darshan/vascular-anomalies',
  '/dr-darshan/ucl-injury',
  '/dr-darshan/glomus-tumors',
  '/dr-darshan/giant-cell-tumor-gct',
  '/dr-darshan/tuberculosis',
  '/dr-darshan/congenital-anomalies',
  '/dr-darshan/elbow-replacement-elbow-arthroplasty',
  '/dr-darshan/elbow-arthroscopy',
  '/dr-darshan/synovitis-of-elbow',
  '/dr-darshan/ligament-repair-or-reconstruction-of-elbow',
  '/dr-darshan/shoulder-arthroscopy',
  '/dr-darshan/shoulder-replacement-arthroplasty',
  '/dr-darshan/rotator-cuff-tear',
  '/dr-darshan/labral-tear',
  '/dr-darshan/slap-injuries',
  '/dr-darshan/pollicization',
  '/dr-darshan/malunion',
  '/dr-darshan/tendon-transfer',
  '/dr-darshan/synovectomy',
  '/dr-darshan/nonunion',
  '/dr-darshan/birth-related-brachial-plexus',
  '/dr-darshan/flaps-cover-to-upper-or-lower-limbs',
  '/dr-darshan/vascularized-bone-grafts-for-non-unions',
  '/dr-darshan/free-flaps',
  '/dr-darshan/vascularised-free-fibula',
  '/dr-darshan/complex-reconstruction-requiring-both-soft-tissue-and-bone',
  '/dr-darshan/vic-volkmans-ischemic-contracture-treatment-in-malleshwaram-bangalore',
  '/dr-darshan/reconstruction-for-the-limbs-treatment-in-malleshwaram-bangalore',
  '/dr-darshan/nerve-repair',
  '/dr-darshan/nerve-reconstruction',
  '/dr-darshan/nerve-related-problems-affecting-the-hand-brachial-plexus-injuries-nerve-injuries',
  '/dr-darshan/vic-volkmans-ischemic-contracture',
  '/dr-darshan/reconstruction-for-the-limbs',

  // Dr. Divya
  '/dr-divya-sundaresh',
  '/dr-divya-sundaresh/de-quervains-tenosynovitis-treatment',
  '/dr-divya-sundaresh/Eyelid',
  '/dr-divya-sundaresh/Asian-Blepharoplasty',
  '/dr-divya-sundaresh/Entropion-Repair',
  '/dr-divya-sundaresh/Canthal-Resection',
  '/dr-divya-sundaresh/Canthopexy',
  '/dr-divya-sundaresh/Epicanthoplasty',
  '/dr-divya-sundaresh/Eyelid-Retraction',
  '/dr-divya-sundaresh/Blepharophimosis',
  '/dr-divya-sundaresh/Eyelid-Synkinesis',
  '/dr-divya-sundaresh/Orbital-Disease',
  '/dr-divya-sundaresh/Orbital-Decompression',
  '/dr-divya-sundaresh/Wall-Decompression',
  '/dr-divya-sundaresh/Wall-Decompression-3',
  '/dr-divya-sundaresh/Endoscopic-DCR',
  '/dr-divya-sundaresh/CDCR-DCT-Ballon',
  '/dr-divya-sundaresh/Dacryoplasty',
  '/dr-divya-sundaresh/Lester-Jones-Surgery',
  '/dr-divya-sundaresh/Orbital-Tumors',
  '/dr-divya-sundaresh/Cavernous-Hemangioma',
  '/dr-divya-sundaresh/Orbital-Lymphoma',
  '/dr-divya-sundaresh/Pseudo-tumor',
  '/dr-divya-sundaresh/Ocular-Surface-Tumors',
  '/dr-divya-sundaresh/Conjuctival-Cyst',
  '/dr-divya-sundaresh/Removal-Surgery',
  '/dr-divya-sundaresh/Sebaceous-cell-carcinoma',
  '/dr-divya-sundaresh/Malignant-melanomas',
  '/dr-divya-sundaresh/Mohs-Surgery',
  '/dr-divya-sundaresh/Tenzels-flap',
  '/dr-divya-sundaresh/Hughes-Flap',
  '/dr-divya-sundaresh/Cutler-Beard-Flap',
  '/dr-divya-sundaresh/Mustardes-Flap',
  '/dr-divya-sundaresh/Choroidal-Metastasis',
  '/dr-divya-sundaresh/Choroidal-Melanoma',
  '/dr-divya-sundaresh/Enucleation',
  '/dr-divya-sundaresh/Evisceration',
  '/dr-divya-sundaresh/Exenteration'
];

// ✅ Dynamic blog slugs
const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);

// ✅ Combine all routes
const allRoutes = [...staticRoutes, ...blogRoutes];

// ✅ Generate sitemap
(async () => {
  try {
    const sitemap = new SitemapStream({ hostname });
    const sitemapPath = path.resolve(__dirname, 'src', 'sitemap.xml');
    const writeStream = fs.createWriteStream(sitemapPath);

    sitemap.pipe(writeStream);

    allRoutes.forEach(route => {
      sitemap.write({ url: route });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
})();