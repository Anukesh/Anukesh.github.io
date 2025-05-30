(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const u="/logo.svg";function m({title:t="",label:e="",heading:n="",content:s="",link:i=""}={}){return`
    <section class="ad">
        <p class="ad__title">${t}</p>

        <div class="ad__inner">
          <div>
            <p class="ad__label">${e}</p>
            <h3 class="ad__heading">${n}</h3>
          </div>
          <div>
            <p class="ad__text">
              ${s}
            </p>
            <a href="${i}" class="ad__link" target="_blank">READ MORE</a>
          </div>
        </div>
      </section>
  `}document.querySelector("#app").innerHTML=`
 <div class="container">
  <header class="header">
    <img src="${u}" alt="Modernize Logo" class="header__logo" />
  </header>

  <section class="form-section">
    <div class="form-box">
      <div class="form-box__header">
        <p class="form-box__title">
          Enter to win a 3rd generation Nest Learning Thermostat worth $249.
        </p>
      </div>
      <form id="userForm" class="form">
        <input
          id="name"
          type="text"
          class="form__input"
          placeholder="Name"
          required
          minlength="2"
        />
        <div class="form__location">
          <input id="city" type="text" class="form__input form__location-city" placeholder="City" />
          <input
            id="state"
            type="text"
            class="form__input form__location-state"
            placeholder="State"
          />
        </div>
        <input id="phone" type="text" class="form__input" placeholder="Phone Number" required />
        <input id="email" type="email" class="form__input" placeholder="Email Address" required />
        <button id="submit" class="form__submit" type="submit">
          Enter to Win
        </button>
      </form>
    </div>
  </section>

  <div class="bottom-section">
    ${m({title:"Even More Savings",label:"ADVERTORIAL",heading:"Tricks Homeowners Use to Eliminate Bills",content:"Surging energy bills, unpredictable weather patterns and dissatisfaction with utility companies have homeowners scrambling...",link:"https://www.google.com"})}
  </div>
</div>
`;const p=document.querySelector("#name"),f=document.querySelector("#city"),h=document.querySelector("#state"),c=document.querySelector("#phone"),d=document.querySelector("#email"),r=document.querySelector("#userForm"),l=document.querySelector("#submit");c.addEventListener("input",g);d.addEventListener("input",y);r.addEventListener("input",v);r.addEventListener("submit",_);document.querySelectorAll(".form__input").forEach(t=>{t.addEventListener("blur",()=>{t.classList.add("form__input--invalid")})});function g(t){let e=t.target.value.replace(/\D/g,"");e.length>10&&(e=e.slice(0,10));let n="";e.length>0&&(n+="("+e.slice(0,3)),e.length>=4&&(n+=") "+e.slice(3,6)),e.length>=7&&(n+="-"+e.slice(6,10)),t.target.value=n,/^\(\d{3}\) \d{3}-\d{4}$/.test(t.target.value)?t.target.setCustomValidity(""):t.target.setCustomValidity("Invalid phone format")}function y(t){/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.target.value)?t.target.setCustomValidity(""):t.target.setCustomValidity("Invalid phone format")}function v(){console.log(r.checkValidity()),l.disabled=!r.checkValidity()}async function _(t){t.preventDefault(),l.disabled=!0,l.innerHTML="Submitted!";const e={name:p.value,city:f.value,state:h.value,phone:c.value,email:d.value};try{const n=await fetch("https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});console.log("Form submitted successfully:")}catch{console.error("Submission failed:")}}
