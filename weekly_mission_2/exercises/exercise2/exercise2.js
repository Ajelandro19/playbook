const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ] 

   explorers.forEach(explorer => console.log(explorer))

   explorers.forEach(explorer => console.log(explorer.stack))

   const explorersstacks = explorers.map(explorer => explorer.stack)

   console.log(`lista de stacks \n` + explorersstacks)

   const explorers_with_js = explorers.filter(explorer => explorer.stack.includes("js"))
   console.log(explorers_with_js)

   const first_cdmx=explorers.find(explorer => explorer.city === 'CDMX')
   console.log(first_cdmx)

   const all_exercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
   console.log(all_exercises)