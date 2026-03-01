import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Races from "./pages/Races";
import Villains from "./pages/Villains";
import CombatRules from "./pages/CombatRules";
import CharacterCreator from "./pages/CharacterCreator";
import Evolution from "./pages/Evolution";
import Rules from "./pages/Rules";
import Classes from "./pages/Classes";
import Equipment from "./pages/Equipment";
import SkillTrees from "./pages/SkillTrees";
import Progression from "./pages/Progression";
import ClassProgression from "./pages/ClassProgression";
import Spells from "./pages/Spells";
import Artifacts from "./pages/Artifacts";
import Vehicles from "./pages/Vehicles";
import CombatSimulator from "./pages/CombatSimulator";
import MasterCode from "./pages/MasterCode";
import Talents from "./pages/Talents";
import Backgrounds from "./pages/Backgrounds";
import Skills from "./pages/Skills";
import EvolutionPoints from "./pages/EvolutionPoints";
import Passives from "./pages/Passives";
import ClassAbilities from "./pages/ClassAbilities";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/races" component={Races} />
      <Route path="/villains" component={Villains} />
      <Route path="/combat-rules" component={CombatRules} />
      <Route path="/character-creator" component={CharacterCreator} />
      <Route path="/evolution" component={Evolution} />
      <Route path="/evolution-points" component={EvolutionPoints} />
      <Route path="/rules" component={Rules} />
      <Route path="/classes" component={Classes} />
      <Route path="/equipment" component={Equipment} />
      <Route path="/skills" component={Skills} />
      <Route path="/skill-trees" component={SkillTrees} />
      <Route path="/progression" component={Progression} />
      <Route path="/class-progression" component={ClassProgression} />
      <Route path="/spells" component={Spells} />
      <Route path="/artifacts" component={Artifacts} />
      <Route path="/vehicles" component={Vehicles} />
      <Route path="/combat-simulator" component={CombatSimulator} />
      <Route path="/master-code" component={MasterCode} />
      <Route path="/talents" component={Talents} />
      <Route path="/backgrounds" component={Backgrounds} />
      <Route path="/passives" component={Passives} />
      <Route path="/class-abilities" component={ClassAbilities} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
