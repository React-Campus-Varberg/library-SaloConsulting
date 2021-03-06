# Lösningen av Peter

Modal och Book component renderas i funktionen App. Jag passar metoder ner till child-component för att bygga funktionaliteten mellan komponenterna. 

Jag använder mig även av en custom hook i en egen fil där jag lagrar senast "in focus" bok som har visats i modal. Jag klurar fortfarande om på detta är ett bra sätt, för att kanske i framtiden passa custom hook till komponenter som inte har någon relation till child eller parent, t.ex. en footer. 



# Övning

I denna övning ska du göra ett bibliotek av barnböcker. Du hittar en JSON-fil med böcker i mappen ```assets```. Du ska enbart använda dig av funktionella komponenter med React Hooks.

Figmaskiss: https://www.figma.com/file/lm4l7OViUO8ypfQn9IBG91/Mini-Library?node-id=2%3A41

**Funktionalitet**

* Lista alla böcker från childrensbooks.json
* När jag klickar på en bok ska den visas med mer information se Figmaskiss.

# Instruktioner för utvecklingsmiljön

Detta kräver att du har installerat **node** och **npm**. Du kan ladda ner det [här](https://nodejs.org/en/).

I terminalen kör:
```
npm install
````

Efter det kör:

```
npm run serve
````

Det kommer köra igång en utvecklingserver som kollar efter förändringar du kör i dina HTML, CSS och JS filer. Vi kommer diskutera detta lite längre fram men nu fokuserar vi enbart på koden till och börja med.
