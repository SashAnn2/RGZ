let products = [
    {href: 'product1.html', text: 'Эритрит', images: ['r1.jpg','r2.png'], price: '599 &#8381', info: 'Эритрит Freshburg является отличной альтернативой для сахара, который нельзя употреблять в больших количествах из-за его вреда для здоровья.<br> Натуральный сахарозаменитель является его достойным аналогом.'},
    {href: 'product2.html', text: 'Мука кокосовая', images: ['m1.jpg', "m2.jpg"], price:'429 &#8381', info: 'Кокосовая мука FRESHBURG является полезным дополнением рациона, основанного на принципах здорового питания.<br> Это диетический продукт, отличающийся своими гипоаллергенными свойствами.'},
    {href: 'product3.html', text: 'Ананас сушеный',images: ['a1.jpg',"a2.jpg"], price: '149 &#8381', info: 'Сушеные ананасы - цукаты' },
    {href: 'product4.html', text: 'Сироп из топинамбура натуральный без сахара',images: ['s1.jpg', "s2.jpg"], price: '3295 &#8381', info: 'При упоминании подсластителей в голове возникает образ маленьких белых таблеток с искусственным составом, которые кладут в кофе, чаи.<br>Сегодня же питание может быть не только правильным, но и натуральным.<br> Заменитель сахара в том числе.' },
    {href: 'product5.html', text: 'Мука миндальная Premium Freshburg (200 г)',images:['mi1.jpg','mi2.jpg'], price: '549 &#8381', info: 'Миндальная мука Premium Freshburg является достойным дополнением рациона взрослых и детей, которые предпочитают соблюдать правильное питание.' },
    {href: 'product6.html', text: 'Мука миндальная Premium Freshburg (500 г)', images:['mi3.jpg','mi4.jpg'] , price: '990 &#8381', info: 'Миндальная мука Premium Freshburg является достойным дополнением рациона взрослых и детей, которые предпочитают соблюдать правильное питание.'},
    {href: 'product8.html', text: 'Масло топленое ГХИ ВАСТЭКО (400 г)', images: ['maslo1.jpg','maslo2.jfif'], price: '860 &#8381', info: 'Современный ритм жизни практически не даёт нам шансов хорошо питаться и вести правильный образ жизни.<br> Но это не значит, что нужно пустить всё на самотёк, не разбираясь в продуктах,<br> и поставить своё здоровье под угрозу!'},
    {href: 'product10.html', text: 'Кокосовое молоко AROY-D (1 л)', images: ['mo1.jpg','mo2.jpeg'], price: '599 &#8381', info: 'Кокосовое молоко очень полезное и вкусное. Богато витаминами группы В (В1, В2, В3) и витамином С. Оно имеет приятный запах и сладковатый вкус.'},
    {href: 'product11.html', text: 'Кокосовое масло (extra virgin) AROY-D (450 мл)', images: ['kok1.jpg','kok2.jpg'], price: '899 &#8381', info: '100% кокосовое масло употребляется в пищу как продукт диетического питания и для похудения.<br>Ускоряет обмен веществ, нормализует уровень сахара в крови.'},
    {href: 'product12.html', text: 'Тофу "Натуральный" (175 г), ЯСО', images: ['t1.jpg','t2.jfif'], price: '85 &#8381', info: 'Тофу натуральный изготавливается из соевого молоко путем свертывания белка. Нейтральный вкус позволяет добавлять этот сыр практически в любые блюда. '},
    {href: 'product13.html', text: 'Семена чиа Freshburg (400 г)', images: ['ch1.jpg','ch2.jpg'], price: '599 &#8381', info: 'Здоровье кожи, Постный продукт, Сердце и сосуды, Улучшение мозговой деятельности'},
    {href: 'product14.html', text: 'Паста кокосовая без сахара Freshburg (500 г)', images: ['p1.jpg','p2.jpeg'], price: '519 &#8381', info: 'Тропический кокос спрятал свою самую лакомую часть за толстой броней и добраться до неё – задача непростая. <br>Но если вы купили кокосовую пасту Freshburg, просто открутите крышку и наслаждайтесь вкусной мякотью.'},
    {href: 'product15.html', text: 'Ядро фундука Freshburg (50 г)', images: ['y1.jpg','y2.jpg'], price: '149 &#8381', info: 'Цельное ядро фундука'},
    {href: 'product16.html', text: 'Ядро арахиса очищенное Freshburg (120 г)', images: ['ar1.jpg','ar2.jpeg'], price: '99 &#8381', info: 'Чищенное ядро арахиса, цена за 120 грамм'},
    {href: 'product17.html', text: 'Чернослив Freshburg (120 г)', images: ['c1.jpg','c2.jpeg'], price: '219 &#8381', info: 'Чернослив сушеный, цена за 120 грамм'},
    {href: 'product18.html', text: 'Кешью Freshburg (120 г)', images: ['kes1.jpg','kes2.jpg'], price: '379 &#8381', info: 'Ядро кешью, цена за 120 грамм'},
    {href: 'product19.html', text: 'Псиллиум Freshburg (100 г)', images: ['ps1.jpg','ps2.jpg'], price: '379 &#8381', info: 'Псиллиум Freshburg – это продукт органического происхождения.<br> Такое название получила шелуха индийского и закавказского подорожника,<br> которая с давних времен используется при лечении множества заболеваний.'},
    {href: 'product20.html', text: 'Чай травяной для иммунитета Freshburg (30 г)', images: ['i1.jpg','i2.jpg'], price: '285 &#8381', info: 'Cодержится большое количество витаминов'},
    {href: 'product21.html', text: 'Чай травяной для иммунитета Freshburg (50 г)', images: ['i3.jpg','i4.jpg'], price: '335 &#8381', info: 'Cодержится большое количество витаминов'},
    {href: 'product7.html', text: 'Экстракт монарды 30 мл Родники Сибири', images: ['e1.jpg','e2.jpg'], price: '199 &#8381', info: 'Бактерицидные компоненты широкого спектра монарды подавляют рост и разрушают болезнетворные микробы, грибы, мицеллы и вирусы.<br> Это обеспечивает иммуномоделирующее действие'},
];
 
 function showModal(messageText, buttonText) {
    //alert('Sorry, not ready yet...\nИзвинте, еще не готово...');
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modal.style.top = '50px';
    modal.style.left = '47%';
    modal.style.transform = 'scale(01';
    
    
 
 
    let message = modal.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button')[0];
    button.innerHTML = buttonText;
 
    document.body.style.overflow = 'hidden';
    let = overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.backgroundcolor = 'rgba(0, 100, 200, 0.3)';
 
    return false;
 
 
 }
 function hideModal() {
     let modal = document.getElementsByClassName('modal')[0];
     setTimeout(function(){
         modal.style.visibility = 'hidden'
     }, 350);
     modal.style.opacity = '0';
     modal.style.top = '100%';
     modal.style.transform = 'scale(0)';
 
     document.body.style.overflow = 'auto';
     let = overlay = document.getElementsByClassName('overlay')[0];
     setTimeout(function(){
         overlay.style.visibility = 'hidden';
     }, 200);
     overlay.style.opacity = '0';
     overlay.style.backgroundcolor = 'rgba(255, 0, 0, 0.3)';
 
     
 }
 function notReadyAlert(event) {
     showModal('Sorry, not ready yet!<br>Извинте, еще не готово!', 'Эх, жаль');
     event.preventDefault();
     return false;
     }
 
 function notReadyAlert1() {
     showModal('Звоните, если угадаете)))0))))','Прости, друг');
    return false;
 }
 function notReadyAlert2() {
     showModal('Это наш сайт', 'НеНаСтОяЩиЙ');
    return false;
 }
 function notReadyAlert3() {
     showModal('Хмм... или не прикол', 'Да ладно, не важно, что я там сказал');
    return false;
 }
 
 function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for (let i = 0; i<products.length; i++) {
       let product = products[i];
       if(nameRegExp.test(product.text)) {
          let card = cards[i];
          card.style.border = '3px dashed red';
          card.style.backgroundcolor = 'yellow';
 
          setTimeout(function(){
             card.style.border = 'none';
             card.style.backgroundcolor = '';
          }, 2000);
          
       }
    }
 }
 function generateMenu() {
    let menu = document.querySelector('nav.main-menu ul');
    menu.innerHTML = '';
    let items = [
       {href: 'index.html', text: 'Товары'},
       {href: 'contacts.html', text: 'Контакты'},
       {href: 'discont.html', text: 'Акции'},
    ];
 
    for(let i = 0; i<items.length; i++){
       let link = document.createElement('a');
       link.innerText = items[i].text;
       link.href = items[i].href;
       if (items[i].href == '') {
          link.addEventListener('click', notReadyAlert);
       }
 
       let menuItem = document.createElement('li');
       menuItem.appendChild(link);
 
       menu.appendChild(menuItem);
    }
 }
 function showProductInfo(product) {
    let imagesList = '';
    for(let i=0; i<product.images.length; i++){
        imagesList = imagesList + `<div><img src="${product.images[i]}"></div>`
    }
        showModal(`Информация о товаре
            ${imagesList}
            <div>${product.text}</div>
            <div>${product.price}</div>
            <div><i>${product.info}</i></div>
            `, 'Спасибо');
        }
        function generateCard() {
            let main = document.querySelector('main');
            for(let i = 0; i<products.length; i++){
               let product = document.createElement('div');
               product.className= 'card';
               product.innerHTML = `
               <a href="#">
                  <div class="image"><img src="${products[i].images[0]}"></div>
                  <div class="product-name">"${products[i].text}"</div>
                  <div class="price" onmouseover="ColorPrice(this)" onmouseout="ColorPrice1(this)">${products[i].price}</div>
                  </a>
                  `;
               product.querySelector('a').addEventListener('click', function(){
                  showProductInfo(products[i]);
               });
         
               main.appendChild(product);
            }
         }
  function loaded() {
     let searchbox = document.getElementById('search');
     searchbox.addEventListener('keydown', function(key){
        if(key.key == 'Enter')
            search();
     });
 
     generateMenu();
     generateCard();
 
  }
  function ColorPrice(text){
     console.log('ПРивет');
     text.style.color = 'brown';
     text.style.fontWeight = 'blood';
  }
  function ColorPrice1(text){
     text.style.color = 'black';
     text.style.fontWeight = 'black';
  }


  