import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";
const industryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  // If not onboarded, redirect to onboarding page
  // Skip this check if already on the onboarding page
  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return <div>Industry Insights Page </div>;
};

export default industryInsightsPage;
