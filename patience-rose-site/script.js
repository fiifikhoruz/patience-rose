const filenames=["wild-flowers","ladies-3","cap-3","wild-flowers-2","legacy","peace-2","winners","fly","ladies-5","the-world-is-my-oyster","ladies-8","gods-plan","from-darkness","ladies-9","cap-1","legacy-3","faith-over-fear","ladies-slags","wild-flowers-3","cap-14","spiritual","ladies-11","solidarity","ladies-10","legacy-2","cap-11","divine","shidaa","sacred-2","prophecy","property-of-pr","spiritual-2","cap-7","gods-dont-bleed","rebels","cap-12","moonlight","property-of-pr-2","cap-4","prodigy","roses","pressure","faith-is-my-currency","ladies-7","sacred","the-world-is-yours","heaven","cap-8","cap-9","rebels-3","ladies-2","cap-10","scary-hours","peace","cap-13","purpose-over-clout","rebels-2","cap-5","spiritual-3","ghetto-warriors","blessed","royalty-2","ladies-12","cap-6","cap-2","gratitude","property-of-pr-3","glory","rise-of-the-legends","ladies-6","lladies-4","royalty","lion-of-judah-white-tee","undisputed-white-tee","destined-white-tee","god-is-the-greatest-white-tee","blessed-white-white-tee","winners-white-white-tee","champions-white-tee","undefeated-white-tee","believer-white-tee","property-white-tee","scarecrow-white-tee","believe-white-tee"];
const products=filenames.map((slug)=>({file:slug+'.webp',name:slug.replace(/^lladies-/,'ladies-').replace(/-white-white-tee$/,'-white-tee').split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '),category:slug.startsWith('cap-')?'caps':slug.startsWith('ladies-')||slug.startsWith('lladies-')?'ladies':'men'}));
const productDescriptions={
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
 const base=slug.replace(/-\d+$/,'');
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
  const img=document.createElement('img');img.className='merch-photo';img.src='assets/catalog/'+p.file;img.alt=p.name+' clothing or accessory image';img.loading=i<6?'eager':'lazy';img.decoding='async';
  const serial=document.createElement('span');serial.className='corner-num';serial.textContent=String(i+1).padStart(2,'0')+' / '+visible.length;preview.append(img,serial);
  const meta=document.createElement('div');meta.className='product-meta';const nameArea=document.createElement('div');const heading=document.createElement('h3');heading.className='product-name';heading.textContent=p.name;const subtype=document.createElement('span');subtype.className='product-type';subtype.textContent=p.category.toUpperCase()+' / PATIENCE ROSE';nameArea.append(heading,subtype);
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
 const img=document.createElement('img');img.className='dialog-merch';img.src='assets/catalog/'+p.file;img.alt=p.name+' merchandise image';ph.append(img);dialog.showModal();
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
