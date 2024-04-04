// this function will take in string enum which is used to store the value in database, and will return readbale string

export const useDisplayPosition = (position: String) => {
    switch (position) {
        case "Member":
            return "Member"
        case "Lead":
            return "Lead"
        case "Vice_Lead":
            return "Vice Lead"
        case "Tech_Lead":
            return "Tech Lead"
        case "PR_Lead":
            return "PR Lead"
        case "CR_Lead":
            return "CR Lead"
        case "Executive":
            return "Executive"
        case "Creative_Lead":
            return "Creative Lead"
        case "Design_Lead":
            return "Design Lead"
        case "Ar_Lead":
            return "AR Lead"
        case "Web_Lead":
            return "Web Lead"
        case "App_Lead":
            return "App Lead"
        case "Vr_Lead":
            return "VR Lead"
        default:
            return "Member"
    }
}

// example year : Y_2025, extract 2025 from it
export const useDisplayYear = (year: String) => {
    return year.slice(2)
}

// extract current year
// first -> 1st
// second -> 2nd
// third -> 3rd
// fourth -> 4th

export const useDisplayCurrentYear = (year: String) => {
    switch (year) {
        case "first":
            return "1st"
        case "second":
            return "2nd"
        case "third":
            return "3rd"
        case "fourth":
            return "4th"
        default:
            return "1st"
    }
}