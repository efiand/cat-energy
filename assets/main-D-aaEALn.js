(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const d=t=>{var s;const n=((s=t.changedTouches)==null?void 0:s[0])||t;return{x:n.clientX,y:n.clientY}},p=({element:t,onMove:n,onStart:s})=>{const r=e=>{e.preventDefault();const o=d(e);s(o);const c=a=>{a.preventDefault();const{x:l,y:u}=d(a),m={x:l-o.x,y:u-o.y};o.x=l,o.y=u,n(m)},i=a=>{a.preventDefault(),document.removeEventListener("mousemove",c),document.removeEventListener("touchmove",c),document.removeEventListener("mouseup",i),document.removeEventListener("touchend",i)};e.changedTouches?(document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",i,{passive:!1})):(document.addEventListener("mousemove",c),document.addEventListener("mouseup",i))};t.addEventListener("mousedown",r),t.addEventListener("touchstart",r,{passive:!1})};document.querySelectorAll(".comparator").forEach(t=>{const n=t.querySelector(".comparator__button");let s=0,r=0;p({element:n,onMove({x:e}){r+=e;const o=Math.max(Math.min(r/s*100,100),0);t.style.setProperty("--position",`${o}%`)},onStart(){const e=parseInt(t.style.getPropertyValue("--position"),10);s=t.clientWidth,r=s*e/100}})});window.ymaps.ready(()=>{const t=document.querySelector(".map"),n=t.querySelector("template").innerHTML,s=t.querySelector("picture"),r=new window.ymaps.Map(t,{center:[59.9387165,30.3230474],controls:[],zoom:16});r.geoObjects.add(new window.ymaps.Placemark(r.getCenter(),null,{iconLayout:window.ymaps.templateLayoutFactory.createClass(n)})),r.behaviors.disable("scrollZoom"),s.remove()});document.querySelectorAll(".navigation").forEach(t=>{t.querySelector(".navigation__toggler").addEventListener("click",()=>{t.classList.toggle("navigation--opened")}),setTimeout(()=>t.classList.remove("navigation--no-js"),1e3)});