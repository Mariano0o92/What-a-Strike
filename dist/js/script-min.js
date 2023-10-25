"use strict";var heroImg=document.querySelector(".hero-img"),hamburger=document.querySelector(".hamburger"),nav=document.querySelector(".nav"),mobileLink=document.querySelectorAll(".nav-mobile__link"),mobileLinks=document.querySelector(".nav-mobile__links"),navLinks=document.querySelectorAll(".nav__link"),navResults=document.querySelectorAll(".nav__results"),navTable=document.querySelectorAll(".nav__table a"),sections=document.querySelectorAll(".main"),tables=document.querySelectorAll(".table");function setActiveSectionFromHash(){var e=window.location.hash.substring(1),e=document.getElementById(e);e&&(removeActiveClasses(),e.classList.add("main__active"))}window.addEventListener("hashchange",setActiveSectionFromHash),window.addEventListener("load",setActiveSectionFromHash);var hideHero=function(){heroImg.classList.add("hide")};function removeActiveClasses(){sections.forEach(function(e){e.classList.remove("main__active")})}setTimeout(hideHero,5e3),hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),mobileLinks.classList.toggle("nav-mobile__links--active")}),navLinks.forEach(function(a){a.addEventListener("click",function(){var e=nav.querySelector(".nav__results"),t=nav.querySelector(".nav__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Table",document.createElement("div")),t=(e.className="nav__results nav__results--active",e.appendChild(t),document.createElement("div"));t.className="nav__table",t.appendChild(n),nav.appendChild(e),nav.appendChild(t)})}),navLinks.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")})}),mobileLink.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active"),mobileLinks.classList.toggle("nav-mobile__links--active"),hamburger.classList.toggle("is-active")})}),navTable.forEach(function(e,t){e.addEventListener("click",function(e){e.preventDefault(),removeActiveClasses(),sections[t+1].classList.add("main__active")})});var leagues=["PL","PD","BL1","SA","FL1"];function getData(e,t){e="".concat(e);fetch("https://api.football-data.org/v4/competitions/"+e+"/standings",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":""}}).then(function(e){return e.json()}).then(function(e){createstandings(e,t),console.log(e)}).catch(function(e){console.log(e)})}leagues.forEach(function(e,t){});var createstandings=function(e,t){document.getElementById(["english-table","spanish-table","german-table","italian-table","french-table"][t]).querySelector(".standings").innerHTML='<thead class="standings__header">\n\t\t<tr>\n\t\t  <th class="rank">#</th>\n\t\t  <th class="team">Team</th>\n\t\t  <th class="played">P</th>\n\t\t  <th class="won">W</th>\n\t\t  <th class="drawn">D</th>\n\t\t  <th class="lost">L</th>\n\t\t  <th class="for">+</th>\n\t\t  <th class="against">-</th>\n\t\t  <th class="difference">+/-</th>\n\t\t  <th class="points">P</th>\n\t\t</tr>\n\t  </thead>\n\t  <tbody class="standings__body"></tbody>'};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJoZXJvSW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibmF2IiwibW9iaWxlTGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2JpbGVMaW5rcyIsIm5hdkxpbmtzIiwibmF2UmVzdWx0cyIsIm5hdlRhYmxlIiwic2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic2VjdGlvbiIsInJlbW92ZUFjdGl2ZUNsYXNzZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZUhlcm8iLCJhZGQiLCJVUkxfQVBJIiwic2VjdGlvbnMiLCJsZWFndWVJRCIsImZldGNoIiwibWV0aG9kIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvckVhY2giLCJsaW5rIiwiZXhpc3RpbmdSZXN1bHRzRGl2IiwicmVzdWx0c0xpbmsiLCJleGlzdGluZ1RhYmxlRGl2IiwicmVtb3ZlIiwibGlua0hyZWYiLCJ0YWJsZUxpbmsiLCJjcmVhdGVFbGVtZW50IiwicmVzdWx0c0RpdiIsImhyZWYiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwidGFibGVEaXYiLCJjb250YWlucyIsImluZGV4IiwibmF2TGluayIsImlzQWN0aXZlIiwicHJldmVudERlZmF1bHQiLCJldmVudCIsImxlYWd1ZXMiLCJqc29uIiwiZ2V0RGF0YSIsImlkIiwicGFnZUluZGV4IiwiY29uY2F0IiwiaGVhZGVycyIsImNyZWF0ZXN0YW5kaW5ncyIsIlgtQXV0aC1Ub2tlbiIsIkFjY2VwdC1FbmNvZGluZyIsInN0YW5kaW5ncyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVyciIsImxlYWd1ZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFNQSxRQUFVQyxTQUFTQyxjQUFj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RFQsQ0FBQyxnQkFBaUIsZ0JBQWlCLGVBQWdCLGdCQUFpQixnQkFBZ0JkLEVBQ25ELEVBQUVwRCxjQUFjLFlBQVksRUFDckVtRSxVQUFTLDBiQWVyQiIsImZpbGUiOiJzY3JpcHQtbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQUxMIERBVEFcclxuY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLWltZycpXHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdlwiKTtcclxuY29uc3QgbW9iaWxlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbW9iaWxlX19saW5rJylcclxuY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fbGlua3MnKVxyXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKVxyXG5jb25zdCBuYXZSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fcmVzdWx0cycpO1xyXG5jb25zdCBuYXZUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX3RhYmxlIGEnKTtcclxuY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbicpXHJcbmNvbnN0IHRhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZScpO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gc2V0IHRoZSBhY3RpdmUgc2VjdGlvbiBiYXNlZCBvbiB0aGUgVVJMIGhhc2hcclxuZnVuY3Rpb24gc2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoKCkge1xyXG5cdGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSk7IC8vIFJlbW92ZSB0aGUgJyMnIGNoYXJhY3RlclxyXG5cdGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcclxuXHRcclxuXHRpZiAoc2VjdGlvbikge1xyXG5cdCAgcmVtb3ZlQWN0aXZlQ2xhc3NlcygpOyAvLyBSZW1vdmUgYWN0aXZlIGNsYXNzZXMgZnJvbSBhbGwgc2VjdGlvbnNcclxuXHQgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJyk7IC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gdGhlIHNlY3Rpb24gd2l0aCB0aGUgaGFzaFxyXG5cdH1cclxuICB9XHJcbiAgXHJcbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGhhbmRsZSBoYXNoIGNoYW5nZXMgYW5kIGluaXRpYWwgcGFnZSBsb2FkXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBzZXRBY3RpdmVTZWN0aW9uRnJvbUhhc2gpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoKTtcclxuXHJcbi8vIEhFUk8gSU1BR0VcclxuXHJcbmNvbnN0IGhpZGVIZXJvID0gKCkgPT4ge1xyXG5cdGhlcm9JbWcuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn1cclxuXHJcbnNldFRpbWVvdXQoaGlkZUhlcm8sIDUwMDApXHJcblxyXG4vLyBOQVZJR0FUSU9OXHJcblxyXG5oYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXHJcblxyXG5cdG1vYmlsZUxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tb2JpbGVfX2xpbmtzLS1hY3RpdmUnKVxyXG59KVxyXG5cclxuXHJcbiAgLy8gQWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVycyB0byAubmF2X19saW5rIGVsZW1lbnRzXHJcbiAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBSZW1vdmUgcHJldmlvdXNseSBhZGRlZCBkaXZzIChpZiBhbnkpXHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nUmVzdWx0c0RpdiA9IG5hdi5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fcmVzdWx0c1wiKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWJsZURpdiA9IG5hdi5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fdGFibGVcIik7XHJcbiAgICAgIGlmIChleGlzdGluZ1Jlc3VsdHNEaXYpIHtcclxuICAgICAgICBleGlzdGluZ1Jlc3VsdHNEaXYucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV4aXN0aW5nVGFibGVEaXYpIHtcclxuICAgICAgICBleGlzdGluZ1RhYmxlRGl2LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcblx0ICBcclxuICAgICAgLy8gQ3JlYXRlIFJlc3VsdHMgYW5kIFRhYmxlIGxpbmtzIGZvciB0aGUgY2xpY2tlZCAubmF2X19saW5rXHJcbiAgICAgIGNvbnN0IGxpbmtIcmVmID0gbGluay5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG5cdCAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIHJlc3VsdHNMaW5rLmhyZWYgPSBsaW5rSHJlZjtcclxuICAgICAgcmVzdWx0c0xpbmsudGV4dENvbnRlbnQgPSBcIlJlc3VsdHNcIjtcclxuXHJcbiAgICAgIGNvbnN0IHRhYmxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICB0YWJsZUxpbmsuaHJlZiA9IGxpbmtIcmVmICsgXCItdGFibGVcIjtcclxuICAgICAgdGFibGVMaW5rLnRleHRDb250ZW50ID0gXCJUYWJsZVwiO1xyXG5cdCAgXHJcbiAgICAgIGNvbnN0IHJlc3VsdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICByZXN1bHRzRGl2LmNsYXNzTmFtZSA9IFwibmF2X19yZXN1bHRzIG5hdl9fcmVzdWx0cy0tYWN0aXZlXCI7XHJcbiAgICAgIHJlc3VsdHNEaXYuYXBwZW5kQ2hpbGQocmVzdWx0c0xpbmspO1xyXG5cdCAgXHJcbiAgICAgIGNvbnN0IHRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgdGFibGVEaXYuY2xhc3NOYW1lID0gXCJuYXZfX3RhYmxlXCI7XHJcbiAgICAgIHRhYmxlRGl2LmFwcGVuZENoaWxkKHRhYmxlTGluayk7XHJcblx0ICBcclxuICAgICAgLy8gQXBwZW5kIFJlc3VsdHMgYW5kIFRhYmxlIGRpdnMgdG8gdGhlIC5uYXYgY29udGFpbmVyXHJcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChyZXN1bHRzRGl2KTtcclxuICAgICAgbmF2LmFwcGVuZENoaWxkKHRhYmxlRGl2KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIE1BSU4gU0VDVElPTlxyXG5cclxuLy8gVG9nZ2xlIGNsYXNzIG9mIF9fYWN0aXZlXHJcbm5hdkxpbmtzLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGNvbnN0IGlzQWN0aXZlID0gbGluay5jbGFzc0xpc3QuY29udGFpbnMoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcbiAgICBcclxuXHRcdC8vIElmIGl0J3Mgbm90IGFjdGl2ZSwgcmVtb3ZlIGFjdGl2ZSBjbGFzc2VzIGZyb20gb3RoZXIgbGlua3MgYW5kIGFkZCB0aGUgYWN0aXZlIGNsYXNzXHJcblx0XHRpZiAoIWlzQWN0aXZlKSB7XHJcblx0XHQgIHJlbW92ZUFjdGl2ZUNsYXNzZXMoKTtcclxuXHRcdCAgc2VjdGlvbnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpO1xyXG5cdFx0ICAvLyBBbHNvIHJlbW92ZSBuYXZfX2xpbmstLWFjdGl2ZSBmcm9tIG90aGVyIGxpbmtzXHJcblx0XHQgIG5hdkxpbmtzLmZvckVhY2goKG5hdkxpbmspID0+IHtcclxuXHRcdFx0bmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG5cdFx0ICB9KTtcclxuXHRcdCAgbGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdFx0bmF2TGlua3MuZm9yRWFjaCgobmF2TGluaykgPT4ge1xyXG5cdFx0XHRcdG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLS1hY3RpdmUnKTtcclxuXHRcdFx0ICB9KTtcclxuXHRcdFx0ICBcclxuXHRcdFx0ICBsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcblxyXG5cdFx0fSlcclxuICAgIH0pXHJcbm1vYmlsZUxpbmsuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBY3RpdmUgPSBsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbmF2X19saW5rLS1hY3RpdmUnKTtcclxuICAgIFxyXG5cdFx0Ly8gSWYgaXQncyBub3QgYWN0aXZlLCByZW1vdmUgYWN0aXZlIGNsYXNzZXMgZnJvbSBvdGhlciBsaW5rcyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3NcclxuXHRcdGlmICghaXNBY3RpdmUpIHtcclxuXHRcdCAgcmVtb3ZlQWN0aXZlQ2xhc3NlcygpO1xyXG5cdFx0ICBzZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJyk7XHJcblx0XHQgIC8vIEFsc28gcmVtb3ZlIG5hdl9fbGluay0tYWN0aXZlIGZyb20gb3RoZXIgbGlua3NcclxuXHRcdCAgbmF2TGlua3MuZm9yRWFjaCgobmF2TGluaykgPT4ge1xyXG5cdFx0XHRuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcblx0XHQgIH0pO1xyXG5cdFx0ICBsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0XHRtb2JpbGVMaW5rLmZvckVhY2goKG1vYmlsZUxpbmspID0+IHtcclxuXHRcdFx0XHRtb2JpbGVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1tb2JpbGVfX2xpbmstLWFjdGl2ZScpO1xyXG5cdFx0XHQgIH0pO1xyXG5cclxuXHRcdFx0ICBsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdi1tb2JpbGVfX2xpbmstLWFjdGl2ZScpO1xyXG5cclxuXHRcdFx0bW9iaWxlTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW1vYmlsZV9fbGlua3MtLWFjdGl2ZScpXHJcblx0XHRcdGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG5cdFx0fSk7XHJcbiAgICB9KVxyXG5cclxuXHRuYXZUYWJsZS5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xyXG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG5cdFx0ICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ICByZW1vdmVBY3RpdmVDbGFzc2VzKCk7XHJcblx0XHQgIHNlY3Rpb25zW2luZGV4ICsgMV0uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJyk7IC8vICsxIHRvIHNlbGVjdCB0aGUgbmV4dCBzZWN0aW9uXHJcblx0XHR9KTtcclxuXHQgIH0pXHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzc2VzKCkge1xyXG5cdHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW5fX2FjdGl2ZScpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuLy8gQVBJIERBVEFcclxuXHJcbmxldCBsZWFndWVzID0gWydQTCcsICdQRCcsICdCTDEnLCAnU0EnLCAnRkwxJ11cclxuXHJcbmxlYWd1ZXMuZm9yRWFjaCgoaWQsIGluZGV4KSA9PiB7XHJcblx0Ly8gZ2V0RGF0YShpZCwgaW5kZXgpXHJcblxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldERhdGEoaWQsIHBhZ2VJbmRleCkge1xyXG5cdGNvbnN0IFVSTF9BUEkgPSAnaHR0cHM6Ly9hcGkuZm9vdGJhbGwtZGF0YS5vcmcvdjQvY29tcGV0aXRpb25zLydcclxuXHRjb25zdCBsZWFndWVJRCA9IGAke2lkfWBcclxuXHJcblxyXG5cdGZldGNoKFVSTF9BUEkgKyBsZWFndWVJRCArICcvc3RhbmRpbmdzJywge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtQXV0aC1Ub2tlbic6ICcyNjg2NDBlYzZhMjY0MGU3OTkxY2VlMzViNWM2MDFiNicsXHJcblx0XHRcdCdBY2NlcHQtRW5jb2RpbmcnOiAnJ1xyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0Y3JlYXRlc3RhbmRpbmdzKGRhdGEsIHBhZ2VJbmRleClcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHJcbi8vIFx0Y29uc3QgY3JlYXRlU2NvcmVzID0gKGxlYWd1ZSwgcGFnZUluZGV4KSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzZWN0aW9uSUQgPSBbJ2VuZ2xpc2gnLCAnc3BhbmlzaCcsICdnZXJtYW4nLCAnaXRhbGlhbicsICdmcmVuY2gnXVtwYWdlSW5kZXhdO1xyXG4vLyBcdFx0Y29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklEKS5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJylcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuLy8gfTtcclxuXHRjb25zdCBjcmVhdGVzdGFuZGluZ3MgPSAobGVhZ3VlLCBwYWdlSW5kZXgpID0+IHtcclxuXHRcdGNvbnN0IHNlY3Rpb25JRCA9IFsnZW5nbGlzaC10YWJsZScsICdzcGFuaXNoLXRhYmxlJywgJ2dlcm1hbi10YWJsZScsICdpdGFsaWFuLXRhYmxlJywgJ2ZyZW5jaC10YWJsZSddW3BhZ2VJbmRleF07XHJcblx0XHRjb25zdCBzdGFuZGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSUQpLnF1ZXJ5U2VsZWN0b3IoJy5zdGFuZGluZ3MnKVxyXG5cdFx0c3RhbmRpbmdzLmlubmVySFRNTCA9IGA8dGhlYWQgY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlclwiPlxyXG5cdFx0PHRyPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJyYW5rXCI+IzwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cInRlYW1cIj5UZWFtPC90aD5cclxuXHRcdCAgPHRoIGNsYXNzPVwicGxheWVkXCI+UDwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cIndvblwiPlc8L3RoPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJkcmF3blwiPkQ8L3RoPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJsb3N0XCI+TDwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cImZvclwiPis8L3RoPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJhZ2FpbnN0XCI+LTwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cImRpZmZlcmVuY2VcIj4rLy08L3RoPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJwb2ludHNcIj5QPC90aD5cclxuXHRcdDwvdHI+XHJcblx0ICA8L3RoZWFkPlxyXG5cdCAgPHRib2R5IGNsYXNzPVwic3RhbmRpbmdzX19ib2R5XCI+PC90Ym9keT5gXHJcbn07XHJcbiJdfQ==
