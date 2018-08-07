// Скрипт добавить/убрать класс при клике
<ul>
   <li><a href="#" class="active"></a></li>
   <li><a href="#"></a></li>
   <li><a href="#"></a></li>
</ul>

$(function() {
    $("ul li a").click(function() {
        $("ul li a").removeClass("active");         
        $(this).toggleClass("active");
    })
});
