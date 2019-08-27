import { AbilityBuilder } from "@casl/ability";

export const getRules = (role, userId) => {
  const { can, rules } = AbilityBuilder.extract();

  switch (role) {
    case "TENANT_ADMIN":
      can("manage", "all");
      break;
    case "TENANT_AGENT":
      can("view", "ConversationView");
      break;
    case "TENANT_AGENT_LIMITED":
      can("view", "ConversationView", { userId: userId });
      break;
    default:
  }
  return rules;
};
