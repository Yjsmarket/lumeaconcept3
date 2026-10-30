# Werkafspraken

Dit bestand bevat de vaste regels voor het bouwen van websites in deze repo.
Noem het in elke repo `CLAUDE.md` in de hoofdmap, dan leest Claude Code het
automatisch bij het starten van een sessie. Je hoeft er verder niets voor te doen.

---

## 1. Schrijfstijl

**Geen lange gedachtestrepen.** Gebruik komma's of gewone streepjes. Dit is de
belangrijkste regel, want het lange streepje is het duidelijkste signaal dat
een tekst door AI is geschreven.

Schrijf in het Nederlands. Op klantgerichte sites de u-vorm, tenzij het merk
duidelijk informeel is.

Vermijd de standaard AI-opsmuk:
- geen "ontdek", "ervaar", "naadloos", "op maat gemaakte oplossingen"
- geen drieslagen als "sneller, slimmer, beter"
- geen zin die begint met "Of het nu gaat om..."
- geen uitroeptekens in bedrijfsteksten

Schrijf alsof een mens die het vak kent het heeft opgeschreven. Concreet boven
wollig. Eén goede zin is beter dan drie mooie.

---

## 2. Verzin nooit gegevens

Dit is hard. Nooit verzinnen:
- reviews, klantnamen, citaten
- cijfers, statistieken, aantallen klanten, jaren ervaring
- prijzen
- keurmerken, certificeringen, partners

Heb je iets niet, laat dan een **zichtbare placeholder** staan, bijvoorbeeld
`[E-MAILADRES INVULLEN]` of `Op aanvraag`, en zeg er in je antwoord expliciet
bij wat er nog ontbreekt. Een lege plek die opvalt is beter dan een verzonnen
getal dat echt lijkt.

Noteer ontbrekende gegevens ook in een overdrachtsbestand, zodat ze niet
kwijtraken tussen sessies door.

---

## 3. Ontwerp

**Geen AI slop.** Een site die eruitziet als elke andere templatesite is niet
af. Zoek naar een eigen vorm: een kleurpalet dat ergens vandaan komt, typografie
met een eigen keuze erin, een detail dat alleen bij dit merk past.

**Mobiel is geen uitgeklede desktop.** De harde regel: nooit één informatieblok
per schermhoogte. Zet blokken twee naast elkaar, of maak er een swipe-track van
met scroll-snap. Iemand die vijf keer moet scrollen voor vijf punten haakt af.

Check bij elke pagina op mobiel:
- geen horizontale overflow
- belangrijke knoppen binnen bereik, niet pas na drie schermen
- een vaste balk onderin met bellen en WhatsApp als het een dienstensite is

**Animaties mogen, maar moeten rustig zijn.** Invloeien bij scrollen, een lijn
die zich tekent, langzame inzoom op foto's. Respecteer altijd
`prefers-reduced-motion`.

---

## 4. Techniek

- Statische HTML, CSS en JavaScript. Geen framework, geen build-stap.
- Hosting op GitHub Pages, dus alles moet werken als losse bestanden.
- Eén gedeelde stylesheet zodra er meer dan één pagina is. Nooit de CSS per
  pagina dupliceren.
- Schone URL's via mappen: `/over-ons/` in plaats van `/over-ons.html`.
- Boekingen en aanvragen lopen via WhatsApp deeplinks (`wa.me`), met de tekst
  al voorgevuld zodat de klant alleen hoeft te verzenden.
- Nederlandse namen voor klassen, variabelen en commentaar. Niet mengen met
  Engels.

---

## 5. SEO

Elke pagina krijgt een eigen titel, eigen meta-omschrijving en een eigen
`canonical`. Nooit twee pagina's met dezelfde titel.

Gebruik structured data waar het past: `FAQPage` bij vragen, `AboutPage` bij
over ons, `LocalBusiness` of een dienstspecifiek type op de homepage.

Verwerk zoekwoorden in lopende tekst, niet in lijstjes die alleen voor Google
bedoeld zijn. Een kennisblok onderaan een pagina met echte uitleg scoort beter
dan een rij trefwoorden.

Elke dienst verdient een eigen pagina met een eigen zoekintentie. Stuur
advertentieverkeer nooit naar de homepage als er een passende pagina is.

---

## 6. Werkwijze

**Werk compact.** Niet eindeloos rondkijken in bestanden voordat je iets doet.
Verzamel wat je nodig hebt in zo min mogelijk stappen en bouw dan.

**Controleer voor je zegt dat het af is.** Meet in de browser: overflow,
console-fouten, of afbeeldingen laden, of de layout klopt op mobiel. Zeg niet
"het werkt" zonder het gezien te hebben.

**Zeg eerlijk wat er niet gelukt is.** Een halve oplossing met een duidelijke
melding erbij is beter dan een stille aanname.

**Push alleen als erom gevraagd wordt.** Commitberichten in het Nederlands, met
uitleg waarom iets veranderd is, niet alleen wat.

**Wacht op aangeleverde designs.** Als er is gezegd dat een ontwerp uit een
andere chat komt, ga dan niet zelf een lay-out verzinnen.

---

## 7. Positionering

Premium uitstralen en breed bereikbaar zijn kan samen, maar niet door "ook
goedkoop" te roepen. Werk met niveaus: dezelfde dienst, verschillende klassen.
De instapoptie moet net zo goed verzorgd zijn als de duurste, met een prijs en
een foto. Een instapoptie zonder prijs jaagt juist de klanten weg die je
probeerde binnen te halen.

Let op woorden die onbedoeld uitsluiten. Staat er twintig keer "vooraf
reserveren" op een pagina, dan leest iemand die nu een taxi wil dat als "hier
kan ik niet terecht".
