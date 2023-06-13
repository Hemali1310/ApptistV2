

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const returnBody = {
        instructorID: event.pathParameters.instructorID,
        instructorFirstName: "Mark",
        instructorLastName: "Meritt",
        instructorImageURL: "https://www.mindpath.com/wp-content/uploads/2023/01/Mark-Merritt-Headshot-e1672950343657.png",
        instructorLevel: "Beginner",
        revenueThisMonth: 500.00,
        newStudentEnrollments: 120,
        overallCoursesRating: 4.6,
        publishedCourses: [
            {
                courseTitleImageURL: "https://www.gosink.in/content/images/size/w2000/2021/09/amplify-cover.jpeg",
                courseTitle: "Master Course: AWS Amplify",
                courseSales: 150,
                courseAmount: 1600
            },
            {
                courseTitleImageURL: "https://miro.medium.com/v2/resize:fit:1024/1*JN6lRLbLyPQSKD5w3IR5Rw.jpeg",
                courseTitle: "Build a Complete Full-stack app with Amplify and React!",
                courseSales: 450,
                courseAmount: 2500
            },
            {
                courseTitleImageURL: "https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg",
                courseTitle: "React for Beginners",
                courseSales: 14,
                courseAmount: 500
            }
        ]
    }

    return {
        statusCode: 200,
        //  CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(returnBody),
    };
};
