const SERVER_ORIGIN = "http://localhost:4000";

// vars

const vars = {
  darkPurple: "#131022",
  lightPurple: "#7026b9",
  maxNameLen: 40,
  minPassLen: 2, // 6 for production
  maxPassLen: 16,
  maxCollegeNameLen: 60,
  maxEmailAddressLen: 400,
  maxCompanyNameLen: 60,
  maxRoleNameLen: 40,
  maxOpportunityLen: 40,
  maxExperienceLen: 10000,
  maxTipLen: 2000,
  availableCollegeNames: ["LNCT", "LNCTS", "LNCTE"],
  availableBranchNames: ["CS", "IT", "EC"],
  availableGraduationYears: ["2020", "2021", "2022"],
  availableMonthNames: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  availableYears: ["2020", "2021", "2022"],
  availableDifficulties: ["1", "2", "3", "4", "5"],
  brandName: "CodeX",
};

// routes

const routes = {
  HOME: "/",
  SIGN_UP: "/auth/sign-up",
  SIGN_IN: "/auth/sign-in",
  FORGOT_PASSWORD: "/auth/forgot-password",
  ACCOUNT_INTERVIEW_EXPERIENCES: "/account/interview-experiences",
  INTERVIEW_EXPERIENCES: "/interview-experiences",
  CONTRIBUTE: "/contribute",
  VOTP: "/auth/votp",
  FOTP: "/auth/fotp",
  VERIFY_TOKEN: "/verify-token",
  CONTRIBUTIONS: "/contributions",
  READ: "/interview-experience/read",
  EDIT: "/interview-experience/edit",
  PARTICULAR_INTERVIEW_EXPERIENCE: "/particular-interview-experience",
};

/*
to get all interview experiences on 
*/

export { SERVER_ORIGIN, routes, vars };
