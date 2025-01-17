document.querySelectorAll('a [href="#"').forEach(anchor=>
{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const targetld=this.getAttribute('href').substring(1); const targetElement=document.getElementById(targetld);

        if(targetElement){
            window.scrollTo({
                top:targetElement.offsetTop,behavior:'smooth'
            });
        }
    }
    );
}
);