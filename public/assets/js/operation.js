
document.getElementById('policy-button').onclick = function(){
    e = document.getElementById('policy-list');
    if(e.style.display == 'none'){
        e.style.display = 'block';
    }else{
        e.style.display = 'none';
    }
}