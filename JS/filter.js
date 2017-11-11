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
