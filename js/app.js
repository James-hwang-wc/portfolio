document.addEventListener("DOMContentLoaded", function() {

    AOS.init();

    // index에서 검색창을 가지고 옴
    const searchInput = document.getElementById("searchInput");
    const portfolioItems = document.querySelectorAll(".portfolio-item")

    searchInput.addEventListener("input", function(){
       const searchTerm = this.value.toLowerCase();    // <-- 검색 찾는 값

       portfolioItems.forEach(item => {
            const title = item.querySelector("h4").textContent.toLowerCase();  
            
            if(title.includes(searchTerm)) {
                item.style.display = "block";

            }else {
                item.style.display = "none";
            }
       });
    });

// 버턴만들기

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
        button.addEventListener("click", function(){
            const filter = this.getAttribute("data-filter");

            portfolioItems.forEach((item) => {
                if(filter === 'all' || item.getAttribute("data-category") === filter) {
                    item.style.display = "block";
                }else {
                    item.style.display = "none";
                }
            });
        });
    });

});