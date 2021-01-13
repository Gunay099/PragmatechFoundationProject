/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            // toggle.classList.toggle('bx')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('menu-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav-link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


// MODAL SHOW/HIDE
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal()
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// MODAL CONTENT
document.getElementsByClassName("tablink")[0].click();


function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tbl-menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("modal-active");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.classList.add("modal-active");
}


// CONTRACT FORM BUTTON-DROPDOWN
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show-dropdown");
    }
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
            openDropdown.classList.remove('show-dropdown');
        }
        }
    }
    }

    // Table-annex 
            function deleterow(tblId)
        {
            
          var table = document.getElementById(tblId);
          var row = table.getElementsByTagName('tr');
                if(row.length!='2'){
                    row[row.length - 1].outerHTML='';
                }
        }
    
        function addTable(myTable) {
          var table = document.getElementById(myTable);
          var row = table.getElementsByTagName('tr');
          var row = row[row.length -1 ].outerHTML;
          table.innerHTML = table.innerHTML + row;
          var row = table.getElementsByTagName('tr');
          var row = row[row.length-0].getElementsByTagName('td');
          for(i=0;i<row.length;i++){
            row[i].innerHTML = '';
          }
        }