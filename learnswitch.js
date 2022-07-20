const color = "red";
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    case "green":
        console.log("color is green");
        break;
    default:
        console.log("color is neighter red, blue or green ");
}

let score = 70;
switch (true) {
    case score >= 70 && score <= 100:
        console.log("Excellent");
        break;
    case score >= 60 && score <= 69:
        console.assertlog("Very Good");
        break;
    case score >= 50 && score <= 59:
        console.log("Average");
        break;
    case score >= 40 && score <= 49:
        consolele.log("Failed");
        break;
    default:
        console.log("score not recognized");
        break;
}