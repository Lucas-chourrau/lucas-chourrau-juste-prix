/* Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
deviner le prix d'un produit. Ici, trois possibilités :
- C'est plus cher
- C'est moins cher
- C'est le juste prix !
Dans cette version du "Juste prix", nous générerons un
prix aléatoire, et nous calculerons le nombre de coups
qu'il faut à un joueur pour retrouver le juste prix.
Ainsi, il pourra se confronter à ses amis pour tenter de
voir qui retrouve le bon prix avec le moins de coups
possibles !
Je vous attends dans la prochaine session !
Etape 1 - Sélectionner nos éléments
Etape 2 - Cacher l'erreur
Etape 3 - Générer un nombre aléatoire
Etape 4 - Vérifier que l'utilisateur donne bien un nombre
Etape 5 - Agir à l'envoi du formulaire
Etape 6 - Créer la fonction vérifier

Couleur:
#004a6f
#2b9f88
*/
letButtonSelector = document.getElementsByName(button);
buttonSelector.addEventListener("click", function testNum(a) {   
    var result = prompt("taper un nombre", "")   
    if (a > 20) {
          result = "c'est plus";
        } else if (a < 20){
          result = "c'est moin";
        } else if ( a = 20) {
            result = "c'est le juste prix"
        }

        return result;
      }
);
console.log(testNum(-5));