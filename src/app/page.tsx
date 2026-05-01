import PromptCard from "./components/PromptCard";
import SuggestionChips from "./components/SuggestionChips";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex-grow flex flex-col items-center justify-center px-container-padding py-stack-lg">
        <div className="text-center mb-12">
          <h1 className="font-display text-display text-white mb-2">
            Imagix - Create
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            Transform your most complex visions into professional-grade imagery with
            luminous precision and AI-powered creativity.
          </p>
        </div>

        <PromptCard />
        <SuggestionChips />
      </div>
      <Footer />
    </>
  );
}
