let filterName = document.querySelectorAll('.filter-name');
for (const i of filterName) {
    i.addEventListener('click', (e) => {
        hideFilter(e);
    });
}

function hideFilter(e){
    if(e.srcElement.className === 'possibilities-headline' || $(e.path[0]).attr('id') === 'ps-up'){  
        $($('.possibilities-section').find('img')[0]).toggleClass('arrow-up')
        $('.possibilities').toggleClass('hide');
        $($('.possibilities-section').find('img')[0])
    }
    if(e.srcElement.className === 'rating-headline' || $(e.path[0]).attr('id') === 'rat-up'){
        $($('.rating-section').find('img')[0]).toggleClass('arrow-up');
        $('.rating-from-to').toggleClass('hide');
        $($('.rating-section').find('img')[0]);
    }
}

// checkbox
let checkbox = document.querySelectorAll('form label');
for (const i of checkbox) {
    i.addEventListener('click', (e) => {
        if($(e.path[0]).find('img')[0]){
            let checkboxStatus = $(e.path[0]).find('img')[0].className;
            if(checkboxStatus === 'checked-box'){
                $(e.path[0]).find('img')[0].className = 'checkbox';
            } else if(checkboxStatus === 'checkbox'){
                $(e.path[0]).find('img')[0].className = 'checked-box';
            } 
        } else if(($(e.path[0])[0]).className){
            let checkboxStatus = ($(e.path[0])[0]).className;
            if(checkboxStatus === 'checked-box'){
                ($(e.path[0])[0]).className = 'checkbox';
            } else if(checkboxStatus === 'checkbox'){
                ($(e.path[0])[0]).className = 'checked-box';
            } 
            
        };
    });
}

//bullets
// let bullets = document.querySelectorAll('.bullet-pagination');

// for (i = 0; i < bullets.length; i++) {
//     bullets[0].addEventListener('click', (e) => {
//         switchColors(e);        
//     });
// }

// switchColors = (e,clickedIndex) =>{
//     if($(e)[0].target.className === 'bullet'){
//         $(e)[0].target.className = 'active-bullet';
//         // for(i = 0; i < bullets.length; i++){
//         //     if(i !== clickedIndex){
//         //         console.log(bullets[0].querySelectorAll('span')[i].className);
//         //     }
//         // }
//     } else if($(e)[0].target.className === 'active-bullet'){
//         $(e)[0].target.className = 'bullet'
//     }
// }


// clear filter
let clearButton = document.getElementsByClassName('clear-search')[0];
let checkboxLength = $(document.getElementsByClassName('possibilities')[0]).find('img').length;

clearButton.addEventListener('click', (e) => {

    for(i = 0; i < checkboxLength; i++){
        $(document.getElementsByClassName('possibilities')[0]).find('img')[i].className = 'checkbox';
    }
    
    document.getElementsByClassName('rating-from-to')[0][0].value = '0';
    document.getElementsByClassName('rating-from-to')[0][1].value = '100';
});