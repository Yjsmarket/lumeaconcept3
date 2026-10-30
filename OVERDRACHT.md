# Overdracht

Stand van zaken van de site voor LUMEA Amsterdam, Johan Huizingalaan 192, 1065 JJ Amsterdam.
Derde ontwerp: een combinatie van twee eerdere Lumea-sites, met de volledige kaart.

## Wat er staat

| Pad | Wat het is |
| --- | --- |
| `/` | Eén pagina: hero, Coffee · Breakfast · Lunch, ons verhaal, het menu in tabbladen, sfeer, tijden en locatie, volg de opening. Op mobiel een vaste balk met Menu en Route. |
| `/menu/` | Stuurt door naar `/#menu`, zodat oude links en een QR naar `/menu/` blijven werken. |

- `assets/css/stijl.css`: de stijl.
- `assets/js/kaart.js`: de kaart. Alle gerechten met prijs staan bovenin dit bestand. Per gerecht: `[naam, prijs, omschrijving, foto]`.
- `assets/beeld/`: alle beelden.

## Waar het ontwerp vandaan komt

- Uit `lumea-amsterdam-cafe-guide.lovable.app`: "Waar licht en smaak samenkomen", de genummerde aanbodkaarten, ons verhaal met cijfers, het menu in tabbladen, het blok "Volg de opening".
- Uit `codelineagnecy.github.io/codeline-demo-sites/lumea-amsterdam/`: de hero "Where light meets taste", het zwevende adreskaartje, de strook Coffee · Breakfast · Lunch, de sfeergalerij en het locatieblok met de getekende gevel.
- De kaart met prijzen komt van een menufoto die de opdrachtgever aanleverde.

## Nog checken bij de klant

- **Openingstijden.** De site toont dagelijks 07:00 – 19:00 (zo staat het op de Lovable-site). De Codeline-site zegt dat de tijden nog niet bekend zijn. Bevestigen.
- **Merkbeelden.** `interieur`, `cafe-sfeer`, `koffiezak`, `licht-logo`, `beker` en `coming-soon` komen van het Instagram-account van Lumea, via de twee sites hierboven. Vragen of ze op de site mogen.
- **Namen op de kaart** zijn overgenomen zoals ze op de menufoto staan. Twijfelgevallen: "Gehakt sampy", "Ginger / mint" (één thee of twee?). Bij de extra toppings stond een onleesbaar woord ("Pinkabass"), dat is weggelaten.

## Foto's van gerechten

16 gerechten hebben een foto. Die foto's zijn **stockfotografie van Unsplash**, geen foto's van de zaak.
De andere 66 gerechten hebben een plaatshouder "Foto volgt".

Een eigen foto toevoegen: zet een vierkante foto in `assets/beeld/` en zet de bestandsnaam (zonder `.jpg`) als vierde veld bij het gerecht in `assets/js/kaart.js`. Voorbeeld:

    ["Tuna melt", "12,-", "", "tuna-melt"]

## Nog te doen

- **GitHub Pages aanzetten**: Settings, Pages, branch `main`, map `/`. Daarna staat de site op `https://yjsmarket.github.io/lumeaconcept3/`.
- De `noindex`-regel in de `<head>` weghalen zodra de zaak opengaat.

## Werkafspraken

`CLAUDE.md` in deze map bevat de vaste regels voor schrijfstijl, ontwerp en techniek.
