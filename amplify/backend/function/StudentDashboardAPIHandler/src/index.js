

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const returnBody = {
        studentID: event.pathParameters.studentID,
        studentImage: "https://avatars.githubusercontent.com/u/100782515?v=4",	
        studentLevel: "Beginner",
        studentFirstName: "Hemali",
        studentLastName: "Solanki",
        studentPhoneNumber: "+1 1234567890",
        studentEmail: "abc@gmail.com",
        studentBirthday: "10/13/1998",
        studentCountry: "Canada",
        studentAddress: "123 random Street",
        studentCity: "Random city",
        StudentCityZipCode: "A1C 2B3"
    }

    return {
        statusCode: 200,
        //CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(returnBody),
    };
};
