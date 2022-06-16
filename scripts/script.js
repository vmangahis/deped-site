document.getElementById('caret-button-1').addEventListener('click',() => {
    var icon = document.getElementById('caret-down-icon');
    if(icon.className == "fa-solid fa-caret-down")
    {

        document.getElementById('p1').style.display = 'block';
        icon.className = "fa-solid fa-caret-up";
    }

    else{
        document.getElementById('p1').style.display = 'none';
        icon.className = "fa-solid fa-caret-down";
    }
})

document.getElementById('caret-button-2').addEventListener('click',() => {
    var icon = document.getElementById('caret-down-icon-1');
    if(icon.className == "fa-solid fa-caret-down")
    {

        document.getElementById('p2').style.display = 'block';
        icon.className = "fa-solid fa-caret-up";
    }

    else{
        document.getElementById('p2').style.display = 'none';
        icon.className = "fa-solid fa-caret-down";
    }
})


document.getElementById('caret-button-3').addEventListener('click',() => {
    var icon = document.getElementById('caret-down-icon-2');
    if(icon.className == "fa-solid fa-caret-down")
    {

        document.getElementById('p3').style.display = 'block';
        icon.className = "fa-solid fa-caret-up";
    }

    else{
        document.getElementById('p3').style.display = 'none';
        icon.className = "fa-solid fa-caret-down";
    }
})