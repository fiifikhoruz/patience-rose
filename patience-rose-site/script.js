const filenames=["wild-flowers","ladies-3","cap-3","wild-flowers-2","legacy","peace-2","winners","fly","ladies-5","the-world-is-my-oyster","ladies-8","gods-plan","from-darkness","ladies-9","cap-1","legacy-3","faith-over-fear","ladies-slags","wild-flowers-3","cap-14","spiritual","ladies-11","solidarity","ladies-10","legacy-2","cap-11","divine","shidaa","sacred-2","prophecy","property-of-pr","spiritual-2","cap-7","gods-dont-bleed","rebels","cap-12","moonlight","property-of-pr-2","cap-4","prodigy","roses","pressure","faith-is-my-currency","ladies-7","sacred","the-world-is-yours","heaven","cap-8","cap-9","rebels-3","ladies-2","cap-10","scary-hours","peace","cap-13","purpose-over-clout","rebels-2","cap-5","spiritual-3","ghetto-warriors","blessed","royalty-2","ladies-12","cap-6","cap-2","gratitude","property-of-pr-3","glory","rise-of-the-legends","ladies-6","lladies-4","royalty"];
const products=filenames.map((slug)=>({file:slug+'.webp',name:slug.replace(/^lladies-/,'ladies-').split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '),category:slug.startsWith('cap-')?'caps':slug.startsWith('ladies-')||slug.startsWith('lladies-')?'ladies':'men'}));
const grid=document.getElementById('product-grid');
const dialog=document.getElementById('product-dialog');
const preorderUrl=p=>'https://wa.me/233554441213?text='+encodeURIComponent('Hello Patience Rose, I would like to preorder '+p.name+' ('+p.category+'). Please share the available sizes, price and delivery details.');
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
 document.getElementById('dialog-description').textContent='Patience Rose '+(p.category==='caps'?'cap':p.category==='ladies'?'ladieswear':'menswear')+' design. Product details will be confirmed ahead of launch.';
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
document.getElementById('year').textContent=new Date().getFullYear();renderProducts();
