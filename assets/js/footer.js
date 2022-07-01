function renderfooter() {
  
    var template = document.getElementById('footermsg').innerHTML;
    var rendered = Mustache.render(template, {
        footer: ('Google, do you love me? ')
    });
    document.getElementById('footermsg').innerHTML = rendered;
}
