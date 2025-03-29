
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main>
      <h1>Onboarding Page</h1>
      <OnboardingForm industries={industries} />
      {/* Add your onboarding form component here */}
      {/* <OnboardingForm /> */}
    </main>
  );
};

export default OnboardingPage;