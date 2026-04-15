[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/pAqJXfzR)

Planung:
Ich möchte ein Webseite programmieren über Hauskatzen. Ich möchte dabei die Themen Grundlagen & Allgemeines ,wie z.B. den Unterschied zwischen Haus- und Wildkatzen, Verhalten & Kommunikation, Haltung & Pflege und über Ihre allgemeine Gesundheit behandeln. 

Ich will sicher programieren, dass wenn man auch die Inhaltsangabe klickt, zu dem entsprechenden Abschnitt kommt. Mein Ziel mit dieser Webseite ist, Leute über Hauskatzen zu informieren und auch zu zeigen was sie benötigen, wenn man sich überlegt sich eine zu zulegen. Ich will meine Webseite sicher mit verschiedenen Farben gestalten, die aber eher schlicht sind und einfach stimmig zueinander. Ebenfalls will ich meine Webseite übersichtlich gestalten. Es soll auch mehrere Bilder beinhalten.


Erste Texte:
Ich wusste nicht wie man Abschnitte voneinander trennt, sodass sie nicht aneinander sein und ein Abschnitt leer dazwischen ist. Ich habe dann eine Freundin gefragt und sie hat mir gezeigt, dass ich einfach ein <br> als Zeile schreiben muss und es hat funktioniert.

<header> Tag:
Ich wusste nicht für was man den Tag <header> verwendet und habe dann online recherchiert und  auf einer Webseite eine sehr gute Erklärung gefunden. Er wird verwendet um einführende Inhalt oder auch eine Reihe von Navigationsverbindungen wie z.B. die Inhaltsangabe abzugrenzen und es für die Webseite einfacher zu machen, die Inhaltsangabe zu verstehen. Ich habe ihn auch genau dafür gebraucht gebraucht und mit <nav> meine Webseitenüberschrift mit der Inhaltsangabe gestaltet.

<section> Tag:
Ich habe wieder auf der gleichen und anderen Webseiten recherchiert, wie man dieses Tag verwendet und für was. Habe dann gelernt, dass er einen thematischen Block innerhalb der Seite herstellt, die einen eigenen Sinnzusmmenhang haben und idealerweise eine Überschrift haben. Ich habe dann gemerkt, dass ich gerne verschiedene Farben der Unterschiedlichen Unterthemen haben möchte und habe diese dann in die <section> Tags gemacht.

<article> Tag:
Ich habe verschiedene Webseiten besucht, um heraus zufinden, für was man es verwendet. Man verwendet es für eigenständige Inhalte, die alleine stehen können. Ich wusste, dass man das bei mehreren Themen bei mir nutzen könnte, fand aber den <section> Tag besser, für was ich es verwenden möchte. Habe ihn aber für die Katzenrassen eingesetzt, weil die KI, mir das Vorgeschlagen hat, als ich ihr erklärt habe, wie ich es verwenden möchte.

Hintergrundbild erstellen:
Beim diskutieren mit Thea, hat mir THea die Idea gebracht, ein Bild hinter den Titel zu machen. Da ich aber nicht wusste wie das geht, habe ich dann Copilot gefragt. Dieser hat mir dann verschiedene Vorschläge geben und ich habe einfach mal angefangen auszuprobieren. Am Anfang hat es nicht so funktioniert wie ich wollte, doch durch ausprobieren, fand ich dann eine Lösung. 
.Titel {
    height: 450px;
    background-image: url(https://cattrees.ca/wp-content/uploads/2020/05/cutegingerkitten.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
}
.Titel::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.5);
}
.Titel h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 190px;
    z-index: 1;
Ich habe als erstes die Grösse des Bildes angepasst und so platziert, sodass es genau in der Mitte zentriert ist. Danach habe ich ein Overlay gemacht. Ich habe mit dem ::after, dass es ein unsichtbares Element ist. Mit den inset:0 , habe ich gemacht, dass der Overlay über dem ganzen Bild ist. Ich habe dann mit der background-color meine Farbe ausgewählt und mit dem 0,5 die durchsichtigkeit bestimmt. Zum Schluss habe ich dann noch mein TItel platziert. Ich habe mit der Position den Titel in die Mitte platzieren wollen, was nicht ganz funktioniert hat, war aber mit dem was herausgekommen ist noch mehr zufrieden, deshalb habe ich es so gelassen. Mit dem transform, habe ich den titel, dann genau in die Mitte zentriert und die Farbe mit color bestimmt. Zum SChluss habe ich dann noch den Index 1 bestimmt, sodass der Text über dem Overlay liegt.

Tabelle Katzenrassen: 
#Katzenrassen {
    margin-bottom: 20px;
}
.reihe {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
}
.box {
    max-width: 300px;
    text-align: left;
    line-height: 1.5;

Als erstes habe ich meinem Bereich eine ID gegeben, was ich nacher im CSS verwenden werde. Dann habe ich mit dem Margin den Abschnitt ein bisschen nach unten geschoben, für eine bessere Übersicht. Im CSS  habe ich dann die Klassen, die einzelnen Katzenrassen, genommen und sie nebeneinander gemacht mit dem flex. Dann habe ich mit dem justify-content, die einzelnen "Boxen", der Katzenrassen, nebeneinander zentriert. und für die unteren Reihen einen Abstand mit margin gemacht. Ich habe dann noch die Grössse der einzelnen "Boxen" festgelegt, wie mit z.B. der Breite oder dem Zeilenabstand.

Java-Script Bilderwechsel:
const images = [
    { src: "https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg", caption: "Maine Coon" },
    { src: "https://medipet-shop.de/thumbnail/35/91/93/1674567844/britsich%20kurzhaar_1920x1920.jpg", caption: "Britische Kurzhaarkatze" },
    { src: "https://www.haustierratgeber.de/wp-content/uploads/2016/02/Siam.png", caption: "Siamkatze" },
    { src: "https://i.pinimg.com/originals/5a/e4/d7/5ae4d7330d1145d8924a587b74bd0cf3.jpg", caption: "Europäische Kurzhaarkatze" },
    { src: "https://www.bubblypet.com/wp-content/uploads/2022/07/White-Persian-cat-walking-on-green-grass.jpg", caption: "Perserkatze" }
];

let index = 0;

function updateSlider() {
    document.getElementById("slider-img").src = images[index].src;
    document.getElementById("slider-caption").textContent = images[index].caption;
}

function nextImage() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

Als erstes habe ich in Html, die Position für meine Bilder festgelegt, damit ich diese dann in CSS bearbeiten kann. Mit dem slider habe ich eine Klasse inder ich in Css nacher den linken Pfeil sowie den Rechten und auch das Bild und die Caption bearbeiten kann. Bei dem Button-class definiert, was der Knopf macht und das z.B. &#10094; ist der html Code für meinen Pfeil. Mit dem inclick nextimage() und previmage() wechselt man zwischen den Bildern hin und her.
Beim CSS.
mit dem CLass Slider habe ich dann begonnen, zuerst meine Elemente mittig und gerade zu ordnen und die Pfeile in die Mitte der Bilder zu haben (mit align-items).
Mit dem gap habe ich dann noch den Abstand zwischen Bild und Pfeil hergestellt.
Mit der Classe Arrow, habe ich dann meine Pfeile ein bisschen bearbeiten mit Grösse, dass sie keinen Hintergrund sowie Umrandung haben. Mit dem cursor: pointer verwandelt sich der Zeiger der Maus in die Hand um.

Java-Script:
Mit dem const images habe ich eine Liste mit allen Bildern, die ich in meinem Wechel haben wollte erstellt, dass src wird als Dateinname und die Caption für meinen Text verwendet. Der let index zeigt dann, mit welchem Bild es beginnt und 0 ist das erste. Mit dem document.getElementById("slider-img"), holt es das Bild aus html. mit dem .src=images[index].src, setzt es dann die neue Bilddatei ein. Die Caption verändert sich durch document.getElementById("slider-caption") holt es sich den Text und mit dem .textContent= images[index].caption setzt es dann den neuen Text ein. Mit der function nextImage geht es weiter. mit dem Index + 1 geht es ein Bild weiter und mit images.length geht es vom letzten Bild wieder zum ersten. Mit dem updateSlider() aktualisiert die Caption mit dem Bild.
Mit der function prevImage geht es ein Bild zurück, dabei wird der Index um -1 verglichen zu + 1 gewechselt, dabei bleibt das andere eig das gleiche. Nur das 1 images.length verhindert negative Zahlen.