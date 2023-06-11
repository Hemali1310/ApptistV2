

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const returnBody = {
        totalPlatformReviews: 1000,
        platformRating: 4.4,
        totalCoursesOnPlatform: 10000,
        totalTutorsOnPlatform: 250,
        totalStudentEnrolled: 60000,
        totalSuccessStories: 1500,
        courseList: [
            {
                courseImage: "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/HeroHomepage_2880x1200.jpg",
                courseTitle: "Android for Begineers",
                instructorName: "Instructor 1",
                numberOfStudentEnrolled: 300
            },
            {
                courseImage: "https://developer.apple.com/swift/images/swift-og.png",
                courseTitle: "Swift: Begineer to Advance",
                instructorName: "Instructor 2",
                numberOfStudentEnrolled: 200
            },
            {
                courseImage: "https://miro.medium.com/v2/resize:fit:1400/0*bijuXf_Sm8fo5ybu",
                courseTitle: "Kotlin Fundamentals",
                instructorName: "Instructor 3",
                numberOfStudentEnrolled: 500
            },
            {
                courseImage: "https://www.howtogeek.com/wp-content/uploads/csit/2021/11/af168a3a.jpeg?height=200p&trim=2,2,2,2",
                courseTitle: "Flutter 101",
                instructorName: "Instructor 4",
                numberOfStudentEnrolled: 340
            },{
                courseImage: "https://dart.dev/assets/shared/dart-logo-for-shares.png?2",
                courseTitle: "Dart Fundamentals",
                instructorName: "Instructor 5",
                numberOfStudentEnrolled: 510
            },{
                courseImage: "https://3.bp.blogspot.com/-VVp3WvJvl84/X0Vu6EjYqDI/AAAAAAAAPjU/ZOMKiUlgfg8ok8DY8Hc-ocOvGdB0z86AgCLcBGAsYHQ/s1600/jetpack%2Bcompose%2Bicon_RGB.png",
                courseTitle: "Android: Jetpack Compose",
                instructorName: "Instructor 6",
                numberOfStudentEnrolled: 320
            },{
                courseImage: "https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png",
                courseTitle: "React native: Zero to Hero",
                instructorName: "Instructor 7",
                numberOfStudentEnrolled: 720
            },{
                courseImage: "https://dev.java/assets/images/java-logo-vert-blk.png",
                courseTitle: "Java Fundamentals",
                instructorName: "Instructor 8",
                numberOfStudentEnrolled: 510
            },
        ]
    }

    return {
        statusCode: 200,
        // CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(returnBody),
    };
};
