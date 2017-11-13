let filterName = document.querySelectorAll('.filter-name');
for (const i of filterName) {
    i.addEventListener('click', (e) => {
        hideFilter(e);
    });
}

function hideFilter(e){
    if(e.srcElement.className === 'possibilities-headline'){  
        $('.possibilities').toggleClass('hide');
        $($('.possibilities-section').find('img')[0]).toggleClass('arrow-up')
    } else if(e.srcElement.className === 'rating-headline'){
        $('.rating-from-to').toggleClass('hide');
        $($('.rating-section').find('img')[0]).toggleClass('arrow-up')
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