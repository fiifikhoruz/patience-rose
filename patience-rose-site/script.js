const products = [
 {name:'Prodigy',category:'legacy',desc:'The signature expression of The Prodigy. A statement of identity and becoming.'},
 {name:'Legacy',category:'legacy',desc:'A tribute to the people, memories and lessons that continue to live through us.'},
 {name:'Sacred',category:'spirit',desc:'An expression of faith, devotion and the things we hold sacred.'},
 {name:'Moonlight',category:'expression',desc:'An after-dark expression from the Prodigy merchandise collection.'},
 {name:'Solidarity',category:'legacy',desc:'A piece about standing together and carrying collective strength.'},
 {name:'Rise of the Legends',category:'legacy',desc:'A bold design celebrating growth, endurance and the path to legacy.'},
 {name:'Wild Flowers',category:'expression',desc:'A distinctive graphic piece from the Prodigy collection.'},
 {name:'Pain and Misery',category:'expression',desc:'An uncompromising expression of the difficult chapters that shape us.'},
 {name:'Ghetto Warriors',category:'expression',desc:'A strong visual statement about resilience and perseverance.'},
 {name:'Heaven and Hell',category:'spirit',desc:'A design exploring contrast, belief and the journey between extremes.'}
];
const grid=document.getElementById('product-grid');
const dialog=document.getElementById('product-dialog');
function renderProducts(filter='all'){
 grid.replaceChildren();
 products.forEach((p,index)=>{
  if(filter!=='all'&&p.category!==filter)return;
  const card=document.createElement('article');card.className='product-card';
  const preview=document.createElement('button');preview.className='product-visual';preview.style.setProperty('--tilt',(index%2===0?'-2':'2')+'deg');preview.setAttribute('aria-label','Preview '+p.name);
  const serial=document.createElement('span');serial.className='corner-num';serial.textContent=String(index+1).padStart(2,'0')+' / 10';
  const type=document.createElement('span');type.className='design-text';type.textContent=p.name;
  const note=document.createElement('span');note.className='image-note';note.textContent='PHOTO COMING SOON';
  preview.append(serial,type,note);
  const meta=document.createElement('div');meta.className='product-meta';
  const nameArea=document.createElement('div');const heading=document.createElement('h3');heading.className='product-name';heading.textContent=p.name;
  const subtype=document.createElement('span');subtype.className='product-type';subtype.textContent='THE PRODIGY COLLECTION';nameArea.append(heading,subtype);
  const arrow=document.createElement('button');arrow.className='product-arrow';arrow.textContent='↗';arrow.setAttribute('aria-label','View '+p.name);meta.append(nameArea,arrow);card.append(preview,meta);grid.append(card);
  preview.addEventListener('click',()=>showProduct(p));arrow.addEventListener('click',()=>showProduct(p));
 });
}
function showProduct(p){document.getElementById('dialog-title').textContent=p.name;document.getElementById('dialog-description').textContent=p.desc;document.getElementById('dialog-monogram').textContent=p.name==='Prodigy'?'X':'PR';dialog.showModal()}
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());document.getElementById('dialog-back').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(item=>{item.classList.toggle('active',item===btn);item.setAttribute('aria-pressed',String(item===btn))});renderProducts(btn.dataset.filter)}));
const menuBtn=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('.mobile-nav');menuBtn.addEventListener('click',()=>{const isOpen=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!isOpen));mobileNav.hidden=isOpen});mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuBtn.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();renderProducts();
