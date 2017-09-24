/*--- add candidats ---*/
var allCandidats = document.querySelectorAll('.candidat');

allCandidats.forEach(function(e){
    let r = Math.floor(Math.random() * (4 - 1) + 1);
    let candidatHTML = `<div><img class="img-thumbnail img-candidat" src="img/pp/c${r}.jpg" alt="profile picture"><div class="candidat-text-content"><h3 class="candidat-name-fn">სახელი გვარი</h3><ul class="candidat-skils-fn"><li><a href="#">HTML</a></li><li><a href="#">CSS</a></li><li><a href="#">Javascript</a></li></ul><ul class="candidat-statistics-fn candidat-statistics"><li>განხორციელებული პროექტები: <a href="#">480</a></li><li>რეიტინგი: 89 / 100</li></ul></div></div>`;    
    e.innerHTML = candidatHTML;
});