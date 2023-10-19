"use strict";var heroImg=document.querySelector(".hero-img"),hideHero=function(){heroImg.classList.add("hide")},hamburger=(setTimeout(hideHero,5e3),document.querySelector(".hamburger")),mobileLinks=document.querySelector(".nav-mobile__links"),navLinks=(hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),mobileLinks.classList.toggle("nav-mobile__links--active")}),document.querySelectorAll(".nav__link")),leagues=["PL","PD","BL1","SA","FL1"];function getData(e,t){e="".concat(e);fetch("https://api.football-data.org/v4/competitions/"+e,{method:"GET",headers:{"X-Auth-Token":"268640ec6a2640e7991cee35b5c601b6","Accept-Encoding":""}}).then(function(e){return e.json()}).then(function(e){createScores(e,t),console.log(e)}).catch(function(e){console.log(e)})}leagues.forEach(function(e,t){getData(e,t)});var createScores=function(e,t){t=document.getElementById(["english","spanish","german","italian","french"][t]).querySelector(".scores"),e=e.emblem;t.style.backgroundImage="url(".concat(e,")"),console.log(e)};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJoZXJvSW1nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGlkZUhlcm8iLCJhZGQiLCJoYW1idXJnZXIiLCJzZXRUaW1lb3V0IiwibW9iaWxlTGlua3MiLCJsZWFndWVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaWQiLCJpbmRleCIsIm1ldGhvZCIsInBhZ2VJbmRleCIsImxlYWd1ZUlEIiwiY29uY2F0IiwiZmV0Y2giLCJoZWFkZXJzIiwiWC1BdXRoLVRva2VuIiwiZGF0YSIsIkFjY2VwdC1FbmNvZGluZyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY3JlYXRlU2NvcmVzIiwiY29uc29sZSIsInNlY3Rpb25JRCIsImxvZ28iLCJzY29yZXMiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImdldERhdGEiLCJsZWFndWUiLCJnZXRFbGVtZW50QnlJZCIsImVtYmxlbSIsImxvZyJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBTUEsUUFBVUMsU0FBU0MsY0FBYyxXQUFXLEVBQTVDRixTQUFVQyxXQUVoQkQsUUFBTUcsVUFBV0MsSUFBQSxNQUFYRCxDQUVOLEVBTU1FLFdBSk5DLFdBQVdILFNBQVUsR0FBSSxFQUlQRixTQUFTQyxjQUFjLFlBQWEsR0FDaERLLFlBQWNOLFNBQVNDLGNBQWMsb0JBQXFCLEVBVTVETSxVQVRKSCxVQUFVSSxpQkFBaUIsUUFBUyxXQUNuQ0osVUFBU0ssVUFBVUMsT0FBTyxXQUFDLEVBRzNCSixZQUFDRyxVQUFBQyxPQUFBLDJCQUFBLENBQUYsQ0FBQyxFQUtjVixTQUFVVyxpQkFBZSxZQUFNLEdBRTlDSixRQUFRSyxDQUFPLEtBQUMsS0FBQ0MsTUFBSUMsS0FBVSxPQUsvQixTQU1FQyxRQUFhRixFQUFBRyxHQUVaQyxFQUFBLEdBQUFDLE9BQWNMLENBQUUsRUFIbEJNLE1BRVUsaURBS0hGLEVBQUcsQ0FOVEYsT0FNUyxNQUFjSyxRQUNqQixDQUxMQyxlQU1hQyxtQ0FMYkMsa0JBTWlCLEVBQ2xCLENBTEQsQ0FBQyxFQVFDQyxLQUFDLFNBQUFDLEdBQUEsT0FBQUEsRUFBQUMsS0FBQSxDQUFBLENBQUEsRUFDSEYsS0FBQSxTQUFBRixHQUdBSyxhQUFrQkwsRUFBR04sQ0FBZlcsRUFDTEMsUUFBTUMsSUFBU1AsQ0FBSSxDQUNuQixDQUFBLEVBQUEsTUFDT1EsU0FBQUEsR0FDTkMsUUFBT0MsSUFBTUMsQ0FBQUEsQ0FDYkwsQ0FBQUEsQ0FHRixDQWpDRHJCLFFBQUVLLFFBQUEsU0FBQUMsRUFBQUMsR0FFRm9CLFFBQVNBLEVBQUFBLENBQVFyQixDQUZqQixDQUFDLEVBeUJBLElBQU1jLGFBQWUsU0FBQ1EsRUFBUW5CLEdBRXZCZSxFQUFTL0IsU0FBU29DLGVBRE4sQ0FBQyxVQUFXLFVBQVcsU0FBVSxVQUFXLFVBQVVwQixFQUN4QixFQUFFZixjQUFjLFNBQVMsRUFDbEU2QixFQUFPSyxFQUFPRSxPQUNwQk4sRUFBT0MsTUFBTUMsZ0JBQWUsT0FBQWYsT0FBVVksRUFBSSxHQUFBLEVBQzFDRixRQUFRVSxJQUFJUixDQUFJLENBR25CIiwiZmlsZSI6InNjcmlwdC1taW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIRVJPIElNQUdFXHJcbmNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1pbWcnKVxyXG5cclxuY29uc3QgaGlkZUhlcm8gPSAoKSA9PiB7XHJcblx0aGVyb0ltZy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxufVxyXG5cclxuc2V0VGltZW91dChoaWRlSGVybywgNTAwMClcclxuXHJcbi8vIE5BVklHQVRJT05cclxuXHJcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxyXG5jb25zdCBtb2JpbGVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbW9iaWxlX19saW5rcycpXHJcbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcclxuXHJcblx0bW9iaWxlTGlua3MuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2LW1vYmlsZV9fbGlua3MtLWFjdGl2ZScpXHJcbn0pXHJcblxyXG4vLyBBUEkgREFUQVxyXG5cclxuY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saW5rJylcclxubGV0IGxlYWd1ZXMgPSBbJ1BMJywgJ1BEJywgJ0JMMScsICdTQScsICdGTDEnXVxyXG5cclxubGVhZ3Vlcy5mb3JFYWNoKChpZCwgaW5kZXgpID0+IHtcclxuXHRnZXREYXRhKGlkLCBpbmRleClcclxuXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YShpZCwgcGFnZUluZGV4KSB7XHJcblx0Y29uc3QgVVJMX0FQSSA9ICdodHRwczovL2FwaS5mb290YmFsbC1kYXRhLm9yZy92NC9jb21wZXRpdGlvbnMvJ1xyXG5cdGNvbnN0IGxlYWd1ZUlEID0gYCR7aWR9YFxyXG5cclxuXHJcblx0ZmV0Y2goVVJMX0FQSSArIGxlYWd1ZUlELCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnWC1BdXRoLVRva2VuJzogJzI2ODY0MGVjNmEyNjQwZTc5OTFjZWUzNWI1YzYwMWI2JyxcclxuXHRcdFx0J0FjY2VwdC1FbmNvZGluZyc6ICcnXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuXHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRjcmVhdGVTY29yZXMoZGF0YSwgcGFnZUluZGV4KVxyXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coZXJyKVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHRjb25zdCBjcmVhdGVTY29yZXMgPSAobGVhZ3VlLCBwYWdlSW5kZXgpID0+IHtcclxuXHRcdGNvbnN0IHNlY3Rpb25JRCA9IFsnZW5nbGlzaCcsICdzcGFuaXNoJywgJ2dlcm1hbicsICdpdGFsaWFuJywgJ2ZyZW5jaCddW3BhZ2VJbmRleF07XHJcblx0XHRjb25zdCBzY29yZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSUQpLnF1ZXJ5U2VsZWN0b3IoJy5zY29yZXMnKVxyXG5cdFx0XHRjb25zdCBsb2dvID0gbGVhZ3VlLmVtYmxlbVxyXG5cdFx0XHRzY29yZXMuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2xvZ299KWBcclxuXHRcdFx0Y29uc29sZS5sb2cobG9nbyk7XHJcblx0XHRcclxuXHRcdFxyXG59O1xyXG4iXX0=
