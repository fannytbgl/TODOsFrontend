# TODOsFrontend : Commentaires

npm version : 8.19.2
node version : 18.12.1

## 1 List my TODOs

Création d’un component qui affiche les tables de poe avec mat table
Création d’un dto poe (Dto car à l’origine, devait se connecter au back java Spring Boot - à considérer comme une classe d’objet)
Création d’un pipe pour remplacer les noms de data brutes dans le template côté client 
Création d’un mocked backend pour gérer les listes : 
https://medium.com/geekculture/setting-up-a-mock-backend-with-angular-13-applications-26a21788f7da
Création d’un TODOService pour gérer les requêtes HTTP et communiquer avec le mocked backend : méthode getAllTodos()

## 2 Change a TODO State

Utilisation de Material UI <mat-checkbox>
Utilisation de SelectionModel
Changement de statut dans la méthode onTodoToggled (méthode strike à améliorer)
Rajout d’un bouton pour trier les les todos en fonction de leurs statuts (marche mais ne s’affiche pas dans le template)
###Solutions possibles 
Implémenter Sort ou créer un observable.
###Amélioration 
Reset le statusType en décochant la checkbox

## 3 Detail a Todo

Création d’un composant Todo-Détail
Création d’une méthode FindOneTodo pour récupérer un todo grâce à son id dans le todo-service et dans le mocked serveur
Dans le détail Component.ts, implémentation de la logique permettant de récupérer le todo souhaité grâce à ActivatedRoute et Router
Création des routes dans le router
Création basique du template HTML
###Unsolved
p://localhost:3000/api/todos/id error 500 (le numéro représentant l’id de l’objet Todo est trouvé grâce à ActivatedRoute mais pas l’objet : à voir avec le mocked backend)
Accès au Todo par la checkbox et non par la ligne
###Amélioration
Possibilité d'éditer la ToDo

## 4 Add a new ToDo

POST http request (service, composant, router, backend)
Création d’un form component avec envoie des données en JSON


## Services non fournis
Implémentation de la quatrième UserStory
Tests unitaires
