// для того, что бы "обернуть" по отдельности списки div-элементами можно использовать следующий код:

$(".list").wrap("<div class='new'></div>");

 <div class="new">
   <ul class="list l1">
     <li class="item"> Высоко </li>	
     <li class="item"> Быстро </li>	
     <li class="item"> Сильно </li>	
   </ul>
 </div>
 <div class="new">
   <ul class="list l2">
     <li class="item"> Выше </li>	
     <li class="item"> Быстрее </li>	
     <li class="item"> Сильнее </li>	
   </ul>
 </div>
 
// а воспользовавшись функцией wrapAll мы "обернем" списки одним общим div-элементом

$(".list").wrapAll("<div class='new'></div>");

 <div class="new">
   <ul class="list l1">
     <li class="item"> Высоко </li>	
     <li class="item"> Быстро </li>	
     <li class="item"> Сильно </li>	
   </ul>
   <ul class="list l2">
     <li class="item"> Выше </li>	
     <li class="item"> Быстрее </li>	
     <li class="item"> Сильнее </li>	
   </ul>
 </div>
