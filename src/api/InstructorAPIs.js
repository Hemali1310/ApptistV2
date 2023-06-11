import data from "../../amplify/backend/api/InstructorDashboardAPI/build/InstructorDashboardAPI-cloudformation-template.json"

export const InstructorDashboardAPI = {
    apiName: data.Outputs.ApiName.Value,
    path: "/instructorDashboard/"   // Requires Path parameters: /instructorDashboard/{instructorID}
}