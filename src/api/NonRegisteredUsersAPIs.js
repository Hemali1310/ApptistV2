import data from "../../amplify/backend/api/NonRegisteredUsersAPIs/build/NonRegisteredUsersAPIs-cloudformation-template.json"

export const HomePageAPI = {
    apiName: data.Outputs.ApiName.Value,
    path: "/"
}