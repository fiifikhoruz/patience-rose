const filenames=["wild-flowers","ladies-3","cap-3","wild-flowers-2","legacy","peace-2","winners","fly","ladies-5","the-world-is-my-oyster","ladies-8","gods-plan","from-darkness","ladies-9","cap-1","legacy-3","faith-over-fear","ladies-slags","wild-flowers-3","cap-14","spiritual","ladies-11","solidarity","ladies-10","legacy-2","cap-11","divine","shidaa","sacred-2","prophecy","property-of-pr","spiritual-2","cap-7","gods-dont-bleed","rebels","cap-12","moonlight","property-of-pr-2","cap-4","prodigy","roses","pressure","faith-is-my-currency","ladies-7","sacred","the-world-is-yours","heaven","cap-8","cap-9","rebels-3","ladies-2","cap-10","scary-hours","peace","cap-13","purpose-over-clout","rebels-2","cap-5","spiritual-3","ghetto-warriors","blessed","royalty-2","ladies-12","cap-6","cap-2","gratitude","property-of-pr-3","glory","ladies-6","lladies-4","royalty","lion-of-judah-white-tee","undisputed-white-tee","destined-white-tee","god-is-the-greatest-white-tee","blessed-white-white-tee","winners-white-white-tee","champions-white-tee","undefeated-white-tee","believer-white-tee","property-white-tee","scarecrow-white-tee","believe-white-tee"];
const products=filenames.map((slug)=>({file:slug+'.webp',name:slug.replace(/^lladies-/,'ladies-').replace(/-white-white-tee$/,'-white-tee').split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '),category:slug.startsWith('cap-')?'caps':slug.startsWith('ladies-')||slug.startsWith('lladies-')?'ladies':'men'}));
const newCatalogue=[{"slug":"new-free-spirit-2","category":"men","name":"Free Spirit 2","path":"patience-rose-new-prodigy-images/catalog/new-free-spirit-2.webp"},{"slug":"new-chanted","category":"men","name":"Chanted","path":"patience-rose-new-prodigy-images/catalog/new-chanted.webp"},{"slug":"new-rough-rider-2","category":"ladies","name":"Rough Rider 2","path":"patience-rose-new-prodigy-images/catalog/new-rough-rider-2.webp"},{"slug":"new-lover-2","category":"ladies","name":"Lover 2","path":"patience-rose-new-prodigy-images/catalog/new-lover-2.webp"},{"slug":"new-lover","category":"men","name":"Lover","path":"patience-rose-new-prodigy-images/catalog/new-lover.webp"},{"slug":"new-free-spirit-3","category":"men","name":"Free Spirit 3","path":"patience-rose-new-prodigy-images/catalog/new-free-spirit-3.webp"},{"slug":"new-truth","category":"men","name":"Truth","path":"patience-rose-new-prodigy-images/catalog/new-truth.webp"},{"slug":"new-deadly-squad","category":"men","name":"Deadly Squad","path":"patience-rose-new-prodigy-images/catalog/new-deadly-squad.webp"},{"slug":"new-fearless-2","category":"men","name":"Fearless 2","path":"patience-rose-new-prodigy-images/catalog/new-fearless-2.webp"},{"slug":"new-god-and-time","category":"men","name":"God And Time","path":"patience-rose-new-prodigy-images/catalog/new-god-and-time.webp"},{"slug":"new-fearless-3","category":"men","name":"Fearless 3","path":"patience-rose-new-prodigy-images/catalog/new-fearless-3.webp"},{"slug":"new-chanted-white","category":"men","name":"Chanted White","path":"patience-rose-new-prodigy-images/catalog/new-chanted-white.webp"},{"slug":"new-2112","category":"men","name":"2112","path":"patience-rose-new-prodigy-images/catalog/new-2112.webp"},{"slug":"new-fearless","category":"men","name":"Fearless","path":"patience-rose-new-prodigy-images/catalog/new-fearless.webp"},{"slug":"new-problem-child-2","category":"men","name":"Problem Child 2","path":"patience-rose-new-prodigy-images/catalog/new-problem-child-2.webp"},{"slug":"new-serendipity-2","category":"men","name":"Serendipity 2","path":"patience-rose-new-prodigy-images/catalog/new-serendipity-2.webp"},{"slug":"new-savage-2","category":"men","name":"Savage 2","path":"patience-rose-new-prodigy-images/catalog/new-savage-2.webp"},{"slug":"new-romantic-satan-2","category":"ladies","name":"Romantic Satan 2","path":"patience-rose-new-prodigy-images/catalog/new-romantic-satan-2.webp"},{"slug":"new-girl-power","category":"men","name":"Girl Power","path":"patience-rose-new-prodigy-images/catalog/new-girl-power.webp"},{"slug":"new-reach-for-the-stars-3","category":"men","name":"Reach For The Stars 3","path":"patience-rose-new-prodigy-images/catalog/new-reach-for-the-stars-3.webp"},{"slug":"new-samurai","category":"men","name":"Samurai","path":"patience-rose-new-prodigy-images/catalog/new-samurai.webp"},{"slug":"new-melanin","category":"ladies","name":"Melanin","path":"patience-rose-new-prodigy-images/catalog/new-melanin.webp"},{"slug":"new-power","category":"men","name":"Power","path":"patience-rose-new-prodigy-images/catalog/new-power.webp"},{"slug":"new-reach-for-the-stars-2","category":"men","name":"Reach For The Stars 2","path":"patience-rose-new-prodigy-images/catalog/new-reach-for-the-stars-2.webp"},{"slug":"new-mantra","category":"men","name":"Mantra","path":"patience-rose-new-prodigy-images/catalog/new-mantra.webp"},{"slug":"new-free-spirit","category":"men","name":"Free Spirit","path":"patience-rose-new-prodigy-images/catalog/new-free-spirit.webp"},{"slug":"new-kindness-2","category":"ladies","name":"Kindness 2","path":"patience-rose-new-prodigy-images/catalog/new-kindness-2.webp"},{"slug":"new-mindset-2","category":"men","name":"Mindset 2","path":"patience-rose-new-prodigy-images/catalog/new-mindset-2.webp"},{"slug":"new-mindset","category":"men","name":"Mindset","path":"patience-rose-new-prodigy-images/catalog/new-mindset.webp"},{"slug":"new-mindset-3","category":"men","name":"Mindset 3","path":"patience-rose-new-prodigy-images/catalog/new-mindset-3.webp"},{"slug":"new-truth-black","category":"men","name":"Truth Black","path":"patience-rose-new-prodigy-images/catalog/new-truth-black.webp"},{"slug":"new-lost-love","category":"men","name":"Lost Love","path":"patience-rose-new-prodigy-images/catalog/new-lost-love.webp"},{"slug":"new-deadly-squad-2","category":"men","name":"Deadly Squad 2","path":"patience-rose-new-prodigy-images/catalog/new-deadly-squad-2.webp"},{"slug":"new-lost-love-2","category":"men","name":"Lost Love 2","path":"patience-rose-new-prodigy-images/catalog/new-lost-love-2.webp"},{"slug":"new-romantic-satan","category":"men","name":"Romantic Satan","path":"patience-rose-new-prodigy-images/catalog/new-romantic-satan.webp"},{"slug":"new-pray-and-hustle","category":"men","name":"Pray And Hustle","path":"patience-rose-new-prodigy-images/catalog/new-pray-and-hustle.webp"},{"slug":"new-serendipity","category":"men","name":"Serendipity","path":"patience-rose-new-prodigy-images/catalog/new-serendipity.webp"},{"slug":"new-rough-rider","category":"men","name":"Rough Rider","path":"patience-rose-new-prodigy-images/catalog/new-rough-rider.webp"},{"slug":"new-god-and-time-blaack","category":"men","name":"God And Time Blaack","path":"patience-rose-new-prodigy-images/catalog/new-god-and-time-blaack.webp"},{"slug":"new-in-god-we-trust","category":"men","name":"In God We Trust","path":"patience-rose-new-prodigy-images/catalog/new-in-god-we-trust.webp"},{"slug":"new-girl-power-2","category":"men","name":"Girl Power 2","path":"patience-rose-new-prodigy-images/catalog/new-girl-power-2.webp"},{"slug":"new-savage","category":"men","name":"Savage","path":"patience-rose-new-prodigy-images/catalog/new-savage.webp"},{"slug":"new-reach-for-the-stars","category":"men","name":"Reach For The Stars","path":"patience-rose-new-prodigy-images/catalog/new-reach-for-the-stars.webp"},{"slug":"new-samurai-2","category":"men","name":"Samurai 2","path":"patience-rose-new-prodigy-images/catalog/new-samurai-2.webp"},{"slug":"new-consistency","category":"men","name":"Consistency","path":"patience-rose-new-prodigy-images/catalog/new-consistency.webp"},{"slug":"new-mantra-2","category":"men","name":"Mantra 2","path":"patience-rose-new-prodigy-images/catalog/new-mantra-2.webp"},{"slug":"new-kindness","category":"men","name":"Kindness","path":"patience-rose-new-prodigy-images/catalog/new-kindness.webp"},{"slug":"new-god-is-freedom","category":"men","name":"God Is Freedom","path":"patience-rose-new-prodigy-images/catalog/new-god-is-freedom.webp"},{"slug":"new-consistency-2","category":"men","name":"Consistency 2","path":"patience-rose-new-prodigy-images/catalog/new-consistency-2.webp"},{"slug":"new-mantra-white","category":"men","name":"Mantra White","path":"patience-rose-new-prodigy-images/catalog/new-mantra-white.webp"},{"slug":"new-eyes-dont-lie","category":"men","name":"Eyes Dont Lie","path":"patience-rose-new-prodigy-images/catalog/new-eyes-dont-lie.webp"},{"slug":"new-goat-2","category":"men","name":"Goat 2","path":"patience-rose-new-prodigy-images/catalog/new-goat-2.webp"},{"slug":"new-problem-child","category":"men","name":"Problem Child","path":"patience-rose-new-prodigy-images/catalog/new-problem-child.webp"},{"slug":"new-melanin-2","category":"ladies","name":"Melanin 2","path":"patience-rose-new-prodigy-images/catalog/new-melanin-2.webp"},{"slug":"new-goat","category":"men","name":"Goat","path":"patience-rose-new-prodigy-images/catalog/new-goat.webp"}];
products.push(...newCatalogue.map(p=>({file:p.slug+'.webp',name:p.name,category:p.category,path:p.path})));
const productDescriptions={
"new-chanted":"A graphic piece from the latest Prodigy collection, featuring the Chanted design.",
"new-free-spirit":"An expressive design inspired by independence and the freedom to be yourself.",
"new-fearless":"A bold design about courage and moving beyond fear.",
"new-girl-power":"A graphic statement celebrating confidence and self-expression.",
"new-melanin":"An expression of beauty, identity and pride.",
"new-reach-for-the-stars":"A reminder to think bigger and pursue what matters.",
"new-god-and-time":"A message about faith, trust and the timing of life's journey.",
"new-kindness":"An expressive piece centred on compassion and the strength in kindness.",
"new-pray-and-hustle":"A statement about pairing faith with consistent effort.",
"new-consistency":"A reminder that steady effort matters.",
"new-mindset":"A piece about focus, perspective and personal growth.",
"new-mantra":"A statement about the words and beliefs that guide you.",
"new-samurai":"A graphic statement inspired by determination and discipline.",
"new-goat":"A statement about ambition and striving for excellence.",
"new-problem-child":"An expressive graphic design about individuality.",

  "prodigy": "The signature expression of The Prodigy. A statement of identity and becoming.",
  "legacy": "A tribute to the people, memories and lessons that continue to live through us.",
  "sacred": "An expression of faith, devotion and the things we hold sacred.",
  "moonlight": "An after-dark expression from the Prodigy merchandise collection.",
  "solidarity": "A piece about standing together and carrying collective strength.",
  "rise-of-the-legends": "A bold design celebrating growth, endurance and the path to legacy.",
  "wild-flowers": "A distinctive graphic piece from the Prodigy collection.",
  "pain-and-misery": "An uncompromising expression of the difficult chapters that shape us.",
  "ghetto-warriors": "A strong visual statement about resilience and perseverance.",
  "heaven-and-hell": "A design exploring contrast, belief and the journey between extremes.",
  "peace": "An expression of calm, balance and keeping your peace through every season.",
  "winners": "For those who keep going and make room for their next win.",
  "fly": "A reminder to grow beyond limits and move on your own terms.",
  "the-world-is-my-oyster": "A confident statement about possibility, discovery and making your own way.",
  "gods-plan": "A design centred on faith, trust and the bigger picture.",
  "from-darkness": "A story of finding direction and purpose through difficult moments.",
  "faith-over-fear": "A reminder to choose faith in the face of uncertainty.",
  "spiritual": "A statement of inner conviction and the things that guide us.",
  "divine": "Inspired by belief, purpose and a sense of something greater.",
  "shidaa": "An expression of gratitude and appreciation.",
  "prophecy": "A bold statement about vision, belief and what lies ahead.",
  "property-of-pr": "A Patience Rose identity piece that puts the label front and centre.",
  "gods-dont-bleed": "A striking statement about resilience, myth and inner strength.",
  "rebels": "For independent minds who move differently and define their own path.",
  "roses": "A tribute to growth, beauty and strength through changing seasons.",
  "pressure": "A graphic statement about perseverance when expectations are high.",
  "faith-is-my-currency": "A statement about trusting what you believe in.",
  "the-world-is-yours": "A confident reminder to pursue possibility without apology.",
  "heaven": "A design inspired by hope, belief and looking beyond the everyday.",
  "scary-hours": "An expressive piece about facing the unknown with confidence.",
  "purpose-over-clout": "A reminder that meaning matters more than attention.",
  "blessed": "An expression of gratitude for the journey and everything it brings.",
  "royalty": "A statement about dignity, self-worth and knowing your value.",
  "gratitude": "A simple expression of appreciation for the people and moments that matter.",
  "glory": "A bold piece about ambition, growth and earned moments of recognition.",
  "lion-of-judah": "A white tee inspired by faith, courage and the Lion of Judah.",
  "undisputed": "A white tee carrying a confident, unapologetic message.",
  "destined": "A white tee about purpose and becoming who you are meant to be.",
  "god-is-the-greatest": "A white tee expressing faith and gratitude.",
  "champions": "A white tee celebrating resilience, perseverance and achievement.",
  "undefeated": "A white tee built around determination and refusing to give up.",
  "believer": "A white tee about conviction and holding on to what you believe.",
  "property": "A white tee making a clear Patience Rose identity statement.",
  "scarecrow": "A white tee featuring the Scarecrow design.",
  "believe": "A white tee carrying a simple message of belief."
};
function descriptionFor(p){
 const slug=productSlug(p).replace(/-white-white-tee$/,'').replace(/-white-tee$/,'');
 const base=slug.replace(/-\d+$/,'').replace(/-(white|black|blaack)$/,'');
 const exact=productDescriptions[slug]||productDescriptions[base];
 if(exact)return exact+(slug!==base?' This is an alternate design in the series.':'');
 if(p.category==='caps')return 'Patience Rose cap design '+(slug.match(/\d+$/)?.[0]||'')+'. Explore this accessory in the caps collection and enquire for availability.';
 if(p.category==='ladies')return 'Patience Rose ladieswear design '+(slug.match(/\d+$/)?.[0]||'')+'. Part of the women’s collection, made for expressing your individual style.';
 return 'An expressive Patience Rose design from the collection. Explore the artwork and enquire for more product details.';
}
const grid=document.getElementById('product-grid');
const dialog=document.getElementById('product-dialog');
const productSlug=p=>p.file.replace(/\.webp$/,'');
const productLink=p=>new URL('?product='+encodeURIComponent(productSlug(p))+'#collection',window.location.origin+window.location.pathname).href;
const productImageLink=p=>new URL('assets/catalog/'+encodeURIComponent(p.file),window.location.href).href;
const preorderUrl=p=>'https://wa.me/233554441213?text='+encodeURIComponent(
 'Hello Patience Rose, I would like to preorder '+p.name+' ('+p.category+').\n\n'+
 'Product: '+productLink(p)+'\n'+
 '\n'+
 'Please share the available sizes, price and delivery details.'
);
function renderProducts(filter='all'){
 grid.replaceChildren();
 const visible=products.filter(p=>filter==='all'||p.category===filter);
 visible.forEach((p,i)=>{
  const card=document.createElement('article');card.className='product-card';
  const preview=document.createElement('button');preview.className='product-visual has-merch';preview.setAttribute('aria-label','Preview '+p.name);
  const img=document.createElement('img');img.className='merch-photo';img.src='assets/catalog/'+(p.path||p.file);img.alt=p.name+' clothing or accessory image';img.loading=i<6?'eager':'lazy';img.decoding='async';
  const serial=document.createElement('span');serial.className='corner-num';serial.textContent=String(i+1).padStart(2,'0')+' / '+visible.length;preview.append(img,serial);
  const meta=document.createElement('div');meta.className='product-meta';const nameArea=document.createElement('div');const heading=document.createElement('h3');heading.className='product-name';heading.textContent=p.name;const subtype=document.createElement('span');subtype.className='product-type';subtype.textContent=p.category.toUpperCase()+' / PATIENCE ROSE';const summary=document.createElement('p');summary.className='product-description';summary.textContent=descriptionFor(p);nameArea.append(heading,subtype,summary);
  const arrow=document.createElement('button');arrow.className='product-arrow';arrow.textContent='↗';arrow.setAttribute('aria-label','View '+p.name);meta.append(nameArea,arrow);const preorder=document.createElement('a');preorder.className='product-preorder';preorder.href=preorderUrl(p);preorder.target='_blank';preorder.rel='noopener noreferrer';preorder.textContent='PREORDER VIA WHATSAPP ↗';preorder.setAttribute('aria-label','Enquire about preordering '+p.name+' on WhatsApp');card.append(preview,meta,preorder);grid.append(card);
  preview.addEventListener('click',()=>showProduct(p));arrow.addEventListener('click',()=>showProduct(p));
 });
 document.querySelectorAll('.filter').forEach(b=>{const on=b.dataset.filter===filter;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
}
function showProduct(p){
 document.getElementById('dialog-title').textContent=p.name;
 document.getElementById('dialog-description').textContent=descriptionFor(p);
 document.getElementById('dialog-preorder').href=preorderUrl(p);
 const ph=document.querySelector('.dialog-preview');ph.classList.add('has-merch');ph.querySelector('.dialog-merch')?.remove();
 const img=document.createElement('img');img.className='dialog-merch';img.src='assets/catalog/'+(p.path||p.file);img.alt=p.name+' merchandise image';ph.append(img);dialog.showModal();
}
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
document.getElementById('dialog-back').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>renderProducts(b.dataset.filter)));
document.querySelectorAll('[data-shop]').forEach(link=>link.addEventListener('click',()=>renderProducts(link.dataset.shop)));
const menuBtn=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('.mobile-nav');
menuBtn.addEventListener('click',()=>{const opened=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!opened));mobileNav.hidden=opened});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuBtn.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
renderProducts();
const selectedSlug=new URLSearchParams(window.location.search).get('product');
if(selectedSlug){
 const selectedProduct=products.find(p=>productSlug(p)===selectedSlug);
 if(selectedProduct){renderProducts(selectedProduct.category);showProduct(selectedProduct);}
}
