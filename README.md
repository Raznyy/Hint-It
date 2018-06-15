# Nazwa projektu: Hint it

## Opis projektu:

Hint it to aplikacja, dzięki której uzyskasz szybką odpowiedź na pytanie jakiekolwiek pytanie w wybranej okolicy. W aplikacji jest baza użytkowników, każdy z nich posiada punkty i może tworzyć lub tez odpowiadać na pytania. Pytając o sugestie możesz uzyskać odpowiedź na pytanie. Jeżeli odpowiedź jest dobra, udzielasz jej dodatnie punkty, w przeciwnym wypadku punkty ujemne. Każdy kolejno uzyskany punkt wydłuża czas widoczności danego pytania oraz odpowiedzi do niego. Odczyt lokalizacji z urządzenia pozwala na zadawanie pytań w wybranym przez użytkownika obszarze, nie większym niż domyślny. 


## Zespół projektowy:

  <li>Dawid Raźny (Kierownik projektu)</li>
  <li>Maciej Pawlisz</li> 
  <li>Damian Suchy</li>
  <li>Marcin Hernas</li>

## Report prac zespołu:

**Łączny czas każdego członka zespołu poświęcony na projekt:**

#### Dawid Raźny: 47 h

1. Koordynacja całego projektu
2. Nadzorowanie oraz pełna obsługa systemu git ( kontrolowanie branchy/ merge'owanie / rozwiazywanie konfliktów)
3. Utworzenie mockupa w programie Balsamic Mockup ( wraz z póniejszymi poprawkami )
4. Tworzenie oraz przydzielanie zadań w systemie trello ( koordynacja )
5. Porządkowanie kodu/ poprawianie nazw plikow / kontrolowanie struktury folderów
6. Stworzenie systemu obsługi widoku poszczególnych ekranów ( nawigacja )
7. Utworzenie komponentów:
  a) pytania 
  b) odpowiedzi
  c) popupa z interfacem do pozniejszego rozwoju 
  d) listy pytan ( pobierana z bazy danych )
  e) usera w pytaniu i odpowiedzi
  f) oceniania pytania i odpowiedz ( wyglad )
  g) formularz do odpowiadania na pytanie ( rowniez z funkcjonalnościa połączenia przez database service )
  h) lista odpowiedzi dla pytania
8. Ostylowanie całości projektu - wszystkich komponentów przy uyciu angular material theme
9. Stworzenie listy pytań w widoku pojedynczego profilu

#### Maciej Pawlisz: 37,5 h

1. Nadzorowanie zadań i struktury kodu.
2. Research obsługi bazy danych firebase oraz jej implementacja w projekcie w postaci databse.service.
3. W serwisie zaimplementowano metody do ładowania danych użytkownika, wpisy pytań, odpowiedzi oraz obsługę wszystkich zdarzeń takich jak zmiana wartości w bazie, głosowanie, tworzenie i aktualizacja danych.
4. Oprócz tego wszystkie zadania związane ładowaniem danych z bazy oraz wymyśleniem schematu bazy.
5. Stworzenie wstępnego ekranu do tworzenia pytań oraz testowanie ładowania danych. 
6. Stworzenie systemu głosowania
7. Naprawa pomniejszych błędów oraz ulepszenia związane z autoryzacją użytkownika i jego danych w bazie.
8. Próba portowania projektu na platormę andorid za pomocą phonegap.

#### Damian Suchy: 21,5 h

1. Serwis autoryzacji(auth.service)
2. research firebase - auth
3. przykładowa strona logowania z firebase(google,facebook,email)
4. komponent rejestracji
5. komponent logowania
6. auth.guard - blokowanie profilu dla niezalogowanych użytkowników
7. wyświetlanie komunikatów po logowaniu/rejestracji, błędów
8. wyświetlanie danych użytkownika w profilu
9. poprawa błędów w stworzonych komponentach/serwisach

#### Marcin Hernas: 21 h

1. component(bold, kursywa, link), 
2. component map, 
3. dodanie lokalizacji użytkownika do mapy
4. ogarniecie firebase, 
5. test aplikacji, 
6. lista poprawek, 
7. phonegap, 
8. strona internetowa na github
  
**Informacje:**

  <li>Strona internetowa projektu <a href="https://raznyy.github.io/Hint-It/">Github Pages</a></li>
  <li>Prototyp projektu znajduje się w pliku <a href="https://github.com/Raznyy/Hint-It/blob/master/mockup/Exports/Hint%20it!%20-%20Mockup%20v4.pdf">Mockup</a></li>
  <li>Repozytorium z projektem znajduje się <a href="https://github.com/Raznyy/Hint-It">Platforma Github</a></li>
  <li>Wykaz wykonanych prac oraz poświęcony na nie czas znajduje się <a href="https://trello.com/b/TPkiTLzT/hint-it-projekt-specjalizacja-wsei">Platforma Trello</a></li>
  <li>Zbiór godzin wraz z wykresem <a href="https://docs.google.com/spreadsheets/d/1eHLPMh8v8M1L0pmq5MHng6udeNPjGiZlSGheC8Lt284/edit?usp=sharing">Dokument Spreadsheet</a></li>

