"use strict";var heroImg=document.querySelector(".hero-img"),hamburger=document.querySelector(".hamburger"),nav=document.querySelector(".nav"),navMobile=document.querySelector(".nav-mobile"),mobileLink=document.querySelectorAll(".nav-mobile__link"),mobileLinks=document.querySelector(".nav-mobile__links"),navLinks=document.querySelectorAll(".nav__link"),navResults=document.querySelectorAll(".nav__results"),navTable=document.querySelectorAll(".nav__table a"),mobileResults=document.querySelectorAll(".nav-mobile__results"),mobileTable=document.querySelectorAll(".nav-mobile__table a"),sections=document.querySelectorAll(".main"),tables=document.querySelectorAll(".standings");function setActiveSectionFromHash(){var e=window.location.hash.substring(1),e=document.getElementById(e);e&&(removeActiveClasses(),e.classList.add("main__active"))}window.addEventListener("hashchange",setActiveSectionFromHash),window.addEventListener("load",setActiveSectionFromHash);var hideHero=function(){heroImg.classList.add("hide")};function removeActiveClasses(){sections.forEach(function(e){e.classList.remove("main__active")})}setTimeout(hideHero,5e3),hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),mobileLinks.classList.toggle("nav-mobile__links--active")}),mobileLink.forEach(function(a){a.addEventListener("click",function(){var e=navMobile.querySelector(".nav-mobile__results"),t=navMobile.querySelector(".nav-mobile__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav-mobile__results nav-mobile__results--active",e.appendChild(t),document.createElement("div"));t.className="nav-mobile__table",t.appendChild(n),navMobile.appendChild(e),navMobile.appendChild(t)})}),navLinks.forEach(function(a){a.addEventListener("click",function(){var e=nav.querySelector(".nav__results"),t=nav.querySelector(".nav__table"),e=(e&&e.remove(),t&&t.remove(),a.getAttribute("href")),t=document.createElement("a"),n=(t.href=e,t.textContent="Results",document.createElement("a")),e=(n.href=e+"-table",n.textContent="Standings",document.createElement("div")),t=(e.className="nav__results nav__results--active",e.appendChild(t),document.createElement("div"));t.className="nav__table",t.appendChild(n),nav.appendChild(e),nav.appendChild(t)})}),navLinks.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")),navLinks.forEach(function(e){e.classList.remove("nav__link--active")}),e.classList.add("nav__link--active")})}),navTable.forEach(function(e,t){e.addEventListener("click",function(e){e.preventDefault(),removeActiveClasses(),sections[t+1].classList.add("main__active")})}),mobileLink.forEach(function(e,t){e.addEventListener("click",function(){e.classList.contains("nav-mobile__link--active")||(removeActiveClasses(),sections[t].classList.add("main__active"),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active")),mobileLink.forEach(function(e){e.classList.remove("nav-mobile__link--active")}),e.classList.add("nav-mobile__link--active"),mobileLinks.classList.toggle("nav-mobile__links--active"),hamburger.classList.toggle("is-active")})}),mobileTable.forEach(function(e,t){e.addEventListener("click",function(e){e.preventDefault(),removeActiveClasses(),sections[t+1].classList.add("main__active")})});var leagues=["PL","PD","BL1","SA","FL1"];function getData(e,t){e="".concat(e);fetch("https://api.football-data.org/v4/competitions/"+e+"/standings",{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":""}}).then(function(e){return e.json()}).then(function(e){createstandings(e,t)}).catch(function(e){console.log(e)})}leagues.forEach(function(e,t){});var createstandings=function(e,t){var t=document.getElementById(["english-table","spanish-table","german-table","italian-table","french-table"][t]).querySelector(".standings"),e=e.standings[0].table,n=document.createElement("thead"),a=(n.classList.add("standings__header"),n.innerHTML='\n\t\t<tr>\n\t\t  <th class="standings__header-rank">#</th>\n\t\t  <th class="standings__header-team">Team</th>\n\t\t  <th class="standings__header-played">P</th>\n\t\t  <th class="standings__header-won">W</th>\n\t\t  <th class="standings__header-drawn">D</th>\n\t\t  <th class="standings__header-lost">L</th>\n\t\t  <th class="standings__header-for">+</th>\n\t\t  <th class="standings__header-against">-</th>\n\t\t  <th class="standings__header-difference">+/-</th>\n\t\t  <th class="standings__header-points">P</th>\n\t\t</tr>\n\t  ',t.appendChild(n),document.createElement("tbody"));a.classList.add("standings__teams"),e.forEach(function(e){var t=document.createElement("tr");t.innerHTML='\n\t\t  <td class="standings__teams-rank">'.concat(e.position,'</td>\n\t\t  <td class="standings__teams-team">\n\t\t\t<img src="').concat(e.team.crest,'" alt="').concat(e.team.name,'">\n\t\t\t<span class="standings__teams-name-full">').concat(e.team.name,'</span>\n\t\t  </td>\n\t\t  <td class="standings__teams-played">').concat(e.playedGames,'</td>\n\t\t  <td class="standings__teams-won">').concat(e.won,'</td>\n\t\t  <td class="standings__teams-drawn">').concat(e.draw,'</td>\n\t\t  <td class="standings__teams-lost">').concat(e.lost,'</td>\n\t\t  <td class="standings__teams-for">').concat(e.goalsFor,'</td>\n\t\t  <td class="standings__teams-against">').concat(e.goalsAgainst,'</td>\n\t\t  <td class="standings__teams-difference">').concat(e.goalDifference,'</td>\n\t\t  <td class="standings__teams-points">').concat(e.points,"</td>\n\t\t"),a.appendChild(t)}),t.appendChild(a)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJoZXJvSW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFtYnVyZ2VyIiwibmF2IiwibmF2TW9iaWxlIiwibW9iaWxlTGluayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2JpbGVMaW5rcyIsIm5hdkxpbmtzIiwibmF2UmVzdWx0cyIsIm5hdlRhYmxlIiwibW9iaWxlUmVzdWx0cyIsIm1vYmlsZVRhYmxlIiwic2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwic2VjdGlvbiIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlQWN0aXZlQ2xhc3NlcyIsImFkZCIsImNsYXNzTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiaGlkZUhlcm8iLCJzZWN0aW9uSUQiLCJzZWN0aW9ucyIsInN0YW5kaW5ncyIsImdldFRhYmxlIiwibGVhZ3VlIiwidGFibGUiLCJleGlzdGluZ1RhYmxlRGl2IiwiZm9yRWFjaCIsImxpbmsiLCJyZXN1bHRzRGl2IiwiZXhpc3RpbmdSZXN1bHRzRGl2IiwicmVzdWx0c0xpbmsiLCJjbGFzc05hbWUiLCJnZXRBdHRyaWJ1dGUiLCJ0YWJsZURpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRhYmxlTGluayIsImhyZWYiLCJsaW5rSHJlZiIsInRleHRDb250ZW50IiwibmF2TGluayIsInJlbW92ZSIsImluZGV4IiwiY29udGFpbnMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGVhZ3VlcyIsImdldERhdGEiLCJwYWdlSW5kZXgiLCJsZWFndWVJRCIsImNvbmNhdCIsInRoZW4iLCJyZXMiLCJ0b2dnbGUiLCJjcmVhdGVzdGFuZGluZ3MiLCJkYXRhIiwidGJvZHkiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIlgtQXV0aC1Ub2tlbiIsIkFjY2VwdC1FbmNvZGluZyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidHIiLCJoZWFkZXIiLCJpbm5lckhUTUwiLCJ0ZWFtRGF0YSIsInBvc2l0aW9uIiwidGVhbSIsImNyZXN0IiwibmFtZSIsInBsYXllZEdhbWVzIiwid29uIiwiZHJhdyIsImxvc3QiLCJnb2Fsc0ZvciIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicG9pbnRzIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFNQSxRQUFVQyxTQUFTQyxjQUFjLFdBQVcsRUFEbERDLFVBQUFGLFNBQUFDLGNBQUEsWUFBQSxFQUNNRixJQUFPQyxTQUFHQSxjQUFTQyxNQUFjLEVBQ2pDQyxVQUFZRixTQUFTQyxjQUFjLGFBQWEsRUFDaERFLFdBQWVGLFNBQUFBLGlCQUFxQixtQkFBQSxFQUNwQ0csWUFBWUosU0FBU0MsY0FBYyxvQkFBYyxFQUNqREksU0FBYUwsU0FBU00saUJBQWlCLFlBQUEsRUFDdkNDLFdBQWNQLFNBQVNDLGlCQUFjLGVBQUEsRUFDckNPLFNBQVdSLFNBQVNNLGlCQUFpQixlQUFhLEVBQ2xERyxjQUFhVCxTQUFTTSxpQkFBaUIsc0JBQWdCLEVBQ3ZESSxZQUFXVixTQUFTTSxpQkFBaUIsc0JBQWdCLEVBQ3JESyxTQUFhWCxTQUFHQSxpQkFBU00sT0FBaUIsRUFDMUNNLE9BQVdaLFNBQUdBLGlCQUFTTSxZQUFpQixFQUs5QyxTQUFTTywyQkFDUixJQUFNQyxFQUFPQyxPQUFPQyxTQUFTRixLQUFLRyxVQUFXLENBQUMsRUFDeENDLEVBQVVsQixTQUFTbUIsZUFBZUwsQ0FBSyxFQUc1Q00sSUFBQUEsb0JBQ2tCQyxFQUNuQkgsRUFBQUksVUFBQUQsSUFBQSxjQUFBLEVBSUROLENBR0FBLE9BQUFRLGlCQUFBLGFBQUFWLHdCQUFBLEVBRkFFLE9BQU9RLGlCQUFpQixPQUFRVix3QkFBd0IsRUFReERXLElBQUFBLFNBQVdDLFdBSFYxQixRQUFRdUIsVUFBVUQsSUFBSSxNQUFNLENBSzdCLEVBNEpBLFNBd0NPSyxzQkF2Q05DLFNBd0NNQyxRQUFZNUIsU0FBQUEs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U0FBUSxvREFBQSxFQUFBN0IsT0FDYm9CLEVBQVNVLGFBQVksdURBQUEsRUFBQTlCLE9BQ2xCb0IsRUFBU1csZUFBYyxtREFBQSxFQUFBL0IsT0FDM0JvQixFQUFTWSxPQUFNLGFBQUEsRUFFdkQxQixFQUFNckIsWUFBWWdDLENBQUUsQ0FDbkIsQ0FBQyxFQUVEOUMsRUFBVWMsWUFBWXFCLENBQUssQ0FFOUIiLCJmaWxlIjoic2NyaXB0LW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFMTCBEQVRBXHJcbmNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1pbWcnKVxyXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFtYnVyZ2VyJylcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpXHJcbmNvbnN0IG5hdk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlJylcclxuY29uc3QgbW9iaWxlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbW9iaWxlX19saW5rJylcclxuY29uc3QgbW9iaWxlTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW1vYmlsZV9fbGlua3MnKVxyXG5jb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZfX2xpbmsnKVxyXG5jb25zdCBuYXZSZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fcmVzdWx0cycpXHJcbmNvbnN0IG5hdlRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fdGFibGUgYScpXHJcbmNvbnN0IG1vYmlsZVJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LW1vYmlsZV9fcmVzdWx0cycpXHJcbmNvbnN0IG1vYmlsZVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1tb2JpbGVfX3RhYmxlIGEnKVxyXG5jb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluJylcclxuY29uc3QgdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YW5kaW5ncycpXHJcblxyXG5cclxuZnVuY3Rpb24gc2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoKCkge1xyXG5cdGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSlcclxuXHRjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcclxuXHJcblx0aWYgKHNlY3Rpb24pIHtcclxuXHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0c2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKVxyXG5cdH1cclxufVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0QWN0aXZlU2VjdGlvbkZyb21IYXNoKVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNldEFjdGl2ZVNlY3Rpb25Gcm9tSGFzaClcclxuXHJcbi8vIEhFUk8gSU1BR0VcclxuXHJcbmNvbnN0IGhpZGVIZXJvID0gKCkgPT4ge1xyXG5cdGhlcm9JbWcuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbn1cclxuXHJcbnNldFRpbWVvdXQoaGlkZUhlcm8sIDUwMDApXHJcblxyXG4vLyBOQVZJR0FUSU9OIE1PQklMRVxyXG5cclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG5cclxuXHRtb2JpbGVMaW5rcy5jbGFzc0xpc3QudG9nZ2xlKCduYXYtbW9iaWxlX19saW5rcy0tYWN0aXZlJylcclxufSlcclxuXHJcbm1vYmlsZUxpbmsuZm9yRWFjaChsaW5rID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgZXhpc3RpbmdSZXN1bHRzRGl2ID0gbmF2TW9iaWxlLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX19yZXN1bHRzJylcclxuXHRcdGNvbnN0IGV4aXN0aW5nVGFibGVEaXYgPSBuYXZNb2JpbGUucXVlcnlTZWxlY3RvcignLm5hdi1tb2JpbGVfX3RhYmxlJylcclxuXHRcdGlmIChleGlzdGluZ1Jlc3VsdHNEaXYpIHtcclxuXHRcdFx0ZXhpc3RpbmdSZXN1bHRzRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblx0XHRpZiAoZXhpc3RpbmdUYWJsZURpdikge1xyXG5cdFx0XHRleGlzdGluZ1RhYmxlRGl2LnJlbW92ZSgpXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Y29uc3QgbGlua0hyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0c0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHJlc3VsdHNMaW5rLmhyZWYgPSBsaW5rSHJlZlxyXG5cdFx0cmVzdWx0c0xpbmsudGV4dENvbnRlbnQgPSAnUmVzdWx0cydcclxuXHJcblx0XHRjb25zdCB0YWJsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHRcdHRhYmxlTGluay5ocmVmID0gbGlua0hyZWYgKyAnLXRhYmxlJ1xyXG5cdFx0dGFibGVMaW5rLnRleHRDb250ZW50ID0gJ1N0YW5kaW5ncydcclxuXHJcblx0XHRjb25zdCByZXN1bHRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdHJlc3VsdHNEaXYuY2xhc3NOYW1lID0gJ25hdi1tb2JpbGVfX3Jlc3VsdHMgbmF2LW1vYmlsZV9fcmVzdWx0cy0tYWN0aXZlJ1xyXG5cdFx0cmVzdWx0c0Rpdi5hcHBlbmRDaGlsZChyZXN1bHRzTGluaylcclxuXHJcblx0XHRjb25zdCB0YWJsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHR0YWJsZURpdi5jbGFzc05hbWUgPSAnbmF2LW1vYmlsZV9fdGFibGUnXHJcblx0XHR0YWJsZURpdi5hcHBlbmRDaGlsZCh0YWJsZUxpbmspXHJcblxyXG5cdFx0XHJcbiAgICAgICAgbmF2TW9iaWxlLmFwcGVuZENoaWxkKHJlc3VsdHNEaXYpO1xyXG4gICAgICAgIG5hdk1vYmlsZS5hcHBlbmRDaGlsZCh0YWJsZURpdilcclxuXHR9KVxyXG59KVxyXG5cclxuLy8gTkFWSUdBVElPTiBERVNLVE9QXHJcblxyXG5uYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG5cdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG5cdFx0Y29uc3QgZXhpc3RpbmdSZXN1bHRzRGl2ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3Jlc3VsdHMnKVxyXG5cdFx0Y29uc3QgZXhpc3RpbmdUYWJsZURpdiA9IG5hdi5xdWVyeVNlbGVjdG9yKCcubmF2X190YWJsZScpXHJcblx0XHRpZiAoZXhpc3RpbmdSZXN1bHRzRGl2KSB7XHJcblx0XHRcdGV4aXN0aW5nUmVzdWx0c0Rpdi5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cdFx0aWYgKGV4aXN0aW5nVGFibGVEaXYpIHtcclxuXHRcdFx0ZXhpc3RpbmdUYWJsZURpdi5yZW1vdmUoKVxyXG5cdFx0fVxyXG5cclxuXHRcclxuXHRcdGNvbnN0IGxpbmtIcmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG5cclxuXHRcdGNvbnN0IHJlc3VsdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHRyZXN1bHRzTGluay5ocmVmID0gbGlua0hyZWZcclxuXHRcdHJlc3VsdHNMaW5rLnRleHRDb250ZW50ID0gJ1Jlc3VsdHMnXHJcblxyXG5cdFx0Y29uc3QgdGFibGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblx0XHR0YWJsZUxpbmsuaHJlZiA9IGxpbmtIcmVmICsgJy10YWJsZSdcclxuXHRcdHRhYmxlTGluay50ZXh0Q29udGVudCA9ICdTdGFuZGluZ3MnXHJcblxyXG5cdFx0Y29uc3QgcmVzdWx0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblx0XHRyZXN1bHRzRGl2LmNsYXNzTmFtZSA9ICduYXZfX3Jlc3VsdHMgbmF2X19yZXN1bHRzLS1hY3RpdmUnXHJcblx0XHRyZXN1bHRzRGl2LmFwcGVuZENoaWxkKHJlc3VsdHNMaW5rKVxyXG5cclxuXHRcdGNvbnN0IHRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHRcdHRhYmxlRGl2LmNsYXNzTmFtZSA9ICduYXZfX3RhYmxlJ1xyXG5cdFx0dGFibGVEaXYuYXBwZW5kQ2hpbGQodGFibGVMaW5rKVxyXG5cclxuXHRcdFxyXG5cdFx0bmF2LmFwcGVuZENoaWxkKHJlc3VsdHNEaXYpXHJcblx0XHRuYXYuYXBwZW5kQ2hpbGQodGFibGVEaXYpXHJcblx0fSlcclxufSlcclxuXHJcblxyXG4vLyBNQUlOIFNFQ1RJT05cclxuXHJcbi8vIFRvZ2dsZSBjbGFzcyBvZiBfX2FjdGl2ZVxyXG5cclxuLy8gREVTS1RPUFxyXG5cclxubmF2TGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBY3RpdmUgPSBsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbmF2X19saW5rLS1hY3RpdmUnKVxyXG5cclxuXHRcdFxyXG5cdFx0aWYgKCFpc0FjdGl2ZSkge1xyXG5cdFx0XHRyZW1vdmVBY3RpdmVDbGFzc2VzKClcclxuXHRcdFx0c2VjdGlvbnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ21haW5fX2FjdGl2ZScpXHJcblx0XHRcdFxyXG5cdFx0XHRuYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG5cdFx0XHRcdG5hdkxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19saW5rLS1hY3RpdmUnKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRsaW5rLmNsYXNzTGlzdC5hZGQoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHRcdH1cclxuXHJcblx0XHRuYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG5cdFx0XHRuYXZMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fbGluay0tYWN0aXZlJylcclxuXHRcdH0pXHJcblxyXG5cdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXZfX2xpbmstLWFjdGl2ZScpXHJcblx0fSlcclxufSlcclxuXHJcbm5hdlRhYmxlLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0c2VjdGlvbnNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKSAvLyArMSB0byBzZWxlY3QgdGhlIG5leHQgc2VjdGlvblxyXG5cdH0pXHJcbn0pXHJcblxyXG4vLyBNT0JJTEVcclxuXHJcbm1vYmlsZUxpbmsuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuXHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBY3RpdmUgPSBsaW5rLmNsYXNzTGlzdC5jb250YWlucygnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHJcblx0XHRpZiAoIWlzQWN0aXZlKSB7XHJcblx0XHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0XHRzZWN0aW9uc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnbWFpbl9fYWN0aXZlJylcclxuXHRcclxuXHRcdFx0bW9iaWxlTGluay5mb3JFYWNoKG1vYmlsZUxpbmsgPT4ge1xyXG5cdFx0XHRcdG1vYmlsZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW1vYmlsZV9fbGluay0tYWN0aXZlJylcclxuXHRcdFx0fSlcclxuXHRcdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fVxyXG5cclxuXHRcdG1vYmlsZUxpbmsuZm9yRWFjaChtb2JpbGVMaW5rID0+IHtcclxuXHRcdFx0bW9iaWxlTGluay5jbGFzc0xpc3QucmVtb3ZlKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cdFx0fSkgXHJcblxyXG5cdFx0bGluay5jbGFzc0xpc3QuYWRkKCduYXYtbW9iaWxlX19saW5rLS1hY3RpdmUnKVxyXG5cclxuXHRcdG1vYmlsZUxpbmtzLmNsYXNzTGlzdC50b2dnbGUoJ25hdi1tb2JpbGVfX2xpbmtzLS1hY3RpdmUnKVxyXG5cdFx0aGFtYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpXHJcblx0fSlcclxufSlcclxuXHJcbm1vYmlsZVRhYmxlLmZvckVhY2goKGxpbmssIGluZGV4KSA9PiB7XHJcblx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHRcdHJlbW92ZUFjdGl2ZUNsYXNzZXMoKVxyXG5cdFx0c2VjdGlvbnNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKCdtYWluX19hY3RpdmUnKSAvLyArMSB0byBzZWxlY3QgdGhlIG5leHQgc2VjdGlvblxyXG5cdH0pXHJcbn0pXHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVDbGFzc2VzKCkge1xyXG5cdHNlY3Rpb25zLmZvckVhY2goc2VjdGlvbiA9PiB7XHJcblx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21haW5fX2FjdGl2ZScpXHJcblx0fSlcclxufVxyXG5cclxuLy8gQVBJIERBVEFcclxuXHJcbmxldCBsZWFndWVzID0gWydQTCcsICdQRCcsICdCTDEnLCAnU0EnLCAnRkwxJ11cclxuXHJcbmxlYWd1ZXMuZm9yRWFjaCgoaWQsIGluZGV4KSA9PiB7XHJcblx0Ly8gZ2V0RGF0YShpZCwgaW5kZXgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKGlkLCBwYWdlSW5kZXgpIHtcclxuXHRjb25zdCBVUkxfQVBJID0gJ2h0dHBzOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3Y0L2NvbXBldGl0aW9ucy8nXHJcblx0Y29uc3QgbGVhZ3VlSUQgPSBgJHtpZH1gXHJcblxyXG5cdGZldGNoKFVSTF9BUEkgKyBsZWFndWVJRCArICcvc3RhbmRpbmdzJywge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J1gtQXV0aC1Ub2tlbic6ICcyNjg2NDBlYzZhMjY0MGU3OTkxY2VlMzViNWM2MDFiNicsXHJcblx0XHRcdCdBY2NlcHQtRW5jb2RpbmcnOiAnJyxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdGNyZWF0ZXN0YW5kaW5ncyhkYXRhLCBwYWdlSW5kZXgpXHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGVycilcclxuXHRcdH0pXHJcbn1cclxuXHJcbi8vIFx0Y29uc3QgY3JlYXRlU2NvcmVzID0gKGxlYWd1ZSwgcGFnZUluZGV4KSA9PiB7XHJcbi8vIFx0XHRjb25zdCBzZWN0aW9uSUQgPSBbJ2VuZ2xpc2gnLCAnc3BhbmlzaCcsICdnZXJtYW4nLCAnaXRhbGlhbicsICdmcmVuY2gnXVtwYWdlSW5kZXhdO1xyXG4vLyBcdFx0Y29uc3Qgc2NvcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklEKS5xdWVyeVNlbGVjdG9yKCcuc2NvcmVzJylcclxuXHJcbi8vIH07XHJcbmNvbnN0IGNyZWF0ZXN0YW5kaW5ncyA9IChsZWFndWUsIHBhZ2VJbmRleCkgPT4ge1xyXG5cdGNvbnN0IHNlY3Rpb25JRCA9IFsnZW5nbGlzaC10YWJsZScsICdzcGFuaXNoLXRhYmxlJywgJ2dlcm1hbi10YWJsZScsICdpdGFsaWFuLXRhYmxlJywgJ2ZyZW5jaC10YWJsZSddW3BhZ2VJbmRleF1cclxuXHRjb25zdCBzdGFuZGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSUQpLnF1ZXJ5U2VsZWN0b3IoJy5zdGFuZGluZ3MnKVxyXG5cdGNvbnN0IGdldFRhYmxlID0gbGVhZ3VlLnN0YW5kaW5nc1swXS50YWJsZVxyXG5cclxuXHQgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcblx0ICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc3RhbmRpbmdzX19oZWFkZXInKTtcclxuXHQgIGhlYWRlci5pbm5lckhUTUwgPSBgXHJcblx0XHQ8dHI+XHJcblx0XHQgIDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXJhbmtcIj4jPC90aD5cclxuXHRcdCAgPHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItdGVhbVwiPlRlYW08L3RoPlxyXG5cdFx0ICA8dGggY2xhc3M9XCJzdGFuZGluZ3NfX2hlYWRlci1wbGF5ZWRcIj5QPC90aD5cclxuXHRcdCAgPHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItd29uXCI+VzwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWRyYXduXCI+RDwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWxvc3RcIj5MPC90aD5cclxuXHRcdCAgPHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItZm9yXCI+KzwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLWFnYWluc3RcIj4tPC90aD5cclxuXHRcdCAgPHRoIGNsYXNzPVwic3RhbmRpbmdzX19oZWFkZXItZGlmZmVyZW5jZVwiPisvLTwvdGg+XHJcblx0XHQgIDx0aCBjbGFzcz1cInN0YW5kaW5nc19faGVhZGVyLXBvaW50c1wiPlA8L3RoPlxyXG5cdFx0PC90cj5cclxuXHQgIGA7XHJcblx0ICBzdGFuZGluZ3MuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHRcclxuXHQgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuXHQgIHRib2R5LmNsYXNzTGlzdC5hZGQoJ3N0YW5kaW5nc19fdGVhbXMnKTtcclxuXHJcblx0ICBnZXRUYWJsZS5mb3JFYWNoKCh0ZWFtRGF0YSkgPT4ge1xyXG5cdFx0Y29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cdFx0dHIuaW5uZXJIVE1MID0gYFxyXG5cdFx0ICA8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLXJhbmtcIj4ke3RlYW1EYXRhLnBvc2l0aW9ufTwvdGQ+XHJcblx0XHQgIDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtdGVhbVwiPlxyXG5cdFx0XHQ8aW1nIHNyYz1cIiR7dGVhbURhdGEudGVhbS5jcmVzdH1cIiBhbHQ9XCIke3RlYW1EYXRhLnRlYW0ubmFtZX1cIj5cclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLW5hbWUtZnVsbFwiPiR7dGVhbURhdGEudGVhbS5uYW1lfTwvc3Bhbj5cclxuXHRcdCAgPC90ZD5cclxuXHRcdCAgPHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1wbGF5ZWRcIj4ke3RlYW1EYXRhLnBsYXllZEdhbWVzfTwvdGQ+XHJcblx0XHQgIDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtd29uXCI+JHt0ZWFtRGF0YS53b259PC90ZD5cclxuXHRcdCAgPHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1kcmF3blwiPiR7dGVhbURhdGEuZHJhd308L3RkPlxyXG5cdFx0ICA8dGQgY2xhc3M9XCJzdGFuZGluZ3NfX3RlYW1zLWxvc3RcIj4ke3RlYW1EYXRhLmxvc3R9PC90ZD5cclxuXHRcdCAgPHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1mb3JcIj4ke3RlYW1EYXRhLmdvYWxzRm9yfTwvdGQ+XHJcblx0XHQgIDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtYWdhaW5zdFwiPiR7dGVhbURhdGEuZ29hbHNBZ2FpbnN0fTwvdGQ+XHJcblx0XHQgIDx0ZCBjbGFzcz1cInN0YW5kaW5nc19fdGVhbXMtZGlmZmVyZW5jZVwiPiR7dGVhbURhdGEuZ29hbERpZmZlcmVuY2V9PC90ZD5cclxuXHRcdCAgPHRkIGNsYXNzPVwic3RhbmRpbmdzX190ZWFtcy1wb2ludHNcIj4ke3RlYW1EYXRhLnBvaW50c308L3RkPlxyXG5cdFx0YDtcclxuXHRcdHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuXHQgIH0pO1xyXG5cclxuXHQgIHN0YW5kaW5ncy5hcHBlbmRDaGlsZCh0Ym9keSlcclxuXHJcbn1cclxuIl19
