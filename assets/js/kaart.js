/* LUMEA, de kaart op de homepage: tabbladen per onderdeel, met prijs en foto of een plaatshouder "Foto volgt". */
(() => {
  /* De kaart, met de prijzen zoals aangeleverd. Per groep: [naam, prijs, omschrijving]. */
  const KAART = [
    { id: "ontbijt", naam: "Ontbijt", foto: "pannenkoeken", zin: "Om rustig de dag mee te beginnen.", groepen: [
      { naam: "Ontbijt", items: [
        ["Croissant", "4,50", "", "croissant"], ["Pancakes", "8,-", "", "pannenkoeken"], ["Pancake naturel", "8,-"],
        ["Pancake Nutella", "11,-", "Met aardbei, blauwe bessen, banaan en Nutella."],
        ["Pancakes Amlou", "12,-", "Met banaan, noten en dadelmix, afgetopt met een crunchy Amlou-topping."] ] },
      { naam: "Eieren", items: [
        ["Spiegelei", "8,-", "", "toast-gebakken-ei"], ["Roerei", "8,-", "", "roerei"], ["Omelet", "9,50", "", "omelet"], ["Gepocheerd ei", "9,-", "", "eggs-benedict"], ["Boerenomelet", "11,-"], ["Shakshuka", "11,-", "", "shakshuka"] ] },
      { naam: "Acai & bowls", items: [
        ["Chia bowl", "10,-"], ["Acai bowl", "11,-"], ["Granola yoghurt", "9,-", "", "granola"],
        ["Extra topping, per stuk", "1,-", "Onder andere noten, dadelmix, chiapudding en aardbei."] ] } ] },
    { id: "lunch", naam: "Lunch", foto: "zalm-avocado", zin: "Voor tussendoor, of om af te spreken.", groepen: [
      { naam: "Broodjes", items: [
        ["French toast", "9,-", "", "wentelteefjes"], ["Tuna melt", "12,-"], ["Carpaccio met pesto", "13,-"], ["Pastrami", "12,-"], ["Truffel kip", "12,-"], ["Gehakt sampy", "12,-"],
        ["Avocado toast", "11,-", "Toast met avocado en toppings.", "avocado-toast"],
        ["Zalm & gepocheerd ei", "14,-", "Toast met zalm, avocado en gepocheerd ei.", "zalm-avocado"],
        ["Bulgogi beef", "14,-"], ["Ebi shrimp", "13,-"], ["Crispy chicken", "13,-"] ] },
      { naam: "Panini's", items: [
        ["Panini kip", "11,-"], ["Panini grillworst", "11,-"], ["Panini grillworst pittig", "11,-"], ["Panini pesto & mozzarella", "12,-", "", "panini-caprese"] ] },
      { naam: "Tosti's", items: [
        ["Tosti kaas", "7,50", "Geserveerd met ketchup."], ["Tosti truffle toast", "8,50"],
        ["Tosti kalkoen", "8,50"], ["Tosti kipfilet", "8,50"], ["Tosti grillworst", "8,50"] ] },
      { naam: "Salades & soep", items: [
        ["Caesar salade", "13,-"], ["Shrimp salade", "14,-"], ["Burrata salade", "13,-"], ["Soep van de dag", "7,50"] ] },
      { naam: "Sides", items: [
        ["Runderbitterballen, 6 stuks", "7,50"], ["Chilly cheese balls, 6 stuks", "7,50"], ["Kipnuggets, 6 stuks", "6,50"],
        ["Truffel sweet potato", "6,50"], ["Truffel fresh fries", "6,50"], ["Boerenfriet", "5,50"], ["Tortilla met saus", "5,50"] ] } ] },
    { id: "koffie", naam: "Koffie, thee & matcha", foto: "matcha", zin: "Specialty coffee en negen soorten matcha.", groepen: [
      { naam: "Coffee", items: [
        ["Espresso", "3,00"], ["Cortado", "3,50"], ["Cappuccino", "3,50", "", "cappuccino"], ["Cappuccino double", "4,50"], ["Latte, hot of iced", "4,00"], ["Flat white", "4,00", "", "flat-white"],
        ["Almond cream latte", "4,50"], ["Brown sugar latte", "4,50"], ["Vanille ube white mocha", "4,50"], ["Chocolademelk marshmallow", "4,50"] ] },
      { naam: "Matcha", items: [
        ["Strawberry cloud matcha", "6,50"], ["Mango matcha", "6,50"], ["Crème brûlée matcha", "6,50"], ["Lychee matcha", "6,50"], ["Ube coconut matcha", "6,50"],
        ["White chocolate matcha", "6,50"], ["Spirulina matcha", "6,50"], ["Banana cream matcha", "6,50"], ["Coconut water matcha", "6,50"] ] },
      { naam: "Tea", items: [["Hibiscus", "3,50"], ["Ginger / mint", "3,50"]] } ] },
    { id: "shakes", naam: "Shakes & lemonade", foto: "smoothie", zin: "Vers en koud, met echt fruit.", groepen: [
      { naam: "Shakes", items: [
        ["Jus d'orange", "5,50", "", "jus"], ["Strawberry shake", "6,50", "", "smoothie"], ["Mango shake", "6,50"], ["Ananas shake", "6,50"], ["Avocado shake", "6,50"], ["Banana shake", "6,50"], ["Signature shake", "7,50"] ] },
      { naam: "Iced lemonade", items: [
        ["Mango passion fruit", "5,50"], ["Strawberry yakult", "6,50", "Vanillesiroop, yakult, sprite en aardbei."],
        ["Mango yakult", "6,50", "Mangosiroop, yakult, kokosmelk en mangoblokjes."], ["Butterfly pea", "6,50", "Mango of aardbei."], ["Citroen lemonade", "5,50"] ] },
      { naam: "Extra's", items: [["Extra foam", "1,-"], ["Extra matcha", "1,50"], ["Extra puree", "1,-"]] } ] }
  ];
  const $ = s => document.querySelector(s);
  const tabs = $("[data-tabs]"), paneel = $("[data-paneel]");
  tabs.innerHTML = KAART.map((k, i) => `<button type="button" role="tab" id="tab-${k.id}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-k="${k.id}">${k.naam}</button>`).join("");
  function toon(id, focus) {
    const k = KAART.find(x => x.id === id);
    tabs.querySelectorAll("[data-k]").forEach(b => { const aan = b.dataset.k === id; b.setAttribute("aria-selected", aan); b.tabIndex = aan ? 0 : -1; if (aan && focus) b.focus(); });
    paneel.setAttribute("aria-labelledby", "tab-" + id);
    paneel.innerHTML = `<div class="menu__foto"><div class="beeld"><img src="assets/beeld/${k.foto}.jpg" alt="" width="700" height="700" loading="lazy"></div><p>${k.zin}</p></div>
      <div class="groepen">${k.groepen.map(g => `<section class="groep"><h3>${g.naam}<small>${g.items.length}</small></h3><ul>${g.items.map(([n, p, o, f]) => `<li class="item">${f ? `<span class="mini"><img src="assets/beeld/${f}.jpg" alt="" width="700" height="700" loading="lazy"></span>` : `<span class="mini mini--leeg" aria-hidden="true"><svg><use href="#camera"/></svg><small>Foto volgt</small></span>`}<div class="item__tekst"><div class="item__regel"><span>${n}</span><i aria-hidden="true"></i><b>€ ${p}</b></div>${o ? `<p>${o}</p>` : ""}</div></li>`).join("")}</ul></section>`).join("")}</div>`;
  }
  tabs.addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b) { toon(b.dataset.k); if (tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: b.offsetLeft - 8, behavior: "smooth" }); } });
  tabs.addEventListener("keydown", e => {
    if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
    const t = [...tabs.querySelectorAll("[data-k]")], i = t.indexOf(document.activeElement); if (i < 0) return;
    toon(t[(i + (e.key === "ArrowRight" ? 1 : t.length - 1)) % t.length].dataset.k, true); e.preventDefault();
  });
  toon("ontbijt");
})();
