import { TodoDto } from "../dto/todo-dto";

export const TODOS: TodoDto[] = 
[
    
    {
      id: 1,
      title: "Suivre mon MOOC d'apprentissage de la langue chinoise",
      statusType: "TO_DO",
      description: "Site : apprendre.com, durée : 3 mois",
      dateOfCreation: new Date('2023-04-20T12:30:00Z'),
    },
   {
      id: 2,
      title: "Repasser mes chemises",
      statusType: "TO_DO",
      description: "Je veux être parfait pour le mariage de François !",
      dateOfCreation: new Date('2023-04-20T12:30:00Z'),
    },
   {
      id: 3,
      title: "Acheter un cadeau pour mamie",
      statusType: "TO_DO",
      description: "Une plante, ou des chocolats.",
      dateOfCreation: new Date('2023-04-20T12:30:00Z'),
    },
    {
      id: 4,
      title: "Prendre rendez-vous avec le médecin",
      statusType: "TO_DO",
      description: "Cabinet du Dr Louvin",
      dateOfCreation: new Date('2023-04-20T12:30:00Z'),
    },
   {
      id: 5,
      title: "Réserver mes billets de train pour le week-end de Pâques",
      statusType: "TO_DO",
      description: "Direction La Rochelle, promos sympas sur billetsdetrainpaschers.com",
      dateOfCreation: new Date('2023-04-20T12:30:00Z'),
   }

]
