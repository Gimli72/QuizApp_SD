// @ts-check

/**
 * @type {Questions[]}
 */
let questions = [
    {
        question: "Wer hat HTML erfunden?",
        answer_1: "Robbie Williams",
        answer_2: "Lady Gaga",
        answer_3: "Tim Berners-Lee",
        answer_4: "Justin Bieber",
        language: "html",
        right_answer: 3
    },
    {
        question: "Was steht für HyperText Markup Language?",
        answer_1: "HTTP",
        answer_2: "HTML",
        answer_3: "URL",
        answer_4: "WWW",
        language: "html",
        right_answer: 2
    },
    {
        question: "Welches Tag erstellt einen Absatz?",
        answer_1: "<div>",
        answer_2: "<p>",
        answer_3: "<span>",
        answer_4: "<a>",
        language: "html",
        right_answer: 2
    },
    {
        question: "Welches Tag wird für die größte Überschrift verwendet?",
        answer_1: "<h6>",
        answer_2: "<h1>",
        answer_3: "<h3>",
        answer_4: "<h5>",
        language: "html",
        right_answer: 2
    },
    {
        question: "Wie schließt man ein HTML-Tag?",
        answer_1: "/>",
        answer_2: "</>",
        answer_3: "<close>",
        answer_4: "</tagname>",
        language: "html",
        right_answer: 4
    },
    {
        question: "Wie fügt man ein Bild in HTML ein?",
        answer_1: "<image>",
        answer_2: "<img>",
        answer_3: "<picture>",
        answer_4: "<src>",
        language: "html",
        right_answer: 2
    },
    {
        question: "Was macht das <ol> Tag?",
        answer_1: "Erzeugt eine ungeordnete Liste",
        answer_2: "Erzeugt eine geordnete Liste",
        answer_3: "Erzeugt eine Tabelle",
        answer_4: "Erzeugt einen Absatz",
        language: "html",
        right_answer: 2
    },
    {
        question: "Welches Attribut wird verwendet, um einen Link zu öffnen?",
        answer_1: "src",
        answer_2: "ref",
        answer_3: "open",
        answer_4: "href",
        language: "html",
        right_answer: 4
    },
    {
        question: "Was ist das Wurzelelement eines HTML-Dokuments?",
        answer_1: "<body>",
        answer_2: "<head>",
        answer_3: "<html>",
        answer_4: "<main>",
        language: "html",
        right_answer: 3
    },
    {
        question: "Welches Tag definiert Metainformationen im Kopfbereich?",
        answer_1: "<metadata>",
        answer_2: "<meta>",
        answer_3: "<info>",
        answer_4: "<description>",
        language: "html",
        right_answer: 2
    },
    {
        question: "Was steht für 'CSS'?",
        answer_1: "Computer Style Sheet",
        answer_2: "Cascading Style Sheets",
        answer_3: "Creative Style System",
        answer_4: "Controlled Style Sheet",
        language: "css",
        right_answer: 2
    },
    {
        question: "Wie selektiert man alle `<p>` Elemente in CSS?",
        answer_1: "p.all",
        answer_2: ".p",
        answer_3: "#p",
        answer_4: "p",
        language: "css",
        right_answer: 4
    },
    {
        question: "Welche Eigenschaft ändert die Textfarbe?",
        answer_1: "text-color",
        answer_2: "font-color",
        answer_3: "color",
        answer_4: "text-style",
        language: "css",
        right_answer: 3
    },
    {
        question: "Was macht die Eigenschaft `display: none;`?",
        answer_1: "Ändert die Farbe des Elements",
        answer_2: "Entfernt das Element visuell und aus dem Layout",
        answer_3: "Macht das Element transparent",
        answer_4: "Verkleinert das Element",
        language: "css",
        right_answer: 2
    },
    {
        question: "Wie setzt man einen externen CSS-Link ein?",
        answer_1: "<link href='styles.css'>",
        answer_2: "<style src='styles.css'></style>",
        answer_3: "<link rel='stylesheet' href='styles.css'>",
        answer_4: "<css src='styles.css'></css>",
        language: "css",
        right_answer: 3
    },
    {
        question: "Was macht die `border` Eigenschaft?",
        answer_1: "Ändert die Hintergrundfarbe",
        answer_2: "Fügt eine Umrandung hinzu",
        answer_3: "Ändert die Textfarbe",
        answer_4: "Fügt einen Schatten hinzu",
        language: "css",
        right_answer: 2
    },
    {
        question: "Wie wendet man CSS nur auf das erste Kind eines Elements an?",
        answer_1: ":first-kind",
        answer_2: ":first-of-type",
        answer_3: ":first-child",
        answer_4: ":first",
        language: "css",
        right_answer: 3
    },
    {
        question: "Was macht `text-align: right;`?",
        answer_1: "Rechtsbündiger Text",
        answer_2: "Linksbündiger Text",
        answer_3: "Zentriert den Text",
        answer_4: "Justiert den Text",
        language: "css",
        right_answer: 1
    },
    {
        question: "Was ist der Standardwert von `position`?",
        answer_1: "absolute",
        answer_2: "fixed",
        answer_3: "static",
        answer_4: "relative",
        language: "css",
        right_answer: 3
    },
    {
        question: "Was macht die Eigenschaft `z-index`?",
        answer_1: "Ändert die Größe eines Elements",
        answer_2: "Kontrolliert die Ebenenanordnung",
        answer_3: "Ändert die Schriftart",
        answer_4: "Ändert die Hintergrundfarbe",
        language: "css",
        right_answer: 2
    },
    {
        question: "Welche Methode konvertiert ein JavaScript-Objekt in einen String?",
        answer_1: "toString()",
        answer_2: "toJSON()",
        answer_3: "stringify()",
        answer_4: "JSON.stringify()",
        language: "js",
        right_answer: 4
    },
    {
        question: "Wie fügt man ein Element am Ende eines Arrays hinzu?",
        answer_1: "pop()",
        answer_2: "push()",
        answer_3: "shift()",
        answer_4: "unshift()",
        language: "js",
        right_answer: 2
    },
    {
        question: "Wie deklariert man eine Konstante?",
        answer_1: "let",
        answer_2: "var",
        answer_3: "const",
        answer_4: "final",
        language: "js",
        right_answer: 3
    },
    {
        question: "Wie testet man Gleichheit mit Typüberprüfung in JavaScript?",
        answer_1: "==",
        answer_2: "=",
        answer_3: "===",
        answer_4: "!=",
        language: "js",
        right_answer: 3
    },
    {
        question: "Was ergibt '2' + 2 in JavaScript?",
        answer_1: "22",
        answer_2: "4",
        answer_3: "2 + 2",
        answer_4: "42",
        language: "js",
        right_answer: 1
    },
    {
        question: "Wie erstellt man eine Funktion in JavaScript?",
        answer_1: "func myFunction() {}",
        answer_2: "function:myFunction() {}",
        answer_3: "function myFunction() {}",
        answer_4: "Function() = myFunction {}",
        language: "js",
        right_answer: 3
    },
    {
        question: "Wie schreibt man eine if-Anweisung für die Überprüfung von 'x < 0'?",
        answer_1: "if (x > 0)",
        answer_2: "if x < 0",
        answer_3: "if x =< 0",
        answer_4: "if (x < 0)",
        language: "js",
        right_answer: 4
    },
    {
        question: "Wie schreibt man eine 'for'-Schleife, die von 0 bis 9 zählt?",
        answer_1: "for (i <= 9; i++)",
        answer_2: "for (let i = 0; i < 10; i++)",
        answer_3: "for (i = 0; i <= 9; i =+ 1)",
        answer_4: "for (let i = 1; i < 9; i++)",
        language: "js",
        right_answer: 2
    },
    {
        question: "Was macht die Methode `Array.splice()`?",
        answer_1: "Kopiert ein Array",
        answer_2: "Fügt Elemente in ein Array ein oder entfernt sie",
        answer_3: "Sucht nach einem Element im Array",
        answer_4: "Verbindet zwei Arrays",
        language: "js",
        right_answer: 2
    },
    {
        question: "Was ist die Hauptmethode in einer Java-Anwendung?",
        answer_1: "main()",
        answer_2: "start()",
        answer_3: "init()",
        answer_4: "run()",
        language: "java",
        right_answer: 1
    },
    {
        question: "Wie beginnt der Klassenname in Java üblicherweise?",
        answer_1: "Mit einem Kleinbuchstaben",
        answer_2: "Mit einem Unterstrich",
        answer_3: "Mit einem Großbuchstaben",
        answer_4: "Mit einer Zahl",
        language: "java",
        right_answer: 3
    },
    {
        question: "Was bedeutet 'JVM'?",
        answer_1: "Java Variable Machine",
        answer_2: "Java Version Manager",
        answer_3: "Just Virtual Machine",
        answer_4: "Java Virtual Machine",
        language: "java",
        right_answer: 4
    },
    {
        question: "Welches Schlüsselwort wird für die Vererbung verwendet?",
        answer_1: "inherits",
        answer_2: "extends",
        answer_3: "implements",
        answer_4: "overloads",
        language: "java",
        right_answer: 2
    },
    {
        question: "Wie werden Konstanten in Java deklariert?",
        answer_1: "const",
        answer_2: "let",
        answer_3: "var",
        answer_4: "final",
        language: "java",
        right_answer: 4
    },
    {
        question: "Was wird durch das Schlüsselwort 'static' erreicht?",
        answer_1: "Mehrere Instanzen",
        answer_2: "Keine Instanzierung erforderlich",
        answer_3: "Automatische Initialisierung",
        answer_4: "Mehrere Kopien der Variable",
        language: "java",
        right_answer: 2
    },
    {
        question: "Wie fängt man Ausnahmen in Java ab?",
        answer_1: "try / cache",
        answer_2: "try / catch",
        answer_3: "error / catch",
        answer_4: "exception / handle",
        language: "java",
        right_answer: 2
    },
    {
        question: "Was ist ein 'Interface'?",
        answer_1: "Eine Klasse mit Methoden ohne Implementierung",
        answer_2: "Ein Datenbanktreiber",
        answer_3: "Ein Framework",
        answer_4: "Eine Methode in der Hauptklasse",
        language: "java",
        right_answer: 1
    },
    {
        question: "Wie nennt man es, wenn man eine Methode in einer Unterklasse neu definiert?",
        answer_1: "Überladen",
        answer_2: "Verbergen",
        answer_3: "Überschreiben",
        answer_4: "Implementieren",
        language: "java",
        right_answer: 3
    }
];
